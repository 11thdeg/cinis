<script lang="ts" setup>
import { useCharacter } from '../../composables/useCharacter'

const props = defineProps<{
  x: number
  y: number
}>()

const { species } = useCharacter()
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
    :x="(x + 12)+'px'"
    :y="(y + 24)+'px'"
  >
    {{ species }}
  </text>
</template>