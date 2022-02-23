import { getBottomLeftCornerPoints, getBottomRightCornerPoints, getTopLeftCornerPoints, getTopRightCornerPoints } from './corner-points';
import { getBorderRadius } from './get-border-radius';
import { isCoveredAtPoint } from './is-covered-at-point';

enum Corner {
	TopLeft = 'top-left',
	TopRight = 'top-right',
	BottomRight = 'bottom-right',
	BottomLeft = 'bottom-left',
};

export function getCoveredCorners(element: HTMLElement, rect: DOMRect) {
	const radius = getBorderRadius(element);

	const topLeftCornerPoints = getTopLeftCornerPoints([rect.left, rect.top], radius);
	const topRightCornerPoints = getTopRightCornerPoints([rect.right, rect.top], radius);
	const bottomLeftCornerPoints = getBottomLeftCornerPoints([rect.left, rect.bottom], radius);
	const bottomRightCornerPoints = getBottomRightCornerPoints([rect.right, rect.bottom], radius);

	const coveredCorners: Array<Corner> = [];
	if (topLeftCornerPoints.some(point => isCoveredAtPoint(element, point))) {
		coveredCorners.push(Corner.TopLeft);
	}
	if (topRightCornerPoints.some(point => isCoveredAtPoint(element, point))) {
		coveredCorners.push(Corner.TopRight);
	}
	if (bottomLeftCornerPoints.some(point => isCoveredAtPoint(element, point))) {
		coveredCorners.push(Corner.BottomLeft);
	}
	if (bottomRightCornerPoints.some(point => isCoveredAtPoint(element, point))) {
		coveredCorners.push(Corner.BottomRight);
	}
	return coveredCorners;
}
