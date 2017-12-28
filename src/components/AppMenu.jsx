import React from 'react';
import {Link} from 'react-router'

class AppMenu extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {
    let self = this;
    let aL = self.props.aL;
    let aT = self.props.aT;
    let hasWallets = self.props.hasWallets;

    return (
      <div className="app-menu">

        <h1 className="app-menu__title">MAIN MENU</h1>
        <ul className="app-menu__nav app-menu__nav--main">
          { hasWallets ?
            <li><i className="fa fa-money" aria-hidden="true"></i> <Link draggable="false" to="AccountBalance">Account Balance</Link></li>
            : null
          }
          <li><i className="fa fa-briefcase" aria-hidden="true"></i> <Link draggable="false" to="WalletManager">Wallet Manager</Link></li>
          <li><i className="fa fa-pie-chart" aria-hidden="true"></i> <Link draggable="false" to="Dex">Dex</Link></li>
          <li><i className="fa fa-bar-chart" aria-hidden="true"></i> <Link draggable="false" to="MarginTrading">Margin Trading</Link></li>
          <li><i className="fa fa-line-chart" aria-hidden="true"></i> <Link draggable="false" to="LiquidityFound">Liquidity Found</Link></li>
        </ul>

        <ul className="app-menu__nav app-menu__nav--secondary">
          { 0 != 0 &&
            <li><i className="fa fa-question-circle" aria-hidden="true"></i> <Link draggable="false" to="Help">Help</Link></li>
          }
          <li><i className="fa fa-cog" aria-hidden="true"></i> <Link draggable="false" to="Settings">Settings</Link></li>
        </ul>

      </div>
    );
  }
}

export default AppMenu;
