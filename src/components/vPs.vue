<template>
    <blockquote>
        <p>
            <slot></slot>
        </p>
    </blockquote>
</template>

<script lang="ts" setup>
</script>

<style scoped lang="scss">
blockquote {
    margin-left: -1rem;
    padding: 0.5rem 1rem;
    border-left: 5px solid;
    border-left-color: var(--c);
    opacity: .7;

    p {
        margin: 0;
    }
}
</style>