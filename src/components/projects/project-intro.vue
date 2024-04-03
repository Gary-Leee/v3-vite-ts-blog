<template>
    <a class="project-intro dark-hover" :title="props.link" @click="handleClick">
        <div :class="`projectLogo img-center ${props.link}`"></div>
        <div>
            <div class="link">{{ props.link }}</div>
            <div class="desc">{{ props.desc }}</div>
        </div>
    </a>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
let router = useRouter();
let props = defineProps({
    link: String,
    desc: String
})

function handleClick(e: any) {
    router.push('/projects/' + props.link);
}
</script>

<style scoped lang="scss">
.project-intro {
    display: flex;
    padding: 0.5rem;
    align-items: center;
    user-select: none;

    &:hover {
        transition: background-color 0.3s;
        background-color: rgba(79, 79, 79, 0.1);
    }

    .projectLogo {
        margin: 0.5rem;
        width: 2rem;
        height: 2rem;

        &.myLogo {
            --icon: url('@/assets/img/projectImg/myLogo.svg');
        }
    }

    .link {
        font-size: 1.5rem;
    }

    .desc {
        font-size: .8rem;
        opacity: .7;
    }
}
</style>