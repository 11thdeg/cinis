<script lang="ts" setup>
import { useCharacter } from '../../composables/useCharacter'

const { selectedFeatures } = useCharacter()

</script>
<template>
  <article class="Column">
    <cyan-card>
      <cyan-icon
        slot="avatar"
        noun="tools"
      />
      <h4 slot="title">
        debug
      </h4>
      <p class="TypeCaption">
        Tämä tieto ei tule näkymään käyttäjälle. Käyttäjälle luodaan hahmolomake näistä tiedoista.
      </p>

      <p><cyan-code>selectedFeatures</cyan-code></p>
      <p class="TypeBody2">
        {{ selectedFeatures }}
      </p>
    </cyan-card>
  </article>
</template>