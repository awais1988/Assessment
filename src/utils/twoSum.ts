export const twoSum = (numbers: number[], target: number): number[] => {
  if (!Array.isArray(numbers)) {
    throw new Error('Input must be an array');
  }

  if (numbers.length < 2) {
    return [];
  }

  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) {
      return [left + 1, right + 1]; // Convert to 1-based indexing
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [];
};
