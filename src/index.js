require('babel-polyfill'); // ECMA6仿真
require("index.css");

import React from "react";
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
// import { createBrowserHistory } from 'history';

import reducers from "reducers";
import getRoutes from "routes";

const middleware = applyMiddleware(
  routerMiddleware(browserHistory),
  thunk
);

const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  }),
  middleware
);

const history = syncHistoryWithStore(browserHistory, store);
// const history = syncHistoryWithStore(createBrowserHistory(), store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      {getRoutes(store)}
    </Router>
  </Provider>,
  document.getElementById("root")
);


