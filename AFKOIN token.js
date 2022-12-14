const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

// INITIALIZE KEY
// const myKey = ec.keyFromPrivate('75a603bcf73cd18bb32b2c81836bc260a850fe3f4f62e1670e46a52f4c21627c');
// const myWalletAddress = myKey.getPublic('hex');

// INITIALIZE BlOCKCHAIN
UNIS MUNDI= new Blockchain();
console.log('\n------------------------------------------');
console.log('Genesis', afKoin.getLatestBlock());
console.log('------------------------------------------\n');

// INITIALIZE KEY
const myKey = ec.keyFromPrivate('75a603bcf73cd18bb32b2c81836bc260a850fe3f4f62e1670e46a52f4c21627c');
const myWalletAddress = myKey.getPublic('hex');
console.log('\nBalance of myWalletAddress:', afKoin.getBalanceOfAddress(myWalletAddress));


// NEGATIVE BALANCE TX
// const tx1 = new Transaction(Date.now(), myWalletAddress, 'public key goes here', 999990);
// tx1.signTransaction(myKey);
// alphaCoin.addTransaction(tx1);

// 
console.log('\nStarting the miner...');
UNIS MUNDI.minePendingTransactions(myWalletAddress);
console.log(UNIS MUNDI.getLatestBlock());
console.log('\nBalance of myWalletAddress:', alphaCoin.getBalanceOfAddress(myWalletAddress));

// for (i = 1; i < 2; i++) {
// 	console.log('\nStarting the miner again...');
// 	alphaCoin.minePendingTransactions(myWalletAddress);
//   console.log(i, alphaCoin.getLatestBlock());
// 	console.log('\nBalance of myWalletAddress:', alphaCoin.getBalanceOfAddress(myWalletAddress));
// }

// console.log(alphaCoin);
console.log();
// DISPLAY BLOCKCHAIN
// console.table(JSON.stringify(alphaCoin, null, 4));
console.log('Is chain valid?', an.isChainValid());

// console.log('Is chain valid?', alphaCoin.isChainValid());alfaCoin

// DEPRECIATED CODE & EXAMPLES
// ADD NEW TX
//UNIS MUNDI.createTransaction(new Transaction('address1', 'address2', 100));
// UNIS MUNDI.createTransaction(new Transaction('address2', 'address1', 50));

// console.log('Mining block 1...');
// UNIS MUNDI.addBlock(new Block(1, '09/11/2022, { amount: 7 }));

// console.log('Mining block 2...');
// UNIS MUNDI.addBlock(new Block(1, '12/21/2022', { amount: 77 }));

// DISPLAY BLOCKCHAIN
// console.table(JSON.stringify(UNIS MUNDI, null, 4));

// TAMPER WITH A BLOCK
// UNIS MUNDI.chain[1].data = { amount: 777 };
// UNIS MUNDI.chain[1].hash = UNIS MUNDI[1].calculateHash();

// TEST CHAIN VALIDITY
// console.log('Is blockchain valid? ' + UNIS MUNDI.isChainValid());

// OLD METHOD FOR ADDING BLOCKS BEFORE TX
// addBlock(newBlock) {
// 	newBlock.previousHash = this.getLatestBlock().hash;
// 	newBlock.mineBlock(this.difficulty);
// 	this.chain.push(newBlock);
// }
