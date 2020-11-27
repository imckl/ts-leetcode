export function majorityElement(nums: number[]): number {
    const numsMap = new Map<number, number>();

    const threshold = nums.length % 2 === 0 ? nums.length / 2 : (nums.length - 1) / 2;

    for (const num of nums) {
        const oldCount = (numsMap.has(num) ? numsMap.get(num) : 0) as number;
        const newCount = oldCount + 1;

        numsMap.set(num, newCount);

        if (newCount > threshold) {
            return num;
        }
    }

    return Number.NaN;
}


export function majorityElement3(nums: number[]): number {
    nums.sort((a, b) => a - b);
    const mid = nums.length % 2 === 0 ? nums.length / 2 : (nums.length - 1) / 2;
    return nums[mid];
}

export function majorityElement2(nums: number[]): number {
    const numsMap = new Map<number, number>();

    const threshold = nums.length % 2 === 0 ? nums.length / 2 : (nums.length + 1) / 2;

    for (const num of nums) {
        const oldCount = (numsMap.has(num) ? numsMap.get(num) : 0) as number;
        const newCount = oldCount + 1;

        numsMap.set(num, newCount);

        if (newCount === threshold) {
            return num;
        }
    }

    return Number.NaN;
}
