import React from 'react';
import { Link } from 'react-router'

class AppHeader extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {
    let self = this;
    let aL = self.props.aL;
    let aT = self.props.aT;

    return (
      <header className="app-header">
        <div className="row">

          {/* BRAND * * * * * * * * * */}
          <div className="col-sm-8">
            <h1 className="app__brand">
              <img
                src={`img/content/${(aT == 'day') ?
                      'omphalos-logo' :
                      'omphalos-logo--white'}.png`
                    }
                draggable="false"
                width="130"
                alt="Omphalos"
              />
            </h1>
          </div>

          {/* OPTIONS * * * * * * * * * */}
          { // diabled by now
            0 != 0 &&
            <div className="col-sm-4 text-right">
              <ul className="nav nav-tabs" role="tablist">
                  <li role="presentation" className="active"><a draggable="false" href="#wallet" aria-controls="wallet" role="tab" data-toggle="tab"><i className="fa fa-briefcase link-muted" aria-hidden="true"></i> Wallet</a></li>
                  <li title="Comming soon..." role="presentation"><a draggable="false" style={{pointerEvents: 'none'}} href="#exchange" aria-controls="exchange" role="tab" data-toggle="tab"><i className="fa fa-exchange link-muted" aria-hidden="true"></i> Exchange</a></li>
                  <li title="Comming soon..." role="presentation"><a draggable="false" style={{pointerEvents: 'none'}} href="#backup" aria-controls="backup" role="tab" data-toggle="tab"><i className="fa fa-hdd-o link-muted" aria-hidden="true"></i> Backup</a></li>
                </ul>
            </div>
          }
        </div>

      </header>
    );
  }
}

export default AppHeader;
