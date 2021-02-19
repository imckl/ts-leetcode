// https://leetcode-cn.com/problems/max-consecutive-ones-iii/
// 解法: 滑动窗口
// todo: 算法优化, 提示: 不超过 K个 0

export function longestOnes(A: number[], K: number): number {
    // 记录转换为 1 的数组下表
    const window = [];

    // 记录最大值
    let max = 0;

    // 如果 K 为 0, 则返回当前数组的最大值
    if (K === 0) {
        let i = 0;
        while (i < A.length) {
            if (A[i] === 1) {
                const n = calcLength(A, i);
                max = Math.max(n, max);
                i = i + n + 1;
            } else {
                i++;
            }
        }

        return max;
    }

    for (let i = 0; i < A.length; i++) {
        if (A[i] === 0) {
            A[i] = 1;
            window.push(i);
        }

        if (window.length === K) {
            max = Math.max(calcLength(A, window[K - 1]), max);
            break;
        }
    }

    // 未进行 K次 转换, 则数组所有元素都为 1, 返回数组长度
    if (window.length < K) {
        return A.length;
    }

    for (let i = window[window.length - 1] + 1; i < A.length; i++) {
        if (A[i] === 0) {
            A[window[0]] = 0;
            window.shift();

            A[i] = 1;
            window.push(i);

            max = Math.max(calcLength(A, window[K - 1]), max);
        }
    }

    return max;
}

function calcLength(A: number[], pos: number): number {
    let length = 1;

    for (let i = pos - 1; i >= 0; i--) {
        if (A[i] === 1) {
            length++;
        } else {
            break;
        }
    }

    for (let i = pos + 1; i < A.length; i++) {
        if (A[i] === 1) {
            length++;
        } else {
            break;
        }
    }

    return length;
}
