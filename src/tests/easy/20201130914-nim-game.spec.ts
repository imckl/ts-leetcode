import {describe, it} from 'mocha';
import {expect} from 'chai';
import {canWinNim} from '../../easy/20201130914-nim-game';

interface TestCase {
    input: number;
    output: boolean;
}

describe('nim-game',
    () => {
        const testCases: TestCase[] = [
            {input: 4, output: false},
            {input: 1, output: true},
            {input: 2, output: true}
        ];

        for (const testCase of testCases) {
            const {input, output} = testCase;
            it(`${input} should return ${output}`, () => {
                const result = canWinNim(input);
                expect(result).to.equal(output);
            });
        }
    }
);
