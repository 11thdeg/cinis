<script lang="ts" setup>
import { CyanSelect } from '@11thdeg/cyan'
import { useCharacter } from '../../composables/useCharacter'

const props = defineProps<{
  modelValue: string
}>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const { professions, addFeature, removeFeature } = useCharacter()

const professionOptions = [
  { value: '-', label: '- Valitse -'},
  { value: 'scavenger', label: 'Aarteenetsijä' },
  { value: 'acolyte', label: 'Akolyytti' },
  { value: 'alchemist', label: 'Alkemisti' },
  { value: 'aristocrat', label: 'Aristokraatti' },
  { value: 'soothsayer', label: 'Ennustaja' },
  { value: 'artisan', label: 'Käsityöläinen'},
  { value: 'vagabond', label: 'Kulkuri'},
  { value: 'peasant', label: 'Maanviljelijä'},
  { value: 'sailor', label: 'Merenkulkija'},
  { value: 'hermit', label: 'Metsäläinen'},
  { value: 'tinkerer', label: 'Nikkari'},
  { value: 'scholar', label: 'Oppinut'},
  { value: 'criminal', label: 'Rikollinen'},
  { value: 'soldier', label: 'Sotilas'}
]

function handleProfessionChange(e: Event) {
  const value = (e.target as CyanSelect).value

  removeFeature(props.modelValue)
  addFeature(value)

  if (!value || value === props.modelValue) return
  emit('update:modelValue', value)
}
</script>

<template>
  <section
    class="fieldset"
    style="margin-top: var(--cn-page-grid)"
  >
    <h4 class="downscaled underscore">
      Tausta
    </h4>
    <cyan-select
      label="Tausta"
      :value="modelValue"
      :options="professionOptions"
      @change="handleProfessionChange"
    />
    <p v-if="professions.length > 0">
      <strong>Taidot: </strong>
      <span
        v-for="p in professions"
        :key="p"
        class="addCommaBetween"
      >{{ p }}</span>
    </p>
  </section>
</template>

<style scoped>
.addCommaBetween + .addCommaBetween:before {
  content: ', ';
}
</style>