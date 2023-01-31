<script setup lang="ts">
import AppInfoColumn from '../components/AppInfoColumn/AppInfoColumn.vue'
import DebugColumn from '../components/DebugColumn/DebugColumn.vue'
import FeatureSelector from '../components/FeatureSelector.vue'
import IntroSection from '../components/IntroSection.vue'
// import OptionsSection from '../components/OptionsSection/OptionsSection.vue'
</script>

<template>
  <cyan-top-app-bar>
    <cyan-icon
      noun="ll"
    />
    <h3>{{ $t('app.title') }}</h3>
  </cyan-top-app-bar>
  <main class="bookLayout">
    <article class="Column flex flex-column">
      <IntroSection />
      <FeatureSelector
        label="Laji"
        feature-type="species"
      />
      <!--FeatureSelector
        label="Tausta"
        feature-type="background"
      />
      <OptionsSection />
      <br-->
      <cyan-toolbar>
        <cyan-spacer />
        <router-link to="/sheet">
          <button class="secondary">
            <cyan-icon
              noun="page-character-sheet"
              small
              dark
            />
            Näytä lomake
          </button>
        </router-link>
      </cyan-toolbar>
    </article>
    <AppInfoColumn />
    <DebugColumn />
  </main>
</template>