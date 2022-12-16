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
    special: 'Erikoisuus: Alkemistin erikoistuminen'
  },
  aristocrat: {
    name: 'Aristokraatti',
    proficiencies: {
      'persuasion': 'Suostuttelu',
      'deception': 'Huijaus'
    },
    options: [
      'language'
    ],
    special: 'Erikoisuus: Tajuatko kenelle oikein puhut?'
  }
}
