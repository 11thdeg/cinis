import { CharacterFeature, option } from './features'
import { dwarfSpecies } from './species/dwarfSpecies'
import { elfSpecies } from './species/elfSpecies'
import { humanOptions, humanSpecies } from './species/humanSpecies'

/* const dragonbornBreahtWeapons:string[] = [
  'Musta - Happo - 12 metriä pitkä ja 2 metrin levyinen linja (KET-pelastusheitto)',
  'Sininen - Salama - 12 metriä pitkä ja 2 metrin levyinen linja (KET-pelastusheitto)',
  'Vaski - Tuli - 12 metriä pitkä ja 2 metrin levyinen linja (KET-pelastusheitto)',
  'Pronssi - Salama - 12 metriä pitkä ja 2 metrin levyinen linja (KET-pelastusheitto)',
  'Kupari - Happo - 12 metriä pitkä ja 2 metrin levyinen linja (KET-pelastusheitto)',
  'Kulta - Tuli - 6 metrin päähän ulottuva kartio (KET-pelastusheitto)',
  'Vihreä - Myrkky - 6 metrin päähän ulottuva kartio (SIT-pelastusheitto)',
  'Punainen - Tuli - 6 metrin päähän ulottuva kartio (KET-pelastusheitto)',
  'Hopeinen - Kylmä - 6 metrin päähän ulottuva kartio (SIT-pelastusheitto)',
  'Valkoinen - Kylmä - 6 metrin päähän ulottuva kartio (SIT-pelastusheitto)'  
] */

export const speciesFeatures:Record<string, CharacterFeature> = {
  ...humanSpecies,
  ...elfSpecies,
  ...dwarfSpecies,
  dragonborn: {
    description: 'Louhelainen',
    type: 'species',
    effects: [
      ['size', 'Keskikokoinen'],
      ['speed', '12 metriä'],
      ['language', 'Yleiskieli'],
      ['language', 'Lohikäärmeiden kieli']
    ],
    options: [
      'dragonborn/draconic-ancestry',
    ],
  }
}

export const speciesOptions:Record<string, option> = {
  ...humanOptions
}

