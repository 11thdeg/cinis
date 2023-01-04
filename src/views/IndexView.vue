<script setup lang="ts">
import AppInfoColumn from '../components/AppInfoColumn/AppInfoColumn.vue'
import DebugColumn from '../components/DebugColumn/DebugColumn.vue'
import FeatureSelector from '../components/FeatureSelector.vue'
import IntroSection from '../components/IntroSection.vue'
import OnlineCharacterSheet from '../components/OnlineCharacterSheet/OnlineCharacterSheet.vue'
</script>

<template>
  <main class="bookLayout">
    <article class="Column">
      <IntroSection />
      <FeatureSelector
        label="Laji"
        feature-type="species"
      />
      <FeatureSelector
        label="Tausta"
        feature-type="background"
      />
    </article>
    <AppInfoColumn />
    <OnlineCharacterSheet />
    <DebugColumn />
  </main>
</template>