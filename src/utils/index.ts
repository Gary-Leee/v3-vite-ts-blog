export const debounce = (fn: Function, wait: number) => {
    let timer: any;
    return (...args: Array<any>) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn(args);
        }, wait);
    }
}

