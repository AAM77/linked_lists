const LinkedList = require("../main/LinkedList");

describe("LinkedList", () => {
    const a = new LinkedList();

    test("creates an empty linked list", () => {
        expect(a).toEqual(
            {
                'head': null,
                'next': null
            }
        );
    });
    
    test("Adds 1 to the beginning of the list", () => {
        expect(a.prepend(1)).toEqual(
            {
                'head': 1,
                'next': null
            }
        );
    });
});