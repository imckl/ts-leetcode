// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/

/**
 *
 * @param s
 */
export function lengthOfLongestSubstring(s: string): number {
    if (!s) {
        return 0;
    }

    let maxLength = 0;

    const currentChars: string[] = [];

    for (const char of s) {
        if (!currentChars.includes(char)) {
            currentChars.push(char);
        } else {
            const currentLength = currentChars.length;
            if (currentLength > maxLength) {
                maxLength = currentLength;
            }

            currentChars.splice(0, currentChars.indexOf(char) + 1);
            currentChars.push(char);
        }
    }

    if (currentChars.length > maxLength) {
        maxLength = currentChars.length;
    }

    return maxLength;
}
