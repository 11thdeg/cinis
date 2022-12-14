<script setup lang="ts">
import AppInfoColumn from '../components/AppInfoColumn/AppInfoColumn.vue'
import DebugColumn from '../components/DebugColumn/DebugColumn.vue'
import IntroSection from '../components/IntroSection.vue'
import ProfessionSelect from '../components/ProfessionSelect/ProfessionSelect.vue'
import SpeciesSelect from '../components/SpeciesSelect/SpeciesSelect.vue'
import { useCharacter } from '../composables/useCharacter'

const { species } = useCharacter()

</script>

<template>
  <main class="bookLayout">
    <article class="Column">
      <IntroSection />
      <SpeciesSelect v-model="species" />
      <ProfessionSelect />
    </article>
    <DebugColumn />
    <AppInfoColumn />
  </main>
</template>