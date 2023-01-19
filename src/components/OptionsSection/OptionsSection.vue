<script lang="ts" setup>
import { useCharacter } from '../../composables/useCharacter'
import FeatureSelector from '../FeatureSelector.vue'

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
    <FeatureSelector
      v-for="option in options"
      :key="option.feature"
      :label="option.feature"
      :feature-type="option.feature"
    />
  </section>
</template>