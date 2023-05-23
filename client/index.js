const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main() {
  // TODO: how do we prove to the server we're on the nice list? 
   const name = 'Norman Block'
   console.log('name', name)
   // finding index in the nice list
   const index = niceList.findIndex(e => e === name );
   console.log('index', index)

   const merkleTree = new MerkleTree(niceList)
   const proof = merkleTree.getProof(index)

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    // TODO: add request body parameters here!
    proof: proof,
    name: name
  });

  console.log({ gift });
}

main();