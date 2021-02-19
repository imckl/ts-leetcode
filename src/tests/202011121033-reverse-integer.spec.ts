import {describe, it} from 'mocha';
import {expect} from 'chai';
import {reverseInteger} from '../202011121033-reverse-integer';

interface TestAction {
    input: number;
    output: number;
}

describe('zigzag-conversion',
    () => {
        const testActions: TestAction[] = [
            {input: 123, output: 321},
            {input: -123, output: -321},
            {input: 120, output: 21},
            {input: -321325232, output: -232523123},
            {input: -200100, output: -1002},
            {input: -(2 ** 31) - 1, output: 0},
            {input: (2 ** 31), output: 0},
            {input: (2 ** 31) - 2, output: 0},
        ];

        for (const testAction of testActions) {
            const {input, output} = testAction;
            it(`${input} should return ${output}`, () => {
                expect(reverseInteger(input)).to.equal(output);
            });
        }
    }
);
