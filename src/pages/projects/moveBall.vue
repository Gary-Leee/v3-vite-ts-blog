<template>
    <p-frame>
        <template #content>
            <div ref="bgblock" class="bg" @click="move">
                <div>
                    <div ref="ball" class="ball"></div>
                </div>
            </div>
        </template>
        <template #desc>尝试点击一下区域内部</template>
    </p-frame>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
let bgblock = ref<HTMLElement>();
let ball = ref<HTMLElement>();
let rect: any;
let ballW: number;
let ballH: number;
onMounted(() => {
    if (ball.value && bgblock.value) {
        rect = ball.value.getBoundingClientRect();
        ballW = Number(rect.width);
        ballH = Number(rect.height);
        ball.value.style.transform = `translate(${bgblock.value.offsetWidth / 2 - ballW / 2}px,${bgblock.value.offsetHeight / 2 - ballH / 2}px)`
    };
})

function ballMove(x: string, y: string) {
    if (ball.value && bgblock.value) {
        const rectBall = ball.value.getBoundingClientRect();
        const rectBlock = bgblock.value.getBoundingClientRect();

        // console.log(rectBall);
        const ballX = rectBall.left - rectBlock.left;
        // const ballX = rectBall.left;
        const ballY = rectBall.top - rectBlock.top;
        console.dir(`球当前x:${ballX} 球当前y:${ballY}`);
        ball.value.getAnimations().forEach((animation) => {
            animation.cancel()
        });
        //元素左上角点的定位 鼠标点-元素宽高 中心定位鼠标点
        console.log(`球目标x:${x},球目标Y:${y}`);
        const rad = Math.atan2(Number(y) - Number(ballY), Number(x) - Number(ballX));


        const deg = (rad * 180) / Math.PI;

        ball.value.animate(
            [
                { transform: `translate(${ballX}px , ${ballY}px)` },
                // { transform: `translate(0px , 0px)` },
                // { transform: `translate(${x}px , ${y}px) scaleX(1.5)`, offset: 0.8 },
                // { transform: `translate(${x}px , ${y}px)  rotate(${deg}deg)` }
                { transform: `translate(${x}px , ${y}px)` }
            ],
            {
                duration: 1000,
                fill: 'forwards'
            }
        )
    }

}

function move(e: MouseEvent) {
    const pointer: HTMLElement = document.createElement('div');
    pointer.classList.add('pointer');
    //鼠标点击的位置（相对于window）    
    pointer.style.left = `${e.clientX}px`;
    pointer.style.top = `${e.clientY}px`;
    document.body.appendChild(pointer)
    let x = e.offsetX;
    let y = e.offsetY;

    pointer.addEventListener('animationend', () => {
        pointer.remove();
    })
    // ballMove(`${x - (ballW / 2)}`, `${y - (ballH / 2)}`);
    ballMove(`${x}`, `${y}`);

}
</script>

<style scoped lang="scss">
.bg {
    width: 100%;
    height: 100%;
    position: relative;

    .ball {
        position: absolute;
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        background-color: var(--c);
    }
}
</style>