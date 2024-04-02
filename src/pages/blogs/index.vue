<template>
    <div class="content-center">
        <h1>Blogs</h1>
        <blog-block year="2024" :blogs="blogs2024"></blog-block>
        <blog-block year="2023" :blogs="blogs2023"></blog-block>
    </div>
</template>

<script lang="ts" setup>
import { blogInformation } from '@/types/index.ts'
let blogs2024: blogInformation[] = [
    { title: 'Vite build的结构优化', link: 'viteBuild', time: 'Mar 20' },
];
let blogs2023: blogInformation[] = [
    { title: '设计一个SVG动画的logo', link: 'svgLog', time: 'Nov 25' },
];
</script>

<style scoped></style>