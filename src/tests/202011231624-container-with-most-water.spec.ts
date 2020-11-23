import {describe, it} from 'mocha';
import {expect} from 'chai';
import {maxArea} from '../202011231624-container-with-most-water';

interface TestCase {
    input: number[];
    output: number;
}

describe('container-with-most-water',
    () => {
        const testCases: TestCase[] = [
            {input: [1, 8, 6, 2, 5, 4, 8, 3, 7], output: 49},
            {input: [1, 1], output: 1},
            {input: [4, 3, 2, 1, 4], output: 16},
            {input: [1, 2, 1], output: 2}
        ];

        for (const testCase of testCases) {
            const {input, output} = testCase;
            it(`${input} should return ${output}`, () => {
                expect(maxArea(input)).to.equal(output);
            });
        }
    }
);
