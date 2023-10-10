/** @type {import('./$types').PageServerLoad} */
export function load({params}) {
	console.log("Hello??");
	const imageModules = import.meta.glob("../../../static/scrn/*.jpg");
	let paths = [];

	for (const path in imageModules) {
		imageModules[path]().then(({default: imgPath}) => {
			paths.push(imgPath.substring(7));
		});
	}
	paths.sort((a, b) => a.localeCompare(b));
	return {
		screenshots: paths
	};
}