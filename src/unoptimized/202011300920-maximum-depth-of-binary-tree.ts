import {TreeNode} from '../presets/tree-node';

export function maxDepth(root: TreeNode | null): number {
    if (!root) {
        return 0;
    } else {
        const left = maxDepth(root.left);
        const right = maxDepth(root.right);
        return Math.max(left, right) + 1;
    }
}
