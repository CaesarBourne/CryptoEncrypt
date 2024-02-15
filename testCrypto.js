const { secp256k1 } = require("ethereum-cryptography/secp256k1");
const { pbkdf2 } = require("ethereum-cryptography/pbkdf2");
const { bytesToHex, hexToBytes } = require("ethereum-cryptography/utils");
const { sha256 } = require("ethereum-cryptography/sha256");
const { utf8ToBytes } = require("ethereum-cryptography/utils");
const { keccak256 } = require("ethereum-cryptography/keccak");
//const {publicKeyToAddress} = require('ethereum-public-key-to-address')

(async () => {
  //number one
  console.log(
    "Fiest pbkdf ",
    bytesToHex(
      await pbkdf2(utf8ToBytes("Caesar"), utf8ToBytes("bon"), 999, 33, "256")
    )
  );

  //number two
  console.log(
    "second 256 ",
    bytesToHex(sha256(utf8ToBytes("“Web3 is Awesome”")))
  );

  const publicKey = bytesToHex(secp256k1.getPublicKey(privateKey, false));
  //const publicKey = secp256k1.getPublicKey(privateKey);
  console.log("Public Key Before Recovery", publicKey);
})();
