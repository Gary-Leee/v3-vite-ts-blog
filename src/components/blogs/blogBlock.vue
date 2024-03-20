<template>
    <div class="year"><span>{{ props.year }}</span></div>
    <blog-link v-for="blog in props.blogs" :link="blog.link">
        <span class="title">{{ blog.title }}</span>
        <span class="time">{{ blog.time }}</span>
    </blog-link>
</template>

<script lang="ts" setup>
import { blogInformation } from '@/types/index'
let props = defineProps({
    year: String,
    blogs: {
        type: Array<blogInformation>
    }
});
</script>

<style scoped lang="scss">
.year {
    height: 6rem;
    position: relative;
    user-select: none;
    z-index: -1;

    span {
        position: absolute;
        left: -3rem;
        font-size: 8rem;
        font-weight: 800;
        color: transparent;
        -webkit-text-stroke: rgb(170 170 170 / 0.1);
        -webkit-text-stroke-width: 2px;
    }
}

.title {
    margin: 0 1rem 0 0;
}

.time {
    font-size: 1rem;
    opacity: 0.6;
}
</style>