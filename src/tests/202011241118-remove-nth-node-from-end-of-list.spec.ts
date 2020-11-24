import {describe, it} from 'mocha';
import {expect} from 'chai';
import {ListNode} from '../presets/list-node';
import {removeNthFromEnd} from '../unoptimized/202011241118-remove-nth-node-from-end-of-list';

interface TestCase {
    input: {
        head: ListNode,
        n: number
    };
    output: ListNode;
}

describe('container-with-most-water',
    () => {
        const testCases: TestCase[] = [
            {
                input: {
                    head: new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))),
                    n: 2
                },
                output: new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(5))))
            },
            {
                input: {head: new ListNode(1, new ListNode(2)), n: 1},
                output: new ListNode(1),
            },
            {
                input: {head: new ListNode(1), n: 1},
                output: null,
            }
        ];

        for (const testCase of testCases) {
            const {head, n} = testCase.input;
            const {input, output} = testCase;
            it(`${input} should return ${output}`, () => {
                const result = removeNthFromEnd(head, n);
                expect(result).to.deep.equal(output);
            });
        }
    }
);
