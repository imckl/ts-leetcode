import {ListNode} from './presets/list-node';

export function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const dummy = new ListNode(0);

    let node1: ListNode | null = l1;
    let node2: ListNode | null = l2;
    let node = dummy;
    while (node1 && node2) {
        if (node1.val < node2.val) {
            node.next = node1;
            node = node.next;

            node1 = node1.next;
        } else {
            node.next = node2;
            node = node.next;

            node2 = node2.next;
        }
    }

    if (node1) {
        node.next = node1;
    }

    if (node2) {
        node.next = node2;
    }

    return dummy.next;
}
