export function isCoveredAtPoint(element: HTMLElement, point: [number, number]) {
	const elementsAtPoint = document.elementsFromPoint(...point);

	return elementsAtPoint[0] !== element && elementsAtPoint.includes(element);
}
