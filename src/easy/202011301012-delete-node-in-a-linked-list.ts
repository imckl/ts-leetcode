/**
 Do not return anything, modify it in-place instead.
 */
import {ListNode} from '../presets/list-node';

export function deleteNode(root: ListNode | null): void {
    if (!root || !root.next) {
        return;
    }

    root.val = root.next.val;
    root.next = root.next.next;
}
