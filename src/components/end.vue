<template>
    <icon-link @click="handleCd">> cd ..</icon-link>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
const props = defineProps({
    link: String
});
const router = useRouter();
function handleCd() {
    router.push('/' + props.link);
    // router.replace('/')
}
</script>

<style scoped></style>