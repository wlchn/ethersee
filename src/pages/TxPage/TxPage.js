require("./TxPage.scss")

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "react-router-redux";
import { setTransaction } from "actions/hello";

function mapStateToProps(state) {
  return {
    transaction: state.hello.getIn(["transaction"])
  };
}

class TxPage extends Component {

  componentWillMount() {
    var transaction = web3.eth.getTransaction(this.props.params.guid);
    this.props.dispatch(setTransaction(transaction));
  }

  render() {
    return(
      <div>
        <div>Transaction:</div>
        <pre dangerouslySetInnerHTML={{__html: this.syntaxHighlight(this.props.transaction)}} />
      </div>
    );
  }

  syntaxHighlight(json) {
    json = JSON.stringify(json, undefined, 4);
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
  }

}

export default connect(mapStateToProps)(TxPage);

