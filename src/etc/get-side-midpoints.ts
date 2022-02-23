export function getSideMidpoints(rect: DOMRect): Array<[number, number]> {
	const horizontalMiddle = (rect.width / 2);
	const verticalMiddle = (rect.height / 2);

	const bottom = rect.bottom - 1;
	const right = rect.right - 1;

	return [
		[rect.left + horizontalMiddle, rect.top], // Top Middle
		[right, rect.top + verticalMiddle], // Right Middle
		[rect.left + horizontalMiddle, bottom], // Bottom Middle
		[rect.left, rect.top + verticalMiddle], // Left Middle
	];
}
