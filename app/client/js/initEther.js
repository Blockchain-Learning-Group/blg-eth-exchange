// Exchange and blgToken contract data
const exchangeAddress = '0x1df21dc50012d1a2c6475c4c0a856c1b03cbeed3'
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
      "inputs": [
        {
          "name": "",
          "type": "uint256"
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
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "activeOrderBookIndex_",
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
      "inputs": [],
      "payable": false,
      "type": "constructor"
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
  "unlinked_binary": "0x6060604052341561000f57600080fd5b5b600161001c8180610023565b505b6100b2565b81548183558181151161004f5760060281600602836000526020600020918201910161004f9190610055565b5b505050565b6100af91905b808211156100ab578054600160a060020a0319908116825560018201805482169055600060028301819055600383018054909216909155600482015560058101805460ff1916905560060161005b565b5090565b90565b61097f806100c16000396000f300606060405236156100465763ffffffff60e060020a600035041663049b76c4811461004a5780632dc29720146100745780638c946c26146100cf578063d107587d14610104575b5b5b005b341561005557600080fd5b61006060043561012c565b604051901515815260200160405180910390f35b341561007f57600080fd5b61008a60043561044d565b604051600160a060020a0396871681529486166020860152604080860194909452919094166060840152608083019390935291151560a082015260c001905180910390f35b610060600160a060020a0360043581169060243590604435166064356104a4565b604051901515815260200160405180910390f35b341561010f57600080fd5b61011a6004356107d9565b60405190815260200160405180910390f35b60008061013761088f565b60008481526020819052604090205460018054919350908390811061015857fe5b906000526020600020906006020160005b5060c060405190810160409081528254600160a060020a039081168352600184015481166020840190815260028501549284019290925260038401541660608301526004830154608083015260059092015460ff16151560a0820152915060009051600160a060020a031614156102a55733600160a060020a03166108fc82604001519081150290604051600060405180830381858888f19350505050151561021157600080fd5b8060600151600160a060020a03166323b872dd338351846080015160006040516020015260405160e060020a63ffffffff8616028152600160a060020a0393841660048201529190921660248201526044810191909152606401602060405180830381600087803b151561028457600080fd5b6102c65a03f1151561029557600080fd5b5050506040518051905050610382565b60006060820151600160a060020a03161415610382578051600160a060020a03166108fc82608001519081150290604051600060405180830381858888f1935050505015156102f357600080fd5b8060200151600160a060020a03166323b872dd825133846040015160006040516020015260405160e060020a63ffffffff8616028152600160a060020a0393841660048201529190921660248201526044810191909152606401602060405180830381600087803b151561036657600080fd5b6102c65a03f1151561037757600080fd5b505050604051805150505b5b600084815260208190526040812055600180548190849081106103a257fe5b906000526020600020906006020160005b50600501805460ff19169115159190911790557f9a1421e25c7471f70dc672f22aea188ba8d3ab35386ac1296fcb5e1c8dcbc1a38151338360200151846040015185606001518660800151604051600160a060020a03968716815294861660208601529285166040808601919091526060850192909252909316608083015260a082015260c001905180910390a1600192505b5050919050565b600180548290811061045b57fe5b906000526020600020906006020160005b5080546001820154600283015460038401546004850154600590950154600160a060020a039485169650928416949193169160ff1686565b600080808086116104b457600080fd5b600084116104c157600080fd5b84848888604051606060020a600160a060020a0395861681028252601482019490945291909316909102603482015260488101919091526068016040519081900390206000818152602081905260409020549092509050801580159061054b5750600180548290811061053057fe5b906000526020600020906006020160005b506005015460ff16155b15610560576105598261012c565b92506107ce565b86868686604051606060020a600160a060020a039586168102825260148201949094529190931690910260348201526048810191909152606801604051908190039020600081815260208190526040902054909250905080158015906105ea575060018054829081106105cf57fe5b906000526020600020906006020160005b506005015460ff16155b1561065a57610559606060405190810160405280603981526020017f4964656e746963616c206f7264657220697320616c72656164792061637469768152602001603860020a78652c2045786368616e67652e7375626d69744f726465722829028152506107eb565b92506107ce565b60018054600084815260208190526040902081905580820161067c83826108c4565b916000526020600020906006020160005b60c06040519081016040908152600160a060020a0333811683528c811660208401529082018b90528916606082015260808101889052600060a082015291905081518154600160a060020a031916600160a060020a03919091161781556020820151600182018054600160a060020a031916600160a060020a0392909216919091179055604082015181600201556060820151600382018054600160a060020a031916600160a060020a03929092169190911790556080820151816004015560a0820151600591909101805460ff1916911515919091179055507f2488a98af2c19a2f8be4fe1dfdd5a86048f4e5695c6d230f027aa9de0dd7af0d90503388888888604051600160a060020a039586168152938516602085015260408085019390935293166060830152608082019290925260a001905180910390a1600192505b5b5050949350505050565b60006020819052908152604090205481565b60007f551303dd5f39cbfe6daba6b3e27754b8a7d72f519756a2cde2b92c2bbde159a78260405160208082528190810183818151815260200191508051906020019080838360005b8381101561084c5780820151818401525b602001610833565b50505050905090810190601f1680156108795780820380516001836020036101000a031916815260200191505b509250505060405180910390a15060005b919050565b60c06040519081016040908152600080835260208301819052908201819052606082018190526080820181905260a082015290565b8154818355818115116108f0576006028160060283600052602060002091820191016108f091906108f6565b5b505050565b61095091905b8082111561094c578054600160a060020a0319908116825560018201805482169055600060028301819055600383018054909216909155600482015560058101805460ff191690556006016108fc565b5090565b905600a165627a7a72305820c991556cad534a0224e255518a8d234159f76bbe24077f3dd8f863508bbc21d20029",
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
      "address": "0xe64742f7fe3bacfb0e0cf8d0aad1f72517c9b36a",
      "updated_at": 1505139283631
    }
  },
  "schema_version": "0.0.5",
  "updated_at": 1505140385241
}

const blgTokenAddress = '0x71e7c58033aa9cfa04e75b925f959abe91703b71'
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
  "unlinked_binary": "0x6060604052341561000f57600080fd5b5b60038054600160a060020a03191633600160a060020a03161790556004805460a060020a60ff02191690555b5b610eb18061004c6000396000f300606060405236156100ca5763ffffffff60e060020a600035041663095ea7b381146100cf57806318160ddd1461010557806323b872dd1461012a5780632839e16a146101665780632e0f26251461019d578063324536eb146101c257806340c10f19146101e75780634d7c09dd1461021d5780636ca34ea21461024457806370a082311461027557806395e087fe146102a6578063a3f4df7e146102d9578063a9059cbb14610364578063dd62ed3e1461039a578063f06d87be146103d1578063fc31723014610400575b600080fd5b34156100da57600080fd5b6100f1600160a060020a036004351660243561042f565b604051901515815260200160405180910390f35b341561011057600080fd5b610118610584565b60405190815260200160405180910390f35b341561013557600080fd5b6100f1600160a060020a036004358116906024351660443561058b565b604051901515815260200160405180910390f35b341561017157600080fd5b610118600160a060020a036004358116906024351661081c565b60405190815260200160405180910390f35b34156101a857600080fd5b610118610839565b60405190815260200160405180910390f35b34156101cd57600080fd5b61011861083e565b60405190815260200160405180910390f35b34156101f257600080fd5b6100f1600160a060020a0360043516602435610844565b604051901515815260200160405180910390f35b341561022857600080fd5b6100f1610a97565b604051901515815260200160405180910390f35b341561024f57600080fd5b610118600160a060020a0360043516610aa7565b60405190815260200160405180910390f35b341561028057600080fd5b610118600160a060020a0360043516610ab9565b60405190815260200160405180910390f35b34156102b157600080fd5b6100f1600160a060020a0360043516610ad8565b604051901515815260200160405180910390f35b34156102e457600080fd5b6102ec610c2d565b60405160208082528190810183818151815260200191508051906020019080838360005b838110156103295780820151818401525b602001610310565b50505050905090810190601f1680156103565780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561036f57600080fd5b6100f1600160a060020a0360043516602435610c4d565b604051901515815260200160405180910390f35b34156103a557600080fd5b610118600160a060020a0360043581169060243516610d69565b60405190815260200160405180910390f35b34156103dc57600080fd5b6103e4610d72565b604051600160a060020a03909116815260200160405180910390f35b341561040b57600080fd5b6103e4610d81565b604051600160a060020a03909116815260200160405180910390f35b600080821161049757610490606060405190810160405280602d81526020017f43616e206e6f7420617070726f766520616e20616d6f756e74203c3d20302c208152602001609860020a6c424c472e617070726f7665282902815250610d90565b905061057e565b600160a060020a03331660009081526001602052604090205482111561051e57610490606060405190810160405280603581526020017f416d6f756e742069732067726561746572207468616e2073656e6465727320628152602001605860020a74616c616e63652c20424c472e617070726f7665282902815250610d90565b905061057e565b600160a060020a03338116600090815260026020908152604080832093871683529290522054610554908363ffffffff610e3416565b600160a060020a033381166000908152600260209081526040808320938816835292905220555060015b92915050565b6000545b90565b60008082116105f5576105ee606060405190810160405280602f81526020017f43616e6e6f74207472616e7366657220616d6f756e74203c3d20302c20424c478152602001608860020a6e2e7472616e7366657246726f6d282902815250610d90565b9050610815565b600160a060020a038416600090815260016020526040902054821115610681576105ee606060405190810160405280603c81526020017f46726f6d206163636f756e742068617320616e20696e73756666696369656e7481526020017f2062616c616e63652c20424c472e7472616e7366657246726f6d282900000000815250610d90565b9050610815565b600160a060020a038085166000908152600260209081526040808320339094168352929052205482111561071a576105ee606060405190810160405280603981526020017f6d73672e73656e6465722068617320696e73756666696369656e7420616c6c6f8152602001603860020a7877616e63652c20424c472e7472616e7366657246726f6d282902815250610d90565b9050610815565b600160a060020a038416600090815260016020526040902054610743908363ffffffff610e4e16565b600160a060020a0380861660009081526001602090815260408083209490945560028152838220339093168252919091522054610786908363ffffffff610e4e16565b600160a060020a03808616600090815260026020908152604080832033851684528252808320949094559186168152600190915220546107cc908363ffffffff610e3416565b600160a060020a0380851660008181526001602052604090819020939093559190861690600080516020610e668339815191529085905190815260200160405180910390a35060015b9392505050565b600260209081526000928352604080842090915290825290205481565b601281565b60005481565b60045460009060a060020a900460ff1615156108ad57610490606060405190810160405280602181526020017f424c47206973206e6f7420796574206163746976652c20424c472e6d696e7428815260200160f860020a602902815250610d90565b905061057e565b60045433600160a060020a03908116911614610906576104906040805190810160405260208082527f6d73672e73656e64657220213d20626c674875622c20424c472e6d696e74282990820152610d90565b905061057e565b6000821161096757610490606060405190810160405280602781526020017f43616e6e6f74206d696e7420612076616c7565206f66203c3d20302c20424c47815260200160c860020a662e6d696e74282902815250610d90565b905061057e565b600160a060020a03831615156109d557610490606060405190810160405280602c81526020017f43616e6e6f74206d696e7420746f6b656e7320746f2061646472657373283029815260200160a060020a6b2c20424c472e6d696e74282902815250610d90565b905061057e565b6000546109e8908363ffffffff610e3416565b6000908155600160a060020a038416815260016020526040902054610a13908363ffffffff610e3416565b600160a060020a038416600081815260016020526040808220939093555490917f6d69c71ef35e507286bcb03186fe9ebdbf14f6e096ce22d6564de19afd7922b7918691869190518084600160a060020a0316600160a060020a03168152602001838152602001828152602001935050505060405180910390a25060015b92915050565b60045460a060020a900460ff1681565b60016020526000908152604090205481565b600160a060020a0381166000908152600160205260409020545b919050565b60035460009033600160a060020a03908116911614610b4557610b3e606060405190810160405280602281526020017f6d73672e73656e64657220213d20626c672c20424c472e736574424c47487562815260200160f060020a61282902815250610d90565b9050610ad3565b600160a060020a0382161515610bc157610b3e606060405190810160405280603a81526020017f496e76616c69642068756220616464726573732c20626c67487562203d3d206181526020017f6464726573732830292c20424c472e736574424c474875622829000000000000815250610d90565b9050610ad3565b6004805460a060020a600160a060020a0319909116600160a060020a0385161760a060020a60ff0219161790557fe7261bb649db1e4cfb17b615c73a61fbfc88370a43040abb09b08ca8bd6817dd6001604051901515815260200160405180910390a15060015b919050565b604080519081016040526003815260e860020a62424c4702602082015281565b60045460009060a060020a900460ff161515610cbb57610490606060405190810160405280602681526020017f424c47206973206e6f7420796574206163746976652c20424c472e736574424c815260200160d060020a6547487562282902815250610d90565b905061057e565b600160a060020a033316600090815260016020526040902054610ce4908363ffffffff610e4e16565b600160a060020a033381166000908152600160205260408082209390935590851681522054610d19908363ffffffff610e3416565b600160a060020a038085166000818152600160205260409081902093909355913390911690600080516020610e668339815191529085905190815260200160405180910390a35060015b92915050565b60005b92915050565b600454600160a060020a031681565b600354600160a060020a031681565b60007f551303dd5f39cbfe6daba6b3e27754b8a7d72f519756a2cde2b92c2bbde159a78260405160208082528190810183818151815260200191508051906020019080838360005b83811015610df15780820151818401525b602001610dd8565b50505050905090810190601f168015610e1e5780820380516001836020036101000a031916815260200191505b509250505060405180910390a15060005b919050565b600082820183811015610e4357fe5b8091505b5092915050565b600082821115610e5a57fe5b508082035b929150505600ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa165627a7a72305820856111abdbd85d88b365f30079448fe841e94dfc3d51264565fe84eb7c28be020029",
  "networks": {
    "42": {
      "links": {},
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
      "updated_at": 1504436623007
    },
    "1503605493729": {
      "links": {},
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
      "updated_at": 1503619442296
    },
    "1503663160069": {
      "links": {},
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
      "updated_at": 1503663177313
    },
    "1503668134525": {
      "links": {},
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
      "updated_at": 1503682624711
    },
    "1503690755708": {
      "links": {},
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
      "updated_at": 1503698395665
    },
    "1503769219669": {
      "links": {},
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
      "updated_at": 1503769599564
    },
    "1504351019939": {
      "links": {},
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
      "updated_at": 1504373155384
    },
    "1504435725110": {
      "links": {},
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
      "updated_at": 1504435739294
    },
    "1504438521200": {
      "links": {},
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
      "updated_at": 1504456138610
    },
    "1504531161244": {
      "links": {},
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
      "updated_at": 1504531171413
    }
  },
  "schema_version": "0.0.5",
  "updated_at": 1505139069631
}

$(document).ready(() => {
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

    // Listen for events
    window.exchange.allEvents({ from: 'latest', to: 'latest' }).watch((error, result) => {
      console.log(error)
      console.log(result)
    })

    window.blgToken.allEvents({ from: 'latest', to: 'latest' }).watch((error, result) => {
      console.log(result)
    })

  } else {
    console.error('Please install Metamask to use this application!')
  }
})

/**
 * Load the current order book
 * TODO
 */
async function loadOrderBook() {
  // const orderBook = await
}
