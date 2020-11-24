import {describe, it} from 'mocha';
import {expect} from 'chai';
import {fourSum} from '../202011241018-4sum';

interface TestCase {
    input: {
        nums: number[],
        target: number
    };
    output: number[][];
}

describe('container-with-most-water',
    () => {
        const testCases: TestCase[] = [
            {
                input: {nums: [1, 0, -1, 0, -2, 2], target: 0}, output: [
                    [-1, 0, 0, 1],
                    [-2, -1, 1, 2],
                    [-2, 0, 0, 2]
                ]
            },
            {
                input: {nums: [-2, -1, -1, 1, 1, 2, 2], target: 0},
                output: [[-2, -1, 1, 2], [-1, -1, 1, 1]]
            },
            {
                input: {nums: [-1, -5, -5, -3, 2, 5, 0, 4], target: -7},
                output: [[-5, -5, -1, 4], [-5, -3, -1, 2]]
            }
        ];

        for (const testCase of testCases) {
            const {nums, target} = testCase.input;
            const {input, output} = testCase;
            it(`${input} should return ${output}`, () => {
                const result = fourSum(nums, target);
                output.forEach(x => x.sort());
                result.forEach(x => x.sort());
                expect(result).to.deep.members(output);
            });
        }
    }
);
