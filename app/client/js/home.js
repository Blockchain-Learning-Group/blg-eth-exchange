// Default url to server running locally
const apiURL = 'http://localhost:9191/'
let defaultAccount
let exchange

$(document).ready(() => {
  if (window.web3) {
    const web3 = new Web3(window.web3.currentProvider)

    // Load metamask accounts
    web3.eth.getAccounts((err, accounts) => {
      if (err) {
        console.error(err)

      } else {
        defaultAccount = accounts[0]
      }

      console.log(defaultAccount)
    })

    // Create instance of the exchange

  } else {
    console.error('Please install Metamask to use this application!')
  }



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

  $('#submitOrder').click(() => {
    console.log('submitting order')
    const wantToken = $('#wantToken').val()
    const wantAmount = $('#wantAmount').val()
    const offerToken = $('#offerToken').val()
    const offerAmount = $('#offerAmount').val()

    console.log(wantToken, wantAmount, offerToken, offerAmount)
  })
})

/**
 * Helper to validate the format of a url.
 * @param  {String}  url The url being checked.
 * @return {Boolean}  Vailidity of the formatting of a url.
 */
function isUrlValid (url) {
    return /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(url);
}
