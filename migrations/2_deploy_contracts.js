const Exchange = artifacts.require("./Exchange.sol");

module.exports = deployer => {
  deployer.deploy(Exchange)
}
