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
  }

  render(){
    return <div className='check-input'>
      <label className='check-input-label'>
        <input type='checkbox' checked={this.state.value}
        className='check-input-input' />
      </label>
    </div>;
  }

}
