import {describe, it} from 'mocha';
import {expect} from 'chai';
import {ListNode} from '../presets/list-node';
import {mergeKLists} from '../unoptimized/202011250905-merge-k-sorted-lists';

interface TestCase {
    input: ListNode[];
    output: ListNode;
}

describe('container-with-most-water',
    () => {
        const testCases: TestCase[] = [
            {
                input: [
                    new ListNode(1, new ListNode(4, new ListNode(5))),
                    new ListNode(1, new ListNode(3, new ListNode(4))),
                    new ListNode(2, new ListNode(6))
                ],
                output: new ListNode(1,
                    new ListNode(1,
                        new ListNode(2,
                            new ListNode(3,
                                new ListNode(4,
                                    new ListNode(4,
                                        new ListNode(5,
                                            new ListNode(6))))))))
            },
            {
                input: [],
                output: null
            },
            {
                input: [null],
                output: null
            },
            {
                input: [
                    new ListNode(1, new ListNode(2, new ListNode(4))),
                    new ListNode(1, new ListNode(3, new ListNode(4)))
                ],
                output: new ListNode(1,
                    new ListNode(1,
                        new ListNode(2,
                            new ListNode(3,
                                new ListNode(4,
                                    new ListNode(4))))))
            }
        ];

        for (const testCase of testCases) {
            const {input, output} = testCase;
            it(`${input} should return ${output}`, () => {
                const result = mergeKLists(input);
                expect(result).to.deep.equal(output);
            });
        }
    }
);
