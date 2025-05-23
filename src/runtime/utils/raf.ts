import { inBrowser } from "./index";

const root = inBrowser ? window : global;

let prev = Date.now();

function rafPolyfill(fn: FrameRequestCallback): number {
  const curr = Date.now();
  const ms = Math.max(0, 16 - (curr - prev));
  const id = setTimeout(fn, ms);
  prev = curr + ms;
  return id;
}

export function raf(fn: FrameRequestCallback): number {
  const requestAnimationFrame = root.requestAnimationFrame || rafPolyfill;
  return requestAnimationFrame.call(root, fn);
}

export function cancelRaf(id: number) {
  const cancelAnimationFrame = root.cancelAnimationFrame || root.clearTimeout;
  cancelAnimationFrame.call(root, id);
}
