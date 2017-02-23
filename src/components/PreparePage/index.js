import React from 'react';
import Page from '../Page';
import PrepareSpell from './PrepareSpell';
import {Spell, spells} from '../../utils/spells';

const renderPrepared = (e, i) => {
  return <PrepareSpell key={'cast-spell-' + i} spell={e}/>;
}

export default class PreparePage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      spells: spells.list
    };
  }

  render(){
    return <div className='prepare-page'>
      <Page>
        { this.state.spells.map((e, i) => renderPrepared(e, i)) }
      </Page>
    </div>;
  }
}
