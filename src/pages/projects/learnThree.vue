<template>
    <p-frame>
        <template #content>
            <div ref="threeScreen" class="threeScreen"></div>
        </template>
    </p-frame>

</template>

<script lang="ts" setup>
import * as THREE from 'three';
import { onMounted, ref } from 'vue';

const threeScreen = ref();
onMounted(() => {
    console.log();
    const scene = new THREE.Scene();
    //透视摄像机
    const camera = new THREE.PerspectiveCamera(50, threeScreen.value.clientWidth / threeScreen.value.clientHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(threeScreen.value.clientWidth, threeScreen.value.clientHeight);
    console.dir(threeScreen.value)
    // renderer.setSize(window.innerWidth, window.innerHeight);
    // document.body.appendChild(renderer.domElement);
    threeScreen.value.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;
    //渲染出来
    function animate() {
        requestAnimationFrame(animate);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render(scene, camera);
    }

    animate();
})


</script>

<style scoped>
.threeScreen {
    width: 100%;
    height: 100%;
}
</style>