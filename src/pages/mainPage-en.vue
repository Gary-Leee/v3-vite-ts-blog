<template>
  <div class="content-center">
    <h1>Gary-Leee</h1>
  </div>
  <article class="content-center nav-content">
    <p>Hey, I am Gary-Leee, a Front-end development engineer.</p>
    <p>This personal homepage is built by <icon-link href="https://cn.vuejs.org/">Vue3</icon-link> and
      <icon-link href="https://cn.vitejs.dev/">Vite</icon-link>,
      if you want to see the React version, click <icon-link icon="react">here</icon-link>,
      if you want to see the code click <icon-link icon="Github-icon"
        href="https://github.com/Gary-Leee/v3-vite-ts-blog"></icon-link> or <icon-link icon="Gitee-icon"
        href="https://gitee.com/gary-leee/v3-blog"></icon-link>
    </p>
    <p ref="iconRef">Find me on</p>
    <p class="find-list">
      <icon-link href="https://github.com/Gary-Leee" icon="Github-icon">GitHub</icon-link>
      <icon-link icon="Emial-icon">Emial</icon-link>
      <icon-link href="https://gitee.com/gary-leee" icon="Gitee-icon">Gitee</icon-link>
    </p>
    <p style="opacity: 0.5;">2024-PRESENT @ Gary-Leee</p>
  </article>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.nav-content {
  padding: 2rem 0;
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
  margin: 1.5rem 0;
}

p:first-child {
  margin: 0 0 1.25rem 0;
}
</style>
