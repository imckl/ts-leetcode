import {describe, it} from 'mocha';
import {expect} from 'chai';
import {maxProfit} from '../../easy/202011291801-best-time-to-buy-and-sell-stock';

interface TestCase {
    input: number[];
    output: number;
}

describe('reverse-string',
    () => {
        const testCases: TestCase[] = [
            {input: [7, 1, 5, 3, 6, 4], output: 5},
            {input: [7, 6, 4, 3, 1], output: 0},
            {input: [7, 2, 5, 3, 6, 4, 0, 5], output: 5},
            {input: [7, 0, 5, 2, 5, 3, 6, 4, 0, 5], output: 6},
        ];

        for (const testCase of testCases) {
            const {input, output} = testCase;
            it(`${input} should return ${output}`, () => {
                const result = maxProfit(input);
                expect(result).to.equal(output);
            });
        }
    }
);
