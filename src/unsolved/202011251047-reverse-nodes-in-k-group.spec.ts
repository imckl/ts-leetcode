import {describe, it} from 'mocha';
import {expect} from 'chai';
import {ListNode} from '../presets/list-node';
import {reverse, reverseOne} from './202011251047-reverse-nodes-in-k-group';

interface TestCase {
    input: {
        head: ListNode,
        n: number
    };
    output: ListNode;
}

interface Test2Case {
    input: {
        head: ListNode,
        left: number,
        right: number
    };
    output: ListNode;
}

describe('container-with-most-water',
    () => {
        // const testCases: TestCase[] = [
        //     {
        //         input:{
        //             head:  new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))),
        //             n: 4
        //         },
        //         output: new ListNode(4, new ListNode(2, new ListNode(3, new ListNode(1, new ListNode(5)))))
        //     },
        // ];

        const test2Cases: Test2Case[] = [
            {
                input: {
                    head: new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))),
                    left: 0,
                    right: 0
                },
                output: new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
            },
            {
                input: {
                    head: new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))),
                    left: 0,
                    right: 1
                },
                output: new ListNode(2, new ListNode(1, new ListNode(3, new ListNode(4, new ListNode(5)))))
            },
            {
                input: {
                    head: new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))),
                    left: 0,
                    right: 2
                },
                output: new ListNode(3, new ListNode(2, new ListNode(1, new ListNode(4, new ListNode(5)))))
            },
            {
                input: {
                    head: new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))),
                    left: 0,
                    right: 3
                },
                output: new ListNode(4, new ListNode(2, new ListNode(3, new ListNode(1, new ListNode(5)))))
            },
            {
                input: {
                    head: new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))),
                    left: 0,
                    right: 4
                },
                output: new ListNode(5, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(1)))))
            },
            {
                input: {
                    head: new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))),
                    left: 1,
                    right: 3
                },
                output: new ListNode(1, new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(5)))))
            },
        ];

        for (const test2Case of test2Cases) {
            const {head, left, right} = test2Case.input;
            const {input, output} = test2Case;
            it(`${input} should return ${output}`, () => {
                const result = reverseOne(head, left, right);
                expect(result).to.deep.equal(output);
            });
        }
    }
);
