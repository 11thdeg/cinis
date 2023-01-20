import { computed, Ref, ref } from 'vue'
import { backgrounds } from './backgrounds'
import { characterFeatures, option } from './features'
import { speciesOptions } from './species'

const _background = ref('')
const professions:Ref<string[]> = ref([])

/** A Profession can come from multiple sources */
function addProfession (p: string) {
  professions.value = [...professions.value, p]
}
function removeProfession (p: string) {
  // console.log('removeProfession', p, professions.value, professions.value.indexOf(p))
  if (professions.value.length === 1 && professions.value[0] === p) professions.value = []
  professions.value = professions.value.splice(professions.value.indexOf(p) - 1, 1)
}

function reset () {
  background.value = ''
  professions.value = []
  selectedFeatureds.value = {
    species: '',
    background: '',
    options: <string[]>[]
  }
}

const features:Ref<Set<string>> = ref(new Set())

function removeFeature (f: string) {
  features.value.delete(f)
  // TODO
}

const background = computed({
  get: () => _background.value,
  set: (v: string) => {
    if (_background.value === v) return
    if (_background.value) {
      const template = backgrounds[_background.value]
      if (template) {
        for (const key in template.proficiencies) {
          removeProfession(template.proficiencies[key])
        }
      }
    }
    const template = backgrounds[v]
    if (template) {
      for (const key in template.proficiencies) {
        addProfession(template.proficiencies[key])
      }
    }
    _background.value = v
  } 
})

function getFeatureSet( type: string ) {
  const feats = new Set<string>()
  for (const feat of features.value) {
    console.log('parsing:', feat, 'type:', type)
    const feature = characterFeatures[feat]
    if (feature) {
      console.log('feature:', feature)
      if (feature.effects) {
        for (const effect of feature.effects) {
          if (effect[0] === type) {
            feats.add(effect[1])
          }
        }
      }
    }
  }
  return feats
}

function pushOptions (feat: string) {
  const feature = characterFeatures[feat]
  if (feature && feature.options) {
    feature.options?.forEach(o => {
      const op = speciesOptions[o]
      op.parentFeature = feat
      _options.value.push(op)
    })
  }
}
function popOptions (feat: string|string[]) {
  _options.value = _options.value.filter(o => o.parentFeature !== feat)
}

const languages = computed(() => {
  return [...getFeatureSet('language')]
})

const description = computed(() => {
  return [...getFeatureSet('description')]
})

const size = computed(() => {
  return [...getFeatureSet('size')][0] || '-'
})
const speed = computed(() => {
  return [...getFeatureSet('speed')][0] || '-'
})

const equipment = computed(() => {
  return [...getFeatureSet('equipment')]
})

const _options = ref<option[]>([])


const abilities = ref<Record<string, number>>({
  Strength: 0,
  Dexterity: 1,
  Constitution: 1,
  Intelligence: 3,
  Wisdom: 1,
  Charisma: 2
})

const proficiencies = computed(() => {
  const profs = new Set<string>()
  for (const feat of features.value) {
    const feature = characterFeatures[feat]
    if (feature) {
      if (feature.effects) {
        for (const effect of feature.effects) {
          if (effect[0] === 'proficiency') {
            profs.add(effect[1])
          }
        }
      }
    }
  }
  return profs
})

const name = ref('Ramalama')
const alignment = ref('Kaoottisen hyvä')


// --- refactored from here ---

/**
 * This is a collection of all the features that have been selected for the character
 * 
 * Key is the feature type, value is the feature key(s) as a string or an array of strings
 */
const selectedFeatureds:Ref<Record<string, string|string[]>> = ref({
  species: '',
  background: '',
  options: <string[]>[]
})

/**
 * Adds a feature to the character, and removes any conflicting features and their effects
 * 
 * @param f key of the feature
 */
function addFeature (key: string) {
  // Get the feature from the feature map
  const feat = characterFeatures[key]
  if (!feat) throw new Error('Unknown feature: ' + key)

  // Add the feature to the character model
  if (feat) {
    if (feat.type === 'species') {
      // Remove any conflicting features
      popOptions(selectedFeatureds.value.species)
      
      // Add the new feature
      selectedFeatureds.value.species = key
      pushOptions(key)
    }
    else {
      console.log('unknown feature type:', feat.type, 'key:', key)
    }
  }
}

export function useCharacter () {
  return {
    name,
    alignment,
    // -- dummy data above --
    professions: computed(() => [...(new Set(professions.value))].sort()),
    addProfession,
    removeProfession,
    background,
    reset,
    addFeature,
    removeFeature,
    languages,
    description,
    size,
    speed, 
    equipment,
    abilities,
    proficiencies,
    proficiencyBonus: computed(() => 2),
    features: computed(() => [...features.value.keys()]),
    featureMap: computed(() => characterFeatures),
    addOptionalFeature: (feat: string) => { console.log('Not implemented', feat) },
    // -- refactored from here --
    species: computed(() => selectedFeatureds.value.species),
    options: computed(() => selectedFeatureds.value.options),
    selectedFeatureds: computed(() => selectedFeatureds.value)
  }
}