<template>
    <a class="dash-hover" target="_blank" :href="props.href">
        <span v-if="props.icon" :style="`--icon:url('/src/assets/img/${props.icon}.svg')`" ref="iconRef"
            class="img-center icon"></span>
        <slot></slot>
    </a>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
let props = defineProps({
    icon: String,
    href: String,
});
</script>

<style scoped>
.dash-hover {
    --c: #3e3e3e;
    margin: 0 0.2rem;
}

.icon {
    --icon: url('');
    margin-right: 0.1rem;
    width: 1.5rem;
    height: 1.5rem;
}
</style>