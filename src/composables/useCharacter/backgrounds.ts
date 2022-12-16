export type Background = {
  name: string
  proficiencies: Record<string, string>
  toolProficiencies?: Record<string, string>
  options: string[]
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
  }
}
