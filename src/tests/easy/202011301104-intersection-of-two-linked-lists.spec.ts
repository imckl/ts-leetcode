import {describe, it} from 'mocha';
import {expect} from 'chai';
import {ListNode} from '../../presets/list-node';
import {getIntersectionNode} from '../../easy/202011301104-intersection-of-two-linked-lists';

interface TestCase {
    input: {
        headA: ListNode,
        headB: ListNode
    };
    output: ListNode;
}

describe('maximum-depth-of-binary-tree',
    () => {
        const part1 = new ListNode(2, new ListNode(4));
        const headA1 = new ListNode(0, new ListNode(9, new ListNode(1, part1)));
        const headB1 = new ListNode(3, part1);

        const part2 = new ListNode(8, new ListNode(4, new ListNode(5)));
        const headA2 = new ListNode(4, new ListNode(1, part2));
        const headB2 = new ListNode(5, new ListNode(0, new ListNode(1, part2)));

        const part3: ListNode = null;
        const headA3 = new ListNode(2, new ListNode(6, new ListNode(4, part3)));
        const headB3 = new ListNode(1, new ListNode(5, null));

        const testCases: TestCase[] = [
            {
                input: {
                    headA: headA1,
                    headB: headB1
                },
                output: part1
            },
            {
                input: {
                    headA: headA2,
                    headB: headB2
                },
                output: part2
            },
            {
                input: {
                    headA: headA3,
                    headB: headB3
                },
                output: part3
            }
        ];

        for (const testCase of testCases) {
            const {headA, headB} = testCase.input;
            const {input, output} = testCase;
            it(`${input} should return ${output}`, () => {
                const result = getIntersectionNode(headA, headB);
                expect(result).to.equal(output);
            });
        }
    }
);
