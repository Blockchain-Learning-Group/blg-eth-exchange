// Default url to server running locally
const apiURL = 'http://localhost:9191/'

$(document).ready(() => {
  loadOrderBook()

  // Add a resource to the blg hub
  $('#submitResource').click(e => {
    e.preventDefault()

    const resourceUrl = $('#resourceUrl').val()

    // Confirm valid input, url and url in correct format
    if (!resourceUrl) {
      $('#urlIncorrectModal').modal('show')

    } else if (isUrlValid(resourceUrl)) {
      const url = apiURL + 'addResource/' + encodeURIComponent(resourceUrl)

      $.ajax({
         url: url,
         data: {
            format: 'json'
         },
         error: err => {
           console.error('error: ' + err)
         },
         success: res => {

           if (res) {
             const href = 'https://kovan.etherscan.io/tx/' + res.tx
             $('#txHash').empty()
             $('#txHash').append('<a href='+ href +'>'+ res.tx +'</a>')
             $('#successModal').modal('show')

           } else {
             console.error('False returned by server meaning resource could not be added')
           }
         },
         type: 'POST'
      });

    } else {
      $('#urlIncorrectModal').modal('show')
    }
  })

  $('#submitOrder').click(e => {
    e.preventDefault()

    const offerToken = $('#offerToken').val()
    const offerAmount = $('#offerAmount').val()
    const wantToken = $('#wantToken').val()
    const wantAmount = $('#wantAmount').val()

    if (offerAmount <= 0 || wantAmount <= 0) {
      alert('Invlaid input, amounts must be > 0.')
      return

    } else if (wantToken === offerToken) {
      alert('Want and offer token may not be the same!')
      return
    }

    // If offer token is eth send the ether to the exchange contract
    if (offerToken === 'ETH') {
        submitOrder(offerToken, offerAmount, wantToken, wantAmount, offerAmount)

    // If the offer token is not eth and therefore some other ERC20 token approve
    // the exchange to spend on sender's behalf
    } else if (offerToken === 'BLG') {
      // Need to check token balance TODO move verification on chain
      window.blgToken.balanceOf(window.defaultAccount, (error, balance) => {
        if (balance.toNumber() < offerAmount) {
          alert('Insufficient token balance!')

        } else {
          window.blgToken.approve(
            window.exchange.address,
            offerAmount,
            {
              from: window.defaultAccount,
              gas: 4e6
            }, (error, tx) => {
              if (error) {
                console.error(error)
              } else {
                console.log(tx)
                submitOrder(offerToken, offerAmount, wantToken, wantAmount, 0)
              }
            }
          )
        }
      })
    }
  })
})

/**
 * Submit the actual order to the order book.
 * @param  {[type]} offerToken  [description]
 * @param  {[type]} offerAmount [description]
 * @param  {[type]} wantToken   [description]
 * @param  {[type]} wantAmount  [description]
 * @return {[type]}             [description]
 */
function submitOrder(offerToken, offerAmount, wantToken, wantAmount, value) {
  window.exchange.submitOrder(
    window.approvedTokens[offerToken],
    offerAmount,
    window.approvedTokens[wantToken],
    wantAmount,
    {
      from: window.defaultAccount,
      gas : 4e6,
      value: value
    }, (error, tx) => {
      if (error)
        console.error(error)
      else
        console.log(tx)
    }
  )
}

/**
 * Helper to validate the format of a url.
 * @param  {String}  url The url being checked.
 * @return {Boolean}  Vailidity of the formatting of a url.
 */
function isUrlValid (url) {
    return /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(url);
}

/**
 * Load the contents of the order book
 */
function loadOrderBook() {
  // Load the order book
  window.exchange.getOrderBookIds.call((error, ids) => {
    // Get order data and load
    for (let i = 0; i < ids.length; i++) {
      window.exchange.orderBook_.call(ids[i], (err, order) => {
        // If the order is not filled then append
        if (!order[5]) {
          $('#orderBook').append(
            '<tr><td>'
            + window.tokenAddressToSymbol[order[1]] + '</td><td>' // offer token
            + order[2] + '</td><td>' // offerAmount
            + window.tokenAddressToSymbol[order[3]] + '</td><td>' // wantToken
            + order[4] + '</td><td>' // wantAmount
            + order[0]
            + '</td><</tr>'
          )
        }
      })
    }
  })
}
