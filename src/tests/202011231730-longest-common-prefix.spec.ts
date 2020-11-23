import {describe, it} from 'mocha';
import {expect} from 'chai';
import {longestCommonPrefix} from '../202011231730-longest-common-prefix';

interface TestCase {
    input: string[];
    output: string;
}

describe('container-with-most-water',
    () => {
        const testCases: TestCase[] = [
            {input: ['flower', 'flow', 'flight'], output: 'fl'},
            {input: ['dog', 'racecar', 'car'], output: ''},
            {input: [], output: ''},
        ];

        for (const testCase of testCases) {
            const {input, output} = testCase;
            it(`${input} should return ${output}`, () => {
                expect(longestCommonPrefix(input)).to.equal(output);
            });
        }
    }
);
