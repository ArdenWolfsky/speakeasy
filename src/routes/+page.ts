import { getPaginatedPosts } from '#lib/utils/pagination';

export const prerender = true;

export function load() {
	return getPaginatedPosts(1);
}
