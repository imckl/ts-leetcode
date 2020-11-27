import {describe, it} from 'mocha';
import {expect} from 'chai';
import {majorityElement} from '../202011271605-majority-element';

interface TestCase {
    input: number[];
    output: number;
}

describe('reverse-linked-list',
    () => {

        const testCases: TestCase[] = [
            {input: [3, 2, 3], output: 3},
            {input: [2, 2, 1, 1, 1, 2, 2], output: 2}
        ];

        for (const testCase of testCases) {
            const {input, output} = testCase;
            it(`${input} should return ${output}`, () => {
                const result = majorityElement(input);
                expect(result).to.equal(output);
            });
        }
    }
);
