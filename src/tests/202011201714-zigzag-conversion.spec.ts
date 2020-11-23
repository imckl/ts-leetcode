import {describe, it} from 'mocha';
import {expect} from 'chai';
import {zigzagConvert} from '../202011201714-zigzag-conversion';

interface TestAction {
    input: {
        s: string,
        numRows: number
    };
    output: string;
}

describe('zigzag-conversion',
    () => {
        const testActions: TestAction[] = [
            {input: {s: 'LEETCODEISHIRING', numRows: 3}, output: 'LCIRETOESIIGEDHN'},
            {input: {s: 'LEETCODEISHIRING', numRows: 4}, output: 'LDREOEIIECIHNTSG'},
            {input: {s: 'ABCD', numRows: 2}, output: 'ACBD'},
            {input: {s: 'ABCD', numRows: 1}, output: 'ABCD'},
            {input: {s: 'ABCDEF', numRows: 4}, output: 'ABFCED'},
            {input: {s: 'PAYPALISHIRING', numRows: 3}, output: 'PAHNAPLSIIGYIR'}
        ];

        for (const testAction of testActions) {
            const {s, numRows} = testAction.input;
            const output = testAction.output;
            it(`${s}, ${numRows} should return ${testAction.output}`, () => {
                expect(zigzagConvert(s, numRows)).to.equal(output);
            });
        }
    }
);
