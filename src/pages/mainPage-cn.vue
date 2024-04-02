<template>
  <div class="content-center" :onmouseenter="onmouseEnter">
    <h1>{{ myName }}</h1>
  </div>
  <article class="content-center nav-content ">
    <p>嗨, 我是 Gary-Leee, 一个前端开发工程师</p>
    <p>我的个人主页是使用 <icon-link href="https://cn.vuejs.org/">Vue3</icon-link> +
      <icon-link href="https://cn.vitejs.dev/">Vite</icon-link> 实现的,
      如果你想看React版本（开发中）, 点击 <icon-link icon="react">这里</icon-link>,
      如果你想看源码点击<icon-link icon="Github-icon" href="https://github.com/Gary-Leee/v3-vite-ts-blog"></icon-link> 或者
      <icon-link icon="Gitee-icon" href="https://gitee.com/gary-leee/v3-blog"></icon-link>
    </p>
    <p ref="iconRef">我在这</p>
    <p class="find-list">
      <icon-link href="https://github.com/Gary-Leee" icon="Github-icon">GitHub</icon-link>
      <icon-link icon="Emial-icon">邮箱</icon-link>
      <icon-link href="https://gitee.com/gary-leee" icon="Gitee-icon">码云</icon-link>
    </p>
    <p>2024-PRESENT @ Gary-Leee</p>
  </article>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

let myName = ref('Gary-Leee');
function onmouseEnter() {
  // myName.value.style.transition = 'none';
  myName.value = myName.value == 'Gary-Leee' ? 'LYG' : 'Gary-Leee';
}
function onmouseleave() {
  myName.value = 'Gary-Leee'
}
onMounted(() => {
  // console.dir(myName.value.innerText);
});

</script>

<style scoped lang="scss">
.nav-content {
  padding: 2rem 0;
}

// h1 {
//   font-size: 2.25rem;
//   line-height: 1.1;
// }

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
