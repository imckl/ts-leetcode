const digits = new Set(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);

export function decodeString(s: string): string {
    let res = '';

    for (const c of s) {
        if (c === ']') {
            res = decodePart(res);
        } else {
            res += c;
        }
    }

    return res;
}

export function decodeString2(s: string): string {
    let res = '';

    for (let i = 0; i < s.length; i++) {
        const c = s[i];

        if (digits.has(c)) {
            res += c;
        } else if (c === '[') {
            res += c;
        } else if (c === ']') {
            res = decodePart(res);
        } else {
            res += c;
        }
    }

    return res;
}

function decodePart(s: string): string {
    let i = s.length - 1;
    while (s[i] !== '[') {
        i--;
    }
    const pattern = s.slice(i + 1);

    i--; // 忽略 '['
    let j = i;
    while (digits.has(s[j])) {
        j--;
    }
    j++;
    const count = Number.parseInt(s.slice(j, i + 1));

    const part = pattern.repeat(count); // 当前解码部分

    return s.slice(0, j) + part; // 已解码部分 + 当前解码部分
}
