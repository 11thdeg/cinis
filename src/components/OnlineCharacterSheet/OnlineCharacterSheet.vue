<script lang="ts" setup>
import { useCharacter } from '../../composables/useCharacter'
import AbilityAndSkillsBox from './AbilityAndSkillsBox.vue'
import AbilityAndSkillsCard from './AbilityAndSkillsCard.vue'
import BasicInfoCard from './BasicInfoCard.vue'
import DescriptionBox from './DescriptionBox.vue'
import EquipmentBox from './EquipmentBox.vue'
import LanguagesAndProdiciencies from './LanguagesAndProdiciencies.vue'
import StatBox from './StatBox.vue'

const { size, species, speed } = useCharacter()
</script>

<template>
  <article class="large Column theme-ll">
    <div class="grid threecol">
      <div class="flex flex-column">
        <BasicInfoCard />
        <AbilityAndSkillsCard
          ability="strength"
          :skills="['athletics']"
        />
        <AbilityAndSkillsCard
          ability="dexterity"
          :skills="['acrobatics', 'stealth', 'sleight of hand']"
        />
        <AbilityAndSkillsCard
          ability="constitution"
          :skills="[]"
        />
        <AbilityAndSkillsCard
          ability="intelligence"
          :skills="['Arcana', 'History', 'Investigation', 'Nature', 'Religion']"
        />
        <AbilityAndSkillsCard
          ability="wisdom"
          :skills="['Animal Handling', 'Insight', 'Medicine', 'Perception', 'Survival']"
        />
        <AbilityAndSkillsCard
          ability="charisma"
          :skills="['Deception', 'Intimidation', 'Performance', 'Persuasion']"
        />
        <LanguagesAndProdiciencies />
      </div>
    </div>
    <h3 class="downscaled underscore">
      Proto-hahmari
    </h3>
    <section style="display: grid; grid-template-columns: 3fr 1fr 1fr;">
      <StatBox
        label="Laji"
        :value="species"
      />
      <StatBox
        label="Koko"
        :value="size"
      />
      <StatBox
        label="Nopeus"
        :value="speed"
      />
    </section>
    <hr>
    <div class="flex">
      <AbilityAndSkillsBox
        ability="Strength"
        :skills="['Athletics']"
      />
      <AbilityAndSkillsBox
        ability="Dexterity"
        :skills="['Acrobatics', 'Sleight of Hand', 'Stealth']"
      />
      <AbilityAndSkillsBox
        ability="Constitution"
        :skills="['']"
      />
      <AbilityAndSkillsBox
        ability="Intelligence"
        :skills="['Arcana', 'History', 'Investigation', 'Nature', 'Religion']"
      />
      <AbilityAndSkillsBox
        ability="Wisdom"
        :skills="['Animal Handling', 'Insight', 'Medicine', 'Perception', 'Survival']"
      />
      <AbilityAndSkillsBox
        ability="Charisma"
        :skills="['Deception', 'Intimidation', 'Performance', 'Persuasion']"
      />
    </div>
    <hr>
    <section
      style="display: grid; grid-template-columns: 1fr 1fr;"
    >
      <EquipmentBox />
      <DescriptionBox />
    </section>
  </article>
</template>

<style lang="sass" scoped>
.grid
  display: grid

.threecol
  grid-template-columns: 1fr 1fr 1fr
</style>