import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

// const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		scss: {
			prependData: "@import './src/lib/scss/_globals.scss';",
		}
	}),
	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs'
		}),
		paths: {
			base: '',
		}	
	}
};

export default config;
