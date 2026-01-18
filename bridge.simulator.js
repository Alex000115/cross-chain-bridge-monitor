export function simulateBridgeTransfer(token, amount, fromChain, toChain) {
  return {
    token,
    amount,
    fromChain,
    toChain,
    status: "simulated",
    timestamp: Date.now()
  };
}
