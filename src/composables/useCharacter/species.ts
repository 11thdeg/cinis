import { CharacterFeature } from './features'

const allLanguages = [
  'Yleiskieli',
  'Aliskieli',
  'Haltiakieli'
]

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
      ['size', 'medium'],
      ['speed', '12'],
      ['description', '*Pimeänäkö:* 24m'],
      ['description', '*Tarkat aistit:* pätevyys tarkkaavaisuustaitoon'],
      ['proficiency', 'perception'],
      ['description', '*Keijujen perintö* sinua ei voi vaivuttaa uneen magialla, ja sinulla on etu pelastusheittoihin lumotuksi tulemista, kuten loitsua lumoa henkilö vastaan.'],
      ['immunity', 'Unta vastaan'],
      ['advantage', 'Lumoamista vastaan'],
      ['description', '*Transsi* Transsi. Haltioiden ei tarvitse nukkua. Haltiat harjoittavat meditaatiota puoliksi tietoisessa tilassa neljä tuntia päivässä. '],
      ['language', 'common'],
      ['language', 'elvish']
    ],
    variants: ['high_elf', 'wood_elf', 'dark_elf']
  },
  high_elf: {
    description: 'Jalohaltia',
    type: 'species',
    variantOf: 'elf',
    effects: [
      ['size', 'Keskikokoinen'],
      ['speed', '12 metriä'],
      ['description', '*Pimeänäkö:* 24m'],
      ['description', '*Tarkat aistit:* pätevyys tarkkaavaisuustaitoon'],
      ['proficiency', 'perception'],
      ['description', '*Keijujen perintö* sinua ei voi vaivuttaa uneen magialla, ja sinulla on etu pelastusheittoihin lumotuksi tulemista, kuten loitsua lumoa henkilö vastaan.'],
      ['immunity', 'Unta vastaan'],
      ['advantage', 'Lumoamista vastaan'],
      ['description', '*Transsi* Transsi. Haltioiden ei tarvitse nukkua. Haltiat harjoittavat meditaatiota puoliksi tietoisessa tilassa neljä tuntia päivässä. '],
      ['language', 'Yleiskieli'],
      ['language', 'Haltiakieli'],
      ['proficiency', 'sword'],
      ['proficiency', 'shortsword'],
      ['proficiency', 'longbow'],
      ['proficiency', 'shortbow'],
    ],
    options: [
      {
        feature: 'Kieli',
        type: 'language',
        values: [...allLanguages]
      }
    ]
  },
  wood_elf: {
    description: 'Metsähaltia',
    type: 'species',
    variantOf: 'elf',
    effects: [
      ['size', 'Keskikokoinen'],
      ['speed', '16 metriä'],
      ['description', '*Pimeänäkö:* 24m'],
      ['description', '*Tarkat aistit:* pätevyys tarkkaavaisuustaitoon'],
      ['proficiency', 'perception'],
      ['proficiency', 'sword'],
      ['proficiency', 'shortsword'],
      ['proficiency', 'longbow'],
      ['proficiency', 'shortbow'],
      ['description', '*Keijujen perintö* sinua ei voi vaivuttaa uneen magialla, ja sinulla on etu pelastusheittoihin lumotuksi tulemista, kuten loitsua lumoa henkilö vastaan.'],
      ['description', '*Sulaudu ympäristöön:* Voit yrittää piiloutua, vaikka näkyvyys sinuun olisi vain hieman heikentynyt lehtien, sumun, lumen tms. johdosta.'],
      ['immunity', 'Unta vastaan'],
      ['advantage', 'Lumoamista vastaan'],
      ['description', '*Transsi* Transsi. Haltioiden ei tarvitse nukkua. Haltiat harjoittavat meditaatiota puoliksi tietoisessa tilassa neljä tuntia päivässä. '],
      ['language', 'Yleiskieli'],
      ['language', 'Haltiakieli']
    ]
  },
  dark_elf: {
    description: 'Pimeähaltia',
    type: 'species',
    variantOf: 'elf',
    effects: [
      ['size', 'Keskikokoinen'],
      ['speed', '12 metriä'],
      ['description', '*Ylivertainen pimeänäkö:* 48m'],
      ['description', '*Tarkat aistit:* pätevyys tarkkaavaisuustaitoon'],
      ['proficiency', 'perception'],
      ['description', '*Keijujen perintö* sinua ei voi vaivuttaa uneen magialla, ja sinulla on etu pelastusheittoihin lumotuksi tulemista, kuten loitsua lumoa henkilö vastaan.'],
      ['immunity', 'Unta vastaan'],
      ['advantage', 'Lumoamista vastaan'],
      ['description', '*Transsi* Transsi. Haltioiden ei tarvitse nukkua. Haltiat harjoittavat meditaatiota puoliksi tietoisessa tilassa neljä tuntia päivässä. '],
      ['language', 'Yleiskieli'],
      ['language', 'Haltiakieli'],
      ['language', 'Aliskieli']
    ],
  }
}

const humanSpecies:Record<string, CharacterFeature> = {
  human: {
    description: 'Ihminen',
    type: 'species',
    effects: [
      ['size', 'medium'],
      ['speed', '12'],
      ['language', 'common'],
    ],
    options: [
      {
        feature: 'potential',
        type: 'feat',
        values: ['Feat 1', 'Feat 2', 'Feat 3']
      },
      {
        feature: 'language',
        type: 'language',
        values: [...allLanguages]
      }
    ]
  }
}

export const speciesFeatures:Record<string, CharacterFeature> = {
  ...humanSpecies,
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

