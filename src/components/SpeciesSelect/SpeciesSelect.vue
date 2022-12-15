<script lang="ts" setup>
import { CyanSelect } from '@11thdeg/cyan'
import { computed } from 'vue'

const props = defineProps<{
  modelValue: string
}>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const noVariantLabel = '- Ei variaatiota -'

const speciesOptions = [
  { value: '-', label: '- Valitse -'},
  { value: 'elf', label: 'Haltia' },
  { value: 'human', label: 'Ihminen' },
  { value: 'dwarf', label: 'Kääpiö' },
  { value: 'dragonborn', label: 'Louhelainen' },
  { value: 'gnome', label: 'Maahinen' },
  { value: 'halfling', label: 'Puolituinen'},
  { value: 'tiefling', label: 'Vaihdokas'},
  { value: 'orc', label: 'Örkki'}
]
const elfVariantsOptios = [
  { value: '', label: noVariantLabel},
  { value: 'dark', label: 'Alishaltia' },
  { value: 'high', label: 'Jalohaltia'},
  { value: 'wood', label: 'Metsähaltia' }
]
const dwarfVariantsOptions = [
  { value: '', label: noVariantLabel},
  { value: 'stone', label: 'Kivikääpiö' },
  { value: 'hill', label: 'Mäkikääpiö' }
]
const gnomeVariantsOptions = [
  { value: '', label: noVariantLabel},
  { value: 'forest', label: 'Salomaahinen' },
  { value: 'tinkerer', label: 'Nikkarimaahinen' }
]
const halflingVariantsOptions = [
  { value: '', label: noVariantLabel},
  { value: 'lightfoot', label: 'Nopsajalka' },
  { value: 'stout', label: 'Sisupussi' }
]
const tieflingVariantsOptions = [
  { value: '', label: noVariantLabel },
  { value: 'demon', label: 'Demonien perillinen' },
  { value: 'devil', label: 'Hornan perillinen' }
]

const variantOptions = computed(() => {
  switch (primarySpecies.value) {
  case 'elf':
    return elfVariantsOptios
  case 'dwarf':
    return dwarfVariantsOptions
  case 'gnome':
    return gnomeVariantsOptions
  case 'halfling':
    return halflingVariantsOptions
  case 'tiefling':
    return tieflingVariantsOptions
  default:
    return []
  }
})

const primarySpecies = computed({
  get: () => props.modelValue.split('.')[0],
  set: (s: string) => emit('update:modelValue', s)
})
const variantSpecies = computed({
  get: () => props.modelValue.split('.').length > 1 ? props.modelValue.split('.')[1] : '',
  set: (s: string) => emit('update:modelValue', `${primarySpecies.value}.${s}`)
})
const hasSubspecies = computed(() =>
  primarySpecies.value === 'elf' ||
  primarySpecies.value === 'dwarf' ||
  primarySpecies.value === 'gnome' ||
  primarySpecies.value === 'halfling' ||
  primarySpecies.value === 'tiefling')

function speciesChange(e: Event) {
  const target = e.target as CyanSelect
  const value = target.value
  primarySpecies.value = value
}
function variantSpeciesChange(e: Event) {
  const target = e.target as CyanSelect
  const value = target.value
  variantSpecies.value = value
}

</script>

<template>
  <section class="fieldset">
    <h4 class="downscaled underscore">
      Laji
    </h4>
    <cyan-select
      :value="primarySpecies"
      :options="speciesOptions"
      label="Laji"
      @change="speciesChange"
    />
    <cyan-select
      v-if="hasSubspecies"
      :value="variantSpecies"
      :options="variantOptions"
      label="Variaatio"
      @change="variantSpeciesChange"
    />
  </section>
</template>