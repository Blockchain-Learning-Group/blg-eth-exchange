pragma solidity ^0.4.15;

import './token/ERC20.sol';

contract Exchange {
  /**
   * Data Structures
   */
  struct Order {
    address maker;
    address offerToken;
    uint256 offerAmount;
    address wantToken;
    uint256 wantAmount;
  }
  /**
   * Storage
   */
  /*
    The key for lookup is keccack256(wantToken, WantAmount, OfferToken, OfferAmount)
    Therefore quick lookup of matches for your order by inverting the submitted values.
   */
  mapping(bytes32 => Order) public orderIdToOrder_;
  Order[] public orderBook_;

  /**
   * Events
   */
  event logOrderSubmitted(
    address maker,
    address offerToken,
    uint256 offerAmount,
    address wantToken,
    uint256 wantAmount
  );

  event logOrderExecuted(
    address maker,
    address taker,
    address offerToken,
    uint256 offerAmount,
    address wantToken,
    uint256 wantAmount
  );



  /**
   * External
   */


event Debug(string u);

  /**
   * @dev Submit a new order to the exchange.  If you are offering ether you must
   * send the amount along with the tx to be executed.  If you are offering a token
   * you must first approve this exchange to transfer on your behalf.
   * @param  _offerToken The token being offered.
   * @param  _offerAmount The amount of tokens being offered.
   * @param  _wantToken The token that is wanted.
   * @param  _wantAmount The amount of tokens wanted.
   * @return The success of this method.
   */
  function submitOrder(
    address _offerToken,
    uint256 _offerAmount,
    address _wantToken,
    uint256 _wantAmount
  ) external
    payable
    returns(bool)
  {
    require(_offerAmount > 0);
    require(_wantAmount > 0);

    // check if there is a matching order
    // Invert to tokens to see if a match exists
    bytes32 matchingOrderId = keccak256(_wantToken, _wantAmount, _offerToken, _offerAmount);

    // Check attribute to confirm existence
    if (orderIdToOrder_[matchingOrderId].offerAmount != 0) {
      // There is a matching order, that now makes msg.sender the taker
      executeOrder(matchingOrderId);

    // else add the order to the order book
    } else {
      bytes32 orderId = keccak256(_offerToken, _offerAmount, _wantToken, _wantAmount);

      // New order object created in memory
      Order memory order = Order({
        offerToken: _offerToken,
        offerAmount: _offerAmount,
        wantToken: _wantToken,
        wantAmount: _wantAmount,
        maker: msg.sender
      });

      // Push new order object into order book array
      orderBook_.push(order);

      // Add to mapping for lookup by id for matching
      orderIdToOrder_[orderId] = order;

      logOrderSubmitted(
        msg.sender,
        _offerToken,
        _offerAmount,
        _wantToken,
        _wantAmount
      );
    }

    return true;
  }

  /**
   * Public
   */
  /**
   * @dev Execute an order that has been matched.
   * @param _orderId The id of the matched order.
   * @return The success of this method
   */
  function executeOrder(
    bytes32 _orderId
  ) public
    returns(bool)
  {
    // Load into mem to save gas on read operations
    Order memory order = orderIdToOrder_[_orderId];

    // Maker is offering ether
    if (order.offerToken == address(0)) {
      // Ether to taker
      msg.sender.transfer(order.offerAmount);
      // Tokens to maker
      ERC20(order.wantToken).transferFrom(msg.sender, order.maker, order.wantAmount);

    // Taker is offering ether
    } else if (order.wantToken == address(0)) {
      // Ether to maker
      order.maker.transfer(order.wantAmount);
      // Tokens to taker
      ERC20(order.offerToken).transferFrom(order.maker, msg.sender, order.offerAmount);
    }

    logOrderExecuted(
      order.maker,
      msg.sender,
      order.offerToken,
      order.offerAmount,
      order.wantToken,
      order.wantAmount
    );

    return true;
  }
}
