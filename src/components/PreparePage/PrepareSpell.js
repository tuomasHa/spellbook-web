import React from 'react';
import {spells} from '../../utils/spells';

export default class PrepareSpell extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      spell: props.spell
    }

    this.onChange = (event) => {
      let count = parseInt(event.target.value)
      if (isNaN(count) || count < 0) count = 0;
      spells.setCount(this.state.spell, count);
      this.forceUpdate();
    }

    this.inc = () => {
      spells.add(this.state.spell);
      this.forceUpdate();
    }
    this.dec = () => {
      spells.cast(this.state.spell);
      this.forceUpdate();
    }
  }

  render(){
    return <div className='prepare-spell'>
      <span className='prepare-spell-name'>{this.state.spell.name}</span>
      <span className='prepare-spell-notes' >{this.state.spell.notes}</span>
      <label className='prepare-spell-count-label' >
        <input type='text' className='prepare-spell-count'
          value={this.state.spell.count} onChange={this.onChange} />
      </label>
      <input type='button' className='prepare-spell-increment'
        onClick={this.inc} />
      <input type='button' className='prepare-spell-decrement'
        onClick={this.dec} />
    </div>;
  }

}
