class Spell {
  constructor(name, notes, color, icon) {
    this.name = name;
    this.count = 0;
    this.notes = notes;
    this.color = color;
    this.icon = icon;
    this.enabled = false;
  }
}

const spells = {
  list: [],
  cast: (spell) => {
    if (spell.count > 0) {
      spell.count -= 1;
      spellStorage.save();
      return true;
    }
    return false;
  },
  add: (spell) => {
    spell.count++;
    spellStorage.save();
  },
  setCount: (spell, count) => {
    spell.count = count;
    spellStorage.save();
  },
  setEnabled: function (spell, value) {
    spell.enabled = value;
    spellStorage.save();
  },
  remove: function (index) {
    this.list.splice(index, 1);
    spellStorage.save();
  }
}

const spellStorage = {
  load: () => spells.list = JSON.parse(localStorage.getItem('spells')) || [],
  save: () => localStorage.setItem('spells', JSON.stringify(spells.list))
}

export {Spell, spells, spellStorage};
