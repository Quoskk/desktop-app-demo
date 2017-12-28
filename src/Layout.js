import React, { Component } from 'react';

//import {render} from 'react-dom';

//import styles from './css/app.css';

import Modal from 'react-modal';
import ApiCaller from './lib/api';
import AppHeader from './components/AppHeader.jsx';
import AppMenu from './components/AppMenu.jsx';
import AppFooter from './components/AppFooter.jsx';

class Layout extends Component {

  constructor() {
    super();
    this.state = {
      appTheme: 'day',
      appLanguage: 'en',
      appDimensions: {
				winWidth: Number(window.innerWidth),
			  winHeight: Number(window.innerHeight),
				isPortrait: this.winWidth < this.winHeight,
      },

      modalMinHeight: 0,
      modalAddWallet: false,
      modalNewWallet: false,

      selectedWallet: 'none',
      enteredWalletPK: '',
      availableWallets: [
        'Metamask / Mist',
        'Ledger',
        'Trezor',
        'Hubii',
        // 'Digital Bitbox',
        // 'Keystore / JSON file',
        // 'Mnemonic Phrase',
        // 'Private Key',
        // 'Parity Phrase'
      ],
      availableTokens: [],
      portfolio: [
        {
          'name': 'Wallet 1',
          'coin': 'Hubii',
          'contractAddress': '0x8d1b4bc5664436d64cca2fd4c8b39ae71cb2662a',
          'walletAddress': '0x699387e5f2d6cd7332ae87a1b1a659e5beb0942c',
          'balance': 0,
          'transactions': {}
        },
        {
          'name': 'Wallet 2',
          'coin': 'My20',
          'contractAddress': '0x8899544f1fc4e0d570f3c998cc7e5857140dc322',
          'walletAddress': '0xed525589fbb598ed958f78ffad3c5126a4c37118',
          'balance': 0,
          'transactions': {}
        }
      ],
      openedWallet: null,
    };

    localStorage.setItem('portfolio', JSON.stringify(this.state.portfolio));
    ApiCaller.getAvailableTokens().then(tokens => {
      this.setState({ availableTokens: tokens });
    }).catch(console.error);

    this._toggleTheme = this._toggleTheme.bind(this);
    this._setLanguage = this._setLanguage.bind(this);
  }

  componentWillMount() {
    let self = this;
    // get the portfolio object and save it as a state.
    // let dataPortfolio = {};
    // self.setState({portofportfolio: dataPortfolio});
  }

  componentDidMount() {
    let self = this;
    console.log('App started...');
  }

  _toggleTheme() {
    let self = this;
    let newTheme = (self.state.appTheme == 'day') ? 'dark' : 'day';
    self.setState({ appTheme: newTheme });
  }

  _setLanguage(lang) {
    let self = this;
    self.setState({ appLanguage: lang });
  }

  _openModal(id) {
    let self = this;
    self.setState({[id]: true});
  }

  _openWallet(id) {
    let self = this;
    self.setState({openedWallet: id});
    console.log('openedWallet: ',id);
    self.setState({openedWallet: id});
    console.log(self.state.openedWallet);
  }

  _appendWallet(wallet) {
    let self = this;
    let selectedWallet = self.state.selectedWallet;
    let portfolio = self.state.portfolio;
    // We should add the selected wallet to the portfolio
    console.log(`Wallet ${selectedWallet} added to the portfolio`)
    // Display the wallet in the Wallet Manager
    console.log('enteredWalletPK: ', wallet);
    portfolio.push(JSON.parse(wallet));
  }

  render () {
    let self = this;
    let aT = self.state.appTheme;
    let aL = self.state.appLanguage;
    let aD = self.state.appDimensions;
    let portfolio = self.state.portfolio;
    let openedWallet = self.state.openedWallet;
    let availableWallets = self.state.availableWallets;
    let selectedWallet = self.state.selectedWallet;
    let enteredWalletPK = self.state.enteredWalletPK;

    let childrenWithProps = React.cloneElement(self.props.children, {
      _openModal: (id) => {self._openModal(id)},
      _openWallet: (id) => {self._openWallet(id)},
      aL: aL,
      aT: aT,
      portfolio: portfolio,
      openedWallet: openedWallet
		});

    return (
      <div className={`app app--${aT}`}>

        {
          // APP LAYOUT
        }
        <AppHeader aL={aL} aT={aT} />

        <AppMenu aL={aL} aT={aT} hasWallets={portfolio.length > 0 ? true : false} />

        {/* APP CONTENT */}
				<div id='app-content'>
          <div className='container'>
						{childrenWithProps}
					</div>
				</div>

        <AppFooter
          _setLanguage={ (lang) => {self._setLanguage(lang)} }
          _toggleTheme={ self._toggleTheme }
          aL={aL} aT={aT}
        />


        {
          // MODAL WINDOWS
        }
        <Modal
          contentLabel='Add token modal'
          ariaHideApp={false}
          isOpen={self.state.modalAddWallet}
          className='modal--md'
          onRequestClose={() => self.setState({modalAddWallet: false})}
          onAfterOpen={() => {
            const modalHeight = document.getElementById('modal').clientHeight + 80;
            console.log('modal-height',modalHeight)
            self.setState({
              modalMinHeight: modalHeight,
              selectedWallet: 'none'
            });
            console.log('selectedWallet', selectedWallet);
          }}
          style={{content: { minHeight: self.state.modalMinHeight }}}
        >

          <div className='modal__wrapper' id='modal'>

            {/* header */}
            <div className='modal__header row'>
              <div className='col-xs-12'>
                <span
                  className='close-btn'
                  onClick={() => self.setState({modalAddWallet: false})}>
                </span>
                <h3 className='modal__title'>Choose a token to add</h3>
              </div>
            </div>


            {/* content */}
            <div className='modal__content row'>
              <div className='col-xs-12'>

                <ul className='list-unstyled'>
                  {
                    self.state.availableTokens.map((res, i) => {
                      return (
                        <li className='radio' key={'token-'+i}>
                          <label>
                            <input
                              type='radio'
                              name='availableTokens'
                              id={'token-'+i}
                              value={i}
                              onChange={(event) => {
                                self.setState({selectedWallet: event.target.value});
                                console.log('selectedToken:', event.target.value)
                              }}
                            />
                            {res.name}
                          </label>
                        </li>
                      )
                    })
                  }
                </ul>

              </div>

            </div>

            {/* footer */}
            <div className='modal__footer row'>
              <div className='col-xs-12'>
                <button type='reset' className='btn btn-default'
                  onClick={() => self.setState({modalAddWallet: false})}>
                  Cancel
                </button>
                <button
                  type='button'
                  className='btn btn-primary'
                  disabled={selectedWallet == 'none'}
                  onClick={()=> {
                    if (selectedWallet !== 'none') {
                      self.setState({modalAddWallet: false, modalNewWallet: true})
                    }
                  }}
                >
                  Continue
                </button>
              </div>
            </div>

          </div>


        </Modal>


        <Modal
          contentLabel='New Wallet Modal'
          ariaHideApp={false}
          isOpen={self.state.modalNewWallet}
          className='modal--md'
          onRequestClose={() => self.setState({modalNewWallet: false})}
          onAfterOpen={() => {
            const modalHeight = document.getElementById('modal').clientHeight + 80;
            self.setState({modalMinHeight: modalHeight});
          }}
          style={{content: { minHeight: self.state.modalMinHeight }}}
        >

          <div className='modal__wrapper' id='modal'>

            {/* header */}
            <div className='modal__header row'>
              <div className='col-xs-12'>
                <span
                  className='close-btn'
                  onClick={() => self.setState({modalNewWallet: false})}>
                </span>
                <h3 className='modal__title'>Import your {availableWallets[selectedWallet]} wallet </h3>
              </div>
            </div>


            {/* content */}
            <div className='modal__content row'>
              <div className='col-xs-12'>

                <div className='form-group'>
                  <label htmlFor='wallet-name' className='h6'>Paste you private key string below</label>
                  <input type='text' className='form-control' id='wallet-name' placeholder='Private Key'
                    onChange={(event) => {
                      self.setState({enteredWalletPK: event.target.value})
                    }}
                  />
                </div>
              </div>
            </div>

            {/* footer */}
            <div className='modal__footer row'>
              <div className='col-xs-12'>
                <button type='reset' className='btn btn-default'
                  onClick={() => self.setState({modalNewWallet: false})}>
                  Cancel
                </button>
                <button
                  type='submit'
                  className='btn btn-primary'
                  disabled={selectedWallet == 'none'}
                  onClick={()=> {
                    if (enteredWalletPK !== '') {
                      self.setState({modalNewWallet: false});
                      self._appendWallet(enteredWalletPK);
                    } else {
                      console.log('error');
                    }
                  }}
                >
                  Confirm
                </button>
              </div>
            </div>

          </div>


        </Modal>

      </div>

    );
  }
}

export default Layout;
