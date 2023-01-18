<script lang="ts" setup>
import { useCharacter } from '../../composables/useCharacter'

const { size, speed } = useCharacter()
</script>
<template>
  <cyan-card :elevation="1">
    <section class="grid three-columns">
      <div class="statBox">
        <p class="TypeCaption bold">
          {{ $t('stat.size') }}
        </p>
        <p class="TypeCaption">
          {{ $t('stat.sizes.'+size) }}
        </p>
      </div>
      <div class="statBox">
        <p class="TypeCaption bold">
          {{ $t('stat.speed') }}
        </p>
        <p class="TypeCaption">
          {{ speed }}m
        </p>
      </div>
      <div class="statBox">
        <p class="TypeCaption bold">
          {{ $t('stat.initiative') }}
        </p>
        <p class="TypeCaption">
          +0
        </p>
      </div>
    </section>
  </cyan-card>
</template>

<style lang="sass" scoped>
.TypeCaption
  margin: 0
.bold
  font-weight: bold
.grid
  display: grid

.three-columns
  grid-template-columns: 1fr 1fr 1fr
  gap: 4px
</style>