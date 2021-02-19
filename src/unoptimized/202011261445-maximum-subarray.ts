export function maxSubArray(nums: number[]): number {
    if (nums.length === 0) {
        return 0;
    }

    let max = nums[0];
    let sum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        sum = sum > 0 ? nums[i] + sum : nums[i];
        if (sum > max) {
            max = sum;
        }
    }

    return max;
}
