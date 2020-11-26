import {describe, it} from 'mocha';
import {expect} from 'chai';
import {hasCycle} from '../202011261555-linked-list-cycle';
import {ListNode} from '../presets/list-node';

interface TestCase {
    input: ListNode;
    output: boolean;
}

describe('reverse-linked-list',
    () => {
        const node1 = new ListNode(3);
        const node2 = new ListNode(2);
        const node3 = new ListNode(0);
        const node4 = new ListNode(-4);
        node1.next = node2;
        node2.next = node3;
        node3.next = node4;
        node4.next = node2;

        const testCases: TestCase[] = [
            {input: node1, output: true},
            {input: new ListNode(1, new ListNode(2)), output: false}
        ];

        for (const testCase of testCases) {
            const {input, output} = testCase;
            it(`${input} should return ${output}`, () => {
                const result = hasCycle(input);
                expect(result).to.equal(output);
            });
        }
    }
);
