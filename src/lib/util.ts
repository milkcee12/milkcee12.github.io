const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max);

function pxStringToFloat(str: string) {
    return parseFloat(str.substring(0, str.length - 2));
}

export { clamp, pxStringToFloat };
