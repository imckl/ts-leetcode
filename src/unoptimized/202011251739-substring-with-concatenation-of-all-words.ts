// 优化思路
// 1. 哈希表; 2. 基于哈希表的滑动窗口, 按照 words 长度步进

export class SubstringWithConcatenationOfAllWords {
    positions: number[] = [];

    findSubstring(s: string, words: string[]): void {
        if (s.length === 0) {
            return;
        }

        if (words.length === 0) {
            return;
        }

        const wordLen = words[0].length;

        for (let i = 0; i < s.length; i++) {
            const word = s.slice(i, i + wordLen);

            // 初次匹配
            if (words.includes(word)) {
                const start = i;
                const end = start + wordLen * words.length;

                const isExactMatch = this.isExactMatch(
                    s.slice(start, end),
                    words);

                if (isExactMatch) {
                    this.positions.push(i);
                }
            }
        }
    }

    isExactMatch(s: string, words: string[]): boolean {
        if (s.length === 0) {
            return false;
        }

        if (words.length === 0) {
            return true;
        }

        const wordLen = words[0].length;

        const totalWordLength = wordLen * words.length;

        if (totalWordLength !== s.length) {
            return false;
        }

        let i = 0;
        while (words.length > 0) {
            const word = s.slice(i * wordLen, (i + 1) * wordLen);

            if (words.includes(word)) {
                words = this.removeOneItemFromArray(words, word);
            } else {
                return false;
            }

            i++;
        }

        return words.length === 0;
    }

    removeOneItemFromArray(items: string[], item: string): string[] {
        const foundIndex = items.findIndex(x => x === item);
        return items.filter((_, index) => index !== foundIndex);
    }
}


export function findSubstring(s: string, words: string[]): number[] {
    const solution = new SubstringWithConcatenationOfAllWords();

    solution.findSubstring(s, words);

    return solution.positions;
}
