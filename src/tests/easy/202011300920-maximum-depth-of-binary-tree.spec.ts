import {describe, it} from 'mocha';
import {expect} from 'chai';
import {TreeNode} from '../../presets/tree-node';
import {maxDepth} from '../../unoptimized/202011300920-maximum-depth-of-binary-tree';

interface TestCase {
    input: TreeNode;
    output: number;
}

describe('maximum-depth-of-binary-tree',
    () => {
        const testCases: TestCase[] = [
            {
                input: new TreeNode(3,
                    new TreeNode(9),
                    new TreeNode(20,
                        new TreeNode(15),
                        new TreeNode(7))),
                output: 3
            }
        ];

        for (const testCase of testCases) {
            const {input, output} = testCase;
            it(`${input} should return ${output}`, () => {
                const result = maxDepth(input);
                expect(result).to.equal(output);
            });
        }
    }
);
