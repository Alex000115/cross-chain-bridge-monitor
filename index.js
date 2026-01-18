import { connectRPC } from "./rpc.client.js";
import { scanBridgeActivity } from "./bridge.scanner.js";
import { NETWORK, BRIDGE_ADDRESS } from "./network.config.js";

console.log("Cross-Chain Bridge Monitor");
console.log("Network:", NETWORK);
console.log("Bridge:", BRIDGE_ADDRESS);

const provider = connectRPC();
scanBridgeActivity(provider);
