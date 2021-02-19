import {ListNode} from '../presets/list-node';
import {mergeTwoLists} from '../202011242348-merge-two-sorted-lists';

export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    if (lists.length === 0) {
        return null;
    }

    if (lists.length === 1) {
        return lists[0];
    }

    let dummy: ListNode | null = new ListNode(Number.NEGATIVE_INFINITY);

    while (lists.length > 0) {
        const l1 = lists.pop() as ListNode | null;
        dummy = mergeTwoLists(l1, dummy);
    }

    return dummy.next;
}
