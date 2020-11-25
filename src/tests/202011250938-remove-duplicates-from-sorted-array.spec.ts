import {describe, it} from 'mocha';
import {expect} from 'chai';
import {removeDuplicates} from '../202011250938-remove-duplicates-from-sorted-array';

interface TestCase {
    input: number[];
    output: number;
}

describe('container-with-most-water',
    () => {
        const testCases: TestCase[] = [
            {input: [1, 1, 2], output: 2},
            {input: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4], output: 5},
            {input: [], output: 0},
            {input: [1], output: 1}
        ];

        for (const testCase of testCases) {
            const {input, output} = testCase;
            it(`${input} should return ${output}`, () => {
                const result = removeDuplicates(input);
                expect(result).to.deep.equal(output);
            });
        }
    }
);
