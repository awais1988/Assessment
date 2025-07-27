// __tests__/twoSum.test.ts
import { twoSum } from '../src/utils/twoSum';

describe('twoSum', () => {
  it('finds indices of numbers that add up to target', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 2]);
    expect(twoSum([2, 3, 4], 6)).toEqual([1, 3]);
    expect(twoSum([-1, 0], -1)).toEqual([1, 2]);
  });

  it('returns empty array if no solution', () => {
    expect(twoSum([1, 2, 3], 10)).toEqual([]);
  });
});
