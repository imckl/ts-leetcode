import {describe, it} from 'mocha';
import {expect} from 'chai';
import {reverseString} from '../202011291130-reverse-string';

interface TestCase {
    input: string[];
    output: string[];
}

describe('reverse-string',
    () => {
        const testCases: TestCase[] = [
            {input: ['h', 'e', 'l', 'l', 'o'], output: ['o', 'l', 'l', 'e', 'h']},
            {input: ['H', 'a', 'n', 'n', 'a', 'h'], output: ['h', 'a', 'n', 'n', 'a', 'H']}
        ];

        for (const testCase of testCases) {
            const {input, output} = testCase;
            it(`${input} should return ${output}`, () => {
                reverseString(input);
                expect(input).to.deep.equal(output);
            });
        }
    }
);
