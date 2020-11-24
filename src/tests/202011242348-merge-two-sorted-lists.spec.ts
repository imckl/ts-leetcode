import {describe, it} from 'mocha';
import {expect} from 'chai';
import {ListNode} from '../presets/list-node';
import {mergeTwoLists} from '../202011242348-merge-two-sorted-lists';

interface TestCase {
    input: {
        l1: ListNode,
        l2: ListNode
    };
    output: ListNode;
}

describe('container-with-most-water',
    () => {
        const testCases: TestCase[] = [
            {
                input: {
                    l1: new ListNode(1, new ListNode(2, new ListNode(4))),
                    l2: new ListNode(1, new ListNode(3, new ListNode(4)))
                },
                output: new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4))))))
            },
            {
                input: {
                    l1: null,
                    l2: null
                },
                output: null
            },
            {
                input: {
                    l1: new ListNode(1, new ListNode(2, new ListNode(4))),
                    l2: null
                },
                output: new ListNode(1, new ListNode(2, new ListNode(4)))
            },
            {
                input: {
                    l1: null,
                    l2: new ListNode(1, new ListNode(3, new ListNode(4)))
                },
                output: new ListNode(1, new ListNode(3, new ListNode(4)))
            }
        ];

        for (const testCase of testCases) {
            const {l1, l2} = testCase.input;
            const {input, output} = testCase;
            it(`${input} should return ${output}`, () => {
                const result = mergeTwoLists(l1, l2);
                expect(result).to.deep.equal(output);
            });
        }
    }
);
