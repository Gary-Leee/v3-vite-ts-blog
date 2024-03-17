<template>
    <div v-for="item in arr">{{ item }}</div>
</template>

<script lang="ts" setup>
const arr: object[] = [{ 'hello': 1 }];
</script>

<style scoped></style>