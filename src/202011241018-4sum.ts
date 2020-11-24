export function fourSum(nums: number[], target: number): number[][] {
    nums.sort((a, b) => a - b);

    const results: number[][] = [];

    for (let i = 0; i < nums.length; i++) {
        const currentTarget = target - nums[i];
        const currentNums = nums.slice(i + 1);

        if (currentNums.length < 3) {
            break;
        }

        // 剪枝 - 去重
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        const currentResults = threeSum(currentNums, currentTarget);
        currentResults.forEach(x => x.push(nums[i]));

        results.push(...currentResults);
    }

    return results;
}

function threeSum(nums: number[], target: number): number[][] {
    const results: number[][] = [];

    for (let i = 0; i < nums.length; i++) {
        // 剪枝 - 去重
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === target) {
                results.push([nums[i], nums[left], nums[right]]);

                // 剪枝 - 去重
                while (left + 1 < right && nums[left] === nums[left + 1]) {
                    left++;
                }
                left++;

                // 剪枝 - 去重
                while (left < right - 1 && nums[right] === nums[right - 1]) {
                    right--;
                }
                right--;

            } else if (sum > target) {
                // 剪枝 - 去重
                while (left < right - 1 && nums[right] === nums[right - 1]) {
                    right--;
                }
                right--;
            } else {
                // 剪枝 - 去重
                while (left + 1 < right && nums[left] === nums[left + 1]) {
                    left++;
                }
                left++;
            }
        }
    }

    return results;
}
