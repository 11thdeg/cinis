import { backgroundFeatures } from './backgrounds'

export type option = {
  feature: string,
  type: string,
  values: string[]
}

export type CharacterFeature = {
  description: string
  type: 'background' | 'species' | 'variant'
  effects?: string[][] // [[stat, value], [stat, value], ... ]
  options?: option[]
}

export const characterFeatures:Record<string, CharacterFeature> = {
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
    ]
  },
  human: {
    description: 'Ihminen',
    type: 'species',
    effects: [
      ['size', 'Keskikokoinen'],
    ]
  },
  ...backgroundFeatures
}