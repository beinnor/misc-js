'use strict';

class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // methods to implement:

  peekHead() {
    if (this.isEmpty()) {
      return null;    
    }
    return this.head;
  }
    
  peekTail() {
    if (this.isEmpty()) {
      return null;    
    }
    return this.tail;
  }
    
  add(data) {
    let newNode = new Node(data);

    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  addAt(index, data) {
    let newNode = new Node(data);
    let currentNode;
    let prevNode;

    // index outside list size, or list is empty
    if (index < 0 || index >= this.size || this.isEmpty()) {
      return null;
    }

    // add at index 0 (head / first node)
    if (index  === 0) {
      if (!this.head) {
        this.head = newNode;
        this.tail = this.head;
        return;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        return;
      }
    }

    // add at tail
    if (index+1 === this.size) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
      return;
    }

    currentNode = this.head;
    prevNode = this.head;    

    while (currentNode != index) {
      prevNode = currentNode;
      currentNode = currentNode.next;      
    }
    
    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = currentNode;
    currentNode.prev = newNode;
  }

  remove(data) {
    if (this.isEmpty) {
      return null;
    }

    // if head
    if (data === this.head.data) {
      this.head = this.head.next;
      if ( this.head) this.head.prev = null;
      if (!this.head) this.tail = null;
      this.length--;
      return true;
    }
    // if tail
    if (data === this.tail.data) {
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.length--;
      return true;
    }

    let currentNode = this.head;

    while (currentNode.data !== data) {
      if (!currentNode.next) {
        return null;
      }

      currentNode = currentNode.next;
    }

    this.length--;
    currentNode.prev.next = currentNode.next;
    currentNode.next.prev = currentNode.prev;
    return true;
  }

  removeAt(index) {
    if (this.isEmpty() || index < 0 || index >= this.size) {
      return null;
    }

    let removedNode;
    this.length--;

    // remove at head
    if (index === 0) {
      removedNode = this.head.value;
      // remove last node
      if (this.size === 0) {
        this.head = null;
        this.tail = null;
        return removedNode;
      }
      this.head = this.head.next;
      this.head.prev = null;
      return removedNode;
    }

    // remove at tail
    if (index === this.size) {
      removedNode = this.tail.value;
      this.tail = this.tail.prev;
      this.tail.next = null;
      return removedNode;
    }

    let i = 0;
    let previousNode, currentNode = this.head;
    while (i !== index) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      i++;
    }

    previousNode.next = currentNode.next;
    currentNode.next.prev = previousNode;
    return currentNode.value;
  }

  indexOf(data) {
    if (this.isEmpty) {
      return false;
    }

    let currentNode = this.head;
    let i = 0;
    while(data !== currentNode.data) {
      currentNode = currentNode.next;
      i++;
      if (!currentNode) {
        return false;
      }
    }
    return i;
  }

  elementAt(index) {
    if (this.isEmpty() || index < 0 || index >= this.size) {
      return null;
    }

    let i = 0;
    let currentNode = this.head;

    while (index !== i) {
      currentNode = currentNode.next;
      i++;
    }

    return currentNode.data;
  }
    
  isEmpty() {
    if (!this.head) {
      return true;
    }
    return false;
  }

  reverse() {
    if (this.isEmpty()) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode) {
      let tempNode = currentNode.next;
      currentNode.next = currentNode.prev;
      currentNode.prev = tempNode;
      currentNode = currentNode.prev;
    }

    let tempNode = this.head;
    this.head = this.tail;
    this.tail = tempNode;
  }
    
  get size() {
    return this.length;
  }

  printList() {
    let currentNode = this.head;
    let str = '';

    while (currentNode) {
      str = str + '[' + currentNode.data + '] ';
      currentNode = currentNode.next;
    }

    return str;
  }
}


// TESTING

let dblist = new DoublyLinkedList();

//dblist.add(0);


console.log(dblist.printList());

dblist.addAt(0, 553);

console.log(dblist.printList());