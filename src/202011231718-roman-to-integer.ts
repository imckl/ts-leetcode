// https://leetcode-cn.com/problems/roman-to-integer/

export function romanToInt(s: string): number {
    const romanToIntList = [
        {letter: 'M', digit: 1000},
        {letter: 'CM', digit: 900},
        {letter: 'D', digit: 500},
        {letter: 'CD', digit: 400},
        {letter: 'C', digit: 100},
        {letter: 'XC', digit: 90},
        {letter: 'L', digit: 50},
        {letter: 'XL', digit: 40},
        {letter: 'X', digit: 10},
        {letter: 'IX', digit: 9},
        {letter: 'V', digit: 5},
        {letter: 'IV', digit: 4},
        {letter: 'I', digit: 1}
    ];

    let num = 0;
    let i = 0;
    while (s.length !== 0 && i < romanToIntList.length) {
        const {letter, digit} = romanToIntList[i];
        if (s.startsWith(letter)) {
            num += digit;
            s = s.slice(letter.length);
        } else {
            i++;
        }
    }

    return num;
}
