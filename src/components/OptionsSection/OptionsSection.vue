<script lang="ts" setup>
import { useCharacter } from '../../composables/useCharacter'
import OptionSelector from './OptionSelector.vue'

const { options } = useCharacter()
</script>

<template>
  <section
    v-if="options"
    class="fieldset"
  >
    <h4 class="downscaled">
      {{ $t('app.optionsSection.title') }}
    </h4>
    <p class="TypeCaption">
      {{ $t('app.optionsSection.info') }}
    </p>
    <OptionSelector
      v-for="option in options"
      :key="option"
      :option="option"
    />
    <p>{{ options }}</p>
  </section>
</template>