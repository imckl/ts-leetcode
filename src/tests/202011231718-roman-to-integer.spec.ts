import {describe, it} from 'mocha';
import {expect} from 'chai';
import {romanToInt} from '../202011231718-roman-to-integer';

interface TestCase {
    input: string;
    output: number;
}

describe('container-with-most-water',
    () => {
        const testCases: TestCase[] = [
            {output: 3, input: 'III'},
            {output: 4, input: 'IV'},
            {output: 9, input: 'IX'},
            {output: 58, input: 'LVIII'},
            {output: 1994, input: 'MCMXCIV'},
            {output: 3999, input: 'MMMCMXCIX'}
        ];

        for (const testCase of testCases) {
            const {input, output} = testCase;
            it(`${input} should return ${output}`, () => {
                expect(romanToInt(input)).to.equal(output);
            });
        }
    }
);
