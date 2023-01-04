import { computed, Ref, ref } from 'vue'
import { backgrounds } from './backgrounds'
import { characterFeatures, option } from './features'

const species = ref('')
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
  species.value = ''
  background.value = ''
  professions.value = []
}

const features:Ref<Set<string>> = ref(new Set())

/**
 * Adds a feature to the character, and removes any conflicting features and their effects
 * 
 * @param f key of the feature
 */
function addFeature (f: string) {
  const feat = characterFeatures[f]
  if (feat) {
    if (feat.variantOf !== undefined) {
      throw new Error('Cannot add a variant of a feature directly, use addVariant instead')
    }
    if (feat.type === 'species') {
      features.value.delete(species.value)
      features.value.add(f)
      species.value = f
    }
    else if (feat.type === 'background') {
      features.value.delete(_background.value)
      features.value.add(f)
      _background.value = f
    }
  }
  else {
    console.error('Unknown feature', f)
  }
}
/**
 * Adds a variant of a feature to the character, and removes any conflicting features and their effects
 * 
 * @param variant key of the variant
 * @param replaces key of the feature to replace
 */
function addVariant (variant: string, replaces: string) {
  const feat = characterFeatures[variant]
  if (feat && features.value.has(replaces)) {
    if (feat.variantOf === replaces) {
      variants[replaces] = variant
      features.value.delete(replaces)
      features.value.add(variant)
    }
  }
  else {
    console.error('Unknown feature, or original', variant, replaces)
  }
}


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
const options = computed(() => _options.value)

const variants:Record<string, string> = {}



export function useCharacter () {
  return {
    professions: computed(() => [...(new Set(professions.value))].sort()),
    addProfession,
    removeProfession,
    species,
    background,
    reset,
    addFeature,
    removeFeature,
    languages,
    description,
    size,
    speed, 
    equipment,
    options,
    addVariant
  }
}