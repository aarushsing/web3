const HDWalletProvider = require('@truffle/hdwallet-provider');
const { Web3 } = require('web3');
//updated web3 and hdwallet-provider imports added for convenience
const provider = new HDWalletProvider(
    '12 words mnemonic',
    'https://sepolia.infura.io/v3/573200165dd3431e90979271176d0b46'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account : ', accounts[0]);

   const result = await new web3.eth.Contract(JSON.parse(interface))
      .deploy ({ data : bytecode , arguments: ['Hi there!']})
      .send({ gas: '1000000', from: accounts[1] });

    console.log('Contract deployed to ', result.options.address);
    provider.engine.stop();
};
deploy();
// deploy code will go here
