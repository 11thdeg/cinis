<script lang="ts" setup>
import { computed, ref } from 'vue'
import { characterFeatures } from '../composables/useCharacter/features'

const props = defineProps<{
  featureType: string
}>()

const selectedFeature = ref('')

// Map the features of featureTyoe to <cyan-select options>
const asOptions = computed(() => {
  const features = Object.entries(characterFeatures).filter(
    // Take only the features of the given type
    (feature) => feature[1].type === props.featureType
  )
  // Map to <cyan-select :options="{ value: string, label: string }[]">
  return features.map(([key, value]) => (
    {
      value: key, 
      label: value.description 
    }
  ))
})

</script>

<template>
  <section class="FeatureSelector fieldset">
    <cyan-select
      :options="asOptions"
    />
    <p class="TypeCaption">
      debug: <br>
      {{ asOptions }} <br>
      {{ selectedFeature }}
    </p>
  </section>
</template>