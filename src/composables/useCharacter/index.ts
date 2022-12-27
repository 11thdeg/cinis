import { computed, Ref, ref } from 'vue'
import { backgrounds } from './backgrounds'
import { characterFeatures } from './features'

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
 * @param f a feature name, from the characterFeatures object
 */
function addFeature (f: string) {
  features.value.add(f)
  const feat = characterFeatures[f]
  if (feat) {
    if (feat.type === 'species') {
      species.value = f
    }
  }
  else {
    console.error('Unknown feature', f)
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

const languages = computed(() => {
  const langs = new Set<string>()
  for (const feat of features.value) {
    const feature = characterFeatures[feat]
    if (feature) {
      for (const key in feature.effects) {
        const effect = feature.effects[key]
        if (effect.stat === 'language') {
          langs.add(effect.value)
        }
      }
    }
  }
  return [...langs]
})

const description = computed(() => {
  const desc = new Set<string>()
  for (const feat of features.value) {
    const feature = characterFeatures[feat]
    if (feature) {
      for (const key in feature.effects) {
        const effect = feature.effects[key]
        if (effect.stat === 'description') {
          desc.add(effect.value)
        }
      }
    }
  }
  return [...desc]
})

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
    description
  }
}