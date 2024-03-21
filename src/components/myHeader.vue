<template>
    <header>
        <logo></logo>
        <nav class="nav">
            <div class="spacer"></div>
            <div class="right">
                <a class="dark-hover" href="/blogs" title="Blogs" @click="handleRouter">Blog</a>
                <a class="dark-hover" href="/projects" title="Projects" @click="handleRouter">Projects</a>
                <a class="dark-hover" target="_blank" href="https://github.com/Gary-Leee" title="github">
                    <span class="img-center github"></span>
                </a>
                <a class="dark-hover" target="_blank" href="https://gitee.com/Gary-Leee" title="gitee">
                    <span class="img-center gitee"></span>
                </a>
                <a v-if="ismain" class="dark-hover" title="changeLang" @click="changeLang">
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
import { watch, ref } from 'vue';
const router = useRouter();
function handleRouter(event: MouseEvent): void {
    event.preventDefault();
    const target: any = event.target;
    router.push(target.pathname)
}
function gohome(event: MouseEvent) {
    event.preventDefault();
    router.push('/')
}
let html = document.getElementsByTagName('html')[0];
let ismain = ref(true);
watch(() => router.currentRoute.value.fullPath, (newV) => {
    if (newV == '/' || newV == '/zh-cn') ismain.value = true;
    else ismain.value = false
})
//中英文切换和防抖
function changeLanguage() {
    let timer: any;
    return () => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            router.currentRoute.value.fullPath == '/zh-cn' ? router.push('/') : router.push('/zh-cn');
            clearTimeout(timer);
        }, 300);
    }
}
const changeLang = changeLanguage();
//更换主题
function changeTheme() {
    html.className == 'dark' ? html.className = 'light' : html.className = 'dark';
}
</script>

<style scoped lang="scss">
header {
    height: 6rem;

    .nav {
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