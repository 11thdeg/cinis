
<script lang="ts" setup>
import AbilityStatBox from './AbilityStatBox.vue'
import SpeciesBox from './SpeciesBox.vue'
</script>

<template>
  <article class="large Column CharacterSheetContainer">
    <svg
      class="CharacterSheet"
      width="2480pt"
      height="3508pt"
    >
      <rect
        x="0"
        y="0"
        width="2480"
        height="3508"
        fill="#eee"
      />
      <AbilityStatBox
        :x="10"
        :y="10"
        ability="Strength"
      />
      <AbilityStatBox
        :x="10"
        :y="110"
        ability="Dexterity"
      />
      <AbilityStatBox
        :x="10"
        :y="210"
        ability="Constitution"
      />
      <AbilityStatBox
        :x="10"
        :y="310"
        ability="Intelligence"
      />
      <AbilityStatBox
        :x="10"
        :y="410"
        ability="Wisdom"
      />
      <AbilityStatBox
        :x="10"
        :y="510"
        ability="Charisma"
      />
      <SpeciesBox
        :x="240"
        :y="10"
      />
    </svg>
  </article>
</template>

<style lang="sass" scoped>
.CharacterSheet
  width: 100%
  height: auto
  object-fit: contain
</style>