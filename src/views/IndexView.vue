<script setup lang="ts">
import AppInfoColumn from '../components/AppInfoColumn/AppInfoColumn.vue'
import DebugColumn from '../components/DebugColumn/DebugColumn.vue'
import FeatureSelector from '../components/FeatureSelector.vue'
import IntroSection from '../components/IntroSection.vue'
import OnlineCharacterSheet from '../components/OnlineCharacterSheet/OnlineCharacterSheet.vue'
import ProfessionSelect from '../components/ProfessionSelect/ProfessionSelect.vue'
import { useCharacter } from '../composables/useCharacter'

const { background } = useCharacter()

</script>

<template>
  <main class="bookLayout">
    <article class="Column">
      <IntroSection />
      <FeatureSelector
        label="Laji"
        feature-type="species"
      />
      <ProfessionSelect v-model="background" />
    </article>
    <AppInfoColumn />
    <OnlineCharacterSheet />
    <DebugColumn />
  </main>
</template>