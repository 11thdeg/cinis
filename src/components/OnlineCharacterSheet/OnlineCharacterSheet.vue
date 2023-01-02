<script lang="ts" setup>
import { useCharacter } from '../../composables/useCharacter'
import EquipmentBox from './EquipmentBox.vue'
import StatBox from './StatBox.vue'

const { size, species } = useCharacter()
</script>

<template>
  <article class="large Column">
    <h3 class="downscaled underscore">
      Proto-hahmari
    </h3>
    <cyan-toolbar>
      <StatBox
        label="Laji"
        :value="species"
      />
      <StatBox
        label="Koko"
        :value="size"
      />
    </cyan-toolbar>
    <hr>
    <EquipmentBox />
  </article>
</template>