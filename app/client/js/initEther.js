// Exchange and blgToken contract data
const exchangeAddress = '0x7d525093f383e7e2a16f8bab6f7d48e2f217075b'
const exchangeJSON = {
  "contract_name": "Exchange",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "_orderId",
          "type": "bytes32"
        }
      ],
      "name": "executeOrder",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getOrderBookIds",
      "outputs": [
        {
          "name": "",
          "type": "bytes32[]"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "orderIds_",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "orderBook_",
      "outputs": [
        {
          "name": "maker",
          "type": "address"
        },
        {
          "name": "offerToken",
          "type": "address"
        },
        {
          "name": "offerAmount",
          "type": "uint256"
        },
        {
          "name": "wantToken",
          "type": "address"
        },
        {
          "name": "wantAmount",
          "type": "uint256"
        },
        {
          "name": "filled",
          "type": "bool"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_offerToken",
          "type": "address"
        },
        {
          "name": "_offerAmount",
          "type": "uint256"
        },
        {
          "name": "_wantToken",
          "type": "address"
        },
        {
          "name": "_wantAmount",
          "type": "uint256"
        }
      ],
      "name": "submitOrder",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": true,
      "type": "function"
    },
    {
      "payable": true,
      "type": "fallback"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "maker",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "offerToken",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "offerAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "wantToken",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "wantAmount",
          "type": "uint256"
        }
      ],
      "name": "logOrderSubmitted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "maker",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "taker",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "offerToken",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "offerAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "wantToken",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "wantAmount",
          "type": "uint256"
        }
      ],
      "name": "logOrderExecuted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "errorString",
          "type": "string"
        }
      ],
      "name": "LogErrorString",
      "type": "event"
    }
  ],
  "unlinked_binary": "0x6060604052341561000f57600080fd5b5b610a6b8061001f6000396000f300606060405236156100515763ffffffff60e060020a600035041663049b76c481146100555780631be091301461007f5780633f5f18bc146100e6578063708a02c91461010e5780638c946c2614610169575b5b5b005b341561006057600080fd5b61006b60043561019e565b604051901515815260200160405180910390f35b341561008a57600080fd5b610092610473565b60405160208082528190810183818151815260200191508051906020019060200280838360005b838110156100d25780820151818401525b6020016100b9565b505050509050019250505060405180910390f35b34156100f157600080fd5b6100fc6004356104d3565b60405190815260200160405180910390f35b341561011957600080fd5b6101246004356104f6565b604051600160a060020a0396871681529486166020860152604080860194909452919094166060840152608083019390935291151560a082015260c001905180910390f35b61006b600160a060020a03600435811690602435906044351660643561053d565b604051901515815260200160405180910390f35b60006101a86109ad565b600083815260208190526040908190209060c0905190810160409081528254600160a060020a039081168352600184015481166020840190815260028501549284019290925260038401541660608301526004830154608083015260059092015460ff16151560a0820152915060009051600160a060020a031614156102f35733600160a060020a03166108fc82604001519081150290604051600060405180830381858888f19350505050151561025f57600080fd5b8060600151600160a060020a03166323b872dd338351846080015160006040516020015260405160e060020a63ffffffff8616028152600160a060020a0393841660048201529190921660248201526044810191909152606401602060405180830381600087803b15156102d257600080fd5b6102c65a03f115156102e357600080fd5b50505060405180519050506103d0565b60006060820151600160a060020a031614156103d0578051600160a060020a03166108fc82608001519081150290604051600060405180830381858888f19350505050151561034157600080fd5b8060200151600160a060020a03166323b872dd825133846040015160006040516020015260405160e060020a63ffffffff8616028152600160a060020a0393841660048201529190921660248201526044810191909152606401602060405180830381600087803b15156103b457600080fd5b6102c65a03f115156103c557600080fd5b505050604051805150505b5b6000838152602081905260409020600501805460ff191660011790557f9a1421e25c7471f70dc672f22aea188ba8d3ab35386ac1296fcb5e1c8dcbc1a38151338360200151846040015185606001518660800151604051600160a060020a03968716815294861660208601529285166040808601919091526060850192909252909316608083015260a082015260c001905180910390a1600191505b50919050565b61047b6109e2565b60018054806020026020016040519081016040528092919081815260200182805480156104c857602002820191906000526020600020905b815481526001909101906020018083116104b3575b505050505090505b90565b60018054829081106104e157fe5b906000526020600020900160005b5054905081565b600060208190529081526040902080546001820154600283015460038401546004850154600590950154600160a060020a0394851695938516949293919092169160ff1686565b6000808080861161054d57600080fd5b6000841161055a57600080fd5b600160a060020a038716151561058757600160a060020a033016318690101561058257600080fd5b610607565b8587600160a060020a03166370a082313360006040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b15156105df57600080fd5b6102c65a03f115156105f057600080fd5b505050604051805190501015151561060757600080fd5b5b84848888604051606060020a600160a060020a039586168102825260148201949094529190931690910260348201526048810191909152606801604051908190039020600081815260208190526040902060030154909250600160a060020a031615801590610689575060008281526020819052604090206005015460ff16155b1561069e576106978261019e565b92506108fe565b86868686604051606060020a600160a060020a039586168102825260148201949094529190931690910260348201526048810191909152606801604051908190039020600081815260208190526040902060030154909250600160a060020a03161580159061071f575060008281526020819052604090206005015460ff16155b1561078f57610697606060405190810160405280603981526020017f4964656e746963616c206f7264657220697320616c72656164792061637469768152602001603860020a78652c2045786368616e67652e7375626d69744f72646572282902815250610909565b92506108fe565b600180548082016107a083826109f4565b916000526020600020900160005b508390555060c06040519081016040908152600160a060020a0333811683528981166020808501919091528284018a9052908816606084015260808301879052600060a08401819052858152908190522081518154600160a060020a031916600160a060020a03919091161781556020820151600182018054600160a060020a031916600160a060020a0392909216919091179055604082015181600201556060820151600382018054600160a060020a031916600160a060020a03929092169190911790556080820151816004015560a0820151600591909101805460ff1916911515919091179055507f2488a98af2c19a2f8be4fe1dfdd5a86048f4e5695c6d230f027aa9de0dd7af0d3388888888604051600160a060020a039586168152938516602085015260408085019390935293166060830152608082019290925260a001905180910390a1600192505b5b5050949350505050565b60007f551303dd5f39cbfe6daba6b3e27754b8a7d72f519756a2cde2b92c2bbde159a78260405160208082528190810183818151815260200191508051906020019080838360005b8381101561096a5780820151818401525b602001610951565b50505050905090810190601f1680156109975780820380516001836020036101000a031916815260200191505b509250505060405180910390a15060005b919050565b60c06040519081016040908152600080835260208301819052908201819052606082018190526080820181905260a082015290565b60206040519081016040526000815290565b815481835581811511610a1857600083815260209020610a18918101908301610a1e565b5b505050565b6104d091905b80821115610a385760008155600101610a24565b5090565b905600a165627a7a72305820da17ee809035c6bd7f5675f078096459404143e06420c38272aa0b449373d8740029",
  "networks": {
    "1504806351281": {
      "events": {
        "0x2488a98af2c19a2f8be4fe1dfdd5a86048f4e5695c6d230f027aa9de0dd7af0d": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "maker",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "offerToken",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "offerAmount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "name": "wantToken",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "wantAmount",
              "type": "uint256"
            }
          ],
          "name": "logOrderSubmitted",
          "type": "event"
        },
        "0x9a1421e25c7471f70dc672f22aea188ba8d3ab35386ac1296fcb5e1c8dcbc1a3": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "maker",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "taker",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "offerToken",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "offerAmount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "name": "wantToken",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "wantAmount",
              "type": "uint256"
            }
          ],
          "name": "logOrderExecuted",
          "type": "event"
        },
        "0x7cdb51e9dbbc205231228146c3246e7f914aa6d4a33170e43ecc8e3593481d1a": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "u",
              "type": "string"
            }
          ],
          "name": "Debug",
          "type": "event"
        }
      },
      "links": {},
      "address": "0x228e316dc6b6f5f2c0d4b9342536899e8f1965ce",
      "updated_at": 1504809687116
    },
    "1505137774704": {
      "events": {
        "0x2488a98af2c19a2f8be4fe1dfdd5a86048f4e5695c6d230f027aa9de0dd7af0d": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "maker",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "offerToken",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "offerAmount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "name": "wantToken",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "wantAmount",
              "type": "uint256"
            }
          ],
          "name": "logOrderSubmitted",
          "type": "event"
        },
        "0x9a1421e25c7471f70dc672f22aea188ba8d3ab35386ac1296fcb5e1c8dcbc1a3": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "maker",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "taker",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "offerToken",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "offerAmount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "name": "wantToken",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "wantAmount",
              "type": "uint256"
            }
          ],
          "name": "logOrderExecuted",
          "type": "event"
        },
        "0x551303dd5f39cbfe6daba6b3e27754b8a7d72f519756a2cde2b92c2bbde159a7": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "errorString",
              "type": "string"
            }
          ],
          "name": "LogErrorString",
          "type": "event"
        }
      },
      "links": {},
      "address": "0x1df21dc50012d1a2c6475c4c0a856c1b03cbeed3",
      "updated_at": 1505140482591
    },
    "1505323206710": {
      "events": {
        "0x2488a98af2c19a2f8be4fe1dfdd5a86048f4e5695c6d230f027aa9de0dd7af0d": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "maker",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "offerToken",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "offerAmount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "name": "wantToken",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "wantAmount",
              "type": "uint256"
            }
          ],
          "name": "logOrderSubmitted",
          "type": "event"
        },
        "0x9a1421e25c7471f70dc672f22aea188ba8d3ab35386ac1296fcb5e1c8dcbc1a3": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "maker",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "taker",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "offerToken",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "offerAmount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "name": "wantToken",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "wantAmount",
              "type": "uint256"
            }
          ],
          "name": "logOrderExecuted",
          "type": "event"
        },
        "0x551303dd5f39cbfe6daba6b3e27754b8a7d72f519756a2cde2b92c2bbde159a7": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "errorString",
              "type": "string"
            }
          ],
          "name": "LogErrorString",
          "type": "event"
        }
      },
      "links": {},
      "address": "0x8584b98b4490e657ad2bae0a02db02781eb45fb0",
      "updated_at": 1505323366293
    },
    "1505327660149": {
      "events": {
        "0x2488a98af2c19a2f8be4fe1dfdd5a86048f4e5695c6d230f027aa9de0dd7af0d": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "maker",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "offerToken",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "offerAmount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "name": "wantToken",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "wantAmount",
              "type": "uint256"
            }
          ],
          "name": "logOrderSubmitted",
          "type": "event"
        },
        "0x9a1421e25c7471f70dc672f22aea188ba8d3ab35386ac1296fcb5e1c8dcbc1a3": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "maker",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "taker",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "offerToken",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "offerAmount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "name": "wantToken",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "wantAmount",
              "type": "uint256"
            }
          ],
          "name": "logOrderExecuted",
          "type": "event"
        },
        "0x551303dd5f39cbfe6daba6b3e27754b8a7d72f519756a2cde2b92c2bbde159a7": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "errorString",
              "type": "string"
            }
          ],
          "name": "LogErrorString",
          "type": "event"
        }
      },
      "links": {},
      "address": "0xc718f9e3166e7ef1a52d39d6cd66acdb75b916cc",
      "updated_at": 1505329602818
    }
  },
  "schema_version": "0.0.5",
  "updated_at": 1505329602818
}

const blgTokenAddress = '0x70873cd4410a01c7ce18a4e3151ffac823431da5'
const blgTokenJSON = {
  "contract_name": "BLG",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        },
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "allowed_",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "DECIMALS",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply_",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "active_",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "balances_",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_blgHub",
          "type": "address"
        }
      ],
      "name": "setBLGHub",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "NAME",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "name": "remaining",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "blgHub_",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "blg_",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "totalSupply",
          "type": "uint256"
        }
      ],
      "name": "LogTokensMinted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "active",
          "type": "bool"
        }
      ],
      "name": "LogActivated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "errorString",
          "type": "string"
        }
      ],
      "name": "LogErrorString",
      "type": "event"
    }
  ],
  "unlinked_binary": "0x6060604052341561000c57fe5b5b60038054600160a060020a03191633600160a060020a03161790556004805460a060020a60ff02191690555b5b610eaa806100496000396000f300606060405236156100ca5763ffffffff60e060020a600035041663095ea7b381146100cc57806318160ddd146100ff57806323b872dd146101215780632839e16a1461015a5780632e0f26251461018e578063324536eb146101b057806340c10f19146101d25780634d7c09dd146102055780636ca34ea21461022957806370a082311461025757806395e087fe14610285578063a3f4df7e146102b5578063a9059cbb14610345578063dd62ed3e14610378578063f06d87be146103ac578063fc317230146103d8575bfe5b34156100d457fe5b6100eb600160a060020a0360043516602435610404565b604080519115158252519081900360200190f35b341561010757fe5b61010f610559565b60408051918252519081900360200190f35b341561012957fe5b6100eb600160a060020a0360043581169060243516604435610560565b604080519115158252519081900360200190f35b341561016257fe5b61010f600160a060020a03600435811690602435166107f1565b60408051918252519081900360200190f35b341561019657fe5b61010f61080e565b60408051918252519081900360200190f35b34156101b857fe5b61010f610813565b60408051918252519081900360200190f35b34156101da57fe5b6100eb600160a060020a0360043516602435610819565b604080519115158252519081900360200190f35b341561020d57fe5b6100eb610a84565b604080519115158252519081900360200190f35b341561023157fe5b61010f600160a060020a0360043516610a94565b60408051918252519081900360200190f35b341561025f57fe5b61010f600160a060020a0360043516610aa6565b60408051918252519081900360200190f35b341561028d57fe5b6100eb600160a060020a0360043516610ac5565b604080519115158252519081900360200190f35b34156102bd57fe5b6102c5610c19565b60408051602080825283518183015283519192839290830191850190808383821561030b575b80518252602083111561030b57601f1990920191602091820191016102eb565b505050905090810190601f1680156103375780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561034d57fe5b6100eb600160a060020a0360043516602435610c39565b604080519115158252519081900360200190f35b341561038057fe5b61010f600160a060020a0360043581169060243516610d55565b60408051918252519081900360200190f35b34156103b457fe5b6103bc610d5e565b60408051600160a060020a039092168252519081900360200190f35b34156103e057fe5b6103bc610d6d565b60408051600160a060020a039092168252519081900360200190f35b600080821161046c57610465606060405190810160405280602d81526020017f43616e206e6f7420617070726f766520616e20616d6f756e74203c3d20302c208152602001609860020a6c424c472e617070726f7665282902815250610d7c565b9050610553565b600160a060020a0333166000908152600160205260409020548211156104f357610465606060405190810160405280603581526020017f416d6f756e742069732067726561746572207468616e2073656e6465727320628152602001605860020a74616c616e63652c20424c472e617070726f7665282902815250610d7c565b9050610553565b600160a060020a03338116600090815260026020908152604080832093871683529290522054610529908363ffffffff610e2d16565b600160a060020a033381166000908152600260209081526040808320938816835292905220555060015b92915050565b6000545b90565b60008082116105ca576105c3606060405190810160405280602f81526020017f43616e6e6f74207472616e7366657220616d6f756e74203c3d20302c20424c478152602001608860020a6e2e7472616e7366657246726f6d282902815250610d7c565b90506107ea565b600160a060020a038416600090815260016020526040902054821115610656576105c3606060405190810160405280603c81526020017f46726f6d206163636f756e742068617320616e20696e73756666696369656e7481526020017f2062616c616e63652c20424c472e7472616e7366657246726f6d282900000000815250610d7c565b90506107ea565b600160a060020a03808516600090815260026020908152604080832033909416835292905220548211156106ef576105c3606060405190810160405280603981526020017f6d73672e73656e6465722068617320696e73756666696369656e7420616c6c6f8152602001603860020a7877616e63652c20424c472e7472616e7366657246726f6d282902815250610d7c565b90506107ea565b600160a060020a038416600090815260016020526040902054610718908363ffffffff610e4716565b600160a060020a038086166000908152600160209081526040808320949094556002815283822033909316825291909152205461075b908363ffffffff610e4716565b600160a060020a03808616600090815260026020908152604080832033851684528252808320949094559186168152600190915220546107a1908363ffffffff610e2d16565b600160a060020a038085166000818152600160209081526040918290209490945580518681529051919392881692600080516020610e5f83398151915292918290030190a35060015b9392505050565b600260209081526000928352604080842090915290825290205481565b601281565b60005481565b60045460009060a060020a900460ff16151561088257610465606060405190810160405280602181526020017f424c47206973206e6f7420796574206163746976652c20424c472e6d696e7428815260200160f860020a602902815250610d7c565b9050610553565b60045433600160a060020a039081169116148015906108b0575060035433600160a060020a03908116911614155b1561090e57610465606060405190810160405280602781526020017f6d73672e73656e64657220213d20626c67487562206f7220626c672c20424c47815260200160c860020a662e6d696e74282902815250610d7c565b9050610553565b6000821161096f57610465606060405190810160405280602781526020017f43616e6e6f74206d696e7420612076616c7565206f66203c3d20302c20424c47815260200160c860020a662e6d696e74282902815250610d7c565b9050610553565b600160a060020a03831615156109dd57610465606060405190810160405280602c81526020017f43616e6e6f74206d696e7420746f6b656e7320746f2061646472657373283029815260200160a060020a6b2c20424c472e6d696e74282902815250610d7c565b9050610553565b6000546109f0908363ffffffff610e2d16565b6000908155600160a060020a038416815260016020526040902054610a1b908363ffffffff610e2d16565b600160a060020a0384166000818152600160209081526040808320949094559054835183815291820186905281840152915190917f6d69c71ef35e507286bcb03186fe9ebdbf14f6e096ce22d6564de19afd7922b7919081900360600190a25060015b92915050565b60045460a060020a900460ff1681565b60016020526000908152604090205481565b600160a060020a0381166000908152600160205260409020545b919050565b60035460009033600160a060020a03908116911614610b3257610b2b606060405190810160405280602281526020017f6d73672e73656e64657220213d20626c672c20424c472e736574424c47487562815260200160f060020a61282902815250610d7c565b9050610ac0565b600160a060020a0382161515610bae57610b2b606060405190810160405280603a81526020017f496e76616c69642068756220616464726573732c20626c67487562203d3d206181526020017f6464726573732830292c20424c472e736574424c474875622829000000000000815250610d7c565b9050610ac0565b6004805460a060020a600160a060020a0319909116600160a060020a0385161760a060020a60ff021916179055604080516001815290517fe7261bb649db1e4cfb17b615c73a61fbfc88370a43040abb09b08ca8bd6817dd916020908290030190a15060015b919050565b604080518082019091526003815260e860020a62424c4702602082015281565b60045460009060a060020a900460ff161515610ca757610465606060405190810160405280602681526020017f424c47206973206e6f7420796574206163746976652c20424c472e736574424c815260200160d060020a6547487562282902815250610d7c565b9050610553565b600160a060020a033316600090815260016020526040902054610cd0908363ffffffff610e4716565b600160a060020a033381166000908152600160205260408082209390935590851681522054610d05908363ffffffff610e2d16565b600160a060020a03808516600081815260016020908152604091829020949094558051868152905191933390931692600080516020610e5f83398151915292918290030190a35060015b92915050565b60005b92915050565b600454600160a060020a031681565b600354600160a060020a031681565b60007f551303dd5f39cbfe6daba6b3e27754b8a7d72f519756a2cde2b92c2bbde159a7826040518080602001828103825283818151815260200191508051906020019080838360008314610deb575b805182526020831115610deb57601f199092019160209182019101610dcb565b505050905090810190601f168015610e175780820380516001836020036101000a031916815260200191505b509250505060405180910390a15060005b919050565b600082820183811015610e3c57fe5b8091505b5092915050565b600082821115610e5357fe5b508082035b929150505600ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa165627a7a72305820f6e623e62991d257b9d2b1d972a3d2ca548fabb27a29d01b79f11ca7f61196710029",
  "networks": {
    "1505400103760": {
      "events": {
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "_from",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "_to",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "_value",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        },
        "0x6d69c71ef35e507286bcb03186fe9ebdbf14f6e096ce22d6564de19afd7922b7": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "_to",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "value",
              "type": "uint256"
            },
            {
              "indexed": false,
              "name": "totalSupply",
              "type": "uint256"
            }
          ],
          "name": "LogTokensMinted",
          "type": "event"
        },
        "0xe7261bb649db1e4cfb17b615c73a61fbfc88370a43040abb09b08ca8bd6817dd": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "active",
              "type": "bool"
            }
          ],
          "name": "LogActivated",
          "type": "event"
        },
        "0x551303dd5f39cbfe6daba6b3e27754b8a7d72f519756a2cde2b92c2bbde159a7": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "errorString",
              "type": "string"
            }
          ],
          "name": "LogErrorString",
          "type": "event"
        }
      },
      "links": {},
      "address": "0xb3fd586398d4dc8a75b79afbcb9115370a5b289c",
      "updated_at": 1505401911023
    },
    "1505402794417": {
      "events": {
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "_from",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "_to",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "_value",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        },
        "0x6d69c71ef35e507286bcb03186fe9ebdbf14f6e096ce22d6564de19afd7922b7": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "_to",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "value",
              "type": "uint256"
            },
            {
              "indexed": false,
              "name": "totalSupply",
              "type": "uint256"
            }
          ],
          "name": "LogTokensMinted",
          "type": "event"
        },
        "0xe7261bb649db1e4cfb17b615c73a61fbfc88370a43040abb09b08ca8bd6817dd": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "active",
              "type": "bool"
            }
          ],
          "name": "LogActivated",
          "type": "event"
        },
        "0x551303dd5f39cbfe6daba6b3e27754b8a7d72f519756a2cde2b92c2bbde159a7": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "errorString",
              "type": "string"
            }
          ],
          "name": "LogErrorString",
          "type": "event"
        }
      },
      "links": {},
      "address": "0x70873cd4410a01c7ce18a4e3151ffac823431da5",
      "updated_at": 1505409026669
    }
  },
  "schema_version": "0.0.5",
  "updated_at": 1505409026669
}

$(document).ready(() => {
  window.approvedTokens = {
    'ETH': '0x0000000000000000000000000000000000000000',
    'BLG': blgTokenAddress
  }

  window.tokenAddressToSymbol = {
    '0x0000000000000000000000000000000000000000': 'ETH',
    '0x70873cd4410a01c7ce18a4e3151ffac823431da5': 'BLG'
  }

  if (window.web3) {
    const web3 = new Web3(window.web3.currentProvider)

    // Load metamask accounts
    web3.eth.getAccounts((err, accounts) => {
      if (err) {
        console.error(err)

      } else if (accounts.length <= 0){
        console.error('Please create at least one account.')

      } else {
        window.defaultAccount = accounts[0]
      }
    })

    // Create instance of the exchange and blg token
    window.exchange = web3.eth.contract(exchangeJSON.abi).at(exchangeAddress)
    window.blgToken = web3.eth.contract(blgTokenJSON.abi).at(blgTokenAddress)

    // Listen for all exchange vents
    window.exchange.allEvents({ from: 'latest', to: 'latest' }).watch((error, result) => {
      if (error) console.log(error)
      console.log(result)

      if (result.event === 'logOrderSubmitted') {
        $('#orderBook').append(
          '<tr id='
            // Sufficient ID for now as only one order cna exist with these params at this time.
            + result.args.offerToken + result.args.offerAmount + result.args.wantToken + result.args.wantAmount
            +' ><td>'
            + window.tokenAddressToSymbol[result.args.offerToken] + '</td><td>'
            + result.args.offerAmount + '</td><td>'
            + window.tokenAddressToSymbol[result.args.wantToken] + '</td><td>'
            + result.args.wantAmount + '</td><td>'
            + result.args.maker
          + '</td><</tr>'
        )

      } else if (result.event === 'logOrderExecuted') {
        // Color the row grey showing it has been filled
        const id = '#' + result.args.offerToken + result.args.offerAmount + result.args.wantToken + result.args.wantAmount
        $(id).css("background-color", "#95a5a6")

      } else if (result.event === 'LogErrorString') {
        alert('Error! \n' + result.args.errorString)
      }
    })
  } else {
    console.error('Please install Metamask to use this application!')
  }
})
