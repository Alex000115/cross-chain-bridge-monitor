import { getAddress } from "ethers";
import { BRIDGE_ADDRESS } from "./network.config.js";

export function isTargetBridge(address) {
  if (!address) return false;
  try {
    return (
      getAddress(address).toLowerCase() ===
      getAddress(BRIDGE_ADDRESS).toLowerCase()
    );
  } catch {
    return false;
  }
}
