import { error } from '@sveltejs/kit';
import { posts, slugify } from '#lib/utils/posts';
import type { EntryGenerator, PageLoad } from './$types';

export const prerender = true;

const allCategories = [...new Set(posts.flatMap((post) => post.categories ?? []))];

export const entries: EntryGenerator = () =>
	allCategories.map((category) => ({
		category: slugify(category)
	}));

export const load: PageLoad = ({ params }) => {
	const category = allCategories.find((category) => slugify(category) === params.category);

	if (!category) {
		error(404, 'Category not found');
	}

	return {
		category,
		posts: posts.filter((post) =>
			post.categories?.some((postCategory) => slugify(postCategory) === params.category)
		)
	};
};
