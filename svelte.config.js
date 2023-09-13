import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		alias: {
			$components: './src/lib/components',
			$data: './src/lib/data',
			$scripts: './src/lib/scripts',
			$server: './src/lib/server',
			$stores: './src/lib/stores',
			$styles: './src/lib/styles',
			$types: './src/lib/types',
		},
		adapter: adapter()
	}
};

export default config;
