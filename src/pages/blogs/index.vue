<template>
    <div v-if="ismain" class="content-center">
        <h1>Blogs</h1>
        <blog-block year="2024" :blogs="blogs2024"></blog-block>
        <blog-block year="2023" :blogs="blogs2023"></blog-block>
    </div>
    <router-view v-else></router-view>
</template>

<script lang="ts" setup>
import { blogInformation } from '@/types/index.ts'
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
let blogs2024: blogInformation[] = [
    { title: '这是我第二篇blog！', link: 'firstBlog', time: 'Mar 2' },
    { title: '我的2024', link: '' },
    { title: '我的2024', link: '', time: 'Mar 18' },
];
let blogs2023: blogInformation[] = [
    { title: '设计一个SVG动画的logo', link: 'svgLog', time: 'Nov 25' },
];
const router = useRouter();
let ismain = ref(true);
watch(() => router.currentRoute.value.fullPath, (newV, oldV) => {
    let index = newV.endsWith('blogs')
    if (index) ismain.value = true;
    else ismain.value = false
})
</script>

<style scoped></style>@/interface