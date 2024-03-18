<template>
    <header>
        <a class="home" href="/" @click="handleRouter"></a>
        <nav class="nav">
            <div class="spacer"></div>
            <div class="right">
                <a class="dark-hover" href="/blogs" @click="handleRouter" title="Blogs">
                    Blog
                </a>
                <a class="dark-hover" href="./" title="Project" @click="handleRouter">Project</a>
                <a class="dark-hover" target="_blank" href="https://github.com/Gary-Leee" title="github">
                    <div class="img-center github"></div>
                </a>
                <a class="dark-hover" title="Toggle Color Scheme" @click="changeTheme">
                    <div class="img-center sun"></div>
                </a>
            </div>

        </nav>
    </header>

</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
const router = useRouter();
function handleRouter(event: MouseEvent): void {
    event.preventDefault();
    const target: any = event.target;
    console.dir(target);
    router.push(target.pathname)
}

function changeTheme() {
    let html = document.getElementsByTagName('html')[0];
    if (!html.className) html.className = 'dark';
    else html.className = '';
    console.dir(html);
}
</script>

<style scoped lang="scss">
header {
    height: 5rem;

    .home {
        width: 4rem;
        height: 4rem;
        margin: 0.5rem;
        background-color: #524e4e;
        position: fixed;
        left: 0;
    }

    .nav {
        font-size: 1rem;
        display: grid;
        grid-template-columns: auto max-content;
        box-sizing: border-box;
        padding: 2rem;
        // color: var(--c);
        // background-color: var(--bg-c);

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

    .sun {
        --icon: url('../assets/img/sun.svg');
        width: 1.5rem;
        height: 1.5rem;
    }
}
</style>