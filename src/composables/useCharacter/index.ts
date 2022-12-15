import { ref } from 'vue'

const species = ref('')
const profession = ref('')

function reset () {
  species.value = ''
  profession.value = ''
}
export function useCharacter () {
  return {
    species,
    profession,
    reset
  }
}