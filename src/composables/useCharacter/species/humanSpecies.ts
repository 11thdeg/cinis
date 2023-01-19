import { CharacterFeature } from '../features'

export const humanSpecies:Record<string, CharacterFeature> = { 
  human: {
    description: 'Ihminen',
    type: 'species',
    effects: [
      ['size', 'medium'],
      ['speed', '12'],
      ['language', 'common'],
    ],
    options: [
      'human/potential',
      'human/extra-language'
    ]
  }
}
