module.exports = class LinkedList {
    constructor(value = null) {
        this.head = value;
        this.next = null;
    }

    #assignNextIfNull(value) {
        if (this.next === null) {
            this.tail = {
                value: this.head,
                next: null
            }

            this.next = this.tail;
        }

        else {
            this.next = {
                value: this.head,
                next: this.next
            }
        }
    }

    prepend(value) {
        if (this.head === null) {
            this.head = value;
        } else {
            const newHead = value;
            this.#assignNextIfNull(this.head);
            this.head = newHead;
        }

        return this;
    }
}