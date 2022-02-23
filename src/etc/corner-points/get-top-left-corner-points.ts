export function getTopLeftCornerPoints([x, y]: [number, number], radius: number) {
	const minX = x;
	const startX = x + (radius - 1);
	const startY = y;

	const points: Array<[number, number]> = [];
	for (let outerX = startX; outerX >= minX; outerX--) {
		for (let innerX = outerX, innerY = startY; innerX >= minX; innerX--, innerY++) {
			points.push([innerX, innerY]);
		}
	}
	return points;
}
