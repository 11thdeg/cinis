<script lang="ts" setup>
import { useCharacter } from '../../composables/useCharacter'

const { species, profession } = useCharacter()

</script>
<template>
  <article class="small Column">
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
      <section class="dataTable">
        <p class="TypeBody2">
          <strong>Laji:</strong>
        </p>
        <p class="TypeBody2">
          {{ species }}
        </p>
        <p class="TypeBody2">
          <strong>Ammatti:</strong>
        </p>
        <p class="TypeBody2">
          {{ profession }}
        </p>
      </section>
    </cyan-card>
  </article>
</template>