const maxInt = 2 ** 31 - 1;
const minInt = -(2 ** 31);

export function divide(dividend: number, divisor: number): number {
    let quotient = 0;

    const isNegativeDividend = dividend < 0;
    const isNegativeDivisor = divisor < 0;

    if (isNegativeDividend) {
        dividend = 0 - dividend;
    }

    if (isNegativeDivisor) {
        divisor = 0 - divisor;
    }

    while (dividend >= divisor) {
        dividend -= divisor;
        quotient++;
    }

    if ((isNegativeDividend && !isNegativeDivisor) || (!isNegativeDividend && isNegativeDivisor)) {
        quotient = 0 - quotient;
    }

    return minInt <= quotient && quotient <= maxInt ? quotient : maxInt;
}
