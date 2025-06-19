// activity 1 : class defination
// task 1 define class Person with properties name and age and method to return a greting msg .create an instance of class and log it

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return "hello " + this.name + " : your age is " + this.age;
  }
}

// const p1 = new Person("yaman",22);
// console.log(p1);

// console.log(p1.greet());
// console.log(p1.update(20));
// console.log(p1);
//task 02 : add method to person class tht updates the age property and log the updated date

class UpdatedPerson {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return "hello " + this.name + " : your age is " + this.age;
  }
  update(newAge) {
    return (this.age = "new age is :" + newAge);
  }
}

const p2 = new UpdatedPerson("yaman", 22);
// console.log(p2);

// console.log(p2.greet());
// console.log(p2.update(20));
// console.log(p2);

//activity 2 : class inheritance
// t 3 : define a class Student that extends th persom class and adda property studentID and a method to return a student id. create  an instance of the student class and log the student

class Student extends Person {
  static numberOfStudents = 0;
  #balance; // Private field to hold balance

  constructor(name, age, studentId, balance) {
    super(name, age);
    this.studentId = studentId;
    this.#balance = balance; // Initialize private balance
    Student.numberOfStudents++;
  }

  //task 4: overriding the greting method in the studentclass to include the student id in the message
  greet() {
    return `hello ${this.name} , Your ID number is : ${this.studentId}`;
  }

  displayId() {
    return `student ID is : ${this.studentId}`;
  }

  //t 6 :add static method to student to keep track of no of student added
  static getStudentCount() {
    return `Number of students created: ${Student.numberOfStudents}`;
  }

  // task 07 : using getter methods
  getStudentId() {
    return this.studentId;
  }

  getName(){
    return this.name;
  }


  //setting method

  setName(newName) {
    newName = newName.trim();
    if (newName === '') {
        throw new Error('The name cannot be empty') 
    }
    this.name = newName;
}


// Private method to get the balance (only accessible within Student)
#getBalance() {
    return this.#balance;
}

showBalance() {
    return `Current balance: ${this.#getBalance()}`;
}

}

const s1 = new Student("Yas", 22, 12345, 1000);
const s2 = new Student("Alice", 23, "402",2000);
const s3 = new Student("Bob", 24, "403",3000);
// console.log(s1);
// console.log(s1.displayId());
// console.log(s1.greet());
// console.log(Student.getStudentCount());
console.log(s1.getStudentId());
console.log(s2.getStudentId());
console.log(s3.getStudentId());
s1.setName("hello")
console.log(s1.name);
console.log(s1.showBalance());
console.log(s2.showBalance());
console.log(s3.showBalance());


//activity 3 : static methods and properties
//t -5 : add static method to class teacher that return a generic greeting message .call this static method without creating instance
class Teacher {
  constructor(name) {
    this.name = name;
  }

  static speech() {
    return `hello student , i am  your new english teacher`;
  }
}

const t1 = new Teacher("Yas");
// console.log(Teacher.speech());

//activity 5  : add
