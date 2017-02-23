import React from 'react';
import Page from '../Page';
import CreateSpell from './CreateSpell';
import EditSpell from './EditSpell';
import {Spell, spells, spellStorage} from '../../utils/spells';
require('./styles.scss');

const renderEdit = (e, i, edit, remove) => {
  return <EditSpell key={'edit-spell-' + i} index={i} spell={e}
    save={edit} remove={remove} />;
}

export default class EditPage extends React.Component{
  constructor(props){
    super(props);
    this.state = { spells: spells.list};

    this.addSpell = (spell) => {
      let unique = true;
      this.state.spells.forEach((e) => {
        if (e.name === spell.name) unique = false;
      });
      if (unique) {
        this.state.spells.push(spell);
        spellStorage.save();
        this.forceUpdate();
      }
      // else show error
    }
    this.editSpell = (spell, index) => {
      let unique = true;
      this.state.spells.forEach((e, i) => {
        if (e.name === spell.name && index != i) unique = false;
      });
      if (unique) {
        this.state.spells[index] = spell;
        this.forceUpdate();
        return true;
      }
      // else show error
      return false;
    }
    this.removeSpell = (index) => {
      spells.remove(index);
      this.forceUpdate();
    }
  }

  render(){
    return <div className='edit-page'>
      <Page>
        <CreateSpell addSpell={this.addSpell} />
        <hr />
        {this.state.spells.map((e, i) => renderEdit(e, i, this.editSpell, this.removeSpell))}
      </Page>
    </div>;
  }
}
