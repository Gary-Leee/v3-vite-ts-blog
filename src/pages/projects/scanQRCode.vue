<template>
  <p-frame>
    <template #content>
      <canvas id="qrCodeCanvas"></canvas>
    </template>
  </p-frame>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';

onMounted(() => {
  // 创建 Canvas 元素
  var canvas = document.getElementById('qrCodeCanvas') as HTMLCanvasElement;
  var ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

  // 生成二维码的内容
  var qrCodeData = 'https://example.com'; // 替换为你的二维码内容

  // 设置二维码尺寸
  var size = 200;
  var margin = 20;

  // 计算每个点的尺寸
  var cellSize = (size - 2 * margin) / 21;

  // 绘制二维码
  for (var row = 0; row < 21; row++) {
    for (var col = 0; col < 21; col++) {
      if (qrCodeData.charAt(row * 21 + col) === '1') {
        ctx.fillStyle = 'black';
      } else {
        ctx.fillStyle = 'white';
      }
      ctx.fillRect(col * cellSize + margin, row * cellSize + margin, cellSize, cellSize);
    }
  }
});
</script>

<style scoped lang="scss"></style>
