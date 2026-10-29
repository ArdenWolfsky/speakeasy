import { posts } from '#lib/utils/posts';

export const prerender = true;

export function load() {
	const tags = [...new Set(posts.flatMap((post) => post.tags ?? []))].sort((a, b) =>
		a.localeCompare(b)
	);

	const categories = [...new Set(posts.flatMap((post) => post.categories ?? []))].sort((a, b) =>
		a.localeCompare(b)
	);

	return {
		posts: posts.map((post) => ({
			title: post.title,
			url: post.url,
			ingredients: post.ingredients ?? []
		})),
		tags,
		categories
	};
}
