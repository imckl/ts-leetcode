import {describe, it} from 'mocha';
import {expect} from 'chai';
import {lengthOfLIS} from '../../202012/202012151454-longest-increasing-subsequence';

interface TestAction {
    input: number[];
    output: number;
}

describe('longest-increasing-subsequence',
    () => {
        const testActions: TestAction[] = [
            {input: [10, 9, 2, 5, 3, 7, 101, 18], output: 4},
            {input: [0, 1, 0, 3, 2, 3], output: 4}
        ];

        for (const testAction of testActions) {
            const {input, output} = testAction;
            it(`${input} should return ${output}`, () => {
                expect(lengthOfLIS(input)).to.equal(output);
            });
        }
    }
);
