export function getBottomRightCornerPoints([x, y]: [number, number], radius: number) {
	const maxX = x;
	const startX = x - (radius - 1);
	const startY = y;

	const points: Array<[number, number]> = [];
	for (let outerX = startX, outerY = startY; outerX <= maxX; outerX++) {
		for (let innerX = outerX, innerY = outerY; innerX <= maxX; innerX++, innerY--) {
			points.push([innerX, innerY]);
		}
	}
	return points;
}
