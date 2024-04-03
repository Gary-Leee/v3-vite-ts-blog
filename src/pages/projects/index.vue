<template>
    <div class="content-center projects">
        <h1>Projects</h1>
        <project-block classification="Svg" :projects="SvgProjects"></project-block>
        <project-block classification="Canvas" :projects="CanvasProjects"></project-block>
        <project-block classification="Optimization" :projects="OptimizationProjects"></project-block>
    </div>
</template>

<script lang="ts" setup>
import { projectInformation } from '@/types/index.ts'
let SvgProjects: projectInformation[] = [
    { classification: 'Svg', link: 'myLogo', desc: '通过svg实现循环的logo' },
];
let CanvasProjects: projectInformation[] = [
    { classification: 'Canvas', link: 'viteBuild', desc: 'Mar 20' },
];
let OptimizationProjects: projectInformation[] = [
    { classification: 'OptimizationProjects', link: 'svgLog', desc: 'Nov 25' },
];
</script>

<style scoped lang="scss">
.projects {
    &.content-center {
        max-width: 60rem;
    }

    h1 {
        width: 100%;
        text-align: center;
    }
}
</style>