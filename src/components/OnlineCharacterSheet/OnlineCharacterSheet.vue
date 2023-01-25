<script lang="ts" setup>
import AbilityAndSkillsCard from './AbilityAndSkillsCard.vue'
import BasicInfoCard from './BasicInfoCard.vue'
import DescriptionBox from './DescriptionBox.vue'
import LanguagesAndProdiciencies from './LanguagesAndProdiciencies.vue'
import QuickStatsBox from './QuickStatsBox.vue'



</script>

<template>
  <article class="small Column theme-ll flex flex-column">
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
      :skills="['arcana', 'history', 'investigation', 'nature', 'religion']"
    />
    <AbilityAndSkillsCard
      ability="wisdom"
      :skills="['animal handling', 'insight', 'medicine', 'perception', 'survival']"
    />
    <AbilityAndSkillsCard
      ability="charisma"
      :skills="['Deception', 'Intimidation', 'Performance', 'Persuasion']"
    />
    <LanguagesAndProdiciencies />
  </article>
  <article class="small Column theme-ll flex flex-column">
    <QuickStatsBox />
  </article>
  <article class="small Column theme-ll flex flex-column">
    <DescriptionBox />
  </article>
</template>

<style lang="sass" scoped>
.grid
  display: grid

.threecol
  grid-template-columns: 1fr 1fr 1fr
  gap: 8px
</style>