import React from 'react';
import CreateSpell from './CreateSpell';

export default class EditSpell extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      showEdit: false
    }

    this.enableEdit = () => this.setState({showEdit: true});
    this.remove = () => this.props.remove(this.props.index);
    this.save = (spell) => {
      this.props.save(spell, this.props.index) && this.setState({showEdit: false});
    }
    this.cancel = () => this.setState({showEdit: false});
  }

  render(){
    return <div className='edit-spell'>
      <div className={'edit-spell-info ' + (this.state.showEdit ? 'hide-section' : '')} >
        <span className='edit-spell-name'>{this.props.spell.name}</span>
        <input type='button' value='Edit' onClick={this.enableEdit} />
        <input type='button' value='Remove' onClick={this.remove} />
      </div>
      <div className={'edit-spell-edit ' + (this.state.showEdit ? '' : 'hide-section')} >
        <CreateSpell showCancel={true} addSpell={this.save} cancel={this.cancel}
          spell={this.props.spell} />
      </div>
    </div>;
  }

}
