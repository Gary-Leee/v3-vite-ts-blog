<template>
  <h1 class="content-center">Gary-Leee</h1>
  <article class="content-center nav-content ">
    <p>嗨, 我是 Gary-Leee, 一个前端开发工程师</p>
    <p>我的个人主页是使用 <icon-link src="https://cn.vuejs.org/">Vue3</icon-link> +
      <icon-link src="https://cn.vuejs.org/">Vite</icon-link> 实现的,
      如果你想看React版本, 点击 <icon-link icon="react">这里</icon-link>,
      如果你想看源码点击<icon-link icon="Github-icon" src="https://github.com/Gary-Leee/v3-vite-ts-blog"></icon-link> 或者
      <icon-link icon="Gitee-icon" src="https://gitee.com/gary-leee/v3-blog"></icon-link>
    </p>
    <p ref="iconRef">我在这</p>
    <p class="find-list">
      <icon-link src="https://github.com/Gary-Leee" icon="Github-icon">GitHub</icon-link>
      <icon-link icon="Emial-icon">邮箱</icon-link>
      <icon-link src="https://gitee.com/gary-leee" icon="Gitee-icon">码云</icon-link>
    </p>
    <p style="opacity: 0.5;">2024-PRESENT @ Gary-Leee</p>
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
  margin: 1.5rem 0;
}

p:first-child {
  margin: 0 0 1.25rem 0;
}
</style>
