import { getTopLeftCornerPoints } from './corner-points';
import { getCoveredCorners } from './get-covered-corners';
import { getSideMidpoints } from './get-side-midpoints';
import { isCoveredAtPoint } from './is-covered-at-point';

export function getCoverEntry(element: HTMLElement) {
	const rect = element.getBoundingClientRect();

	const sideMidpoints = getSideMidpoints(rect);

	let covered = sideMidpoints.some(points => isCoveredAtPoint(element, points));
	if (!covered) {
		covered = getCoveredCorners(element, rect).length > 0;
	}

	return {
		covered,
	};
}
