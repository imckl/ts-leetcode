// https://leetcode-cn.com/problems/longest-palindromic-substring/

export function longestPalindrome(s: string): string {
    if (s === '' || s.length === 1) {
        return s;
    }

    let result = '';

    for (let i = 0; i < s.length; i++) {
        const c = s[i];

        const start = i;
        let end = s.lastIndexOf(c, s.length);
        let chunk = s.slice(start, end + 1);

        while (start < end) {
            const isPalindrome = checkIsPalindrome(chunk);
            if (isPalindrome) {
                if (chunk.length > result.length) {
                    result = chunk;
                }
                break;
            } else {
                end = s.lastIndexOf(c, end - 1);
                chunk = s.slice(start, end + 1);
            }
        }

        if (chunk.length > result.length) {
            result = chunk;
        }
    }

    return result;
}

function checkIsPalindrome(s: string): boolean {
    const length = s.length;

    if (length % 2 === 0) {
        const mid = length / 2;
        const head = s.slice(0, mid);
        const tail = s.slice(mid, length);
        const reversedTail = [...tail].reverse().join('');

        return head === reversedTail;
    } else {
        const mid = (length - 1) / 2;
        const head = s.slice(0, mid);
        const tail = s.slice(mid + 1, length);
        const reversedTail = [...tail].reverse().join('');

        return head === reversedTail;
    }
}
