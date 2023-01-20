import { CharacterFeature } from '../features'

export const dwarfSpecies:Record<string, CharacterFeature> = {
  dwarf: {
    type: 'species',
    description: 'Kääpiö',
    variants: ['dwarf:hill', 'dwarf:stone'],
  },
  'dwarf:stone': {
    type: 'species',
    description: 'Kivikääpiö',
    variantOf: 'dwarf',
  },
  'dwarf:hill': {
    type: 'species',
    description: 'Mäkikääpiö',
    variantOf: 'dwarf'
  }
}