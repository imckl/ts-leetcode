export function isValidParentheses(s: string): boolean {
    if (s.length === 0) {
        return true;
    }

    const inToOutParenthesesMap: { [p: string]: string } = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    const inParentheses = new Set(['(', '{', '[']);

    const stack: string[] = [];

    for (const c of s) {
        if (inParentheses.has(c)) {
            stack.push(inToOutParenthesesMap[c]);
        } else {
            const lastParenthesis = stack.pop();

            if (c !== lastParenthesis) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

export function isValidParentheses2(s: string): boolean {
    if (s.length === 0) {
        return true;
    }

    const inToOutParenthesesMap: { [p: string]: string } = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    const inParentheses = new Set(['(', '{', '[']);

    const stack: string[] = [];

    for (const c of s) {
        if (inParentheses.has(c)) {
            stack.push(c);
        } else {
            const inParenthesis = stack[stack.length - 1];

            if (c !== inToOutParenthesesMap[inParenthesis]) {
                return false;
            }

            stack.pop();
        }
    }

    return stack.length === 0;
}
