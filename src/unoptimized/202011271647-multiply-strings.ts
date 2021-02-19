export interface MultiplyResult {
    digit1: number;
    digit2: number;
    padding: number;
}

const strToDigitMap = new Map<string, number>([
    ['1', 1],
    ['2', 2],
    ['3', 3],
    ['4', 4],
    ['5', 5],
    ['6', 6],
    ['7', 7],
    ['8', 8],
    ['9', 9],
    ['0', 0],
]);

const digitToStrMap = new Map<number, string>([
    [1, '1'],
    [2, '2'],
    [3, '3'],
    [4, '4'],
    [5, '5'],
    [6, '6'],
    [7, '7'],
    [8, '8'],
    [9, '9'],
    [0, '0'],
]);

export function multiply(num1: string, num2: string): string {
    const resArr: MultiplyResult[] = [];

    for (let i = 0; i < num2.length; i++) {
        resArr.push(...multiplyDigit(num1, num2[i], num2.length - 1 - i));
    }

    const resStr = resArr.map(x => multiplyResultToString(x));

    let res = resStr.reduce((sum, s) => addStr(sum, s), '');

    let j = 0;
    while (res[j] === '0') {
        j++;
    }

    res = res.slice(j);

    if (res === '') {
        return '0';
    }

    return res;
}

export function multiplyDigit(sourceStr: string, digitStr: string, padding: number): MultiplyResult[] {
    const resArr: MultiplyResult[] = [];

    const multiplier = strToDigitMap.get(digitStr) as number;

    for (let i = 0; i < sourceStr.length; i++) {
        const multiplicand = strToDigitMap.get(sourceStr[i]) as number;
        const product = multiplicand * multiplier;
        const digit2 = product % 10;
        const digit1 = (product - digit2) / 10;
        resArr.push({digit1, digit2, padding: sourceStr.length - 1 - i + padding});
    }

    return resArr;
}

function addStr(num1Str: string, num2Str: string): string {
    let res = '';

    let i = 0;
    let step = 0;
    while (num1Str[num1Str.length - 1 - i] && num2Str[num2Str.length - 1 - i]) {
        const num = strToDigitMap.get(num1Str[num1Str.length - 1 - i]) + strToDigitMap.get(num2Str[num2Str.length - 1 - i]);
        const digit = (num + step) % 10;
        res = digitToStrMap.get(digit) + res;
        step = (num + step) >= 10 ? 1 : 0;
        i++;
    }

    while (num1Str[num1Str.length - 1 - i]) {
        const num = strToDigitMap.get(num1Str[num1Str.length - 1 - i]);
        const digit = (num + step) % 10;
        res = digitToStrMap.get(digit) + res;
        step = (num + step) >= 10 ? 1 : 0;
        i++;
    }

    while (num2Str[num2Str.length - 1 - i]) {
        const num = strToDigitMap.get(num2Str[num2Str.length - 1 - i]);
        const digit = (num + step) % 10;
        res = digitToStrMap.get(digit) + res;
        step = (num + step) >= 10 ? 1 : 0;
        i++;
    }

    if (step === 1) {
        res = '1' + res;
    }

    return res;
}

function multiplyResultToString(multiplyResult: MultiplyResult): string {
    return (
        digitToStrMap.get(multiplyResult.digit1) +
        digitToStrMap.get(multiplyResult.digit2) +
        '0'.repeat(multiplyResult.padding));
}
