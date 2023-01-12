<script lang="ts" setup>
import { useCharacter } from '../../composables/useCharacter'

const { name, alignment } = useCharacter()
</script>

<template>
  <cyan-card>
    <p class="TypeBody2">
      <span class="bold">{{ $t('stat.name') }} :</span> {{ name }}
    </p>
    <p class="TypeBody2">
      <span class="bold">{{ $t('stat.alignment') }} :</span> {{ alignment }}
    </p>
  </cyan-card>
</template>

<style lang="sass" scoped>
.bold
  font-weight: bold
</style>