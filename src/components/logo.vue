<template>
    <a class="home" title="@Gary-leee" href="/" @click="gohome">
        <!-- <div class="logo"> -->
        <svg class="logo" viewBox="0 0 847 462" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="logo"
                d="M99.2065 3C24.0764 302.842 -12.5 400 23.5 443C59.5001 486 293.913 374.5 305.206 304C316.5 233.5 208.679 227.805 151.206 310C93.7339 392.195 226.706 470.5 315.5 449C404.294 427.5 497.706 361 514.5 316C531.294 271 428.206 216 375.206 316C322.206 416 487.5 458 549.5 443C611.5 428 705.5 366 728.5 316C751.5 266 611.187 228.945 588.181 310.676C555.5 449 702.5 468.109 770.5 430.109C838.5 392.109 837.526 342.432 837.526 342.432"
                stroke="#3E3E3E" stroke-width="25" />
        </svg>
        <!-- </div> -->
    </a>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { onMounted, onBeforeUnmount } from 'vue';
const router = useRouter();
function gohome(event: MouseEvent) {
    event.preventDefault();
    router.push('/')
}
function animation() {
    let path = document.getElementById('logo') as unknown as SVGPathElement;
    if (path) {
        let length = path.getTotalLength();
        path.style.transition = 'none';
        path.style.strokeDasharray = length + ' ' + length;
        path.style.strokeDashoffset = '' + length;
        path.getBoundingClientRect();
        path.style.transition = 'stroke-dashoffset 2s ease-in-out';
        path.style.strokeDashoffset = '0';
        setTimeout(() => {
            path.style.strokeDashoffset = '0';
            path.style.transition = 'stroke-dashoffset 2s ease-in-out';
            path.style.strokeDashoffset = '' + length;
        }, 5000);
    }
}
let interval: number;
onMounted(() => {
    // animation();
    // interval = setInterval(() => {
    //     animation();
    // }, 10000)
})

onBeforeUnmount(() => {
    clearInterval(interval);
})


</script>

<style scoped>
.home {
    width: 4rem;
    height: 4rem;
    margin: 1rem;
    position: fixed;
    left: 0;
}

.logo {
    width: inherit;
    height: inherit;
}

@keyframes grow {
    0% {
        stroke-dashoffset: 1px;
        stroke-dasharray: 0 3000px;
        opacity: 0;
    }

    10% {
        opacity: 1;
    }

    40% {
        stroke-dasharray: 3000px 0;
    }

    /* Moving back */
    85% {
        stroke-dasharray: 3000px 0;
    }

    95%,
    to {
        stroke-dasharray: 0 3000px;
    }
}

path {
    stroke-dashoffset: 1px;
    stroke-dasharray: 3000px 0;
    animation: grow 8s ease forwards infinite;
    transform-origin: center;
    stroke: #303030;
    animation-delay: 0s;
}
</style>