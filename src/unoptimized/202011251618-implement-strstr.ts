export function strStr(haystack: string, needle: string): number {
    if (needle.length === 0) {
        return 0;
    }

    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            let isMatch = true;
            for (let k = 1; k < needle.length; k++) {
                if (haystack[i + k] !== needle[k]) {
                    isMatch = false;
                    break;
                }
            }

            if (isMatch) {
                return i;
            }
        }
    }

    return -1;
}
