import React from 'react';
import {Link} from 'react-router';
require('./styles.scss');

const renderLink = (e, i) =>{
  return <li key={`link-${i}`}><Link to={e.path}>{e.name}</Link></li>;
}

export default class Navigation extends React.Component{
  constructor(props){
    super(props);

    this.state = {pages: [
      {
        name: 'Cast Spells',
        path: '/cast'
      },
      {
        name: 'Edit Spells',
        path: '/edit'
      },
      {
        name: 'Prepare Spells',
        path: '/prepare'
      }
    ]};
  }

  render(){
    return <ul className='navigation'>
        {
          this.state.pages.map((e, i) => renderLink(e, i))
        }
      </ul>;
  }
}
