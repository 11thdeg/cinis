<script lang="ts" setup>
import { useCharacter } from '../../composables/useCharacter'

const { languages } = useCharacter()
</script>

<template>
  <cyan-card>
    <h4 slot="title">
      {{ $t('stat.language') }}
    </h4>
    <cyan-icon
      slot="avatar"
      noun="stylebook"
    />
    <ul class="list-plain">
      <li
        v-for="l in languages"
        :key="l"
      >
        {{ $t('stat.languages.'+l) }}
      </li>
    </ul>
  </cyan-card>
</template>

<style lang="sass" scopes>
.list-plain
  list-style: none
  padding: 0
  margin: 0
</style>