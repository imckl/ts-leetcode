import {describe, it} from 'mocha';
import {expect} from 'chai';
import {ListNode} from '../presets/list-node';
import {swapPairs} from '../202011251001-swap-nodes-in-pairs';

interface TestCase {
    input: ListNode;
    output: ListNode;
}

describe('container-with-most-water',
    () => {
        const testCases: TestCase[] = [
            {
                input: new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4)))),
                output: new ListNode(2, new ListNode(1, new ListNode(4, new ListNode(3))))
            },
            {
                input: null,
                output: null,
            },
            {
                input: new ListNode(1),
                output: new ListNode(1)
            },
            {
                input: new ListNode(1, new ListNode(2, new ListNode(3))),
                output: new ListNode(2, new ListNode(1, new ListNode(3)))
            }
        ];

        for (const testCase of testCases) {
            const {input, output} = testCase;
            it(`${input} should return ${output}`, () => {
                const result = swapPairs(input);
                expect(result).to.deep.equal(output);
            });
        }
    }
);
