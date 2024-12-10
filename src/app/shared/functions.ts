export function splitArray<T>(numParts: number, originalArray: T[]): T[][] {
  const matrix: T[][] = [];
  const partLength = Math.ceil(originalArray.length / numParts);
  for (let index = 0; index < partLength; index++) {
    const start = index * numParts;
    const end = start + numParts;
    if (numParts > 2) {
      originalArray.sort();
      matrix.push(originalArray.slice(start, end));
    } else matrix.push(originalArray.slice(start, end));
  }
  return matrix;
}
