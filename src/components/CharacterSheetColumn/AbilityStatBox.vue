<script lang="ts" setup>
import { computed } from 'vue'
import { useCharacter } from '../../composables/useCharacter'

const props = defineProps<{
  x: number
  y: number
  ability: string
  skills: string[]
}>()

const { abilities, proficiencies, proficiencyBonus } = useCharacter()

const abilityScore = computed(() => abilities.value[props.ability])

const skillScores = computed(() => props.skills.map(skill => {
  const base = abilityScore.value
  const modifier = proficiencies.value.has(skill) ? proficiencyBonus.value : 0
  return [skill, base + modifier, '+ ' + modifier]
}))

function hasProficiency(skill: string|number) {
  return proficiencies.value.has(skill + '')
}

</script>

<template>
  <g 
    :transform="`translate(${x}, ${y})`"
  >
    <path
      class="blackline"
   
      d="M191.3,2.2c0,1.8,0.7,3.5,2,4.8s3,2,4.8,2v81.7c-1.8,0-3.5,0.7-4.8,2s-2,3-2,4.8L8.7,97c0-1.8-0.7-3.5-2-4.8
	s-3-2-4.8-2V8.6c1.8,0,3.5-0.7,4.8-2s2-3,2-4.8L191.3,2.2z"
    />
    <line
      class="blackline"
      x1="4.8"
      y1="10.7"
      x2="4.8"
      y2="88.5"
    />
    <line
      class="blackline"
      x1="194.6"
      y1="10.7"
      x2="194.6"
      y2="88.5"
    />
  </g>
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
  <text 
    v-for="skill, index in skillScores"
    :key="skill[0]"
    :x="x + 60"
    :y="y + 40 + (index * 12)"
    :class="{ proficiency: hasProficiency(skill[0] + '') }"
  >
    {{ skill[0] }}: {{ skill[1] > 0 ? '+ ': '' }} {{ skill[1] }} {{ hasProficiency(skill[0]) ? '(*)' : '' }}
  </text>
</template>

<style lang="sass" scoped>
text
  font-size: 12px
.score
  font-size: 24px

.blackline
  fill: #e7fbfb
  stroke:#002337
  stroke-miterlimit:10
</style>