<script lang="ts" setup>
import { useCharacter } from '../../composables/useCharacter'
import StatBox from './StatBox.vue'

const { size } = useCharacter()
</script>

<template>
  <article class="large Column">
    <h4>Proto-hahmari</h4>
    <cyan-card elevation="1">
      <StatBox
        label="Koko"
        :value="size"
      />
    </cyan-card>
  </article>
</template>