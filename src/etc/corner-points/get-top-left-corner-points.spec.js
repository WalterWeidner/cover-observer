import { getTopLeftCornerPoints } from './get-top-left-corner-points';

test('should return the expected points given this set of coordinates and radius', () => {
	// Arrange
	// Act
	const result = getTopLeftCornerPoints([0, 0], 3);

	// Assert
	expect(result).toEqual([
		[2, 0],
		[1, 1],
		[0, 2],
		[1, 0],
		[0, 1],
		[0, 0],
	]);
});
