export function reverseString(s: string[]): void {
    // const mid = s.length >> 1 << 1 / 2;
    let l = 0;
    let r = s.length - 1;
    while (l < r) {
        [s[l], s[r]] = [s[r], s[l]];

        l++;
        r--;
    }
}
