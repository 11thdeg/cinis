<script lang="ts" setup>
import { useCharacter } from '../../composables/useCharacter'

const { species, background, professions, languages, description } = useCharacter()

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
          {{ background }}
        </p>
        <p class="TypeBody2">
          <strong>Osaamiset:</strong>
        </p>
        <p class="TypeBody2">
          {{ professions }}
        </p>
        <p class="TypeBody2">
          <strong>Kielet:</strong>
        </p>
        <p class="TypeBody2">
          {{ languages }}
        </p>
        <p class="TypeBody2">
          <strong>Kuvaus:</strong>
        </p>
        <p class="TypeBody2">
          {{ description }}
        </p>
      </section>
    </cyan-card>
  </article>
</template>