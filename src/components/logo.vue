<template>
    <svg width="80" height="80" viewBox="0 0 774 479" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M93.2065 3C18.0764 302.842 -11.7936 378 24.2065 421C60.2065 464 274.206 345 299.206 304C324.206 263 202.679 227.805 145.206 310C87.7339 392.195 244.206 447 299.206 443C354.206 439 465.206 358 498.206 316C531.206 274 422.206 216 369.206 316C316.206 416 457.206 458 519.206 443C581.206 428 667.206 366 698.207 325C729.207 284 596.212 243.269 573.207 325C551.631 484.581 620.207 487 688.207 449C756.207 411 764.207 356 764.207 356"
            stroke="#3E3E3E" stroke-width="18" stroke-dasharray="" stroke-dashoffset="0.00" />
    </svg>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';

function animation() {
    let path: SVGPathElement = document.querySelector('path') as SVGPathElement;
    let length = path.getTotalLength();
    path.style.transition = 'none';
    // Set up the starting positions
    path.style.strokeDasharray = length + ' ' + length;
    // Clear any previous transition
    path.style.strokeDashoffset = '' + length;
    // Trigger a layout so styles are calculated & the browser
    // picks up the starting position before animating
    path.getBoundingClientRect();
    // Define our transition
    path.style.transition = 'stroke-dashoffset 2s ease-in-out';
    // Go!
    path.style.strokeDashoffset = '0';
    setTimeout(() => {
        path.style.strokeDashoffset = '0';
        path.style.transition = 'stroke-dashoffset 2s ease-in-out';
        // Go!
        path.style.strokeDashoffset = '' + length;
    }, 5000);

    // await animation();
}
onMounted(() => {
    // animation();
    setInterval(() => {
        animation();
    }, 10000)
})


</script>

<style scoped></style>