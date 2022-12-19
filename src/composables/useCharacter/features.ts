export type CharacterFeatureEffect = {
  target: 'skill' | 'tool' | 'language' | 'special' | 'description'
  value: string
}

export type CharacterFeature = {
  description: string
  type: 'background' | 'species' | 'variant'
  effects: Record<string, CharacterFeatureEffect>
}

export const characterFeatures:Record<string, CharacterFeature> = {
  elf: {
    description: 'Haltia',
    type: 'species',
    effects: {
      size: {
        target: 'description',
        value: 'Keskikokoinen'
      },
      speed: {
        target: 'description',
        value: 'Liikkuminen 9m'
      },
      darkvision: {
        target: 'description',
        value: 'Pimeänäkö 18m'
      },
      feyAncestry: {
        target: 'description',
        value: 'Viholliset eivät saa etua hyökkäyksissäsi'
      },
      trance: {
        target: 'description',
        value: 'Voit nukkua 4h päivässä'
      },
      languages: {
        target: 'language',
        value: 'Kääpiökieli'
      }
    }
  }
}