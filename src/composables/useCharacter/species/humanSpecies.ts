import { CharacterFeature, option } from '../features'

export const allLanguages = [
  'Yleiskieli',
  'Aliskieli',
  'Haltiakieli'
]

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

export const humanOptions:Record<string, option> = {
  'human/potential': {
    parentFeature: 'human',
    feature: 'potential',
    type: 'feat',
    values: ['feat 1', 'feat 2', 'feat 3']
  },
  'human/extra-language': {
    parentFeature: 'human',
    feature: 'extra-language',
    type: 'language',
    values: allLanguages
  }
}