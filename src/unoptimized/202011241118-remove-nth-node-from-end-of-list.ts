import {ListNode} from '../presets/list-node';

export function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (!head) {
        return null;
    }

    const dummy = new ListNode(0, head);
    const nodes: ListNode[] = [];

    let node: ListNode | null = dummy;
    while (node) {
        nodes.push(node);
        node = node.next;
    }

    for (let i = 0; i < n; i++) {
        nodes.pop();
    }

    const last = nodes[nodes.length - 1];
    last.next = last.next ? last.next.next : null;

    return dummy.next;
}
