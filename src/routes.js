import React, { Component } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { connect } from 'react-redux';
import { serverUrl } from 'config';

import Layout from "layouts";
import HelloPage from 'pages/HelloPage/HelloPage';
import AddressPage from 'pages/AddressPage/AddressPage';
import TxPage from 'pages/TxPage/TxPage';

export default function getRoutes({ dispatch, getState }) {
  return(
    <Route path="/" component={Layout}>
      <IndexRoute component={HelloPage}/>
      <Route key="address" path="/address/:guid" component={AddressPage}/>
      <Route key="tx" path="/tx/:guid" component={TxPage}/>
    </Route>
  )

}