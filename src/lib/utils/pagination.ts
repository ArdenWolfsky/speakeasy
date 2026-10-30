import { posts } from '#lib/utils/posts';

export const POSTS_PER_PAGE = 27;

export function getPaginatedPosts(page: number) {
	const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

	if (!Number.isInteger(page) || page < 1 || page > totalPages) {
		return null;
	}

	const start = (page - 1) * POSTS_PER_PAGE;

	return {
		posts: posts.slice(start, start + POSTS_PER_PAGE),
		page,
		totalPages
	};
}
