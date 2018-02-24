require("./HelloPage.scss")

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "react-router-redux";
import { setBlockNumber } from "actions/hello";

function mapStateToProps(state) {
  return {
    blockNumber: state.hello.get("blockNumber"),
  };
}

class HelloPage extends Component {

  componentWillMount() {
    this.props.dispatch(setBlockNumber(web3.eth.blockNumber));
  }

  render() {
    return(
      <div>
        <div>Last Block: {this.props.blockNumber}</div>
        <div>
          <input ref="addressInput"/>
          <button onClick={this.scanAdress.bind(this)}>scan ETH Address</button>
        </div>
        <div>
          <input ref="txInput"/>
          <button onClick={this.scanTx.bind(this)}>scan Transaction</button>
        </div>
      </div>
    );
  }

  scanAdress() {
    let address = this.refs.addressInput.value;
    if(web3.isAddress(address)) {
      this.props.dispatch(push("/address/" + address))
    } else {
      alert("error address")
    }
  }

  scanTx() {
    let tx = this.refs.txInput.value;
    if((tx.substring(0, 2) == "0x") && (tx.length == 66) ) {
      this.props.dispatch(push("/tx/" + tx))
    } else {
      alert("error tx hash")
    }
  }


}

export default connect(mapStateToProps)(HelloPage);

