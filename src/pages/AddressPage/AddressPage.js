require("./AddressPage.scss")

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "react-router-redux";
import { setEtherBalance } from "actions/hello";

function mapStateToProps(state) {
  return {
    etherBalance: state.hello.get("etherBalance")
  };
}

class AddressPage extends Component {

  componentWillMount() {
    var balanceWei = web3.eth.getBalance(this.props.params.guid).toNumber();
    var balance = web3.fromWei(balanceWei, 'ether');
    this.props.dispatch(setEtherBalance(balance))
  }

  render() {
    return(
      <div>
      <div>ETH Address: {this.props.params.guid}</div>
        <div>Ether count: {this.props.etherBalance}</div>
      </div>
    );
  }


}

export default connect(mapStateToProps)(AddressPage);

