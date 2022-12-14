<script setup lang="ts">
import NavigationBar from './components/NavigationBar/NavigationBar.vue';
import NavigationRail from './components/NavigationRail/NavigationRail.vue';

</script>

<template>
  <router-view />
  <NavigationRail />
  <NavigationBar />
</template>

