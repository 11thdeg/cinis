import { computed, Ref, ref } from 'vue'
import { backgrounds } from './backgrounds'

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

export function useCharacter () {
  return {
    professions: computed(() => [...(new Set(professions.value))].sort()),
    addProfession,
    removeProfession,
    species,
    background,
    reset
  }
}