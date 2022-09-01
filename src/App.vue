<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
/**
  *
  * Import google fonts
  *
*/
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap");

/**
  *
  * Normalize from Tailwind
  * https://unpkg.com/tailwindcss@1.1.4/dist/base.css
  *
  */
@import "@/assets/sass/base/_normalize.scss";

/**
  *
  * Base
  *
  */
@import "@/assets/sass/base/_container.scss";
@import "@/assets/sass/base/_fonts.scss";

/**
  *
  * Project
  *
  */
@import "@/assets/sass/project/_buttons.scss";
@import "@/assets/sass/project/_form.scss";

#app,
html,
body {
  // font-family: $font-sans;
  font-family: "Josefin Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: $light-grayish-blue;
  background-color: $very-dark-blue;
  height: 100vh;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $gray-500;

    &.router-link-exact-active {
      color: $green-500;
    }
  }
}
</style>
