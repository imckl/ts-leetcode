// https://leetcode-cn.com/problems/longest-common-prefix/

export function longestCommonPrefix(strs: string[]): string {
    let result = '';

    const str0 = strs.pop();

    if (str0 === undefined) {
        return result;
    }

    for (let i = 0; i < str0.length; i++) {
        const char = str0[i];

        if (strs.every(s => s[i] === char)) {
            result += char;
        } else {
            break;
        }

    }

    return result;
}
