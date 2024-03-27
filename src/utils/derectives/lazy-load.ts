const ob = new IntersectionObserver((entries) => {
    // el.src = el.dataset.src
    let el = entries[0];
    if (el.isIntersecting) {
        const img = el.target as HTMLImageElement;
        img.src = img.dataset.src as string;
        ob.unobserve(img);
    }
},
    {
        root: null,
        rootMargin: '10%',
        threshold: 0
    });
const vLazy = {
    mounted: (el: any) => {
        console.dir(el);
        if (!el.src) throw new Error('please bind to <img/> element')
        ob.observe(el);
    }
}
export default vLazy;