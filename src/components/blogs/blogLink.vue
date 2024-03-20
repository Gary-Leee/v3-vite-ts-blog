<template>
    <div class="blogLink">
        <a @click="handleClick">
            <slot></slot>
        </a>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
let props = defineProps({
    link: String
});
function handleClick() {
    router.push('/blogs/' + props.link)
}
</script>

<style scoped lang="scss">
.blogLink {
    margin: 0.5rem 0 1rem;
    font-size: 1.3rem;
}
</style>