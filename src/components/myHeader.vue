<template>
    <header>
        <logo></logo>
        <nav>
            <div class="spacer"></div>
            <div class="right">
                <a class="dark-hover" href="/blogs" title="Blogs" @click.prevent="handleRouter('blogs')">
                    <span v-if="isWide">Blog</span>
                    <span v-else class="img-center blogs"></span>
                </a>
                <a class="dark-hover" href="/projects" title="Projects" @click.prevent="handleRouter('projects')">
                    <span v-if="isWide">Projects</span>
                    <span v-else class="img-center projects"></span>
                </a>
                <a class="dark-hover" target="_blank" href="https://github.com/Gary-Leee" title="github">
                    <span class="img-center github"></span>
                </a>
                <a class="dark-hover" target="_blank" href="https://gitee.com/Gary-Leee" title="gitee">
                    <span class="img-center gitee"></span>
                </a>
                <a v-if="isHome" class="dark-hover" title="changeLang" @click="changeLang">
                    <span class="img-center changeLang"></span>
                </a>
                <a v-else class="dark-hover" href="/" title="gohome" @click="gohome">
                    <span class="img-center gohome"></span>
                </a>
                <a class="dark-hover" title="Toggle Color Scheme" @click="changeTheme">
                    <span class="img-center sun"></span>
                </a>
            </div>
        </nav>
    </header>

</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { ref, watchEffect } from 'vue';
import { debounce } from '@/utils/index'
const router = useRouter();
function handleRouter(target: string): void {
    // event.preventDefault();
    // const target: any = event.target;
    console.log(target)
    router.push(target)
}
function gohome(event: MouseEvent) {
    event.preventDefault();
    router.push('/')
}


let isHome = ref(true);
watchEffect(() => {
    if (router.currentRoute.value.fullPath == '/' || router.currentRoute.value.fullPath == '/zh-cn') isHome.value = true;
    else isHome.value = false
});

//中英文切换
const changeLang = debounce(() => router.currentRoute.value.fullPath == '/zh-cn' ? router.push('/') : router.push('/zh-cn'), 300);

//更换主题
let html = document.getElementsByTagName('html')[0];
function changeTheme() {
    html.className == 'dark' ? html.className = 'light' : html.className = 'dark';
}

//移动端兼容
let isWide = ref(true);
function resize() {
    let clientWidth = document.body.clientWidth;
    // let rem = document.body.fontSize;
    clientWidth <= 600 ? isWide.value = false : isWide.value = true
    console.log(clientWidth);
}
window.onresize = resize;
</script>

<style scoped lang="scss">
header {
    --h-height: 3rem;
    width: 100%;

    @media screen and (max-width: 50rem) {
        --h-height: 2.5rem;
        nav {
            padding: 15% 0;
        }
    }

    nav {
        // height: var(--h-height);
        font-size: 1rem;
        display: grid;
        grid-template-columns: auto max-content;
        box-sizing: border-box;
        padding: 2rem;

        a {
            font-size: 1.2rem;
            text-align: center;
        }

        .right {
            display: grid;
            grid-gap: 1.2rem;
            grid-auto-flow: column;
        }
    }

    .github {
        --icon: url('../assets/img/github.svg');
        width: 1.2rem;
        height: 1.2rem;
    }

    .blogs {
        --icon: url('../assets/img/blogs.svg');
        width: 1.2rem;
        height: 1.2rem;
    }

    .projects {
        --icon: url('../assets/img/projects.svg');
        width: 1.2rem;
        height: 1.2rem;
    }

    .gitee {
        --icon: url('../assets/img/Gitee-icon.svg');
        width: 1.4rem;
        height: 1.4rem;
    }

    .changeLang {
        --icon: url('../assets/img/lang-change.svg');
        width: 1.3rem;
        height: 1.3rem;
    }

    .sun {
        --icon: url('../assets/img/sun.svg');
        width: 1.5rem;
        height: 1.4rem;
    }

    .gohome {
        --icon: url('../assets/img/gohome.svg');
        width: 1.3rem;
        height: 1.3rem;
    }

}
</style>