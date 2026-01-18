export function storeBridgeEvent(event) {
  console.log("Bridge Event:");
  console.log("Block:", event.block);
  console.log("Type:", event.type);
  console.log("Status:", event.status);
  console.log("Time:", new Date(event.timestamp).toISOString());
  console.log("----------------------------");
}
