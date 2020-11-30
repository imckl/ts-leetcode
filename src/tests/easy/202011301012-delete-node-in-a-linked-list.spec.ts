import {describe, it} from 'mocha';
import {expect} from 'chai';
import {ListNode} from '../../presets/list-node';
import {deleteNode} from '../../easy/202011301012-delete-node-in-a-linked-list';

interface TestCase {
    input: {
        head: ListNode,
        root: ListNode
    };
    output: ListNode;
}

describe('maximum-depth-of-binary-tree',
    () => {
        const tails1 = new ListNode(1, new ListNode(9));
        const root1 = new ListNode(5, tails1);

        const testCases: TestCase[] = [
            {
                input: {
                    head: new ListNode(4, root1),
                    root: root1
                },
                output: new ListNode(4, tails1)
            }
        ];

        for (const testCase of testCases) {
            const {root, head} = testCase.input;
            const {input, output} = testCase;
            it(`${input} should return ${output}`, () => {
                deleteNode(root);
                expect(head).to.deep.equal(output);
            });
        }
    }
);
