import {describe, it} from 'mocha';
import {expect} from 'chai';
import {singleNumber} from '../202011291121-single-number';

interface TestCase {
    input: number[];
    output: number;
}

describe('reverse-linked-list',
    () => {

        const testCases: TestCase[] = [
            {input: [2,2,1], output: 1},
            {input: [4,1,2,1,2], output: 4}
        ];

        for (const testCase of testCases) {
            const {input, output} = testCase;
            it(`${input} should return ${output}`, () => {
                const result = singleNumber(input);
                expect(result).to.equal(output);
            });
        }
    }
);
