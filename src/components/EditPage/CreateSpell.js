import React from 'react';
import {Spell} from '../../utils/spells';

export default class CreateSpell extends React.Component{
  constructor(props){
    super(props);
    let spell = props.spell || {};

    this.state = {
      name: spell.name || '',
      notes: spell.notes || ''
    }

    this.nameChange = (event) => this.setState({name: event.target.value});
    this.notesChange = (event) => this.setState({notes: event.target.value});
    this.create = () => {
      if (this.state.name){
        this.props.addSpell(new Spell(this.state.name, this.state.notes, '', ''))
      }
    };
  }

  render(){
    return <div className='create-spell'>
      <label className='create-spell-name-label'>{'Spell name: '}
        <input type='text' className='create-spell-name-input'
        value={this.state.name} onChange={this.nameChange}/>
      </label>
      <label className='create-spell-info-label'>{'Notes: '}
        <textarea className='create-spell-info-input'
        value={this.state.notes} onChange={this.notesChange}/>
      </label>
      <input type='button' onClick={this.props.cancel}
        className={this.props.showCancel ? '' : 'hide-button'} value='Cancel' />
      <input type='button' onClick={this.create} value='Add' />
    </div>;
  }

}
