<template>
    <div class="blogLink hover-to-enhance">
        <a @click="handleClick">
            <span class="title">{{ props.title }}</span>
            <span class="time">{{ props.time }}</span>
        </a>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import useBlogStore from '../../store/useBlog.ts'
const router = useRouter();
const props = defineProps({
    link: String,
    title: String,
    time: String
});

const blogStore = useBlogStore();
function handleClick() {
    blogStore.$patch({
        blog: {
            title: props.title,
            time: props.time
        }
    })
    router.push('/blogs/' + props.link);
    // router.push({
    //     name: props.link,
    //     params: {
    //         title: props.title,
    //         time: props.time
    //     }
    // })
}
</script>

<style scoped lang="scss">
.blogLink {
    margin: 0.5rem 0 1rem;
    font-size: 1.3rem;

    .title {
        margin: 0 1rem 0 0;
    }

    .time {
        font-size: 1rem;
        opacity: 0.6;
    }
}
</style>../../store/useBlog.ts