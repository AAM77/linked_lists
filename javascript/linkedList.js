class LinkedList {
    constructor(value = null) {
        this.head = value;
        this.next = null;
    }

    prepend(value) {
        if (this.head === null) {
            this.head = value;
        } else {
            const newHead = value;
            //
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
            //
            this.head = newHead;
        }

        return this;
    }
}

a = new LinkedList();
console.log(a);

a.prepend(1);
console.log(a);

a.prepend(2);
console.log(a);

a.prepend(3);
console.log(a);
