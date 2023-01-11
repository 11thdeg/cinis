<script lang="ts" setup>
import { useCharacter } from '../../composables/useCharacter'

const props = defineProps<{
  x: number
  y: number
}>()

if (props.x === undefined) {
  throw new Error('SpeciesBox requires an x prop')
}

const { species } = useCharacter()
</script>

<template>
  <g :transform="`translate(${x}, ${y})`">
    <path
      class="blackline"
      d="M191.3,2.4c0,1.8,0.7,3.5,2,4.8s3,2,4.8,2v231.7c-1.8,0-3.5,0.7-4.8,2s-2,3-2,4.8L8.7,247.2
	c0-1.8-0.7-3.5-2-4.8s-3-2-4.8-2V8.8c1.8,0,3.5-0.7,4.8-2s2-3,2-4.8L191.3,2.4z"
    />
    <line
      class="blackline"
      x1="4.8"
      y1="10.9"
      x2="4.8"
      y2="238.7"
    />
    <line
      class="blackline"
      x1="194.6"
      y1="10.9"
      x2="194.6"
      y2="238.7"
    />
  </g>
  <text 
    :x="(x + 12)+'px'"
    :y="(y + 24)+'px'"
  >
    {{ $t('stat.species') + ' ' + $t(`feature.${species}`) }}
  </text>
</template>

<style lang="sass" scoped>
.blackline
  fill: #e7fbfb
  stroke:#002337
  stroke-miterlimit:10
</style>