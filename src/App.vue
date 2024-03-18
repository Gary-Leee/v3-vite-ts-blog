<template>
  <my-header></my-header>
  <main>
    <router-view></router-view>
  </main>
</template>

<script setup lang="ts">
let html = document.getElementsByTagName('html')[0];
let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

darkModeMediaQuery.addListener(e => {
  if (e.matches) {
    html.className = 'dark';
  } else {
    html.className = 'light';
  }
});
</script>

<style scoped lang="scss">
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;

  &.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
}

main {
  padding: 2rem 0;
}
</style>./pages/mainPage.vue
