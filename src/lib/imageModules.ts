export enum PlaygroundModule {
  FEATURED = 0,
  FANART = 1,
  ANIMATION_3D = 2,
}

export const playgroundModules = [
  import.meta.glob("$lib/images/playground/featured/*"),
  import.meta.glob("$lib/images/playground/fanart/*"),
  import.meta.glob("$lib/images/playground/3d-animation/*"),
];
