import { error } from '@sveltejs/kit';
import { posts } from '#lib/utils/posts';
import { getPaginatedPosts, POSTS_PER_PAGE } from '#lib/utils/pagination';
import type { EntryGenerator, PageLoad } from './$types';

export const prerender = true;

export const entries: EntryGenerator = () => {
	const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

	return Array.from({ length: Math.max(0, totalPages - 1) }, (_, i) => ({
		page: String(i + 2)
	}));
};

export const load: PageLoad = ({ params }) => {
	const page = Number(params.page);

	// Page 1 belongs at /
	if (!/^[2-9]\d*$/.test(params.page)) {
		error(404, 'Page not found');
	}

	const result = getPaginatedPosts(page);

	if (!result) {
		error(404, 'Page not found');
	}

	return result;
};
