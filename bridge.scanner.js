import { storeBridgeEvent } from "./status.reporter.js";

export function scanBridgeActivity(provider) {
  console.log("Monitoring cross-chain bridge activity...");

  provider.on("block", async (blockNumber) => {
    const event = {
      block: blockNumber,
      type: "bridge_transfer",
      status: "detected",
      timestamp: Date.now()
    };

    storeBridgeEvent(event);
  });
}
