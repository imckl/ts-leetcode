export function addStrings(num1: string, num2: string): string {
    if (num1.length === 0 && num2.length === 0) {
        return '0';
    }
    if (num1.length === 0) {
        return num2;
    } else if (num2.length === 0) {
        return num1;
    }

    let res = '';

    let i = 0;
    let step = 0;
    while (i < num1.length || i < num2.length) {
        const n1 = num1[num1.length - 1 - i];
        const n2 = num2[num2.length - 1 - i];
        const sum = (n1 ? parseInt(n1) : 0) + (n2 ? parseInt(n2) : 0) + step;
        const digit = sum % 10;
        step = sum >= 10 ? 1 : 0;

        res = digit + res;

        i++;
    }

    if (step !== 0) {
        res = step + res;
    }

    return res;
}
