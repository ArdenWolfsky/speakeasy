import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import { mdsvex, escapeSvelte } from 'mdsvex';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';

const markdownPlugins = {
	remarkPlugins: [remarkGfm],
	rehypePlugins: [rehypeSlug]
} as unknown as Pick<NonNullable<Parameters<typeof mdsvex>[0]>, 'remarkPlugins' | 'rehypePlugins'>;

export default defineConfig({
	plugins: [
		sveltekit({
			preprocess: [
				vitePreprocess(),
				mdsvex({
					extensions: ['.md'],
					...markdownPlugins
				})
			],
			extensions: ['.svelte', '.md'],
			adapter: adapter({
				pages: 'build',
				assets: 'build',
				fallback: '404.html'
			}),
			prerender: {
				entries: ['*']
			}
		})
	],
	ssr: {
		noExternal: ['hyperlib-but-svelte']
	},
	optimizeDeps: {
		exclude: ['hyperlib-but-svelte']
	}
});
