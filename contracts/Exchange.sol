pragma solidity ^0.4.15;

import './token/ERC20.sol';
import './utils/LoggingErrors.sol';

contract Exchange is LoggingErrors {
  /**
   * Data Structures
   */
  struct Order {
    address maker;
    address offerToken;
    uint256 offerAmount;
    address wantToken;
    uint256 wantAmount;
    bool filled;
  }
  /**
   * Storage
   */
  /*
    The key for lookup is keccack256(wantToken, WantAmount, OfferToken, OfferAmount)
    Therefore quick lookup of matches for your order by inverting the submitted values.
    Mapped to its index within the orderBook
   */
  mapping(bytes32 => uint) public activeOrderBookIndex_;
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
   * @dev Constructor. Increment order book to enable 0 address as existence check.
   * Therefore may check if an ids index is 0 to confirm it does not exist
   */
  function Exchange() {
    orderBook_.length = 1;
  }

  /**
   * External
   */

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

    // Save writes to new storage locations
    bytes32 orderId;
    uint orderIndex;

    // check if there is a matching order
    // Invert to tokens to see if a match exists
    orderId = keccak256(_wantToken, _wantAmount, _offerToken, _offerAmount);
    orderIndex = activeOrderBookIndex_[orderId];

    // Check for existence of matching order and that it is not filled
    if (orderIndex != 0 && !orderBook_[orderIndex].filled) {
      return executeOrder(orderId); // match! msg.sender == taker

    // No match, look to add this order to the order book
    } else {
      orderId = keccak256(_offerToken, _offerAmount, _wantToken, _wantAmount);

      // Confirm an exact copy of this order does not already exist
      orderIndex = activeOrderBookIndex_[orderId];
      if (orderIndex != 0 && !orderBook_[orderIndex].filled)
        return error('Identical order is already active, Exchange.submitOrder()');

      // else add the order to the order book
      // Add to mapping for lookup by id
      activeOrderBookIndex_[orderId] = orderBook_.length;

      // Push new order object into order book
      orderBook_.push(
        Order({
          maker: msg.sender,
          offerToken: _offerToken,
          offerAmount: _offerAmount,
          wantToken: _wantToken,
          wantAmount: _wantAmount,
          filled: false
        })
      );

      logOrderSubmitted(
        msg.sender,
        _offerToken,
        _offerAmount,
        _wantToken,
        _wantAmount
      );

      return true;
    }
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
    uint orderIndex = activeOrderBookIndex_[_orderId];
    Order memory order = orderBook_[orderIndex];

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

    // Remove from mapping and set to filled
    delete activeOrderBookIndex_[_orderId];

    // Update to filled in storage
    orderBook_[orderIndex].filled = true;

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
