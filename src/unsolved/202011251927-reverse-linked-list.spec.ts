import {describe, it} from 'mocha';
import {expect} from 'chai';
import {reverseList} from './202011251927-reverse-linked-list';
import {ListNode} from '../presets/list-node';

interface TestCase {
    input: ListNode;
    output: ListNode;
}

describe('reverse-linked-list',
    () => {
        const testCases: TestCase[] = [
            {
                input: new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4)))),
                output: new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(1))))
            },
            {
                input: new ListNode(1),
                output: new ListNode(1)
            }
        ];

        for (const testCase of testCases) {
            const {input, output} = testCase;
            it(`${input} should return ${output}`, () => {
                const result = reverseList(input);
                expect(result).to.deep.equal(output);
            });
        }
    }
);
