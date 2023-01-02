<script lang="ts" setup>
import { useCharacter } from '../../composables/useCharacter'

const { species, background, professions, languages, description, size, equipment } = useCharacter()

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
          <strong><cyan-code>size</cyan-code></strong>
        </p>
        <p class="TypeBody2">
          {{ size }}
        </p>
        <p class="TypeBody2">
          <strong><cyan-code>description</cyan-code></strong>
        </p>
        <p class="TypeBody2">
          {{ description }}
        </p>
        <p class="TypeBody2">
          <strong><cyan-code>equipment</cyan-code></strong>
        </p>
        <p class="TypeBody2">
          {{ equipment }}
        </p>
      </section>
    </cyan-card>
  </article>
</template>