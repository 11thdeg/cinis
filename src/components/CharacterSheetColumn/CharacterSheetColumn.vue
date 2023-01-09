
<script lang="ts" setup>
import AbilityStatBox from './AbilityStatBox.vue'
</script>

<template>
  <article class="large Column CharacterSheetContainer">
    <svg
      class="CharacterSheet"
      width="2480px"
      height="3508px"
    >
      <rect
        cx="0"
        cy="0"
        width="2480px"
        height="3508px"
        fill="#eee"
      />
      <AbilityStatBox
        :cx="10"
        :cy="10"
        ability="Strength"
      />
      <AbilityStatBox
        :cx="10"
        :cy="110"
        ability="Dexterity"
      />
      <AbilityStatBox
        :cx="10"
        :cy="210"
        ability="Constitution"
      />
      <AbilityStatBox
        :cx="10"
        :cy="310"
        ability="Intelligence"
      />
      <AbilityStatBox
        :cx="10"
        :cy="410"
        ability="Wisdom"
      />
      <AbilityStatBox
        :cx="10"
        :cy="510"
        ability="Charisma"
      />
    </svg>
  </article>
</template>

<style lang="sass" scoped>
.CharacterSheet
  width: 100%
  height: auto
</style>