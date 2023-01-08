<script lang="ts" setup>
import { computed } from 'vue'
import { useCharacter } from '../../composables/useCharacter'

const props = defineProps<{
  ability: string
  skills: string[]
}>()

const character = useCharacter()

const abilityScore = computed(() => character.abilities.value[props.ability])

const skillScores = computed(() => props.skills.map(skill => {
  const base = abilityScore.value
  const modifier = character.proficiencies.value.has(skill) ? character.proficiencyBonus.value : 0
  return [skill, base + modifier, '+ ' + modifier]
}))

function hasProficiency(skill: string) {
  return character.proficiencies.value.has(skill)
}

</script>

<template>
  <section class="AbilityAndSkillBox">
    <h3 class="score">
      {{ abilityScore }}
    </h3>
    <p
      v-for="skill in skillScores"
      :key="skill[0]"
      :class="{ proficiency: hasProficiency(skill[0] + '') }"
    >
      {{ skill[0] }}: {{ skill[1] }} ({{ skill[2] }})
    </p>
  </section>
</template>

<style scoped>
.proficiency {
  font-weight: bold;
}
</style>