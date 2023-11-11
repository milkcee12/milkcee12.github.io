export const clamp = (num: number, min: number, max: number) =>
  Math.min(Math.max(num, min), max);

export function pxStringToFloat(str: string) {
  return parseFloat(str.substring(0, str.length - 2));
}

export function lerp(start: number, end: number, alpha: number) {
  return start + alpha * (end - start);
}

export async function loadImagesFromModule(module: any) {
  const iterableModule = Object.entries(module);
  const images = await Promise.all(
    iterableModule.map(async ([filepath, resolver]: any) => {
      // Resolve image src from file system
      const imageData: any = await resolver().then(
        ({ default: imageUrl }: any) => {
          let filename = filepath.split("\\").pop()!.split("/").pop()!;
          filename = filename.replace(/\.[^/.]+$/, "");
          return {
            filename: filename,
            url: imageUrl,
          };
        }
      );
      return imageData;
    })
  );
  // console.log(images);
  return images;
}
