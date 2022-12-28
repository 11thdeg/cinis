<script lang="ts" setup>
import { toRefs } from 'vue'

const props = defineProps<{
  label: string
  value: string
}>()

const { label, value } = toRefs(props)
</script>

<template>
  <section class="StatBox">
    <h4 class="downscaled">
      {{ label }}
    </h4>
    <p>{{ value }}</p>
  </section>
</template>