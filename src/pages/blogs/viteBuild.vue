<template>
    <div class="content-center">
        <div class="blog-title">
            <h1>Vite build的结构优化</h1>
            <p>Mar 20, 2024</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { onMounted, Directive } from 'vue';
import Prism from 'prismjs'


function gohome(event: MouseEvent) {
    event.preventDefault();
    router.replace('/')
}
const router = useRouter();
onMounted(() => {
    Prism.highlightAll();
})
</script>

<style scoped lang="scss">
.blog-title {
    margin-bottom: 2rem;

    p {
        opacity: 0.7;
    }
}

.logo {
    width: 8rem;
    height: 8rem;
    position: relative;
}
</style>