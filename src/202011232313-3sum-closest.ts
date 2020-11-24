export function threeSumClosest(nums: number[], target: number): number {
    nums.sort((a, b) => a - b);

    let best = Number.POSITIVE_INFINITY;

    for (let i = 0; i < nums.length; i++) {
        // 剪枝 - 去重
        if (nums[i] === nums[i - 1]) {
            continue;
        }

        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            const distance = Math.abs(target - sum);

            if (distance === 0) {
                return sum;
            }

            if (Math.abs(sum - target) < Math.abs(best - target)) {
                best = sum;
            }

            if (sum > target) {
                // 剪枝 - 去重
                while (left < right && nums[right] === nums[right - 1]) {
                    right--;
                }
                right--;
            } else {
                // 剪枝 - 去重
                while (left > right && nums[left] === nums[left + 1]) {
                    left++;
                }
                left++;
            }
        }
    }

    return best;
}
