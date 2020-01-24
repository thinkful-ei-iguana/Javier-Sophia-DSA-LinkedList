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
  
    find(item) {
      if (!this.head) {
        return null;
      }
      let currNode = this.head;
  
      while (currNode.value !== item) {
        if (currNode.next !== null) {
          return null; //couldn't find item
        } else {
          currNode = this.next;
        }
      }
      
      return currNode;
    }
  
    insertFirst(value) {
      //point to the head since it is either null or the first element
      this.head = new _Node(value, this.head);
    }
  
    insertLast(value) {
      if (this.head === null) {
        this.insertFirst(value);
      } else {
        let currNode = this.head;
        while (currNode.next !== null) {
          currNode = currNode.next;
        }
        //set the last node's next
        currNode.next = new _Node(value, null);
      }
    }
  
    remove(item) {
      if (!this.head) {
        return null;
      }
      //if it is the first one
      if (this.head.value === item) {
        this.head = this.head.next;
        return;
      }
      //all others
      let currNode = this.head;
      let previousNode = this.head;
  
      while ((currNode !== null) && (currNode.value !== item)) {
        previousNode = currNode;
        currNode = currNode.next;
      }
      if (currNode === null) {
        console.log("Item not found");
        return;
      } else {
        previousNode.next = currNode.next;
      }
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
    console.log(sll)
}

main()