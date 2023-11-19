import { Contract } from 'web3-eth-contract';
import Web3 from 'web3';

//const web3 = new Web3(new Web3.providers.HttpProvider('https://polygon-rpc.com'));

const ERC20TransferABI = [{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"roomId","type":"uint256"},{"indexed":true,"internalType":"address","name":"player","type":"address"},{"indexed":false,"internalType":"uint256","name":"score","type":"uint256"}],"name":"LeaderChanged","type":"event"},{"inputs":[{"internalType":"uint256","name":"_endTime","type":"uint256"}],"name":"createRoom","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_roomId","type":"uint256"}],"name":"getRoom","outputs":[{"internalType":"address","name":"host","type":"address"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"uint256","name":"pool","type":"uint256"},{"internalType":"bool","name":"isActive","type":"bool"},{"internalType":"address","name":"winner","type":"address"},{"internalType":"uint256","name":"highestScore","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_roomId","type":"uint256"},{"internalType":"uint256","name":"_score","type":"uint256"}],"name":"postScore","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_roomId","type":"uint256"}],"name":"rewardWinner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"roomCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"rooms","outputs":[{"internalType":"address","name":"host","type":"address"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"uint256","name":"pool","type":"uint256"},{"internalType":"bool","name":"isActive","type":"bool"},{"internalType":"address","name":"winner","type":"address"},{"internalType":"uint256","name":"highestScore","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_roomId","type":"uint256"},{"internalType":"uint256","name":"_betAmount","type":"uint256"}],"name":"startGame","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"}];
//const pwfContract = new web3.eth.Contract(ERC20TransferABI, "0x9459aCfdab5390A38656761a08aFa4ef4a0F6f00");
//.eth.Contract(contract_abi, "0x9459aCfdab5390A38656761a08aFa4ef4a0F6f00");

const contract = new Contract(ERC20TransferABI, "0x9459aCfdab5390A38656761a08aFa4ef4a0F6f00");


export async function POST(request: Request) {

  contract.setProvider(new Web3.providers.HttpProvider('https://polygon-rpc.com'))
  //pwfContract.methods.getRoom.call(0);
  const a = await contract.methods.getRoom().call({
    value: "0",
    from: '0x12364916b10Ae90076dDa6dE756EE1395BB69ec2',
    gas: '30000',
  });
  return new Response(JSON.stringify(a));
}
