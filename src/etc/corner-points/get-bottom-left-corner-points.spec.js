import { getBottomLeftCornerPoints } from './get-bottom-left-corner-points';

test('should return the expected points given this set of coordinates and radius', () => {
	// Arrange
	// Act
	const result = getBottomLeftCornerPoints([0, 2], 3);

	// Assert
	expect(result).toEqual([
		[2, 2],
		[1, 1],
		[0, 0],
		[1, 2],
		[0, 1],
		[0, 2],
	]);
});
