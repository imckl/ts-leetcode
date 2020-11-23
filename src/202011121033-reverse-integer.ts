export function reverseInteger(x: number): number {
    const maxInt = 2 ** 31 - 1;
    const minInt = -(2 ** 31);

    const base = 10;

    let num = x;
    let newNum = 0;

    while (num !== 0) {
        const val = num % base;
        newNum = newNum * base + val;

        if (!(minInt <= newNum && newNum <= maxInt)) {
            return 0;
        }

        num = (num - val) / base;
    }

    return newNum;
}
