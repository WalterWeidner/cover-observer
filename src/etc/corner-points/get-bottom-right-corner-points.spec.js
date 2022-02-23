import { getBottomRightCornerPoints } from './get-bottom-right-corner-points';

test('should return the expected points given this set of coordinates and radius', () => {
	// Arrange
	// Act
	const result = getBottomRightCornerPoints([2, 2], 3);

	// Assert
	expect(result).toEqual([
		[0, 2],
		[1, 1],
		[2, 0],
		[1, 2],
		[2, 1],
		[2, 2],
	])
});
