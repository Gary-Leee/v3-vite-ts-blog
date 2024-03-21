<template>
    <div class="content-center">
        <div class="blog-title">
            <h1>设计一个SVG动画的logo</h1>
            <p>Nov 25, 2023</p>
        </div>
        <p>最近我把左上角的logo换成了动画的SVG：</p>
        <p class="center">
            <a class="home" title="@Gary-leee" href="/" @click="gohome">
                <logo class="logo"></logo>
            </a>
        </p>
        <h2>灵感来源</h2>
        <p>第一次看到SVG笔触动画是看到<icon-link href="https://www.bilibili.com/">bilibli</icon-link>上有位up主，教学<icon-link
                href="https://www.bilibili.com/video/BV1RG4y1P7tq/?spm_id_from=333.880.my_history.page.click&vd_source=ae5f013b9aa1cd1f9c9d1aa1efe1f9f3">如何制作签名动画</icon-link>，没想到SVG动画这么cool，
            想着能不能自己做一个自己的logo&#128520
        </p>
        <h2>拆解步骤</h2>
        <p>首先我们先要获取一个SVG的签名，博主使用的是<icon-link href="https://www.adobe.com/cn/lead/creativecloud/business.html">Adobe
                illustrator</icon-link>，还要下载！对于一个懒人来说，这很不友好。我就选择了web版本的<icon-link
                href="https://www.figma.com/">Figma</icon-link>去绘制自己的logo</p>
        <p class="center"><img src="../../assets/img/blogImg/ptoroSign.png" alt="报错了，那别看了哈哈哈"></p>
        <h2>根据笔触绘画</h2>
        <p>根据博主的介绍，用<code>`stroke-dasharray`</code>属性实现。查阅<icon-link
                href="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray">MDN</icon-link>发现像是个无聊的属性。去搜了一下发现了几篇有趣的文章。
        <ul>
            <li><icon-link href="https://css-tricks.com/svg-line-animation-works/">How SVG Line Animation
                    Works</icon-link></li>
            <li><icon-link href="https://blog.csdn.net/huzhenv5/article/details/103745362">SVG学习之stroke-dasharray 和
                    stroke-dashoffset 详解</icon-link></li>
            <li><icon-link href="https://dev.to/mxglt/how-to-animate-svg-line-3ja2">How to animate SVG line</icon-link>
            </li>
        </ul>
        如果有时间，强烈建议阅读下这两篇文章，很好的介绍了这项技术。简述就是<code>`stroke-dashoffset`</code>就像一个遮罩。当遮罩从path的长度过渡到0的时候，也就是遮罩缩短，下面的字就显示出来了。一笔画的时候就把动画实现了。
        听着很美好，我们动手实现。
        </p>
        <h2>尝试实现</h2>
        <p>刚开始想控制签名能展开和收缩，显得高级一点，就想用js实现这个动画。废话少说，上代码</p>
        <pre><code class="language-js">function animation() {
    let path = document.querySelector('path') as SVGPathElement;
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
onMounted(() => {
    animation();
    setInterval(() => {
        animation();
    }, 10000)
})</code></pre>
        <p>使用js看似很好的实现了这个动画，but，当我们dev环境时，setInterval并不能完美的执行。
            在组件中使用<code>querySelector</code>实现这个动画在这个blog就不能复用。看来我们只能把希望放在css上实现，把压力分给GPU，这样也能适当的减少浏览器的eventLoop的压力
        </p>
        <h2>
            完美的方法
        </h2>
        <p>使用<code>animation</code>和<code>keyframes</code>直接实现往复运动</p>
        <pre><code class="language-css">@keyframes grow {
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
    /* go back */
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
    stroke: #3E3E3E;
    animation-delay: 0s;
}</code></pre>
        <p>这样我们就实现了动画组件和她的复用:</p>
        <p class="center">
            <a class="home" title="@Gary-leee" href="/" @click="gohome">
                <logo class="logo"></logo>
            </a>
        </p>
        <p>尽管他看起来已经非常不错了，但是我仍然发现这个SVG不像是手写的，path像是突然开始又戛然而止，<code>`stroke-with`</code>的颗粒度又达不到手写的标准，用js控制那就更回到了原点。这个坑就先留着吧哈哈哈
        </p>
        <end link="blogs"></end>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';
import Prism from 'prismjs'
function gohome(event: MouseEvent) {
    event.preventDefault();
    router.replace('/')
}
const router = useRouter();
onMounted(() => {
    Prism.highlightAll();
})
</script>

<style scoped lang="scss">
.blog-title {
    margin-bottom: 2rem;

    p {
        opacity: 0.7;
    }
}

.logo {
    width: 8rem;
    height: 8rem;
    position: relative;
}
</style>