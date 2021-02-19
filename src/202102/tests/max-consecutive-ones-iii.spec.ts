import {describe, it} from 'mocha';
import {expect} from 'chai';
import {longestOnes} from '../max-consecutive-ones-iii';

interface TestCase {
    input: { A: number[], K: number };
    output: number;
}

describe('zigzag-conversion',
    () => {
        const testCases: TestCase[] = [
            {input: {A: [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], K: 2}, output: 6},
            {input: {A: [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], K: 3}, output: 10},
            {input: {A: [1, 0], K: 2}, output: 2},
            {input: {A: [0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0], K: 0}, output: 4},
            {input: {A: [0, 0, 0, 0, 0, 0, 0], K: 0}, output: 0}
        ];

        for (const testCase of testCases) {
            const {input, output} = testCase;
            const {A, K} = input;
            it(`${input} should return ${output}`, () => {
                expect(longestOnes(A, K)).to.equal(output);
            });
        }
    }
);
