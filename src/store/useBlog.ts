import { defineStore } from 'pinia';

const useBlogStore = defineStore('blog', {
    state() {
        return { blog: { title: '', time: '', year: '' } }
    }
})
export default useBlogStore;