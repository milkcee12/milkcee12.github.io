const clamp = (num: number, min: number, max: number) =>
  Math.min(Math.max(num, min), max);

function pxStringToFloat(str: string) {
  return parseFloat(str.substring(0, str.length - 2));
}

function lerp(start: number, end: number, alpha: number) {
  return start + alpha * (end - start);
}

export { clamp, pxStringToFloat, lerp };
