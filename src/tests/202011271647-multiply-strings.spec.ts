import {describe, it} from 'mocha';
import {expect} from 'chai';
import {multiply, multiplyDigit, MultiplyResult} from '../unoptimized/202011271647-multiply-strings';

interface TestCase {
    input: { num1: string, num2: string };
    output: string;
}

interface Test2Case {
    input: { sourceStr: string, digitStr: string, padding: number };
    output: MultiplyResult[];
}


describe('reverse-linked-list',
    () => {

        const testCases: Test2Case[] = [
            {
                input: {sourceStr: '999', digitStr: '9', padding: 0},
                output: [
                    {digit1: 8, digit2: 1, padding: 0},
                    {digit1: 8, digit2: 1, padding: 1},
                    {digit1: 8, digit2: 1, padding: 2}
                ]
            },
            {
                input: {sourceStr: '969', digitStr: '9', padding: 1},
                output: [
                    {digit1: 8, digit2: 1, padding: 1},
                    {digit1: 5, digit2: 4, padding: 2},
                    {digit1: 8, digit2: 1, padding: 3}
                ]
            }
        ];

        for (const testCase of testCases) {
            const {sourceStr, digitStr, padding} = testCase.input;
            const {input, output} = testCase;
            it(`${input} should return ${output}`, () => {
                const result = multiplyDigit(sourceStr, digitStr, padding);
                expect(result).to.deep.members(output);
            });
        }
    }
);


describe('reverse-linked-list',
    () => {

        const testCases: TestCase[] = [
            {input: {num1: '0', num2: '0'}, output: '0'},
            {input: {num1: '2', num2: '3'}, output: '6'},
            {input: {num1: '123', num2: '456'}, output: '56088'},
            {input: {num1: '9', num2: '9'}, output: '81'},
            {input: {num1: '9', num2: '99'}, output: '891'},
            {input: {num1: '99', num2: '99'}, output: '9801'},
            {input: {num1: '999', num2: '999'}, output: '998001'},
            {input: {num1: '9999', num2: '9999'}, output: '99980001'},
            {input: {num1: '8'.repeat(109), num2: '8'.repeat(109)}, output: '79012345679012345679012345679012345679012345679012345679012345679012345679012345679012345679012345679012345663209876543209876543209876543209876543209876543209876543209876543209876543209876543209876543209876543209876544'},
        ];

        for (const testCase of testCases) {
            const {num1, num2} = testCase.input;
            const {input, output} = testCase;
            it(`${input} should return ${output}`, () => {
                const result = multiply(num1, num2);
                expect(result).to.equal(output);
            });
        }
    }
);
