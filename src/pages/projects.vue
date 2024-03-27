<template>
    <div class="content-center contain">
        <span v-for="project in projects"></span>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

let projects = reactive([]);
</script>

<style scoped>
.contain {
    background-color: lightblue;
}
</style>