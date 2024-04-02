<template>
    <a class="project-intro dark-hover" :title="props.link">
        <div class="logo">myLogo</div>
        <div>
            <div class="link">{{ props.link }}</div>
            <div class="desc">{{ props.desc }}</div>
        </div>
    </a>
</template>

<script lang="ts" setup>
let props = defineProps({
    link: String,
    desc: String
})
</script>

<style scoped lang="scss">
.project-intro {
    display: flex;
    padding: 0.5rem;

    &:hover {
        transition: background-color 0.3s;
        background-color: rgba(79, 79, 79, 0.1);
    }

    .logo {
        margin: 0.5rem;
    }

    .link {
        font-size: 1.5rem;
    }

    .desc {
        opacity: .7;
    }
}
</style>