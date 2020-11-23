// https://leetcode-cn.com/problems/add-two-numbers/

import {ListNode} from '../presets/list-node';

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if (!l1 && !l2) {
        return null;
    } else if (!l1) {
        return l2;
    } else if (!l2) {
        return l1;
    }

    let n1 = l1;
    let n2 = l2;
    let shouldPlusOne = false;

    for(; n1 && n2; n1 = n1.next, n2 = n2.next){
        const calcVal = n1.val + n2.val;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        shouldPlusOne = calcVal >= 10;

        l1.val = calcVal % 10;
    }
}


/**
 * Obsolete, JS中 number 有最大值
 * @param l1
 * @param l2
 */
export function addTwoNumbers_1(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const val1 = l1 ? _generateNumberFromListNode(l1, 0, 0) : 0;
    const val2 = l2 ? _generateNumberFromListNode(l2, 0, 0) : 0;
    const val = val1 + val2;

    const ln = new ListNode();

    _generateListNodesFromNumber(val, ln);

    return ln;
}

function _generateNumberFromListNode(ln: ListNode, input: number, pos: number): number {
    const coefficient = Math.pow(10, pos);
    const output = input + (ln.val * coefficient);

    if (ln.next) {
        return _generateNumberFromListNode(ln.next, output, pos + 1);
    } else {
        console.log(output);
        return output;
    }
}

function _generateListNodesFromNumber(val: number, ln: ListNode): ListNode {
    const currentVal = val - Math.floor(val / 10) * 10;
    const nextVal = Math.floor(val / 10);

    ln.val = currentVal;

    if (nextVal === 0) {
        // console.log(ln);
        return ln;
    } else {
        const lnNext = new ListNode();
        ln.next = lnNext;
        // console.log(ln);
        return _generateListNodesFromNumber(nextVal, lnNext);
    }
}

// const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
// const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

// console.log(addTwoNumbers(
//     new ListNode(2, new ListNode(4, new ListNode(3))),
//     new ListNode(5, new ListNode(6, new ListNode(4)))
// ));
// console.log(addTwoNumbers(new ListNode(), new ListNode()));
// console.log(addTwoNumbers(
//     new ListNode(9, new ListNode(9)),
//     new ListNode(9, new ListNode(9, new ListNode(9)))
// ));
// console.log(addTwoNumbers(
//     new ListNode(9, new ListNode(9, new ListNode(9))),
//     new ListNode(9, new ListNode(9))
// ));
// console.log(addTwoNumbers(
//     new ListNode(9),
//     new ListNode(9, new ListNode(9))
// ));

console.log(addTwoNumbers(
    new ListNode(1,
        new ListNode(0,
            new ListNode(0,
                new ListNode(0,
                    new ListNode(0,
                        new ListNode(0,
                            new ListNode(0,
                                new ListNode(6)))))))),
    new ListNode(5,
        new ListNode(6,
            new ListNode(4)))
));
