import {ListNode} from '../presets/list-node';

export function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    const lengthA = getLength(headA);
    const lengthB = getLength(headB);

    let [fast, slow] = lengthA > lengthB ? [headA, headB] : [headB, headA];
    const distance = Math.abs(lengthA - lengthB);

    for (let i = 0; i < distance; i++) {
        fast = fast.next;
    }

    while (fast) {
        if (fast === slow) {
            return fast;
        }
        fast = fast.next;
        slow = slow.next;
    }

    return null;
}

function getLength(head: ListNode | null): number {
    if (!head) {
        return 0;
    }

    let length = 0;

    let node: ListNode | null = head;
    while (node) {
        node = node.next;
        length++;
    }

    return length;
}
