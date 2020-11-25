import {describe, it} from 'mocha';
import {expect} from 'chai';
import {divide} from './202011251634-divide-two-integers';

interface TestCase {
    input: {
        dividend: number,
        divisor: number
    }
    output: number;
}

describe('container-with-most-water',
    () => {
        const maxInt = 2 ** 31 - 1;
        const minInt = -(2 ** 31);

        const testCases: TestCase[] = [
            {input: {dividend: 10, divisor: 3}, output: 3},
            {input: {dividend: 10, divisor: -3}, output: -3},
            {input: {dividend: -10, divisor: 3}, output: -3},
            {input: {dividend: -10, divisor: -3}, output: 3},
            {input: {dividend: 7, divisor: -3}, output: -2},
            {input: {dividend: -1, divisor: -1}, output: 1},
            {input: {dividend: -2, divisor: -1}, output: 2},
            {input: {dividend: -1, divisor: -2}, output: 0},
            {input: {dividend: 9, divisor: 3}, output: 3},
            {input: {dividend: -(2 ** 31), divisor: 1}, output: -(2 ** 31)},
            {input: {dividend: -(2 ** 31), divisor: -1}, output: 2 ** 31 - 1},
            {input: {dividend: -(2 ** 31), divisor: 1}, output: -(2 ** 31)},
            {input: {dividend: minInt, divisor: -1}, output: maxInt},
            {input: {dividend: minInt, divisor: 1}, output: minInt},
            {input: {dividend: maxInt, divisor: 1}, output: maxInt},
        ];

        for (const testCase of testCases) {
            const {dividend, divisor} = testCase.input;
            const {input, output} = testCase;
            it(`${input} should return ${output}`, () => {
                const result = divide(dividend, divisor);
                expect(result).to.equal(output);
            }).timeout(1000 * 10);
        }
    }
);
