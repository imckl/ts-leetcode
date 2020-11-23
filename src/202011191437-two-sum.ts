// https://leetcode-cn.com/problems/two-sum/

/**
 * O(n^2)
 * @param nums
 * @param target
 */
export function twoSum(nums: number[], target: number): number[] {
    for (const [idx, num] of nums.entries()) {
        const seed = target - num;
        const seed_idx = nums.indexOf(seed, idx + 1);

        if (seed_idx !== -1) {
            return [idx, seed_idx];
        }
    }

    return [];
}

/**
 * O(n)
 * refer: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
 * @param nums
 * @param target
 */
export function twoSum2(nums: number[], target: number): number[] {
    const numsMap = new Map<number, number>();
    nums.forEach((num, idx) => numsMap.set(num, idx));

    for (const [idx, num] of nums.entries()) {
        const seed = target - num;
        const seed_idx = numsMap.get(seed);
        if (seed_idx && idx !== seed_idx) {
            return [idx, seed_idx];
        }
    }

    return [];
}

const nums = [2, 7, 11, 15];
const target = 9;

console.log(twoSum2(nums, target));
