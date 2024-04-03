<template>
    <div class="showZone">
        <slot name="content"></slot>
    </div>
    <p class="desc">
        <slot name="desc"></slot>
    </p>
    <end link="projects"></end>
</template>

<script lang="ts" setup>
// let props = defineProps({
//     cb: Function
// })
// props.cb();
</script>

<style scoped lang="scss">
.showZone {
    color: var(--c);
    margin: auto;
    width: 35rem;
    height: 35rem;
    border: 1px solid;

    @media (max-width:1024px) {
        width: 25rem;
        height: 25rem;
    }

    @media (max-width:768px) {
        width: 15rem;
        height: 15rem;
    }

}

.desc {
    width: 90%;
    margin: auto;
    text-align: center;
}
</style>