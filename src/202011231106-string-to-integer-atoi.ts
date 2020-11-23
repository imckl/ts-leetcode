enum States {
    start,
    signed,
    inNumber,
    end
}

enum Signs {
    positive,
    negative
}

const maxInt = 2 ** 31 - 1;
const minInt = -(2 ** 31);

class Automaton {
    public sign = Signs.positive;
    public ans = 0;

    private state = States.start;
    private table = {
        [States.start]: [States.start, States.signed, States.inNumber, States.end],
        [States.signed]: [States.end, States.end, States.inNumber, States.end],
        [States.inNumber]: [States.end, States.end, States.inNumber, States.end],
        [States.end]: [States.end, States.end, States.end, States.end]
    }
    private charToIntMap: { [char: string]: number } = {
        '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
        '5': 5, '6': 6, '7': 7, '8': 8, '9': 9
    };

    private getCol(c: string): number {
        if (c === ' ') {
            return 0;
        }

        if (c === '+' || c === '-') {
            return 1;
        }

        if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(c)) {
            return 2;
        }
        return 3;
    }

    process(c: string): void {
        this.state = this.table[this.state][this.getCol(c)];

        if (this.state === States.inNumber) {
            this.ans = this.ans * 10 + this.charToIntMap[c];
            this.ans = this.sign === Signs.positive
                ? Math.min(this.ans, maxInt)
                : Math.min(this.ans, -minInt);
        } else if (this.state === States.signed) {
            this.sign = c === '+'
                ? Signs.positive
                : Signs.negative;
        }
    }
}

export function myAtoi(s: string): number {
    const automation = new Automaton();
    for (const c of s) {
        automation.process(c);
    }

    return (automation.sign === Signs.positive ? 1 : -1) * automation.ans;
}

// export function myAtoi3(s: string): number {
//     const maxInt = 2 ** 31 - 1;
//     const minInt = -(2 ** 31);
//
//     let start = 0;
//     let end = s.length;
//
//     let i: number;
//
//     // 1. 丢弃无用的开头空格字符
//     i = 0;
//     while (s[i] === ' ') {
//         i++;
//     }
//     start += i;
//
//     const validStartChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '+'];
//     const validChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
//
//     if (!validStartChars.includes(s[start])) {
//         return 0;
//     }
//
//     let isNegative: boolean;
//     if (s[start] === '-') {
//         isNegative = true;
//         start++;
//     } else if (s[start] === '+') {
//         isNegative = false;
//         start++;
//     } else {
//         isNegative = false;
//     }
//
//     i = 0;
//     while (validChars.includes(s[start + i])) {
//         i++;
//     }
//     end = start + i;
//
//     const charToIntMap: { [char: string]: number } = {
//         '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
//         '5': 5, '6': 6, '7': 7, '8': 8, '9': 9
//     };
//
//     let num = 0;
//     for (let i = 0; i < end - start; i++) {
//         const char = s[end - 1 - i];
//         const int = charToIntMap[char];
//         num += 10 ** i * int;
//     }
//
//     if (isNegative) {
//         num = -num;
//     }
//
//     if (num > maxInt) {
//         return maxInt;
//     } else if (num < minInt) {
//         return minInt;
//     } else {
//         return num;
//     }
// }


// export function myAtoi2(s: string): number {
//     const maxInt = 2 ** 31 - 1;
//     const minInt = -(2 ** 31);
//
//     let i: number;
//     let newS = '';
//
//     // 1. 丢弃无用的开头空格字符
//     i = 0;
//     while (s[i] === ' ') {
//         i++;
//     }
//     newS = s.slice(i);
//
//     const validStartChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '+'];
//     const validChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
//
//     if (!validStartChars.includes(newS[0])) {
//         return 0;
//     }
//
//     let isNegative: boolean;
//     if (newS[0] === '-') {
//         isNegative = true;
//         newS = newS.slice(1);
//     } else if (newS[0] === '+') {
//         isNegative = false;
//         newS = newS.slice(1);
//     } else {
//         isNegative = false;
//     }
//
//     i = 0;
//     while (validChars.includes(newS[i])) {
//         i++;
//     }
//     newS = newS.slice(0, i);
//
//     const charToIntMap: { [char: string]: number } = {
//         '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
//         '5': 5, '6': 6, '7': 7, '8': 8, '9': 9
//     };
//
//     let num = 0;
//     for (let i = 0; i < newS.length; i++) {
//         const char = newS[newS.length - 1 - i];
//         const int = charToIntMap[char];
//         num += 10 ** i * int;
//     }
//
//     if (isNegative) {
//         num = -num;
//     }
//
//     if (num > maxInt) {
//         return maxInt;
//     } else if (num < minInt) {
//         return minInt;
//     } else {
//         return num;
//     }
// }
