import React from 'react';
import { Link } from 'react-router'

class AppFooter extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {
    let self = this;
    let aL = self.props.aL;
    let aT = self.props.aT;
    let _toggleTheme = self.props._toggleTheme;
    let _setLanguage = self.props._setLanguage;

    return (
      <footer className="app-footer">
        <div className="row">
          <div className="col-xs-6">
            <small>© 2018 ~ <a draggable="false" href="#" className={aT=='day'?'':'text-info'}><b>hubii</b>network</a></small>
          </div>
          <div className="col-xs-6 text-right">

            <ul className="ui-options">

              <li>
                <div className="btn-group dropup">
                  <button
                    type="button"
                    className={`btn ${aT=='day' ? 'btn-link' : 'btn-default'} btn-xs dropdown-toggle`}
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fa fa-language" aria-hidden="true"></i>  <span className="caret"></span> {aL}
                  </button>
                  <ul className="dropdown-menu">
                    <li> <a onClick={ ()=> _setLanguage('en') } > <small>English</small> </a> </li>
                    <li> <a onClick={ ()=> _setLanguage('es') } > <small>Español</small> </a> </li>
                  </ul>
                </div>
              </li>

              <li>
                <button
                  className={`btn ${aT=='day'?'btn-link':'btn-default'} btn-xs`}
                  onClick={ _toggleTheme }
                >
                  <i className="fa fa-adjust" aria-hidden="true"></i> Theme
                </button>
              </li>
            </ul>

          </div>
          </div>
      </footer>
    );
  }
}

export default AppFooter;
