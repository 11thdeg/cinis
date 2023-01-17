<script lang="ts" setup>
import { useCharacter } from '../../composables/useCharacter'

const { description } = useCharacter()
</script>

<template>
  <cyan-card>
    <h4
      slot="title"
      class="downscaled"
    >
      Muuta
    </h4>
    <br>
    <ul class="TypeBody2 list-plain">
      <li
        v-for="eq in description"
        :key="eq"
        class="TypeBody2"
      >
        {{ eq }}
      </li>
    </ul>
  </cyan-card>
</template>