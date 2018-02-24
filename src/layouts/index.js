import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
  };
}

class Layout extends Component {

  render() {
    return(
      <div>
        <h2>Ethersee</h2>
        {this.props.children}
      </div>
    );
  }

}

export default connect(mapStateToProps)(Layout);

