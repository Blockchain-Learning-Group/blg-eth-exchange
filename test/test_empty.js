const Exchange = artifacts.require("./Exchange.sol")
const TestToken = artifacts.require("./TestToken.sol")

contract('Exchange.submitOrder() && executeOrder()', accounts => {
  const maker = accounts[0]
  const taker = accounts[1]

  it("submitOrder(), should succeed by adding a new order to the orderBook on-chain.", async () => {
    const exchange = await Exchange.new()
    // Create token and allocate all tokens to the taker
    const tokenContract = await TestToken.new(100000, 18, "test", "test", { from: taker });

    // Order params
    const offerToken = 0
    const offerAmount = 1
    const wantToken = tokenContract.address
    const wantAmount = 100

    const call = await exchange.submitOrder.call(
      offerToken,
      offerAmount,
      wantToken,
      wantAmount,
      {
        from: maker,
        gas : 4e6,
        value: offerAmount
      }
    )

    const tx = await exchange.submitOrder(
      offerToken,
      offerAmount,
      wantToken,
      wantAmount,
      {
        from: maker,
        gas : 4e6,
        value: offerAmount
      }
    )

    assert(call, 'Call response was not true.')

    const log = tx.logs[0]
    assert.equal(log.event, 'logOrderSubmitted', 'Event not emitted')

    const order = await exchange.orderBook_.call(0)
    assert.equal(order[0], maker)
    assert.equal(order[1], offerToken)
    assert.equal(order[2], offerAmount)
    assert.equal(order[3], wantToken)
    assert.equal(order[4], wantAmount)
  })

  it("executeOrder(), should succeed by trading the tokens.", async () => {
    const exchange = await Exchange.new()
    // Create token and allocate all tokens to the taker
    const tokenContract = await TestToken.new(100, 18, "test", "test", { from: taker });

    // Order params
    const offerToken = 0
    const offerAmount = 1*10e18 // 1 ether
    const wantToken = tokenContract.address
    const wantAmount = 100

    const makerBalanceBefore = web3.eth.getBalance(maker).toNumber()
    const takerBalanceBefore = web3.eth.getBalance(taker).toNumber()

    // Submit the maker's order
    await exchange.submitOrder(
      offerToken,
      offerAmount,
      wantToken,
      wantAmount,
      {
        from: maker,
        gas : 4e6,
        value: offerAmount
      }
    )

    // Approve the exchange to transfer on behalf of the taker
    await tokenContract.approve(exchange.address, wantAmount, { from: taker })

    // Taker order
    // NOTE tokens are flipped!
    const call = await exchange.submitOrder.call(
      wantToken,
      wantAmount,
      offerToken,
      offerAmount,
      {
        from: taker,
        gas : 4e6
      }
    )

    const tx = await exchange.submitOrder(
      wantToken,
      wantAmount,
      offerToken,
      offerAmount,
      {
        from: taker,
        gas : 4e6
      }
    )

    assert(call, 'Call response was not true.')

    const log = tx.logs[0]
    assert.equal(log.event, 'logOrderExecuted', 'Event not emitted')

    // Ether balances
    const makerBalanceAfter = web3.eth.getBalance(maker).toNumber()
    const takerBalanceAfter = web3.eth.getBalance(taker).toNumber()
    assert.isBelow(makerBalanceAfter, makerBalanceBefore - offerAmount, 'Maker eth balance incorrect')
    assert.isAbove(takerBalanceAfter, takerBalanceBefore, 'Taker eth balance incorrect')

    // Token balances
    const makerBalance = await tokenContract.balanceOf.call(maker)
    const takerBalance = await tokenContract.balanceOf.call(taker)
    assert.equal(makerBalance.toNumber(), wantAmount, 'Maker token balance incorrect')
    assert.equal(takerBalance.toNumber(), 0, 'Taker token balance incorrect')
  })
})
