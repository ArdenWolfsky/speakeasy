type PostMetadata = {
	layout?: string;
	title: string;
	slug?: string;
	date?: string;
	image: string;
	tags?: string;
	categories?: string;
	ingredients?: string;
	description?: string;
};

type PostModule = {
	metadata?: PostMetadata;
	frontmatter?: PostMetadata;
	default: unknown;
};

export type Post = {
	title: string;
	slug: string;
	url: string;
	date: string;
	image: string;
	tags: string[];
	categories: string[];
	ingredients: string[];
	path: string;
	description?: string;
};

const modules = import.meta.glob<PostModule>('/src/posts/*.md', {
	eager: true
});

export function slugify(value: string): string {
	return value
		.toLowerCase()
		.trim()
		.replace(/[^\p{L}\p{N}]+/gu, '-')
		.replace(/^-|-$/g, '');
}

export const posts: Post[] = Object.entries(modules)
	.map(([path, mod]) => {
		const filename = path.split('/').pop()?.replace(/\.md$/, '') ?? '';

		const meta = mod.metadata ?? mod.frontmatter;

		if (!meta) {
			throw new Error(`Missing frontmatter in ${path}`);
		}

		// Jekyll filenames usually start with YYYY-MM-DD-
		const filenameSlug = filename.replace(/^\d{4}-\d{2}-\d{2}-/, '');

		const slug = slugify(meta.slug || meta.title || filenameSlug);

		const date = meta.date || filename.match(/^(\d{4}-\d{2}-\d{2})-/)?.[1] || '';

		return {
			title: meta.title,
			description: meta.description,
			slug,
			url: `/drinks/${slug}`,
			path,
			date,
			image: meta.image,
			tags: meta.tags?.split(/\s+/).filter(Boolean) ?? [],
			categories: meta.categories?.split(/\s+/).filter(Boolean) ?? [],
			ingredients: meta.ingredients?.split(/\s+/).filter(Boolean) ?? []
		};
	})
	.sort((a, b) => b.date.localeCompare(a.date));
