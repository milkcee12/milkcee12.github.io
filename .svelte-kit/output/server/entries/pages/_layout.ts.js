const prerender = true;
const load = ({ url }) => {
  const { pathname } = url;
  return {
    pathname
  };
};
export {
  load,
  prerender
};
