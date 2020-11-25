export function removeElement(nums: number[], val: number): number {
    let index = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[index] = nums[i];
            index++;
        }
    }

    return index;
}

export function removeElement4(nums: number[], val: number): number {
    nums.sort((a, b) => a - b);

    let i = 0;
    while (nums[i] < val) {
        i++;
    }

    let count = 0;
    while (nums[i] === val) {
        nums[i] = Number.POSITIVE_INFINITY;
        count++;
        i++;
    }

    nums.sort((a, b) => a - b);

    for (let j = 0; j < count; j++) {
        nums.pop();
    }

    return nums.length;
}

export function removeElement3(nums: number[], val: number): number {
    nums.sort((a, b) => a - b);

    let i = 0;
    while (nums[i] < val) {
        i++;
    }

    while (nums[i] === val) {
        nums.splice(i, 1);
    }

    return nums.length;
}

export function removeElement2(nums: number[], val: number): number {
    let i = 0;
    while (nums[i] !== undefined) {
        if (nums[i] === val) {
            nums.splice(i, 1);
        } else {
            i++;
        }
    }

    return nums.length;
}
