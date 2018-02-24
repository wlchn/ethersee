export function setBlockNumber(blockNumber) {
  return {
    type: "BLOCK_NUMBER",
    payload: {
      blockNumber: blockNumber
    }
  }
}

export function setEtherBalance(etherBalance) {
  return {
    type: "ETHER_BALANCE",
    payload: {
      etherBalance: etherBalance
    }
  }
}

export function setTransaction(transaction) {
  return {
    type: "TRANSACTION",
    payload: {
      transaction: transaction
    }
  }
}