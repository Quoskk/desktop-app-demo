// react router and history
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, useRouterHistory, Route, IndexRoute} from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';

// Views
import Layout from './Layout';

import AccountBalance from './views/AccountBalance';
import WalletManager from './views/WalletManager';
import WalletTransactions from './views/WalletTransactions';
import Dex from './views/Dex';
import MarginTrading from './views/MarginTrading';
import LiquidityFound from './views/LiquidityFound';
import Help from './views/Help';
import Settings from './views/Settings';

// js
// require ('../public/js/boostrap.min.js');

//Css
// require ('./css/app.css')

// Set history
const history = useRouterHistory (createHashHistory)({queryKey: false});
// const location = history.location; // Current location
const app = document.getElementById('app');

// Set Router
ReactDOM.render(

  <Router onUpdate={()=> window.scrollTo(0, 0)} history ={history}>
    <Route path='/' component={Layout}>
      <IndexRoute component={AccountBalance}></IndexRoute>

      <Route path='/AccountBalance' name='AccountBalance' component={AccountBalance}></Route>
      <Route path='/WalletManager' name='WalletManager' component={WalletManager}></Route>
      <Route path='/WalletTransactions' name='WalletTransactions' component={WalletTransactions}></Route>
      <Route path='/Dex' name='Dex' component={Dex}></Route>
      <Route path='/MarginTrading' name='MarginTrading' component={MarginTrading}></Route>
      <Route path='/LiquidityFound' name='LiquidityFound' component={LiquidityFound}></Route>
      <Route path='/Help' name='Help' component={Help}></Route>
      <Route path='/Settings' name='Settings' component={Settings}></Route>
    </Route>
  </Router>,

app);
