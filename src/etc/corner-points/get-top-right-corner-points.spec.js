import { getTopRightCornerPoints } from './get-top-right-corner-points';

test('should return the expected points given this set of coordinates and radius', () => {
	// Arrange
	// Act
	const result = getTopRightCornerPoints([2, 0], 3);

	// Assert
	expect(result).toEqual([
		[0, 0],
		[1, 1],
		[2, 2],
		[1, 0],
		[2, 1],
		[2, 0],
	]);
});
