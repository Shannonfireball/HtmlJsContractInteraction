const { ethers } = require("ethers");

async function connect(){
    try {
        if( typeof window.ethereum !== "undefined") {
            console.log("window.ethereum exist's")
            await ethereum.request({ method: "eth_requestAccounts"});
        }        
    } catch (error) {
        console.log("connect", error);
    }

}

async function execute() {

    try {
        
            // address
            const contractAddress = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";
            // contract ABI
            const abi = [{"type":"function","name":"adPerson","inputs":[{"name":"_name","type":"string","internalType":"string"},{"name":"_magicNumber","type":"int256","internalType":"int256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"getFavoriteNumberUsingName","inputs":[{"name":"","type":"string","internalType":"string"}],"outputs":[{"name":"","type":"int256","internalType":"int256"}],"stateMutability":"view"},{"type":"function","name":"janeDoe","inputs":[],"outputs":[{"name":"magicNumber","type":"int256","internalType":"int256"},{"name":"name","type":"string","internalType":"string"}],"stateMutability":"view"},{"type":"function","name":"jhonDoe","inputs":[],"outputs":[{"name":"magicNumber","type":"int256","internalType":"int256"},{"name":"name","type":"string","internalType":"string"}],"stateMutability":"view"},{"type":"function","name":"listOfPeople","inputs":[{"name":"","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"magicNumber","type":"int256","internalType":"int256"},{"name":"name","type":"string","internalType":"string"}],"stateMutability":"view"},{"type":"function","name":"magicNumber","inputs":[],"outputs":[{"name":"","type":"int256","internalType":"int256"}],"stateMutability":"view"},{"type":"function","name":"retrive","inputs":[],"outputs":[{"name":"","type":"int256","internalType":"int256"}],"stateMutability":"view"},{"type":"function","name":"store","inputs":[{"name":"_magicNumber","type":"int256","internalType":"int256"}],"outputs":[],"stateMutability":"nonpayable"}];
            // function
            // node connnection
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner(); 
            const contract = new ethers.Contract(contractAddress, abi, signer);
            await contract.store(501);
        
    } catch (error) {
        console.log("execute", error);
    }
}   

module.exports = {
    connect,
    execute
}