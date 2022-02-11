require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remain erosion hidden kitchen off gas'; 
let testAccounts = [
"0xeaf085585cf7e79385fdca1753c248dc0a1c918fd7ce8e4dbd0fc5c965250b84",
"0x9653fdf3eee1bb4301a64dd200c6aadc3469f985e07ac527350921e28c602615",
"0x917b7a71c29d23d3782d76269dcbea07601145e2c1eebf3609bca7de133aadfd",
"0xf730659765d2285673ab28f654e2699fe1f497fa087bf2c86f62c1b7efddf461",
"0x4596b355ba30e13664767ee387f42369f5f6bd13e5cfa9671a8474bb65c2e57d",
"0x1e7368cc0779d5d52c85cafbbfc07f605f39fe1d5669adb892ed50dbd0f4159c",
"0x63dc35e1fc45b72dce26ff7cb13c51622948db9c0f7f027c1e92da735dffdbf7",
"0x3dd113e919b3f0f8abc0fe0a95fba7cb8b3eb03b76fbb17a33a0161d7c4d8fc2",
"0x422dccd000a0fe27bdb2d5945326b8a5fc98974b07441a385089370ca06e38f8",
"0x98127ace27466b75c169b9e46eeb9d3f95d40bcb41d6ba38c537ef23950c1f20"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


