// 公共函数库
//防抖函数
export const debounce = (fn: Function, wait: number) => {
  let timer: any;
  return (...args: Array<any>) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn(args);
    }, wait);
  };
};
//节流函数
export const throttle = (fn: Function, wait: number) => {
  let prev = Date.now();
  return (...args: Array<any>) => {
    const now = Date.now();
    if (now - prev >= wait) {
      fn(args);
      prev = now;
    }
  };
};
//生成一个随机颜色字符串
export function randomColor() {
  return '#' + Math.random().toString(16).substring(2, 8).padEnd(6, '0');
}
//更换目标节点的背景颜色
export function changeBgColor(e: MouseEvent) {
  let color = randomColor();
  let el = e.target as HTMLElement;
  if (el.style) el.style.backgroundColor = color;
}