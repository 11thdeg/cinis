<script lang="ts" setup>
import { useCharacter } from '../../composables/useCharacter'

const { description } = useCharacter()
</script>

<template>
  <section class="EquipmentBox stat">
    <h4 class="downscaled">
      Muuta
    </h4>
    <br>
    <ul class="TypeBody2">
      <li
        v-for="eq in description"
        :key="eq"
        class="TypeBody2"
      >
        {{ eq }}
      </li>
    </ul>
  </section>
</template>