export function simulateRelay(messageId) {
  return {
    messageId,
    status: "relayed",
    timestamp: Date.now()
  };
}
