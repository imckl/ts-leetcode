import {describe, it} from 'mocha';
import {expect} from 'chai';
import {isPowerOfTwo} from './202011301630-power-of-two';

interface TestCase {
    input: number;
    output: boolean;
}

describe('add-strings',
    () => {
        const testCases: TestCase[] = [
            {input: -2, output: false},
            {input: 0, output: false},
            {input: 1, output: true},
            {input: 2 ** 10, output: true},
            {input: 2 ** 10 - 1, output: false}
        ];

        for (const testCase of testCases) {
            const {input, output} = testCase;
            it(`${input} should return ${output}`, () => {
                const result = isPowerOfTwo(input);
                expect(result).to.equal(output);
            });
        }
    }
);
