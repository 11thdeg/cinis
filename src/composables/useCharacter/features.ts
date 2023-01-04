import { backgroundFeatures } from './backgrounds'
import { speciesFeatures } from './species'

export type option = {
  feature: string,
  type: string,
  values: string[]
}

export type CharacterFeature = {
  description: string
  type:'species' | 'background'
  effects?: string[][] // [[stat, value], [stat, value], ... ]
  options?: option[],
  variantOf?: string,
  variants?: string[]
}

export const characterFeatures:Record<string, CharacterFeature> = {
  human: {
    description: 'Ihminen',
    type: 'species',
    effects: [
      ['size', 'Keskikokoinen'],
    ]
  },
  ...speciesFeatures,
  ...backgroundFeatures
}