import {ListNode} from '../presets/list-node';

export function reverseList(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null;
    let curr: ListNode | null = head;

    while (curr !== null) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
}

export function reverseList2(head: ListNode | null): ListNode | null {
    if (!head) {
        return null;
    }

    const length = getLength(head);

    const dummy: ListNode | null = new ListNode(Number.NEGATIVE_INFINITY, head);
    let dummyNode: ListNode | null = dummy;

    for (let i = 0; i < length; i++) {
        let node: ListNode | null = head;
        for (let j = i; j < length - 1; j++) {
            node = node ? node.next : null;
        }

        if (dummyNode !== null) {
            dummyNode.next = node;
        }
        dummyNode = dummyNode ? dummyNode.next : null;
    }

    if (dummyNode !== null) {
        dummyNode.next = null;
    }

    return dummy.next;
}

function getLength(head: ListNode | null): number {
    let length = 0;

    if (!head) {
        return length;
    }

    let node: ListNode | null = head;
    while (node) {
        node = node.next;
        length++;
    }

    return length;
}
