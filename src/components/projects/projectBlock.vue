<template>
    <div id="projectBlock">
        <div class="classification"><span>{{ props.classification }}</span></div>
        <div class="project-grid">
            <project-intro v-for="project in props.projects" :link="project.link" :desc="project.desc"></project-intro>
        </div>
    </div>

</template>

<script lang="ts" setup>
import { projectInformation } from '@/types/index.ts'
let props = defineProps({
    classification: String,
    projects: Array<projectInformation>
});

</script>

<style scoped lang="scss">
#projectBlock {
    .classification {
        height: 2rem;
        position: relative;
        user-select: none;
        z-index: -1;

        span {
            max-width: 100vw;
            position: absolute;
            overflow-x: hidden;
            white-space: normal;
            left: -1rem;
            font-size: 5rem;
            font-weight: 800;
            color: transparent;
            -webkit-text-stroke: rgb(170 170 170 / 0.2);
            -webkit-text-stroke-width: 2px;
        }
    }

    .project-grid {
        display: grid;
        padding: 1.5rem;
        grid-template-columns: repeat(1, minmax(0, 1fr));
        gap: 1rem;

        @media (min-width: 768px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        @media (min-width: 1024px) {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
    }
}
</style>