import {ListNode} from './presets/list-node';

export function hasCycle(head: ListNode | null): boolean {
    if (!head) {
        return false;
    }

    let node: ListNode | null = head;
    while (node) {
        if (node === node.next) {
            return true;
        }

        const currNode = node;

        node = node.next;

        currNode.next = currNode;
    }

    return false;
}

export function hasCycle3(head: ListNode | null): boolean {
    if (!head) {
        return false;
    }

    let fast: ListNode | null = head;
    let slow: ListNode | null = head;

    while (fast && fast.next && slow) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            return true;
        }
    }

    return false;
}


export function hasCycle2(head: ListNode | null): boolean {
    if (!head) {
        return false;
    }

    const maxLength = 10 ** 4;
    const exceedLength = maxLength + 1;

    let length = 0;
    let node: ListNode | null = head;
    while (node && length < exceedLength) {
        node = node.next;
        length++;
    }

    return length === exceedLength;
}
