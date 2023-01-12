<script lang="ts" setup>
import { computed } from 'vue'
import { useCharacter } from '../../composables/useCharacter'

const props = defineProps<{
  ability: string
  skills: string[]
}>()

const { abilities, proficiencies, proficiencyBonus } = useCharacter()
const abilityScore = computed(() => abilities.value[props.ability] || 10)
const abilityModifier = computed(() => Math.floor((abilityScore.value - 10) / 2))

const hasSaveProfession = computed(() => proficiencies.value.has(props.ability))
const saveModifier = computed(() => {
  if (hasSaveProfession.value) {
    return abilityModifier.value + proficiencyBonus.value
  } else {
    return abilityModifier.value
  }
})

const skillScores = computed(() => props.skills.map(skill => {
  const base = abilityModifier.value
  const modifier = proficiencies.value.has(skill) ? proficiencyBonus.value : 0
  return [skill, base + modifier]
}))

function hasProficiency(skill: string) {
  return proficiencies.value.has(skill)
}

</script>

<template>
  <cyan-card>
    <cyan-icon
      slot="avatar"
      :noun="ability.toLowerCase()"
    />
    <h4 slot="title">
      {{ $t('stat.'+ability) }}
    </h4>
    <div class="grid">
      <section>
        <h4 class="centered">
          {{ abilityModifier }}
        </h4>
        <p class="TypeCaption centered">
          {{ abilityScore }}
        </p>
      </section>
      <section>
        <ul class="skillList">
          <li class="TypeBody2">
            {{ $t('stat.save') }}: {{ saveModifier }}
          </li>
          <li
            v-for="skill in skillScores"
            :key="skill[0]"
            class="TypeBody2"
          >
            <span class="bold">{{ $t('stat.'+skill[0]) }} <cyan-icon
              v-if="hasProficiency(skill[0] + '')"
              noun="check"
              xsmall
            />:</span> {{ skill[1] }}
          </li>
        </ul>
        {{ proficiencies }}
      </section>
    </div>
  </cyan-card>
</template>

<style lang="sass" scoped>
.bold
  font-weight: bold
.skillList
  margin: 0
  padding: 0
  li
    margin: 0
    padding: 0
    list-style: none
.grid
  display: grid
  grid-template-columns: 1fr 3fr
.centered
  text-align: center
</style>