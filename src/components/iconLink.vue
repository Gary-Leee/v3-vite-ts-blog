<template>
    <a class="dash-hover" target="_blank" :href="props.href">
        <span v-if="props.icon" ref="iconRef" :class="`img-center icon ${props.icon}`"></span>
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

<style scoped lang="scss">
.dash-hover {
    --c: #3e3e3e;
    margin: 0 0.2rem;
}

.icon {
    --icon: url('');
    margin-right: 0.1rem;
    width: 1.5rem;
    height: 1.5rem;

    &.Github-icon{
        --icon: url('../assets/img/Github-icon.svg');
    }
    &.Emial-icon{
        --icon: url('../assets/img/Emial-icon.svg');
    }
    &.Gitee-icon{
        --icon: url('../assets/img/Gitee-icon.svg');
    }
    &.react{
        --icon: url('../assets/img/react.svg');
    }
    &.vue{
        --icon: url('../assets/img/vue.svg');
    }
}
</style>