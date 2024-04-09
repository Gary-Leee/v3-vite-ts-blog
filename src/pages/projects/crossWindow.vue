<template>
  <h3>尝试打开多个本网页并拖动方块到其他网页</h3>
  <div ref="card" class="card" @dblclick="changeBgColor"></div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { randomColor, changeBgColor } from '@/utils/pubFunctions';
let color = randomColor();
const card = ref();

const barHight = () => window.outerHeight - window.innerHeight;

const clientToScreen = (x: number, y: number) => {
  const screenX = x + window.screenX;
  const screenY = y + window.screenY + barHight();
  return [screenX, screenY];
};

const screenToClient = (x: number, y: number) => {
  const clientX = x - window.screenX;
  const clientY = y - window.screenY - barHight();
  return [clientX, clientY];
};

const channel = new BroadcastChannel('crossWindow');

channel.onmessage = (e) => {
  console.log(e.data);
  const [x, y] = e.data;
  const [cx, cy] = screenToClient(x, y);
  card.value.style.left = cx + 'px';
  card.value.style.top = cy + 'px';
};

onMounted(() => {
  card.value.style.backgroundColor = color;

  const handleMouseDown = (e: MouseEvent) => {
    const x = e.pageX - card.value.offsetLeft;
    const y = e.pageY - card.value.offsetTop;

    const handleMouseMove = (e2: MouseEvent) => {
      const cx = e2.pageX - x;
      const cy = e2.pageY - y;
      card.value.style.left = cx + 'px';
      card.value.style.top = cy + 'px';
      const potint = clientToScreen(cx, cy);
      channel.postMessage(potint);
    };

    const handleMouseUp = () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  card.value.addEventListener('mousedown', handleMouseDown);
});
</script>

<style scoped>
.card {
  cursor: move;
  user-select: none;
  position: absolute;
  width: 200px;
  height: 200px;
  border: 1px solid;
}
</style>
