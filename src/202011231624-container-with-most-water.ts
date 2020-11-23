// https://leetcode-cn.com/problems/container-with-most-water/

/**
 * 主要理解移动较长的一端时, 会过滤掉最优解
 * @param height
 */
export function maxArea(height: number[]): number {
    let maxArea = 0;

    let i = 0;
    let j = height.length - 1;
    while (i !== j) {
        const w = j - i;
        const h = Math.min(height[i], height[j]);
        const area = w * h;

        if (area > maxArea) {
            maxArea = area;
        }

        if (height[i] <= height[j]) {
            i++;
        } else {
            j--;
        }
    }

    return maxArea;
}
