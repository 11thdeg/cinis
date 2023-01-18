<script lang="ts" setup>
import { useCharacter } from '../../composables/useCharacter'
import { marked } from 'marked'

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
        <div
          :innerHTML="marked(eq)"
          class="desctext"
        />
      </li>
    </ul>
  </cyan-card>
</template>

<style lang="sass">
.desctext
  p
    font-size: var(--cn-font-size-body2)
</style>