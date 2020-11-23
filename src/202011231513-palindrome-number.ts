export function isPalindrome(x: number): boolean {
    if (x < 0) {
        return false;
    }

    if (0 < x && x < 10) {
        return true;
    }

    const base = 10;
    const digits: number[] = [];

    let num = x;
    while (num !== 0) {
        const digit = num % base;
        num = (num - digit) / base;

        digits.push(digit);
    }

    return _isPalindrome(digits);
}

function _isPalindrome(digits: number[]): boolean {
    const mid = digits.length % 2 === 0
        ? digits.length / 2
        : (digits.length - 1) / 2;

    for (let i = 0; i < mid; i++) {
        if (digits[i] !== digits[digits.length - 1 - i]) {
            return false;
        }
    }

    return true;
}
