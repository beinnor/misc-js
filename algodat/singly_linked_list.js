/*

    Singly Linked list

*/
'use strict';

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  get size() {
    return this.length;    
  }

  peekHead () {
    return this.head;
  }

  // add at tail
  add (data) {
    let newNode = new Node(data);
    let currentNode;
        
    // if linked list is empty
    if (!this.head) {
      this.head = newNode;
    } else {
      currentNode = this.head;
            
      // go to end of linked list
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
            
      // add the newNode at tail when there is no more next
      currentNode.next = newNode;
    }
    this.length++;
    return true;
  }
    

  // addAt(index, data)
  addAt (index, data) {
    if (index < 0 || index >= this.size) {
      return false;
    } else {
      let newNode = new Node(data);
      let currentNode;
      let prevNode;

      if (index === 0) {
        newNode.next = this.head;
        this.head = newNode;

      } else {
        currentNode = this.head;

        for (let i = 0; i < index; i++) {
          prevNode = currentNode;
          currentNode = currentNode.next;
        }
        newNode.next = currentNode;
        prevNode.next = newNode;
      } 
      this.length++;  
      return true;         
    }


  }
    
    
  remove (data) {
    let currentNode = this.head;
    let prevNode = null;

    while (currentNode != null) {
      if (currentNode.data === data) {
        if (prevNode === null) {
          this.head = currentNode.next;
        } else {
          prevNode.next = currentNode.next;
        }
        this.length--;
        return true;
      }
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    // no match
    return false;
  }
    
  // removeAt(index)
  removeAt (index) {
    let currentNode = this.head;
    let prevNode = null;
    let i = 0;
        
    if (index < 0 || index >= this.size || this.isEmpty()) {
      return null;
    } else {
      if (index === 0) {
        this.head = currentNode.next;
      } else {
        while (i < index) {
          i++;
          prevNode = currentNode;
          currentNode = currentNode.next;
        }
        prevNode.next = currentNode.next;
      }
      this.length--;
      return currentNode.data;
    }
  }
    
  // indexOf(data)
  indexOf (data) {
    let currentNode = this.head;
    let i = 0;

    while (currentNode != null) {
      if (currentNode.data === data) {
        return i;
      }
      i++;
      currentNode = currentNode.next;
    }
    return -1;
  }
    
  // elementAt(index)
  elementAt (index) {

    if (index < 0 || index >= this.size || !this.head) {
      return null;
    }

    let currentNode = this.head;
    let i = 0;

    while (currentNode != null) {
      if (i === index) {
        return currentNode.data;
      }
      i++;
      currentNode = currentNode.next;
    }
    return -1;
  }
    
  // isEmpty()
  isEmpty () {
    if (!this.head) {
      return true;
    }
    return false;
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

// SIMPLE "TESTING"

let ll = new LinkedList();


ll.add(0);
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);

console.log(ll.printList());
console.log('Size: ' + ll.size);
console.log('peekHead(): ' + ll.peekHead());


console.log('***************');

ll.addAt(2, 'x');

console.log(ll.printList());
console.log('elementAt(2): ' + ll.elementAt(2));
console.log('indexOf(2): ' + ll.indexOf(2));
console.log('Size: ' + ll.size);

console.log('***************');

console.log(ll.remove('x'));
console.log(ll.printList());
console.log('Size: ' + ll.size);
console.log('isEmpty? ' + ll.isEmpty());

console.log('***************');

console.log('removeAt(3)' + ll.removeAt(3));
console.log(ll.printList());
console.log('Size: ' + ll.size);