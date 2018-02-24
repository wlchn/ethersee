import Immutable from "immutable";

const initialState = Immutable.fromJS({
  blockNumber: 0,
  etherBalance: 0,
  transaction: {}
});

export default function(state = initialState, action) {
  switch(action.type) {
  case "BLOCK_NUMBER":
    state = state.updateIn(["blockNumber"], () => action.payload.blockNumber);
    return state;
  case "ETHER_BALANCE":
    state = state.updateIn(["etherBalance"], () => action.payload.etherBalance);
    return state;
  case "TRANSACTION":
    state = state.updateIn(["transaction"], () => action.payload.transaction);
    return state;
  default:
    return state;
  }
}