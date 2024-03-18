<template>
  <h1 class="content-center">Gary-Leee</h1>
  <article class="content-center nav-content ">
    <p>Hey, I am Gary-Leee, a Front-end development engineer.</p>
    <p ref="iconRef">Find me on</p>
    <p class="find-list">
      <icon-link src="https://github.com/Gary-Leee" icon="Github-icon" inner="GitHub"></icon-link>
      <icon-link icon="Emial-icon" inner="Emial"></icon-link>
      <icon-link icon="Gitee-icon" inner="Gitee"></icon-link>
    </p>
  </article>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.nav-content {
  padding: 2rem;
}

h1 {
  font-size: 2.25rem;
  line-height: 1.1;
}

.find-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

p {
  --c: opacity:0.5;
  margin: 1.5rem 0;
}

p:first-child {
  margin: 0 0 1.25rem 0;
}
</style>
