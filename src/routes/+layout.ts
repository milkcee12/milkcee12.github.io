export const prerender = true;

export const load = ({ url }: { url: any }) => {
  const { pathname }: { pathname: any } = url;

  return {
    pathname,
  };
};
