import {describe, it} from 'mocha';
import {longestPalindrome} from '../202011201425-longest-palindromic-substring';
import {expect} from 'chai';

interface TestAction {
    input: string;
    output: string;
}

describe('longest-palindromic-substring',
    () => {
        const testActions: TestAction[] = [
            {input: '', output: ''},
            {input: '121', output: '121'},
            {input: 'abc', output: 'a'},
            {input: 'kadredividerkikinnikinnik', output: 'kinnikinnik'},
            {input: 'abcdedcbaabcdedc', output: 'cdedcbaabcdedc'},
            {input: 'aacabdkacaa', output: 'aca'}
        ];

        for (const testAction of testActions) {
            it(`${testAction.input} should return ${testAction.output}`, () => {
                expect(longestPalindrome(testAction.input)).to.equal(testAction.output);
            });
        }
    });
