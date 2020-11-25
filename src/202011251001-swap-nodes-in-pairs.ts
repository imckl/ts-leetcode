import {ListNode} from './presets/list-node';

export function swapPairs(head: ListNode | null): ListNode | null {
    if (!head) {
        return null;
    }

    if (!head.next) {
        return head;
    }

    const dummy = new ListNode(Number.NEGATIVE_INFINITY, head);

    let node = dummy;
    while (node && node.next && node.next.next) {
        const node0 = node;
        const node1 = node.next;
        const node2 = node.next.next;

        node0.next = node2;
        node1.next = node2.next;
        node2.next = node1;

        node = node.next.next;
    }

    return dummy.next;
}
