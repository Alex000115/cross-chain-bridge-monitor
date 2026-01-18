export function createBridgeRecord(id, status) {
  return {
    id,
    status,
    timestamp: Date.now()
  };
}
