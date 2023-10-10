/** @type {import('./$types').PageServerLoad} */
export function load({params}) {
	const imageModules = import.meta.glob("../../../static/scrn/*.jpg");
	let paths = [];

	for (const path in imageModules) {
		paths.push(path.replace("../../../static", ""));
	}
	paths.sort((a, b) => a.localeCompare(b));
	return {
		screenshots: paths
	};
}