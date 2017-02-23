import React from 'react';
import Page from '../Page';
import CastSpell from './CastSpell';
import {Spell, spells} from '../../utils/spells';

const renderSpell = (e, i) => {
  return <CastSpell key={'cast-spell-' + i} spell={e}/>;
}

export default class CastPage extends React.Component{
  constructor(props){
    super(props);
    this.state = { spells: spells.list};
  }

  render(){
    return <div className='cast-page'>
      <Page>
        { this.state.spells.map((e, i) => renderSpell(e, i)) }
      </Page>
    </div>;
  }
}
