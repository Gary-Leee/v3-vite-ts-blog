<template>
    <a class="dash-hover" target="_blank" :href="props.src" title="github">
        <span v-if="props.icon" ref="iconRef" class="img-center icon"></span> {{ props.inner }}
    </a>
</template>

<script lang="ts" setup>
import { defineProps, ref, onMounted } from 'vue';
let props = defineProps({
    icon: String,
    src: String,
    inner: String,
});
let iconRef = ref();
// console.log(props);
onMounted(() => {
    if (props.icon) {
        let dom = iconRef.value;
        dom.style.setProperty('--icon', `url('/src/assets/img/${props.icon}.svg')`);
        console.dir(dom);
    }
});



</script>

<style scoped>
.icon {
    --icon: url('');
    width: 1.5rem;
    height: 1.5rem;
}
</style>