<script lang="ts" setup>
import { CyanSelect } from '@11thdeg/cyan'
import { computed, onMounted, ref } from 'vue'
import { useCharacter } from '../composables/useCharacter'
import { characterFeatures } from '../composables/useCharacter/features'
import { isVariant, getParent } from '../composables/useCharacter/features'
// import FeatureInfoSection from './FeatureInfoSection/FeatureInfoSection.vue'

const props = defineProps<{
  label: string
  featureType: string
}>()

const { addFeature, resetFeatureType, selectedFeatures } = useCharacter()

const selectedFeature = ref('')
const selectedVariant = ref('')

onMounted(() => {
  const selected = selectedFeatures.value[props.featureType]
  if (selected && typeof selected === 'string') {
    if (isVariant(selected)) {
      selectedVariant.value = selected
      selectedFeature.value = getParent(selected) || ''
    }
    else {
      selectedFeature.value = selected
    }
  }
})

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

function onFeatureSelect(e: Event) {
  const value = (e.target as CyanSelect).value
  selectedFeature.value = value
  selectedVariant.value = ''
  
  if (value) addFeature(value)
  else resetFeatureType(props.featureType)
}

function onVariantSelect(e: Event) {
  const value = (e.target as CyanSelect).value
  selectedVariant.value = value
  if (value) addFeature(value)
  else addFeature(selectedFeature.value)
}

</script>

<template>
  <section class="FeatureSelector fieldset">
    <h4 class="downscaled underscore">
      {{ label }}
    </h4>
    <cyan-select
      :value="selectedFeature"
      :label="label"
      :options="asOptions"
      @change="onFeatureSelect"
    />
    <cyan-select
      v-if="hasVariants"
      label="Variantti"
      :value="selectedVariant"
      :options="variansAsOptions"
      @change="onVariantSelect" 
    />
  </section>
</template>