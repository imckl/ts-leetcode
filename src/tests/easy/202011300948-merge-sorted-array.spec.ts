import {describe, it} from 'mocha';
import {expect} from 'chai';
import {merge} from '../../unoptimized/202011300948-merge-sorted-array';

interface TestCase {
    input: {
        nums1: number[],
        m: number,
        nums2: number[],
        n: number
    },
    output: number[]
}

describe('maximum-depth-of-binary-tree',
    () => {
        const testCases: TestCase[] = [
            {
                input: {nums1: [1, 2, 3, 0, 0, 0], m: 3, nums2: [2, 5, 6], n: 3},
                output: [1, 2, 2, 3, 5, 6]
            },
            {
                input: {nums1: [1, 0], m: 1, nums2: [1], n: 1},
                output: [1, 1]
            },
            {
                input: {nums1: [2, 0, 0], m: 1, nums2: [0, 1], n: 2},
                output: [0, 1, 2]
            },
            {
                input: {nums1: [], m: 0, nums2: [], n: 0},
                output: []
            }
        ];

        for (const testCase of testCases) {
            const {nums1, m, nums2, n} = testCase.input;
            const {input, output} = testCase;
            it(`${input} should return ${output}`, () => {
                merge(nums1, m, nums2, n);
                expect(nums1).to.deep.equal(output);
            });
        }
    }
);
