class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.nextNode = newNode;
            this.tail = newNode;
        }
        this.length++; 
    }

    prepend(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.nextNode = this.head;
            this.head = newNode;
        }
        this.length++; 
    }

    size() {
        return this.length;
    }

    getHead() {
        return this.head;
    }

    getTail() {
        return this.tail;
    }

    at(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.nextNode;
        }
        return currentNode;
    }

    pop() {
        if (!this.head) {
            return null;
        }
        let currentNode = this.head;
        let previousNode = null;
        while (currentNode.nextNode) {
            previousNode = currentNode;
            currentNode = currentNode.nextNode;
        }
        if (previousNode) {
            previousNode.nextNode = null;
            this.tail = previousNode;
        } else {
            this.head = null;
            this.tail = null;
        }
        this.length--; 
        return currentNode;
    }

    contains(value) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                return true;
            }
            currentNode = currentNode.nextNode;
        }
        return false;
    }

    find(value) {
        let currentNode = this.head;
        let index = 0;
        while (currentNode) {
            if (currentNode.value === value) {
                return index;
            }
            currentNode = currentNode.nextNode;
            index++;
        }
        return null;
    }

    toString() {
        let result = '';
        let currentNode = this.head;
        while (currentNode) {
            result += `(${currentNode.value}) -> `;
            currentNode = currentNode.nextNode;
        }
        result += 'null';
        return result;
    }
}

const list = new LinkedList();
list.append(0);
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.prepend(5);
console.log(list.size());
console.log(list.getHead());
console.log(list.getTail());
console.log(list.at(1));
console.log(list.pop());
console.log(list.contains(1));
console.log(list.contains(7));
console.log(list.find(1));
console.log(list.toString())
