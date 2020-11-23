// https://leetcode-cn.com/problems/zigzag-conversion/

export function zigzagConvert(s: string, numRows: number): string {
    if (numRows === 1) {
        return s;
    }

    let result = '';

    const factor = (numRows - 1) * 2;

    let j = 0;
    // eslint-disable-next-line no-constant-condition
    while (true) {
        const pos = factor * j;

        if (pos >= s.length){
            break;
        }

        result += s[pos];

        j += 1;
    }

    for (let i = 0; i < numRows; i++) {
        let j = 0;
        let k = 0;

        // eslint-disable-next-line no-constant-condition
        while(true) {
            const pos = k % 2 === 0 ? factor * j + i : factor * j - i;

            if (pos >= s.length) {
                break;
            }

            result += s[pos];

            k += 1;
            if (k % 2 === 1){
                j += 1;
            }
        }
    }

    j = 0;
    // eslint-disable-next-line no-constant-condition
    while (true) {
        const pos = factor * j + (numRows - 1);

        if (pos >= s.length){
            break;
        }

        result += s[pos];

        j += 1;
    }

    return result;
}
