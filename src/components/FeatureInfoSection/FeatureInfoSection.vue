<script lang="ts" setup>
import { computed } from 'vue'
import { characterFeatures } from '../../composables/useCharacter/features'

const props = defineProps<{
  featureKey: string
}>()

const feature = computed(() => {
  return characterFeatures[props.featureKey] || 'erroneus feature'
})

</script>

<template>
  <section>
    <ul class="TypeBody2">
      <li
        v-for="eq in feature.effects"
        :key="eq[1]"
        class="TypeBody2"
      >
        {{ eq[0] }}: {{ eq[1] }}
      </li>
    </ul>
  </section>
</template>