const { ethers } = require('ethers');
require('dotenv').config();

const abi = [
  // Minimal ERC20 ABI
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function decimals() view returns (uint8)",
  "function balanceOf(address) view returns (uint)",
  "function transfer(address to, uint amount) returns (bool)"
];

class EthTokenSDK {
  constructor() {
    const provider = new ethers.JsonRpcProvider(`https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`);
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
    this.contract = new ethers.Contract(process.env.CONTRACT_ADDRESS, abi, wallet);
  }

  async getName() {
    return await this.contract.name();
  }

  async getSymbol() {
    return await this.contract.symbol();
  }

  async getBalance(address) {
    const rawBalance = await this.contract.balanceOf(address);
    const decimals = await this.contract.decimals();
    return ethers.formatUnits(rawBalance, decimals);
  }

  async transfer(to, amount) {
    const decimals = await this.contract.decimals();
    const value = ethers.parseUnits(amount.toString(), decimals);
    const tx = await this.contract.transfer(to, value);
    return await tx.wait();
  }
}

module.exports = EthTokenSDK;
