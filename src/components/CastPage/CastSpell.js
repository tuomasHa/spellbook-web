import React from 'react';
import {spells} from '../../utils/spells';

export default class CastSpell extends React.Component{
  constructor(props){
    super(props);

    this.handleCast = () => spells.cast(this.props.spell) && this.forceUpdate();
  }

  render(){
    return <div className='cast-spell'>
      <span className='cast-spell-name'>{ this.props.spell.name }</span>
      <span className='cast-spell-count'>{ 'Casts: ' + this.props.spell.count }
        </span>
      <input type='button' className='cast-spell-button' value='Cast'
        onClick={this.handleCast} disabled={this.props.spell.left === 0}/>
    </div>;
  }

}
