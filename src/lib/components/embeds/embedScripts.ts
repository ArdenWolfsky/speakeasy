const scripts = new Map<string, Promise<void>>();

export function loadEmbedScript(src: string): Promise<void> {
	if (scripts.has(src)) {
		return scripts.get(src)!;
	}

	const promise = new Promise<void>((resolve, reject) => {
		const script = document.createElement('script');

		script.src = src;
		script.async = true;

		script.onload = () => resolve();
		script.onerror = () => reject(new Error(`Failed to load ${src}`));

		document.body.appendChild(script);
	});

	scripts.set(src, promise);

	promise.catch(() => {
		scripts.delete(src);
	});

	return promise;
}
