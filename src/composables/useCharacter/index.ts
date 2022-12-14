import { ref } from 'vue'

const species = ref('')

function reset () {
  species.value = ''
}
export function useCharacter () {
  return {
    species,
    reset
  }
}