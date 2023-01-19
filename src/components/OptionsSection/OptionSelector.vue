<script lang="ts" setup>
import { CyanSelect } from '@11thdeg/cyan'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useCharacter } from '../../composables/useCharacter'
import { speciesOptions } from '../../composables/useCharacter/species'

const props = defineProps<{
  option: string
}>()

const { t } = useI18n()

const { addOptionalFeature } = useCharacter()
const featureOptions = computed(() => {
  const ops = speciesOptions[props.option]
  return ops?.values.map((val) => {
    return {
      value: val,
      label: t('stat.' + val)
    }
  })
})

function handleSelect(event: Event) {
  const target = event.target as CyanSelect
  const { value } = target
  addOptionalFeature(value)
}
</script>

<template>
  <section>
    <h4 class="downscaled underscore">
      {{ $t('option.' + option) }}
    </h4>
    <cyan-select
      :options="featureOptions"
      @change="handleSelect"
    />
  </section>
</template>