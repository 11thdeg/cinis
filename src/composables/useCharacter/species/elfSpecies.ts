import { CharacterFeature } from '../features'

export const elfSpecies:Record<string, CharacterFeature> = {
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
      'elf/high-elf/extra-language',
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