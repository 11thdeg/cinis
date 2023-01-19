<template>
  <cyan-navigation-rail>
    <router-link to="/">
      <cyan-navigation-button
        noun="page-edit"
        :active="$route.path === '/'"
      />
    </router-link>
    <router-link to="/sheet">
      <cyan-navigation-button
        noun="page-character-sheet"
        :active="$route.path === '/sheet'"
      />
    </router-link>
    <cyan-navigation-button
      disabled
      noun="pdf"
    />
    <cyan-spacer />
    <a href="https://pelilauta.web.app">
      <cyan-navigation-button
        noun="fox"
        label="Pelilauta"
      />
    </a>
  </cyan-navigation-rail>
</template>