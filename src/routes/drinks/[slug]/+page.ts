import { error } from '@sveltejs/kit';
import { posts } from '#lib/utils/posts';
import type { EntryGenerator, PageLoad } from './$types';

export const prerender = true;

export const entries: EntryGenerator = () =>
	posts.map((post) => ({
		slug: post.slug
	}));

export const load: PageLoad = ({ params }) => {
	const currentIndex = posts.findIndex((post) => post.slug === params.slug);

	if (currentIndex === -1) {
		error(404, 'Drink not found');
	}

	return {
		post: posts[currentIndex],
		previous: currentIndex > 0 ? posts[currentIndex - 1] : null,
		next: currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null
	};
};
