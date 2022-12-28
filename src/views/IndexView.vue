<script setup lang="ts">
import AppInfoColumn from '../components/AppInfoColumn/AppInfoColumn.vue'
import DebugColumn from '../components/DebugColumn/DebugColumn.vue'
import IntroSection from '../components/IntroSection.vue'
import OnlineCharacterSheet from '../components/OnlineCharacterSheet/OnlineCharacterSheet.vue'
import ProfessionSelect from '../components/ProfessionSelect/ProfessionSelect.vue'
import SpeciesSelect from '../components/SpeciesSelect/SpeciesSelect.vue'
import { useCharacter } from '../composables/useCharacter'

const { species, background } = useCharacter()

</script>

<template>
  <main class="bookLayout">
    <article class="Column">
      <IntroSection />
      <SpeciesSelect v-model="species" />
      <ProfessionSelect v-model="background" />
    </article>
    <DebugColumn />
    <AppInfoColumn />
    <OnlineCharacterSheet />
  </main>
</template>