import {describe, it} from 'mocha';
import {expect} from 'chai';
import {addStrings} from '../../easy/202011301519-add-strings';

interface TestCase {
    input: {
        num1: string,
        num2: string
    };
    output: string;
}

describe('maximum-depth-of-binary-tree',
    () => {
        const testCases: TestCase[] = [
            {input: {num1: '999', num2: '99'}, output: '1098'},
            {input: {num1: '0', num2: '0'}, output: '0'},
            {input: {num1: '', num2: '1'}, output: '1'},
            {input: {num1: '1', num2: ''}, output: '1'},
            {input: {num1: '', num2: ''}, output: '0'},
        ];

        for (const testCase of testCases) {
            const {num1, num2} = testCase.input;
            const {input, output} = testCase;
            it(`${input} should return ${output}`, () => {
                const result = addStrings(num1, num2);
                expect(result).to.equal(output);
            });
        }
    }
);
