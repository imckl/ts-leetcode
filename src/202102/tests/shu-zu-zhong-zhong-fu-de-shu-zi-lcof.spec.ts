import {describe, it} from 'mocha';
import {expect} from 'chai';
import {findRepeatNumber} from '../shu-zu-zhong-zhong-fu-de-shu-zi-lcof';

interface TestCase {
    input: number[];
    output: number[];
}

describe('zigzag-conversion',
    () => {
        const testCases: TestCase[] = [
            {input: [2, 3, 1, 0, 2, 5, 3], output: [2, 3]},
        ];

        for (const testCase of testCases) {
            const {input, output} = testCase;
            it(`${input} should return ${output}`, () => {
                expect(output).contain(findRepeatNumber(input));
            });
        }
    }
);
