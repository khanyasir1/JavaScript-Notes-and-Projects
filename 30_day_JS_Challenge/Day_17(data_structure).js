// activity 1
// task 1 : implement node class to represent element in linked list with properties value and nexxt

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null; // The reference to the next node in the list
//   }
// }
// const node1 = new Node(10);
// const node2 = new Node(60);
// node1.next = node2; // Linking node1 to node2
// console.log(node1.value);
// console.log(node1.next.value);

//task 02 :  implementation of a LinkedList class in JavaScript with methods to add a node to the end, remove a node from the end, and display all nodes:

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // Add a node to the end of the list
    add(value) {
      const newNode = new Node(value);
      if (this.head === null) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next !== null) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    // Remove a node from the end of the list
    remove() {
      if (this.head === null) return; // List is empty
  
      if (this.head.next === null) {
        this.head = null; // List has only one node
        return;
      }
  
      let current = this.head;
      while (current.next.next !== null) {
        current = current.next;
      }
      current.next = null;
    }
  
    // Display all nodes in the list
    display() {
      let current = this.head;
      const nodes = [];
      while (current !== null) {
        nodes.push(current.value);
        current = current.next;
      }
      console.log(nodes.join(' -> '));
    }
  }
  
  // Example usage:
  const list = new LinkedList();
  list.add(10);
  list.add(20);
  list.add(30);
  
//   list.display(); // Outputs: 10 -> 20 -> 30
  
  list.remove();
//   list.display(); // Outputs: 10 -> 20
  
  list.remove();
//   list.display(); // Outputs: (empty list)
  

//activity 02 : stack
// task 03 : implement stack class with methods push and pop and peek 

// class Stack{
//     constructor(){
//         this.items = [];
//     }


//     push(element){
//        return  this.items.push(element);
//     }

//     pop(){
//         if(this.isEmpty()){
//             throw new Error("stck is empty,cannot pop any element")
//         }
//            return this.items.pop();    
//     }

//     peek(){
//         if(this.isEmpty()){
//             throw new Error("stck is empty,cannot peek any element")
//         }
//         return this.items[this.items.length -1] ;
//        }

//        isEmpty(){
//         return this.items.length === 0
//        }

//        size(){
//         return this.items.length
//        }

//        display(){
//         console.log(this.items.join("-"));
//        }
// }

// Example usage:
// const stack = new Stack();
// stack.push(10);
// stack.push(20);
// stack.push(30);

// stack.display();
// stack.size();
// console.log(stack.peek()); // Outputs: 30

// console.log(stack.pop());  // Outputs: 30
// console.log(stack.peek()); // Outputs: 20

// stack.display(); // Outputs: 10 <- 20

//task 04 : use stack class to reverse astring by pushing all cahracters onto the stack and then popping them off

class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.isEmpty()) {
        throw new Error("Stack is empty. Cannot pop.");
      }
      return this.items.pop();
    }
  
    peek() {
      if (this.isEmpty()) {
        throw new Error("Stack is empty. Cannot peek.");
      }
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    display() {
      console.log(this.items.join(' <- '));
    }
  }
  
  function reverseString(str) {
    const stack = new Stack();
  
    // Push all characters of the string onto the stack
    for (const char of str) {
      stack.push(char);
    }
  
    let reversedStr = '';
  
    // Pop all characters from the stack and form the reversed string
    while (!stack.isEmpty()) {
      reversedStr += stack.pop();
    }
  
    return reversedStr;
  }
  
  // Example usage:
  const originalString = "hello";
  const reversedString = reverseString(originalString);
  
  console.log(`Original string: ${originalString}`); // Outputs: hello
  console.log(`Reversed string: ${reversedString}`); // Outputs: olleh
  

  //activity : queue
//   task 5 :implementqueue class with methods enqueue (add),dequeue(remove)and front(view first element)

// class Queue{
//     constructor(){
//         this.items = [];
//     }


//     Enqueue(value){
//         return this.items.push(value)
//     }

//     DeQueue(){
//         if(this.isEmpty()){
//             throw new Error("Queue is empty,cannot remove item")
//         }
//         return this.items.shift();
//     }

//     front(){
//         if(this.isEmpty()){
//             throw new Error("Queue is empty,cannot front item")
//         }
//         return this.items[0];
//     }

//     isEmpty(){
//         return this.items.length === 0;
//     }

//     size() {
//         return this.items.length;
//       }
    
//       // Display all elements in the queue
//       display() {
//         console.log(this.items.join(' <- '));
//       }
// }

// const queue = new Queue();
// queue.Enqueue(10);
// queue.Enqueue(20);
// queue.Enqueue(30);

// queue.display(); //
// console.log(queue.front()); // Outputs: 10

// console.log(queue.DeQueue()); // Outputs: 10
// console.log(queue.front()); // Outputs: 20

// queue.display(); //

// task 6 :use queue class to simulate simple prnter queue where print jobs are added to the queue and processed in order

class Queue {
    constructor() {
      this.items = []; // Array to store queue elements
    }
  
    // Add an element to the end of the queue
    enqueue(element) {
      this.items.push(element);
    }
  
    // Remove and return the element from the front of the queue
    dequeue() {
      if (this.isEmpty()) {
        throw new Error("Queue is empty. Cannot dequeue.");
      }
      return this.items.shift(); // Removes the first element from the array
    }
  
    // Return the element at the front of the queue without removing it
    front() {
      if (this.isEmpty()) {
        throw new Error("Queue is empty. Cannot view front element.");
      }
      return this.items[0]; // Returns the first element of the array
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Get the number of elements in the queue
    size() {
      return this.items.length;
    }
  
    // Display all elements in the queue
    display() {
      console.log(this.items.join(' <- '));
    }
  }
  
  // Simulate a printer queue
  class PrinterQueue {
    constructor() {
      this.queue = new Queue();
    }
  
    // Add a print job to the queue
    addJob(job) {
      console.log(`Adding job: ${job}`);
      this.queue.enqueue(job);
    }
  
    // Process all jobs in the queue
    processJobs() {
      while (!this.queue.isEmpty()) {
        const job = this.queue.dequeue();
        console.log(`Processing job: ${job}`);
      }
    }
  
    // Display the current state of the queue
    displayQueue() {
      console.log("Current queue:");
      this.queue.display();
    }
  }
  
  // Example usage:
  const printerQueue = new PrinterQueue();
  
  // Adding print jobs
  printerQueue.addJob("Document1.pdf");
  printerQueue.addJob("Photo.png");
  printerQueue.addJob("Presentation.pptx");
  
  // Displaying the current state of the queue
  printerQueue.displayQueue(); // Outputs: Current queue: Document1.pdf <- Photo.png <- Presentation.pptx
  
  // Processing all jobs
  printerQueue.processJobs(); // Outputs: Processing job: Document1.pdf, Processing job: Photo.png, Processing job: Presentation.pptx
  
  // Displaying the queue after processing
  printerQueue.displayQueue(); // Outputs: Current queue: (empty)
  

//   activity 4 : tree
// c implementation of a TreeNode class in JavaScript with properties for a binary tree, including value, left, and right:


// class TreeNode{
//     constructor(value){
//         this.value = value
//         this.left=null;
//         this.right=null;
//     }


//     setLeft(node){
//         this.left = node
//     }

//     setRight(node){
//         this.right = node
//     }

//     getLeft(){
//         return this.left
//     }

//     getRight(){
//         return this.right
//     }

//     getValue(){
//         return this.value
//     }


//     display() {
//         console.log(`Value: ${this.value}`);
//         if (this.left) {
//           console.log(`Left Child: ${this.left.getValue()}`);
//         } else {
//           console.log('Left Child: None');
//         }
//         if (this.right) {
//           console.log(`Right Child: ${this.right.getValue()}`);
//         } else {
//           console.log('Right Child: None');
//         }
//       }
    

// }
// const root = new TreeNode(10);
// const leftChild = new TreeNode(5);
// const rightChild = new TreeNode(15);

// root.setLeft(leftChild);
// root.setRight(rightChild);

// root.display();

// leftChild.display();


//task 8 :implementation of a BinaryTree class in JavaScript with methods for inserting values and performing in-order traversal:

class TreeNode {
    constructor(value) {
      this.value = value;  // The value stored in the node
      this.left = null;   // Reference to the left child node
      this.right = null;  // Reference to the right child node
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;  // The root of the binary tree
    }
  
    // Method to insert a value into the binary tree
    insert(value) {
      const newNode = new TreeNode(value);
      if (this.root === null) {
        this.root = newNode;
      } else {
        this._insertNode(this.root, newNode);
      }
    }
  
    // Helper method to insert a node at the correct position
    _insertNode(node, newNode) {
      if (newNode.value < node.value) {
        // Insert in the left subtree
        if (node.left === null) {
          node.left = newNode;
        } else {
          this._insertNode(node.left, newNode);
        }
      } else {
        // Insert in the right subtree
        if (node.right === null) {
          node.right = newNode;
        } else {
          this._insertNode(node.right, newNode);
        }
      }
    }
  
    // Method to perform in-order traversal and return the values in an array
    inOrderTraversal() {
      const result = [];
      this._inOrder(this.root, result);
      return result;
    }
  
    // Helper method for in-order traversal
    _inOrder(node, result) {
      if (node !== null) {
        this._inOrder(node.left, result);
        result.push(node.value);
        this._inOrder(node.right, result);
      }
    }
  
    // Method to display the in-order traversal
    displayInOrder() {
      const values = this.inOrderTraversal();
      console.log(values.join(' <- '));
    }
  }
  
  // Example usage:
  const tree = new BinaryTree();
  tree.insert(10);
  tree.insert(5);
  tree.insert(15);
  tree.insert(3);
  tree.insert(7);
  tree.insert(12);
  tree.insert(18);
  
  tree.displayInOrder(); // Outputs: 3 <- 5 <- 7 <- 10 <- 12 <- 15 <- 18
  
