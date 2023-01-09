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
    <h4 class="TypeBody2">
      {{ ability }}
    </h4>
    <h4 class="score downscaled">
      {{ abilityScore > 0 ? '+ ' : '' }}{{ abilityScore }}
    </h4>
    <p
      v-for="skill in skillScores"
      :key="skill[0]"
      class="TypeCaption"
      :class="{ proficiency: hasProficiency(skill[0] + '') }"
    >
      {{ skill[0] }}: {{ skill[1] > 0 ? '+ ': '' }} {{ skill[1] }}
    </p>
  </section>
</template>

<style scoped>
.AbilityAndSkillBox {
  align-self: flex-start;
}
.proficiency {
  font-weight: bold;
}
</style>