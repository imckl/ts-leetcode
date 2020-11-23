// https://leetcode-cn.com/problems/median-of-two-sorted-arrays/

export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const nums = [...nums1, ...nums2];
    nums.sort((a, b) => a - b);

    const median = nums.length / 2;

    if (Number.isInteger(median)) {
        return nums.slice(median - 1, median + 1).reduce((sum, val) => sum + val, 0) / 2;
    } else {
        return nums[Math.floor(median)];
    }
}
