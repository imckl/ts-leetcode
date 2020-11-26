import {describe, it} from 'mocha';
import {expect} from 'chai';
import {climbStairs} from '../unoptimized/202011260933-climbing-stairs';

interface TestCase {
    input: number;
    output: number;
}

describe('reverse-linked-list',
    () => {
        const testCases: TestCase[] = [
            {input: 1, output: 1},
            {input: 2, output: 2},
            {input: 5, output: 8}
        ];

        for (const testCase of testCases) {
            const {input, output} = testCase;
            it(`${input} should return ${output}`, () => {
                const result = climbStairs(input);
                expect(result).to.deep.equal(output);
            });
        }
    }
);
