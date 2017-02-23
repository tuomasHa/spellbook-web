import React from 'react';
import Navigation from '../Navigation';
import {spellStorage} from '../../utils/spells';
require('./styles.scss');

export default class App extends React.Component{
  constructor(props){
    super(props);

    spellStorage.load();
  }

  render(){
    return <div className='app'>
      <Navigation />
      {this.props.children}
    </div>;
  }
}
