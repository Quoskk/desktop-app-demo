import React from 'react';
import {Link} from 'react-router';

class AccountBalance extends React.Component {

  constructor() {
    super();
    this.state = {
      appContent: {
        en: {
          viewTitle: 'Account Balance',
          viewIntro: 'In order to use this feature you have to add some wallets, to start just click the button below.',
          btnAddWallet: 'Add a Wallet',
        },
        es: {
          viewTitle: 'Balance de Cuenta',
          viewIntro: 'Para usar esta característica, necesitas agregar carteras, para comenzar usa el boton de abajo.',
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
    let aC = self.state.appContent;
    let aT = self.props.aT;
    let _openModal = self.props._openModal;
    let portfolio = self.props.portfolio;
    let hasWallets = portfolio.length > 0;

  	return(
      <div role="main" className="app-content">

        <h1>{aC[aL].viewTitle}</h1>
        <hr/>

        {!hasWallets ?
          <div>
            <p className="lead"> {aC[aL].viewIntro} </p>
            <button
              className="btn btn-primary"
              onClick={()=> _openModal('modalAddWallet')}
              >
                <i className="fa fa-plus-circle" aria-hidden="true">
                </i> {aC[aL].btnAddWallet}
            </button>
          </div>
          :
          <p className="lead">Comming soon...</p>
        }

      </div>
    )
  }
}

export default AccountBalance;
