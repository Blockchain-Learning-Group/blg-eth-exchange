const Exchange = artifacts.require("./Exchange.sol");

module.exports = deployer => {
  deployer.deploy(Exchange, { from: web3.eth.accounts[0], gas: 4e6 })
}
