// compile code will go here

const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts','Inbox.sol');
const source = fs.readFileSync(inboxPath,'utf8');

//console.log(solc.compile(source,1).contracts);              // this code when run in gitbash will give us output (ABI + Bytecode)

module.exports = solc.compile(source,1).contracts[':Inbox'];