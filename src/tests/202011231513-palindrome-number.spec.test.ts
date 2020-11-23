import {describe, it} from 'mocha';
import {expect} from 'chai';
import {isPalindrome} from '../202011231513-palindrome-number';

interface TestAction {
    input: number;
    output: boolean;
}

describe('palindrome-number',
    () => {
        const testActions: TestAction[] = [
            {input: 12, output: false},
            {input: 121, output: true},
            {input: 0, output: true}
        ];

        for (const testAction of testActions) {
            const {input, output} = testAction;
            it(`${input} should return ${output}`, () => {
                expect(isPalindrome(input)).to.equal(output);
            });
        }
    }
);
