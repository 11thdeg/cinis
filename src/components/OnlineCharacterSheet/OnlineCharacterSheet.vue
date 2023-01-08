<script lang="ts" setup>
import { useCharacter } from '../../composables/useCharacter'
import AbilityAndSkillsBox from './AbilityAndSkillsBox.vue'
import DescriptionBox from './DescriptionBox.vue'
import EquipmentBox from './EquipmentBox.vue'
import StatBox from './StatBox.vue'

const { size, species, speed } = useCharacter()
</script>

<template>
  <article class="large Column">
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
    <AbilityAndSkillsBox
      ability="Strength"
      :skills="['Athletics']"
    />
    <hr>
    <section
      style="display: grid; grid-template-columns: 1fr 1fr;"
    >
      <EquipmentBox />
      <DescriptionBox />
    </section>
  </article>
</template>