import { CharacterFeature } from './features'

const dragonbornBreahtWeapons:string[] = [
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
]

const elfSpecies:Record<string, CharacterFeature> = {
  elf: {
    description: 'Haltia',
    type: 'species',
    effects: [
      ['size', 'Keskikokoinen'],
      ['speed', '9 metriä'],
      ['description', 'Pimeässä näkö 18 metriä'],
      ['description', '*Keijujen perintö* Viholliset eivät saa etua hyökkäyksissäsi'],
      ['description', '*Kevytuninen* Voit nukkua 4h päivässä'],
      ['language', 'Haltiakieli']
    ],
    variants: ['high_elf', 'wood_elf', 'dark_elf']
  },
  high_elf: {
    description: 'Jalohaltia',
    type: 'species',
    variantOf: 'elf'
  },
  wood_elf: {
    description: 'Metsähaltia',
    type: 'species',
    variantOf: 'elf'
  },
  dark_elf: {
    description: 'Pimeähaltia',
    type: 'species',
    variantOf: 'elf'
  }
}

export const speciesFeatures:Record<string, CharacterFeature> = {
  ...elfSpecies,
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
      {
        feature: 'Henkays',
        type: 'Breath Weapons',
        values: [...dragonbornBreahtWeapons]
      }
    ],
  }
}

