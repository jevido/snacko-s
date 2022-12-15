// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			'$': path.resolve('./src/'),
			'@': path.resolve('./src/components')
		}
	},
	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
