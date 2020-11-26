import {describe, it} from 'mocha';
import {expect} from 'chai';
import {maxSubArray} from '../unoptimized/202011261445-maximum-subarray';

interface TestCase {
    input: number[];
    output: number;
}

describe('reverse-linked-list',
    () => {
        const testCases: TestCase[] = [
            {input: [-2,1,-3,4,-1,2,1,-5,4], output: 6},
            {input: [-1, -2], output: -1}
        ];

        for (const testCase of testCases) {
            const {input, output} = testCase;
            it(`${input} should return ${output}`, () => {
                const result = maxSubArray(input);
                expect(result).to.equal(output);
            });
        }
    }
);
