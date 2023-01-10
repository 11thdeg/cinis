<script lang="ts" setup>
import { computed } from 'vue'
import { useCharacter } from '../../composables/useCharacter'

const props = defineProps<{
  x: number
  y: number
  ability: string
}>()

const { abilities } = useCharacter()

const abilityScore = computed(() => abilities.value[props.ability])

</script>

<template>
  <rect 
    :x="x"
    :y="y"
    width="220"
    height="88"
    fill="hsla(0, 0%, 0%, 0.1)"
  />
  <text
    :x="x + 12"
    :y="y + 24"
  >
    {{ props.ability }}
  </text>
  <text 
    :x="x + 12"
    :y="y + 50"
    class="score"
  >
    {{ abilityScore > 0 ? '+ ' : '' }}{{ abilityScore }}
  </text>
</template>

<style lang="sass" scoped>
text
  font-size: 12px
.score
  font-size: 24px
</style>