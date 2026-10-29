import { error } from '@sveltejs/kit';
import { posts, slugify } from '#lib/utils/posts';
import type { EntryGenerator, PageLoad } from './$types';

export const prerender = true;

const allTags = [...new Set(posts.flatMap((post) => post.tags ?? []))];

export const entries: EntryGenerator = () =>
	allTags.map((tag) => ({
		tag: slugify(tag)
	}));

export const load: PageLoad = ({ params }) => {
	const tag = allTags.find((tag) => slugify(tag) === params.tag);

	if (!tag) {
		error(404, 'Tag not found');
	}

	return {
		tag,
		posts: posts.filter((post) =>
			post.tags?.some((postTag) => slugify(postTag) === params.tag)
		)
	};
};