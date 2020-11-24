import {describe, it} from 'mocha';
import {expect} from 'chai';
import {isValidParentheses} from '../202011241728-valid-parentheses';

interface TestCase {
    input: string;
    output: boolean;
}

describe('container-with-most-water',
    () => {
        const testCases: TestCase[] = [
            {input: '()', output: true},
            {input: '()[]{}', output: true},
            {input: '(]', output: false},
            {input: '([)]', output: false},
            {input: '{[]}', output: true},
            {input: '', output: true},
            {input: '}', output: false}
        ];

        for (const testCase of testCases) {
            const {input, output} = testCase;
            it(`${input} should return ${output}`, () => {
                const result = isValidParentheses(input);
                expect(result).to.deep.equal(output);
            });
        }
    }
);
