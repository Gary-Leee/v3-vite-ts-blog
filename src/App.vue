<template>
  <my-header></my-header>
  <main>
    <router-view></router-view>
  </main>
</template>

<script setup lang="ts">
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
</style>./pages/mainPage.vue
