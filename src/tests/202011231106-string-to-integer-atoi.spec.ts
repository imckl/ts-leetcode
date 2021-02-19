import {describe, it} from 'mocha';
import {expect} from 'chai';
import {myAtoi} from '../202011231106-string-to-integer-atoi';

interface TestAction {
    input: string;
    output: number;
}

describe('zigzag-conversion',
    () => {
        const maxInt = 2 ** 31 - 1;
        const minInt = -(2 ** 31);

        const testActions: TestAction[] = [
            {input: '42', output: 42},
            {input: '   -42', output: -42},
            {input: '4193 with words', output: 4193},
            {input: 'words and 987', output: 0},
            {input: '-91283472332', output: minInt},
            {input: '12312312312312321', output: maxInt},
        ];

        for (const testAction of testActions) {
            const {input, output} = testAction;
            it(`${input} should return ${output}`, () => {
                expect(myAtoi(input)).to.equal(output);
            });
        }
    }
);
