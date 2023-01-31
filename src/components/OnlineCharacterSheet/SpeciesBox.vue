<script lang="ts" setup>
import { computed } from 'vue'
import { useCharacter } from '../../composables/useCharacter'
import { characterFeatures } from '../../composables/useCharacter/features'
import { marked } from 'marked'

const { selectedFeatures, species } = useCharacter()

const speciesFeatures = computed(() => {
  const s = characterFeatures[selectedFeatures.value.species as string]
  if (!s) return []
  return s.effects
})
</script>
<template>
  <cyan-card>
    <cyan-icon
      slot="avatar"
      noun="adventurer"
    />
    <h4 slot="title">
      {{ $t('stat.species') }}
    </h4>
    <h4>{{ $t('stat.'+species) }}</h4>
    <template
      v-for="feat, index in speciesFeatures"
      :key="index"
    >
      <p
        v-if="feat[0] === 'description'"
        class="TypeCaption"
        :innerHTML="marked(feat[1])"
      />
    </template>
  </cyan-card>
</template>