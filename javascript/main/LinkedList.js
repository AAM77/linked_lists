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

    append(value) {
        if (this.head === null) {
            this.head = value;
        } else {
            const newNode = {
                value: value,
                next: null
            };

            if (this.next === null) {
                this.tail = newNode;
                this.next = this.tail;
            } else {
                this.tail.next = newNode;
                this.tail = newNode;
            }
        }

        return this;
    }
}

// a = new LinkedList();
// console.log(a);

// a.prepend(-1);
// console.log(a);

// a.prepend(-2);
// console.log(a);

// a.prepend(-3);
// console.log(a);

// a.append(1);
// console.log(a);

// a.append(2);
// console.log(a);

// a.append(3);
// console.log(a);

// b = new LinkedList(-1);
// console.log(b);

// b.prepend(-2);
// console.log(b);

// b.prepend(-3);
// console.log(b);

// b.append(1);
// console.log(b);

// b.append(2);
// console.log(b);

// b.append(3);
// console.log(b);

// c = new LinkedList(1);

// c.append(2);
// console.log(c);

// c.append(3);
// console.log(c);

// c.prepend(-1);
// console.log(c);

// c.prepend(-2);
// console.log(c);

// c.prepend(-3);
// console.log(c);