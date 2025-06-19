// Activity 01 : Object Creation and Access
// task 01 : cretae object  repesenting a book with properties like title,author,year and log 

const book = {
    title : "Software Developer",
    "author" : "Khan Family",
    "year" : 2024,
    "display" : function () {
        return "title of book is : " + this.title + " author of book is : " + this.author;
    }
}
// console.log(book);

// task 02 : access the log the title and properties of the book object
// console.log(book['title']);
// console.log(book['author']);

// Activity : 02 : Object methods
// task 03 :add a method to book object that returns string with the books title and author, and log the result
// console.log(book.display());

//alternate method to that
// book.res = function () {
//     return this.year
// }

// console.log(book.res());

//Activity 03 : Nested Objects
//task5 : cretae nested object represnting a liabray with property like name andbooks (an array of book objects) and log the result

const liabray = {
    "id " : 1,
    "liabrary" : "degree liabrary",
    "book" : "computer books",
    "exp_date" : "20/08/2024"
}

const merge = { ...book , ...liabray}
// console.log(merge);

const add = Object.assign( {},book, liabray)
// console.log(add);

// task 06 : access and log name of the liabray and the titles
const book1 = {
    title: "Software Developer",
    author: "Khan Family",
    year: 2024,
    display: function() {
        return "Title: " + this.title + ", Author: " + this.author;
}
}

const book2 = {
    title: "Advanced JavaScript",
    author: "John Doe",
    year: 2022,
    display: function() {
        return "Title: " + this.title + ", Author: " + this.author;
    }
}


const library = {
    id : 1,
    name : "College Library",
    books : [book1, book2],
    exp_date : "20/08/2024"
}

// console.log(library);
// console.log(library.id);
// console.log(library.name);

// task 07 : use this keyword 
library.renew = function() {
    return "id : " + library.id + "name : " + library.name;
}

// console.log(library.renew());

//task 08 : use for in loop

const person= {
    name : "mohammed shaikh",
    age : 50,
    occcupation : "software developer"
}

for( const key in person ){
    console.log(`${key} : ${person[key]}`);
}


//task 09 : object.keys and object.values

// console.log(Object.keys(library));
// console.log(Object.values(library));
