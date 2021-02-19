// https://leetcode-cn.com/problems/3sum/

export function threeSum(nums: number[]): number[][] {
    const results: number[][] = [];

    if (nums.length < 3) {
        return results;
    }

    // 排序
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {

        // 剪枝 - 重复数循环
        if (nums[i] === nums[i - 1]) {
            continue;
        }

        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                results.push([nums[i], nums[left], nums[right]]);

                // 剪枝 - 左指针数重复
                while (left < right && nums[left] === nums[left + 1]) {
                    left++;
                }
                left++;

                // 剪枝 - 右指针重复
                while (left < right && nums[right] === nums[right - 1]) {
                    right--;
                }
                right--;
            } else if (sum > 0) {
                right--;
            } else {
                left++;
            }
        }
    }

    return results;
}

// function wrong() {
//
//     // let i = 0;
//     // let j = nums.length - 1;
//
//     // while (i < j) {
//     //     const num0 = nums[i];
//     //     const num1 = nums[j];
//     //
//     //     if (num0 + num1 + nums[j - 1] >= 0) {
//     //         let k = 1;
//     //
//     //         while (num0 + num1 + nums[j - k] >= 0) {
//     //             const num2 = nums[j - k];
//     //
//     //             if (num0 + num1 + num2 === 0) {
//     //                 results.push([num0, num2, num1]);
//     //
//     //                 // 剪枝 - 重复结果
//     //                 while (nums[j - k] !== undefined && nums[j - k] === nums[j - k - 1]) {
//     //                     k++;
//     //                 }
//     //                 k++;
//     //             } else {
//     //                 k++;
//     //             }
//     //         }
//     //
//     //         // 剪枝 - 重复结果
//     //         while (nums[j - 2] !== undefined && nums[j - 2] === nums[j - 3]) {
//     //             j--;
//     //         }
//     //         j--;
//     //
//     //     }
//     //     else {
//     //         // 剪枝 - 重复结果
//     //         while (nums[i + 2] !== undefined && nums[i + 2] === nums[i + 3]) {
//     //             i++;
//     //         }
//     //         i++;
//     //         j = nums.length - 1;
//     //     }
//     // }
//     //
//     // return results;
// }
