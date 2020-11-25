import {describe, it} from 'mocha';
import {expect} from 'chai';
import {strStr} from '../unoptimized/202011251618-implement-strstr';

interface TestCase {
    input: {
        haystack: string,
        needle: string
    }
    output: number;
}

describe('container-with-most-water',
    () => {
        const testCases: TestCase[] = [
            {input: {haystack: 'hello', needle: 'll'}, output: 2},
            {input: {haystack: 'aaaaa', needle: 'bba'}, output: -1},
            {input: {haystack: '', needle: '1'}, output: -1},
            {input: {haystack: '', needle: ''}, output: 0},
            {input: {haystack: '123', needle: ''}, output: 0},
        ];

        for (const testCase of testCases) {
            const {haystack, needle} = testCase.input;
            const {input, output} = testCase;
            it(`${input} should return ${output}`, () => {
                const result = strStr(haystack, needle);
                expect(result).to.equal(output);
            });
        }
    }
);
