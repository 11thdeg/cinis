<script lang="ts" setup>
import { CyanSelect } from '@11thdeg/cyan'
import { computed, ref } from 'vue'
import { useCharacter } from '../composables/useCharacter'
import { characterFeatures } from '../composables/useCharacter/features'
import FeatureInfoSection from './FeatureInfoSection/FeatureInfoSection.vue'

const props = defineProps<{
  label: string
  featureType: string
}>()

const { addFeature } = useCharacter()

const selectedFeature = ref('')
const selectedVariant = ref('')

// Map the features of featureTyoe to <cyan-select options>
const asOptions = computed(() => {
  const features = Object.entries(characterFeatures).filter(
    // Take only the features of the given type
    (feature) => (feature[1].type === props.featureType && !feature[1].variantOf)
  )
  // Map to <cyan-select :options="{ value: string, label: string }[]">
  const f = features.map(([key, value]) => (
    {
      value: key, 
      label: value.description 
    }
  ))
  return [ {value: '', label: '- Valitse -'}, ...f ]
})

const hasVariants = computed(() => {
  if (!selectedFeature.value) return false
  return !!characterFeatures[selectedFeature.value].variants?.length 
})

const variansAsOptions = computed(() => {
  const variants = characterFeatures[selectedFeature.value].variants
  if (!variants) return []
  const v = [{value: '', label: '- Ei varianttia -'}]
  for (const variantKey of variants) {
    const variant = characterFeatures[variantKey]
    v.push({value: variantKey, label: variant.description})
  }
  return v
})

const featureToDisplay = computed(() => {
  if (selectedVariant.value) return selectedVariant.value
  return selectedFeature.value
})

function onFeatureSelect(e: Event) {
  const value = (e.target as CyanSelect).value
  selectedFeature.value = value
  selectedVariant.value = ''
  addFeature(value)
}

function onVariantSelect(e: Event) {
  const value = (e.target as CyanSelect).value
  selectedVariant.value = value
  addFeature(value)
}

</script>

<template>
  <section class="FeatureSelector fieldset">
    <h4 class="downscaled underscore">
      {{ label }}
    </h4>
    <cyan-select
      :label="label"
      :options="asOptions"
      @change="onFeatureSelect"
    />
    <cyan-select
      v-if="hasVariants"
      label="Variantti"
      :options="variansAsOptions"
      @change="onVariantSelect" 
    />
    <FeatureInfoSection
      v-if="featureToDisplay"
      :feature-key="featureToDisplay"
    />
  </section>
</template>