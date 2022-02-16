require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz kiwi october slab chapter deny radar pudding hover cloth fog struggle'; 
let testAccounts = [
"0x20cfc05c98c26dcdf0c9854bf9609d51471a1ed085f8c0e554f99dff3cc3c5d4",
"0x81d5941ac284ada6448ee42ae6c4ade5c888138b95556e5b6196ce2ae452ad3c",
"0xcb0a6bb95d5b121c21c6ebb35a9532c65c2c86b00a9ab99971b905efa65921aa",
"0x89b7e7d28e94a4c4d3ef4e9b8c915204ed3443b42ccd51d0e58856782b675f3c",
"0x4d6e682dc1a2a60d9eee9daf07f040b934673f61f4feaeef715b0c5942663493",
"0x590b8f978456f60f4673d2b5fd744055a1ef30fafd05d04b72d445a32bdb4581",
"0x6585b4a111b8ed7d00a88c04654a76ad6aa768232e3ebac942aae8a36f5fa49e",
"0x1b426634a37e8c7d07ceb8b276359ff2978bfc27394278e7154cf883d253f7c3",
"0x131b36293d696d05e56c81f62ecec35d000fe3223a30a260025a46935fa036d1",
"0xb1c9ded448957a94e9064f41d0df3a5b47bd7861e2a943298c28ee24eb6a57be"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

