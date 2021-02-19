export function lengthOfLIS(nums: number[]): number {
    if (nums.length === 0) {
        return 0;
    }

    if (nums.length === 1) {
        return 1;
    }

    let longestSeq = [];

    for (let i = 0; i < nums.length; i++) {
        let max = nums[i];
        const seq = [nums[i]];
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] > max) {
                seq.push(nums[j]);
                max = nums[j];
            }
        }

        if (seq.length > longestSeq.length) {
            longestSeq = seq;
        }
    }

    return longestSeq.length;
}
