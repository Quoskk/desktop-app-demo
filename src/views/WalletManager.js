import React, { Component } from 'react';
import Promise from 'bluebird';
import ApiCaller from '../lib/api';
import fetch from 'isomorphic-fetch';
import {Link} from 'react-router';
import config from '../config';

class WalletManager extends Component {

  constructor() {
    super();
    this.state = {
      appContent: {
        en: {
          viewTitle: 'Wallet Manager',
          viewIntro: 'In order to use this feature you have to add some wallets, to start just click the button below.',
          viewIntroWM: 'Click on a wallet to see the transactions history, or send and receive money.',
          btnAddWallet: 'Add a Wallet',
        },
        es: {
          viewTitle: 'Administrador de Carteras',
          viewIntro: 'Para usar esta característica, necesitas agregar carteras, para comenzar usa el boton de abajo.',
          viewIntroWM: 'Clicquea en una cartera para ver el historial de transacciones, enviar o recibir dinero.',
          btnAddWallet: 'Agregar una Cartera',
        }
      }
    };
    this.getAmounts();
  }

  getAmounts() {
    // WIP: This is not how it should be done.
    const self = this;
    const portfolio = JSON.parse(localStorage.getItem('portfolio'));
    const promises = [];
    portfolio.map(portfolio => {
      promises.push(ApiCaller.getBalanceOfToken(portfolio.contractAddress, portfolio.walletAddress))
    });
    Promise.all(promises).then(res => {
      for (let i = 0; i < res.length; i++){
        portfolio[i].balance = res[i].balance;
      }
      localStorage.setItem('portfolio', JSON.stringify(portfolio));
      self.forceUpdate();
    }).catch(console.error);

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
    let portfolio = JSON.parse(localStorage.getItem('portfolio'));
    let hasWallets = portfolio.length > 0;

    let _openModal = self.props._openModal;
    let _openWallet = self.props._openWallet;

  	return(
      <div role="main" className="app-content">

        <h1>{aC[aL].viewTitle}</h1>

        <hr/>

        {!hasWallets ?
          <p className="lead">{aC[aL].viewIntro}</p>
          :

          <div>
            <p className="lead">{aC[aL].viewIntroWM}</p>
            <div className="user-wallets">
              {
                portfolio.map((wallet, i) => {
                  return (
                    <Link
                      to="WalletTransactions"
                      onClick={()=>_openWallet(i)}
                      className="user-wallet" key={wallet.name+wallet.balance+i}>
                      <h3 className="user-wallet__name">{wallet.name}</h3>
                      <p className="user-wallet__coin">{wallet.coin}</p>
                      <p className="user-wallet__ammount">{wallet.balance}</p>
                      <img className="user-wallet__history-chart" src="img/content/demo-balance-hidtory.png"/>
                    </Link>
                  )
                })
              }
            </div>
          </div>

        }

        <button
          className="btn btn-primary"
          onClick={()=> _openModal('modalAddWallet')}
        >
          <i className="fa fa-plus-circle" aria-hidden="true"></i> Add a Wallet
        </button>

      </div>
    )
  }
}


export default WalletManager;
