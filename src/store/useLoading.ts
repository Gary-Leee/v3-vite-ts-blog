import { defineStore } from 'pinia';

const useLoading = defineStore('loading', {
  state: () => ({
    loading: false
  }),
  actions: {
    startLoading() {
      this.loading = true;
    },
    endLoading() {
      this.loading = false;
    }
  }
});

export default useLoading;
