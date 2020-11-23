// https://leetcode-cn.com/problems/integer-to-roman

// const romanToIntMap = {
//     'M': 1000,
//     'CM': 900,
//     'D': 500,
//     'CD': 400,
//     'C': 100,
//     'XC': 90,
//     'L': 50,
//     'XL': 40,
//     'X': 10,
//     'IX': 9,
//     'V': 5,
//     'IV': 4,
//     'I': 1
// };
//
// const romanToIntList = Object.entries(romanToIntMap).map(x => ({
//     'letter': x[0],
//     'digit': x[1]
// }));

export function intToRoman(num: number): string {
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

    let roman = '';
    let i = 0;
    while (num > 0) {
        const {letter, digit} = romanToIntList[i];
        if (num >= digit) {
            roman += letter;
            num -= digit;
        } else {
            i++;
        }
    }

    return roman;
}
