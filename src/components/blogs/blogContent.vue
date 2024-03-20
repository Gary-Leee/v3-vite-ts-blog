<template>
    <div class="content-center">
        <div class="blog-title">
            <h1>{{ props.title }}</h1>
            <p>{{ props.time }},{{ props.year }}</p>
        </div>

        <slot></slot>
    </div>

</template>

<script lang="ts" setup>
const props = defineProps({
    title: String,
    time: String,
    year: String,
});
</script>

<style scoped lang="scss">
.blog-title {
    margin-bottom: 2rem;
    p {
        opacity: 0.7;
    }
}
</style>