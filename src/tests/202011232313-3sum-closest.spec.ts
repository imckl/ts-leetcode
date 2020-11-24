import {describe, it} from 'mocha';
import {expect} from 'chai';
import {threeSumClosest} from '../202011232313-3sum-closest';

interface TestCase {
    input: {
        nums: number[];
        target: number;
    };
    output: number;
}

describe('container-with-most-water',
    () => {
        const testCases: TestCase[] = [
            {input: {nums: [-4, -1, 1, 2], target: 1}, output: 2},
            {input: {nums: [-100, -3, 0, 1, 2, 8, 110, 111, 112], target: 7}, output: 7},
            {input: {nums: [0, 1, 2, 3, 4, 5, 6, 18], target: 0}, output: 3},
            {input: {nums: [0, 1, 2, 3, 4, 5, 6, 18], target: 16}, output: 15},
            {input: {nums: [4, 0, 5, -5, 3, 3, 0, -4, -5], target: -2}, output: -2},
        ];

        for (const testCase of testCases) {
            const {nums, target} = testCase.input;
            const {output} = testCase;
            it(`${nums}, ${target} should return ${output}`, () => {
                const result = threeSumClosest(nums, target);
                expect(result).to.equal(output);
            });
        }
    }
);
