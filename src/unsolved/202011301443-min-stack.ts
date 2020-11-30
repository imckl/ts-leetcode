export class MinStack {
    private readonly commonStack: number[] = [];
    private readonly sortedList: number[] = [];

    push(x: number): void {
        this.commonStack.push(x);
        this._addToSortedList(x);
    }

    pop(): void {
        const x = this.commonStack.pop();
        this._removeFromSortedList(x);
    }

    top(): number {
        return this.commonStack[0];
    }

    getMin(): number {
        return this.sortedList[0];
    }

    private _addToSortedList(x: number): void {
        let i = 0;
        while (i < this.sortedList.length && this.sortedList[i] < x) {
            i++;
        }

        this.sortedList.splice(i, 0, x);
    }

    private _removeFromSortedList(x: number): void {
        let i = 0;
        while (i < this.sortedList.length && this.sortedList[i] !== x) {
            i++;
        }
        i++;

        this.sortedList.splice(i, 1);
    }
}
