import {ListNode} from '../presets/list-node';

// export function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
//     let node = head;
//     let slow = head;
//     let fast = head;
//
//     // eslint-disable-next-line no-constant-condition
//     while(true){
//         // 快指针步进 k 个节点, 如果超过末节点, 则保持原有顺序, 返回结果
//         for(let i = k; i < k; i++) {
//             fast = fast.next;
//
//             if (fast === null) {
//                 return head;
//             }
//         }
//
//         // 慢指针进行 i 上标(1) 下标(i=k) 次反转
//         for(let i = k; i < k; i--) {
//
//         }
//     }
//
//
//     while(fast) {
//         fast = fast.next;
//     }
// }

export function reverse(head: ListNode, n: number): ListNode {
    const dummy = new ListNode(Number.NEGATIVE_INFINITY, head);

    let node = dummy.next;

    for (let i = 0; i < n; i++) {
        const l = i + 1;
        const r = n - i;

        node = reverseOne(node, l, r);

        dummy.next = node;
    }

    return head;
}

export function reverseOne(head: ListNode, left: number, right: number): ListNode {
    if (left >= right) {
        return head;
    }

    const dummy = new ListNode(Number.NEGATIVE_INFINITY, head);

    let slow = dummy;
    let fast = dummy;

    for (let i = 0; i < left; i++) {
        slow = slow.next;
    }

    for (let i = 0; i < right; i++) {
        fast = fast.next;
    }

    const s0 = slow;
    const s1 = slow.next;
    const s2 = slow.next.next;
    const f0 = fast;
    const f1 = fast.next;
    const f2 = fast.next.next;

    s0.next = f1;
    s1.next = f2;
    f1.next = s2;
    s2.next = s1;

    // s0.next = f1;
    // f0.next = s1;
    // s1.next = f2;
    // f1.next = s2;

    // s0.next = f1;
    // f1.next = s1;
    // s1.next = f2;
    //
    // node0.next = node4;
    // node4.next = node2;
    // node3.next = node1;
    // node1.next = node5;

    return dummy.next;
}


// export function reverseOne(head: ListNode, left: number, right: number): ListNode {
//     const dummy = new ListNode(Number.NEGATIVE_INFINITY, head);
//
//     let slow = dummy;
//     let fast = dummy;
//
//     for (let i = 0; i < left - 1; i++) {
//         slow = slow.next;
//     }
//
//     for (let i = 0; i < right - 1; i++) {
//         fast = fast.next;
//     }
//
//     const node0 = slow;
//     const node1 = slow.next;
//     const node2 = slow.next.next;
//     const node3 = fast;
//     const node4 = fast.next;
//     const node5 = fast.next.next;
//
//     node0.next = node4;
//     node4.next = node2;
//     node3.next = node1;
//     node1.next = node5;
//
//     return dummy.next;
// }
