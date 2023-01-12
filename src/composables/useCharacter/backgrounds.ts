import { CharacterFeature } from './features'

export type Background = {
  name: string
  proficiencies: Record<string, string>
  toolProficiencies?: Record<string, string>
  options?: string[]
  special: string
}

export const backgrounds:Record<string, Background> = {
  scavenger: {
    name: 'Aarteenetsija',
    proficiencies: {
      perception: 'Tarkkaavaisuus',
      athletics: 'Urheilu'
    },
    options: [
      'language'
    ],
    special: 'Erikoisuus: Tuttu juttu'
  },
  acolyte: {
    name: 'Akolyytti',
    proficiencies: {
      insight: 'Oivallus',
      religion: 'Uskonto'
    },
    options: [
      'language'
    ],
    special: 'Erikoisuus: Turvapaikka'
  },
  alchemist: {
    name: 'Alkemisti',
    proficiencies: {
      'insight': 'Oivallus',
      'medicine': 'Lääketiede'
    },
    toolProficiencies: {
      'alchemist': 'Alkemistin työkalut'
    },
    options: [
      'language',
      'alchemist-specialty'
    ],
    special: 'Erikoisuus: Kemikaalialtistuminen'
  },
  aristocrat: {
    name: 'Aristokraatti',
    proficiencies: {
      'persuasion': 'Suostuttelu',
      'deception': 'Huijaaminen'
    },
    options: [
      'language'
    ],
    special: 'Erikoisuus: Tajuatko kenelle oikein puhut?'
  },
  soothsayer: {
    name: 'Ennustaja',
    proficiencies: {
      'insight': 'Oivallus',
      'deception': 'Huijaaminen'
    },
    options: [
      'language'
    ],
    special: 'Erikoisuus: Ennustaminen'
  },
  artisan: {
    name: 'Käsityöläinen',
    proficiencies: {
      'insight': 'Oivallus',
      'persuasion': 'Suostuttelu'
    },
    toolProficiencies: {
      'artisan': 'Käsityöläisen työkalut'
    },
    options: [
      'language',
    ],
    special: 'Erikoisuus: Killan jäsenyys'
  },
  vagabond: {
    name: 'Kulkuri',
    proficiencies: {
      'survival': 'Selviytyminen',
      'insight': 'Oivallus'
    },
    options: [
      'language'
    ],
    special: 'Erikoisuus: Kovien kolhujen koulu'
  },
  peasant: {
    name: 'Maanviljelijä',
    proficiencies: {
      'animal handling': 'Eläinten käsittely',
      'survival': 'Selviytyminen',
    },
    toolProficiencies: {
      'carriage': 'Kuljetusvälineet',
    },
    special: 'Erikoisuus: Sisu'
  },
  sailor: {
    name: 'Merenkulkija',
    proficiencies: {
      'athletics': 'Urheilu',
      'perception': 'Tarkkaavaisuus'
    },
    toolProficiencies: {
      'navigator': 'Navigointityökalut'
    },
    options: [
      'language',
      'language'
    ],
    special: 'Erikoisuus: Ystävä joka satamassa'
  },
  hermit: {
    name: 'Metsäläinen',
    proficiencies: {
      'animal handling': 'Eläinten käsittely'
    },
    options: [
      'skill:survival/persuasion',
    ],
    toolProficiencies: {
      herbs: 'Rohdospussi',
      woodcarving: 'Puunveistäjän työkalut'
    },
    special: 'Erikoisuus: Luonnontuntemus'
  },
  tinkerer: {
    name: 'Nikkari',
    proficiencies: {},
    toolProficiencies: {
      'thieves': 'Varkaan työkalut'
    },
    options: [
      'language',
    ],
    special: 'Erikoisuus: Penkoja'
  }
}

export const backgroundFeatures:Record<string, CharacterFeature> = {
  scavenger: {
    description: 'Aarteenetsijä',
    type: 'background',
    effects: [
      ['proficiency', 'perception'],
      ['proficiency', 'athletics'],
      ['language', 'any'],
      ['equipment', 'Lapio'],
      ['equipment', 'Sorkkarauta'],
      ['equipment', '15 metriä hamppuköyttä'],
      ['equipment', 'Matkavaatteet'],
      ['equipment', 'Varkaan työkalut'],
      ['equipment', 'Vyökukkaro, jossa on 10 kultarahaa'],
      ['description', 'Erikoisuus: Tuttu juttu']
    ]
  },
  acolyte: {
    description: 'Akolyytti',
    type: 'background',
    effects: [
      ['proficiency', 'insight'],
      ['proficiency', 'religion'],
      ['language', 'any'],
      ['language', 'any'],
      ['equipment', 'pyhä symboli (valmistumislahjasi pappina)'],
      ['equipment', 'rukouskirja tai rukouspyörä'],
      ['equipment', '5 tikkua suitsuketta'],
      ['equipment', 'papin kaapu'],
      ['equipment', 'tavalliset vaatteet'],
      ['equipment', 'kukkaro, jossa on 15 kultarahaa'],
      ['description', 'Erikoisuus: Turvapaikka']
    ]
  }
}