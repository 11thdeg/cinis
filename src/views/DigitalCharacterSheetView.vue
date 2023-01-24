<script lang="ts" setup>
import AppInfoColumn from '../components/AppInfoColumn/AppInfoColumn.vue'
//import CharacterSheetColumn from '../components/CharacterSheetColumn/CharacterSheetColumn.vue'
import OnlineCharacterSheet from '../components/OnlineCharacterSheet/OnlineCharacterSheet.vue'

</script>
<template>
  <cyan-top-app-bar>
    <cyan-icon
      noun="ll"
    />
    <h3>{{ $t('app.title') }}</h3>
  </cyan-top-app-bar>
  <main class="bookLayout">
    <OnlineCharacterSheet />
    <AppInfoColumn />
  </main>
</template>