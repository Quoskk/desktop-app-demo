import React, {Component} from 'react';
import {Link} from 'react-router';

class WalletTransactions extends Component {

  constructor() {
    super();
    this.state = {
      appContent: {
        en: {
          viewTitle: 'Wallet Transactions',
          viewIntro: 'Transactions History',
          viewIntroError: 'Please, add a wallet first.',
          btnAddWallet: 'Add a Wallet',
        },
        es: {
          viewTitle: 'Administrador de Carteras',
          viewIntro: 'Para usar esta característica, necesitas agregar carteras, para comenzar usa el boton de abajo.',
          viewIntroError: 'Para usar esta característica, necesitas agregar carteras, para comenzar usa el boton de abajo.',
          btnAddWallet: 'Agregar una Cartera',
        }
      }
    };
  }

  componentWillMount(){
    let self = this;
    // Load appContent data and save it to the state
    // let dataContent = {};
    // self.setState({appContent: dataContent});
  }

  render() {
    let self = this;

    let aL = self.props.aL;
    let aT = self.props.aT;
    let aC = self.state.appContent;
    let openedWallet = self.props.openedWallet || self.props.openedWallet == 0 ? self.props.openedWallet : 'none';
    let portfolio = self.props.portfolio;
    let hasWallets = portfolio.length > 0;

    let _openModal = self.props._openModal;

  	return(

      openedWallet !== 'none' ?
        <div role="main" className="app-content">
          <h1>{ portfolio[openedWallet].name }</h1>
          <hr/>
          <p className="lead">{ aC[aL].viewIntro }</p>

          {/* Get the dafa ftom portfolio[openedWallet].transactions */}
          <table class="table table-hover">
            <thead>
              <tr>
                <th>Demo</th>
                <th>Demo</th>
                <th>Demo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>One</td>
                <td>xxxx</td>
                <td>xxxx</td>
              </tr>
              <tr>
                <td>Two</td>
                <td>xxxx</td>
                <td>xxxx</td>
              </tr>
            </tbody>
          </table>
        </div>
        :
        <div role="main" className="app-content">
          <h1>{aC[aL].viewTitle}</h1>
          <hr/>
          <p className="lead">{aC[aL].viewIntroError}</p>
        </div>

    )
  }
}

export default WalletTransactions;
