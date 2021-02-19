// https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/
// todo: 算法优化, 提示: nums 里的所有数字都在 0～n-1 的范围内

export function findRepeatNumber(nums: number[]): number {
    const set = new Set();

    for (const num of nums) {
        if (set.has(num)) {
            return num;
        } else {
            set.add(num);
        }
    }
}
