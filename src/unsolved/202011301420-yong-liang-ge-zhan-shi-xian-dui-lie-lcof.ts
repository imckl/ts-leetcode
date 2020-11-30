export class CQueue {
    private readonly stackIn: number[] = [];
    private readonly stackOut: number[] = [];

    appendTail(value: number): void {
        this.stackIn.push(value);
    }

    deleteHead(): number {
        if (this.stackIn.length === 0 && this.stackOut.length === 0) {
            return -1;
        }

        if (this.stackOut.length === 0 && this.stackIn.length !== 0) {
            while (this.stackIn.length !== 0) {
                this.stackOut.push(this.stackIn.pop());
            }
        }

        return this.stackOut.pop();
    }
}
