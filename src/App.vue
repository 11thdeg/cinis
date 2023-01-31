<script setup lang="ts">
import NavigationBar from './components/NavigationBar/NavigationBar.vue'
import NavigationRail from './components/NavigationRail/NavigationRail.vue'

</script>

<template>
  <div
    class="AppLayout"
    lang="fi"
  >
    <router-view />
  </div>
  <NavigationRail />
  <NavigationBar />
</template>

