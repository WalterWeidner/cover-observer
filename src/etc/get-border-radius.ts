export function getBorderRadius(element: HTMLElement) {
	const rawRadius = getComputedStyle(element).borderRadius;
	let pixels: number;

	const pixelPattern = /(\d+)px$/;

	if (pixelPattern.test(rawRadius)) {
		pixels = parseInt(rawRadius.replace(pixelPattern, '$1'));
	}

	return pixels;
}
