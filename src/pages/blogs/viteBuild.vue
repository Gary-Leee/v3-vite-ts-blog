<template>
    <div class="content-center">
        <div class="blog-title">
            <h1>Vite build的结构优化</h1>
            <p>Mar 20, 2024</p>
        </div>
        <p>As we all
            know，vite的默认配置打包出来的结果可以说就像是大杂烩一样，所有的文件都塞到<code>`assets`</code>目录下面。不过文件指纹还是有明显标记的，在博客发展到现在，也引入了不少三方库。我试着看能不能做一些项目结构上的优化。
        </p>
        <h2>怎么操作</h2>
        <p>Vite在生产上是基于<icon-link
                href="https://www.rollupjs.com/">Rollup</icon-link>实现的，查阅Vite的文档，在构建选项中看到<code>`build.rollupOptions`</code>中描述：自定义底层的
            Rollup 打包配置。这与从 Rollup 配置文件导出的选项相同，并将与 Vite 的内部 Rollup
            选项合并。这就已经非常明了了，我们只需要根据RollUp的官方文档在<code>`vite.config.js`</code>中配置<code>rollupOptions</code>实现。
        </p>
        <h2>开始！</h2>
        <p>我们的大概思路是参考vue2的打包结果，把脚本、样式、资源分成三个文件夹就比较清晰的表达出我们想要的打包结果了！</p>
        <p>根据常识，所有的构建工具就像是流水线，在特定的生命周期，配置钩子去做特定的事，那我们想要改变打包结构，直接去output相关的配置找目标就非常清晰了。</p>
        <p>找到output的第一个配置就发现为什么V3的打包结构这么奇怪了</p>
        <img v-lazy :src="''" data-src="@/assets/img/blogImg/output.assetFileNames.png" alt="">
        <p>所有的资源都使用默认配置塞到了assets目录下面，那我们就可以开始着手分包了。</p>
        <p>首先是入口文件的修改，vue3的入口文件是ts（js）文件，那么我们紧接着就回在文档中看到，<code>output.entryFileNames</code>配置项，直接上手修改</p>
        <pre><code class="language-js">rollupOptions: {
    output: {
        entryFileNames: 'js/test.js'
    }
}</code></pre>
        <p>如下，我们成功的把入口文件分离的了出来，那么接下来就是把剩下的js文件提出来就行了，这时候也别忘了重要的hash值，这个在前端性能优化中的浏览器请求的方面有着举足轻重的作用！</p>
        <img v-lazy :src="''" data-src="@/assets/img/blogImg/entryFileNames.png" alt="">
        <h2>继续优化</h2>
        <v-ps>因为我们的打包已经进行到output的步骤，所有的css预编译器已经解析完成并转义为css了，所以我们只需要处理css文件就可以了。</v-ps>
        <p>按照同样的操作，使用entryFileNames和chunkFileNames，我们就可以把js文件和其他资源文件都成功的提取到单独的文件夹中，这时候我们再想进行就发现字符串的配置已经不能我们继续把其他资源分包的需求。这时候发现assetFileNames可以接受一个function
            ，那我们就可以继续配置。</p>
        <pre><code class="language-js">output: {
        entryFileNames: 'js/[name].[hash].js',
        chunkFileNames: 'js/[name].[hash].js',
        assetFileNames(assetInfo) {
          if (assetInfo.name?.endsWith('css')) {
            return 'css/[name]-[hash].css';
          }
          return 'assets/[name]-[hash].[ext]';
        }
}</code></pre>
        <p>成功的把，css资源分离了出来，那么剩下的资源，我们手动处理下就可以了</p>
        <pre><code class="language-js">assetFileNames(assetInfo) {
          if (assetInfo.name?.endsWith('css')) {
            return 'css/[name]-[hash].css';
          }
          const imgExts = ['png', 'jpg', 'svg']
          if (imgExts.some(ext => assetInfo.name?.endsWith(ext))) {
            return 'imgs/[name]-[hash].[ext]';
          };
          return 'assets/[name]-[hash].[ext]';
}
</code></pre>
        <h2>有点小问题</h2>
        <v-ps>三方库只要是不升级，打包后的相关文件理论上来说内容和文件指纹都不会变，由于浏览器缓存策略的存在，使得它不需要每次都去进行网络请求，
            这样就在一定程度上减少了网络的压力。</v-ps>
        <p>打包的过程中，发现项目中入口文件能到100多kb，应该是生产依赖的vue也打包进来了，参照默认配置根据id把三方库单独打包到一个文件中。</p>
        <p>是不是差点认同官方这个方案了，上手之后发现这个文件打包出来几百kb了，通过gzip压缩后还有三百多kb，这个文件对于前端来说太大了。使用Rollup的manualChunks，拿到每个chunk的id，看id是不是包含在了node_modules下面进行再次的代码分割。
        </p>
        <p>因为我包管理器使用的是pnpm，node_modules下面的目录结构跟npm不太一样，所以我在这步骤处理的时候，使用了手动配置分包，在工作中可以看情况各位项目中使用的什么包管理工具来进行定制化的分包</p>
        <end link="blogs"></end>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';
import Prism from 'prismjs'
import vLazy from '@/utils/derectives/lazy-load'

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