<script lang="ts" setup>
import { version } from '../../../package.json'
</script>

<template>
  <article class="small Column">
    <cyan-card>
        <section class="flex" style="justify-content: center; margin-bottom: var(--cn-page-grid)">
        <cyan-icon
          noun="fox"
          large
        />
        <cyan-icon
          noun="d20"
          small
        />
        <cyan-icon
          noun="ll"
          large
        />
      </section>
      <h4
        class="downscaled"
        style="text-align: center; margin-bottom: var(--cn-page-grid)"
      >
        Pelilauta / Hahmokone
      </h4>
      <section class="dataTable">
        <p class="TypeBody2">
          Julkaisu
        </p>
        <p class="TypeBody2">
          {{ version }}
        </p>
      </section>
    </cyan-card>
  </article>
</template>