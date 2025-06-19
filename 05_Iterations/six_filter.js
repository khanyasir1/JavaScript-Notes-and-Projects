const marks = [ 40,50,60,70]

const yas = marks.forEach( (item) => {
    // console.log(item);
})

// console.log(yas);

// foreach does not holdany value by itself



// -----------------------
// filer 
// ---------------------



const myNum = [10,20,30,40,50,60,70]



//CASE 1

const studentMark = myNum.filter( (item) => item >=40)
// console.log(studentMark);

const failed= myNum.filter((item) => item<=35)
// console.log(failed);

//CASE 2  ==> 

// if " { } " used then return is must to retur in the callback function

const student1 = myNum.filter( (num) => {
return num >=50 })  //agar yaha return nhi likha to luch bhi display nhi hoga na hi return hoga 
    // console.log(student1);




const score = [ 100,200,300,400,500] 

// yaha logic yeh hai ki jo bhi valu greater and equal to  200 hogi usko best_score array mai rakheneg...myNum
const best_score = []

score.filter( (number) => {
        if(number >=200)
        {
            best_score.push(number)
        }
})
console.log(best_score);





const books = [
    {
      name: "The Hitchhiker's Guide to the Galaxy",
      author: "Douglas Adams",
      publishedDate: "1979-10-12",
    },
    {
        name: "Book 2",
        author: "Douglas Adams",
        publishedDate: "1984-05-23",
      },
      {
        name: "Book 3",
        author: "Douglas Adams",
        publishedDate: "1991-09-17",
      },
      {
        name: "Book 4",
        author: "Douglas Adams",
        publishedDate: "2001-03-28",
      },
    {
      name: "To Kill a Mockingbird",
      author: "Harper Lee",
      publishedDate: "1960-07-11",
    },
    {
      name: "1984",
      author: "George Orwell",
      publishedDate: "1949-06-08",
    },
    {
      name: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      publishedDate: "1925-04-10",
    },
    {
      name: "The Catcher in the Rye",
      author: "J.D. Salinger",
      publishedDate: "1951-07-16",
    },
  ];


  const userBook  = books.filter( (book) => {
     return book.author === "Douglas Adams" && book.name === "Book 2"
   } )

  console.log(userBook);

  