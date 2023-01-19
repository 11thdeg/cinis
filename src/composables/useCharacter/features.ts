import { backgroundFeatures } from './backgrounds'
import { speciesFeatures } from './species'

export type option = {
  parentFeature?: string,
  feature: string,
  type: string,
  values: string[]
}

export type CharacterFeature = {
  description: string
  type:'species' | 'background'
  effects?: string[][] // [[stat, value], [stat, value], ... ]
  options?: string[],
  variantOf?: string,
  variants?: string[]
}

export const characterFeatures:Record<string, CharacterFeature> = {
  ...speciesFeatures,
  ...backgroundFeatures
}