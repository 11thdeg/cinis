export type CharacterFeatureEffect = {
  stat: 'description' | 'language'
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
        stat: 'description',
        value: 'Keskikokoinen'
      },
      speed: {
        stat: 'description',
        value: 'Liikkuminen 9m'
      },
      darkvision: {
        stat: 'description',
        value: 'Pimeänäkö 18m'
      },
      feyAncestry: {
        stat: 'description',
        value: 'Viholliset eivät saa etua hyökkäyksissäsi'
      },
      trance: {
        stat: 'description',
        value: 'Voit nukkua 4h päivässä'
      },
      languages: {
        stat: 'language',
        value: 'Haltiakieli'
      }
    }
  }
}