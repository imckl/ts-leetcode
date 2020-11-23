import {describe, it} from 'mocha';
import {expect} from 'chai';
import {threeSum} from '../202011231823-3sum';

interface TestCase {
    input: number[];
    output: number[][];
}

describe('container-with-most-water',
    () => {
        const testCases: TestCase[] = [
            {input: [-1, 0, 1, 2, -1, -4], output: [[-1, 0, 1], [-1, -1, 2]]},
            {
                input: [-4, -1, -1, -1, -1, -1, 0, 1, 2, 2, 2, 2, 2, 3],
                output: [[-4, 1, 3], [-4, 2, 2], [-1, -1, 2], [-1, 0, 1]]
            },
            {input: [0, 0], output: []},
            {input: [0, 0, 0], output: [[0, 0, 0]]},
            {
                input: [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4],
                output: [[-4, 0, 4], [-4, 1, 3], [-3, -1, 4], [-3, 0, 3], [-3, 1, 2], [-2, -1, 3], [-2, 0, 2], [-1, -1, 2], [-1, 0, 1]]
            }
        ];

        for (const testCase of testCases) {
            const {input, output} = testCase;
            it(`${input} should return ${output}`, () => {
                const result = threeSum(input);
                expect(result).to.deep.members(output);
            });
        }
    }
);
