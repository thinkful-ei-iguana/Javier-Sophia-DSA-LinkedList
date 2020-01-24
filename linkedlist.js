class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
      this.head = null;
    }
  
    insertFirst(item) {
      this.head = new _Node(item, this.head);
    }
  
    insertLast(item) {
      if(this.head === null) {
        this.insertFirst(item);
      } else {
        let tempNode = this.head;
        while(tempNode.next !== null) {
          tempNode = tempNode.next;
        }
        tempNode.next = new _Node(item, null);
      }
    }
  
    insertBefore(item, itemBefore){
      let newNode = new _Node(item, null);
      if(!this.head){
        return null;
      }
  
      if(this.head.value === itemBefore){
        newNode.next = this.head;
        this.head = newNode;
        return;
      }
  
      
      let current = this.head; 
      let prev = this.head;  
  
      while(current !== null){
        if(current.value === itemBefore){
          newNode.next = current;
          prev.next = newNode;
          return;
        }
        prev = current; 
        current = current.next; 
      }
  
      console.log(`${itemBefore} not found`);
      return;
    }
  
    insertAfter(item, itemAfter) {
      const newNode = new _Node(item, null);
      if (!this.head) {
        return null;
      } else {
        let current = this.head;
        while ((current.value !== itemAfter) && (current !== null)) {
          current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;
      }
    }
  
    insertAt(item, index){
      let newNode = new _Node(item, null);
      if(index < 0){
        console.log('index out of bounds');
        return;
      }
      if(index === 0){
        newNode.next = this.head;
        this.head = newNode;
        return;
      }
      
      
      let prev = this.head;
      let current = this.head;
      for(let i =0; i < index; i++){
        if(current === null){
          console.log('index out of bounds');
          return;
        }
        prev = current;
        current = current.next;
      }
  
      newNode.next = current;
      prev.next = newNode;
    }
  
    find(item) {
      let currNode = this.head;
  
      if (!this.head) {
        return null;
      }
  
      while (currNode.value !== item) {
        if (currNode.next === null) {
          return null;
        } else {
          currNode = currNode.next;
        }
      }
  
      return currNode;
    }
  
    remove(item) {
      if (!this.head) {
        return null;
      }
  
      if (this.head.value === item) {
        this.head = this.head.next;
        return;
      }
  
      let currNode = this.head;
      let previousNode = this.head;
  
      while((currNode !== null) && (currNode.value !== item)) {
        previousNode = currNode;
        currNode = currNode.next;
      }
  
      if (currNode === null) {
        console.log('Item not found');
        return;
      }
      previousNode.next = currNode.next;
    }
  }




function main(){
    const sll = new LinkedList()

    sll.insertFirst("Apollo")
    sll.insertLast("Boomer")
    sll.insertLast("helo")
    sll.insertLast("Husker")
    sll.insertLast("Starbuck")
    sll.insertLast("Tauhida")
    sll.remove("squirrel")
    console.log(JSON.stringify(sll));
}function ListSize(list){
    let count = 0;
    let current = SLL.head;
    while(current != null){
      count++;
      current = current.next;
    }
    return count;
  }
  
  function isEmpty(list){
    if(list.head === null){
      return true;
    }
    return false;
  }
  
  function findPrev(list, item){
    
    let current = list.head;
    let prev = list.head;
  
    while(current !== null){
      if(current.value === item){
        return prev.value;
      }
      prev = current; 
      current = current.next;
    }
  }
  
  function findLast(list){
    let current = list.head;
  
    while(current !== null){
      if(current.next === null){
        return current;
      }
      current = current.next;
    }
  }
  
  function reverseList(list) {
    const newList = new LinkedList;
    if(list.head === null) {
      return null;
    } else {
      let currNode = list.head;
      while(currNode !== null) {
        newList.insertFirst(currNode.value);
        currNode = currNode.next;
      }
    }
    console.log(display(newList));
    return newList;
  }
  
  function thrdFromEnd(list){
    let current = list.head;
    let prev = list.head;
    let res = list.head;
    while(current.next !== null){
      res = prev;
      prev = current;
      current = current.next;
    }
    return res.value;
  }
  
  //console.log(display(SLL));
  //console.log(ListSize(SLL));
  //console.log(isEmpty(SLL));
  //console.log(findPrev(SLL, 'Apollo'));
  //console.log(findLast(SLL));
  //reverseList(SLL);
  //console.log(thrdFromEnd(SLL));
  
  
  /*
  REMOVES ANY DUPLICATES IN AN ARRAYLIST
  TIME COMPLEXITY OF O(n^2)
  function WhatDoesThisProgramDo(lst) {
      let current = lst.head; 1
      while (current !== null) n {
          let newNode = current; 1 
          while (newNode.next !== null) n {
              if (newNode.next.value === current.value) { 1
                  newNode.next = newNode.next.next; 1
              }
              else {
                  newNode = newNode.next; 1
              }
          }
          current = current.next;
      }
  }
  */
  

main()