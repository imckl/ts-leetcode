import {describe, it} from 'mocha';
import {expect} from 'chai';
import {removeElement} from '../202011251527-remove-element';

interface TestCase {
    input: {
        nums: number[],
        val: number
    }
    output: number[];
}

describe('container-with-most-water',
    () => {
        const testCases: TestCase[] = [
            {input: {nums: [3, 2, 2, 3], val: 3}, output: [2, 2]},
        ];

        for (const testCase of testCases) {
            const {nums, val} = testCase.input;
            const {input, output} = testCase;
            it(`${input} should return ${output}`, () => {
                const length = removeElement(nums, val);
                const result = nums.slice(0, length);
                expect(result).to.deep.members(output);
            });
        }
    }
);
