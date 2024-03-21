<template>
    <div class="year"><span>{{ props.year }}</span></div>
    <blog-link v-for="blog in props.blogs" :link="blog.link" :title="blog.title" :time="blog.time">

    </blog-link>
</template>

<script lang="ts" setup>
import { blogInformation } from '@/types/index'
import useBlogStore from '../../store/blog.ts'
const blogStore = useBlogStore();

let props = defineProps({
    year: String,
    blogs: {
        type: Array<blogInformation>
    }
});
blogStore.$patch({
    blog: {
        year: props.year,
    }
})
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
</style>