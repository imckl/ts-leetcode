/**
 Do not return anything, modify nums1 in-place instead.
 */
export function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    const nums = [...nums1];

    let i = 0;
    let j = 0;
    let k = 0;

    while (i < m && j < n) {
        if (nums[i] < nums2[j]) {
            nums1[k] = nums[i];
            i++;
        } else {
            nums1[k] = nums2[j];
            j++;
        }
        k++;
    }

    while (i < m) {
        nums1[k] = nums[i];
        i++;
        k++;
    }

    while (j < n) {
        nums1[k] = nums2[j];
        j++;
        k++;
    }
}
