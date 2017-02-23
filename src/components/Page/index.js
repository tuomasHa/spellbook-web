import React from 'react';
require('./styles.scss');

export default class Page extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return <div className='page'>
      {this.props.children}
    </div>;
  }
}
