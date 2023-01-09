<script lang="ts" setup>
import { computed } from 'vue'
import { useCharacter } from '../../composables/useCharacter'

const props = defineProps<{
  cx: number
  cy: number
  ability: string
}>()

const { abilities } = useCharacter()

const abilityScore = computed(() => abilities.value[props.ability])

</script>

<template>
  <rect 
    :x="cx+'px'"
    :y="cy+'px'"
    width="220px"
    height="88px"
    fill="hsla(0, 0%, 0%, 0.1)"
  />
  <text
    :x="(cx + 12)+'px'"
    :y="(cy + 24)+'px'"
  >
    {{ props.ability }}
  </text>
  <text 
    :x="(cx + 12)+'px'"
    :y="(cy + 50)+'px'"
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