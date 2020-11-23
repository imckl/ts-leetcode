import {describe, it} from 'mocha';
import {expect} from 'chai';
import {intToRoman} from '../202011231642-integer-to-roman';

interface TestCase {
    input: number;
    output: string;
}

describe('container-with-most-water',
    () => {
        const testCases: TestCase[] = [
            {input: 3, output: 'III'},
            {input: 4, output: 'IV'},
            {input: 9, output: 'IX'},
            {input: 58, output: 'LVIII'},
            {input: 1994, output: 'MCMXCIV'},
            {input: 3999, output: 'MMMCMXCIX'}
        ];

        for (const testCase of testCases) {
            const {input, output} = testCase;
            it(`${input} should return ${output}`, () => {
                expect(intToRoman(input)).to.equal(output);
            });
        }
    }
);
