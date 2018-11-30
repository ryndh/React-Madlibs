import React, { Component } from 'react';

import Header from './header'
import Card from './card'


 class Home extends Component {
  render() {
    return (
      <div className='home'>
        <div className='skew'></div>
        <Card />
        <div className='skew2'></div>
      </div>
    );
  }
}

export default Home;