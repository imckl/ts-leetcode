export function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) {
        return 0;
    }

    if (nums.length === 1) {
        return 1;
    }

    let prev = nums[0];
    let j = 1;

    for(let i = 1; i < nums.length; i++) {
        if (nums[i] !== prev) {
            nums[j] = nums[i];
            prev = nums[i];
            j++;
        }
    }

    return j;
}

export function removeDuplicates2(nums: number[]): number {
    if (nums.length === 0) {
        return 0;
    }

    if (nums.length === 1) {
        return 1;
    }

    let prev = nums[0];
    let i = 1;
    while (i < nums.length) {
        if (nums[i] === prev) {
            nums.splice(i, 1);
        } else {
            prev = nums[i];
            i++;
        }
    }

    return nums.length;
}
