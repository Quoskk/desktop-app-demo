import React from 'react';
import {Link} from 'react-router';

class MarginTrading extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {
    let self = this;
    let aL = self.props.aL;
    let aT = self.props.aT;

  	return(
      <div role="main" className="app-content">

        <h1>{aL=='en'? 'Margin Trading' : 'Margin Trading'}</h1>

        <hr/>

        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni vel amet est nulla placeat, aliquam ex! Nobis earum inventore, unde, similique animi, consectetur ipsa cum quisquam alias iusto impedit beatae!</p>

      </div>
    )
  }
}


export default MarginTrading;
