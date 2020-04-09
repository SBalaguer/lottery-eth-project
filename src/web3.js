//This file has all of the web3 config that we need.

import Web3 from "web3";

const OPTIONS = {
  defaultBlock: "latest",
  transactionConfirmationBlocks: 1,
  transactionBlockTimeout: 5,
};

const web3 = new Web3(window.ethereum, null, OPTIONS); //the copy of web3 that is comming from metamask
window.ethereum.enable();
export default web3;
