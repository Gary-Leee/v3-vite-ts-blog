<template>
  <a class="sign-logo" title="@Gary-leee" href="/" @click="gohome">
    <svg class="logo" viewBox="0 0 847 462" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        id="logo"
        d="M99.2065 3C24.0764 302.842 -12.5 400 23.5 443C59.5001 486 293.913 374.5 305.206 304C316.5 233.5 208.679 227.805 151.206 310C93.7339 392.195 226.706 470.5 315.5 449C404.294 427.5 497.706 361 514.5 316C531.294 271 428.206 216 375.206 316C322.206 416 487.5 458 549.5 443C611.5 428 705.5 366 728.5 316C751.5 266 611.187 228.945 588.181 310.676C555.5 449 702.5 468.109 770.5 430.109C838.5 392.109 837.526 342.432 837.526 342.432"
        stroke="#3E3E3E"
        stroke-width="25"
      />
    </svg>
  </a>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
const router = useRouter();
function gohome(event: MouseEvent) {
  event.preventDefault();
  router.push('/');
}
</script>

<style scoped lang="scss">

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
  75% {
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
  animation: grow 9s ease forwards infinite;
  transform-origin: center;
  stroke: var(--c-title);
  animation-delay: 0s;
}
</style>
