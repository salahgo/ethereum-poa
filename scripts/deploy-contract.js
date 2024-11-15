const Web3 = require("web3");
const fs = require("fs");

const web3 = new Web3("http://<node-ip>:8545");

const abi = JSON.parse(fs.readFileSync("Storage.abi"));
const bytecode = fs.readFileSync("Storage.bin").toString();

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    const contract = new web3.eth.Contract(abi);
    const instance = await contract.deploy({ data: bytecode }).send({
        from: accounts[0],
        gas: 1000000,
    });
    console.log("Contract deployed at:", instance.options.address);
};

deploy();
