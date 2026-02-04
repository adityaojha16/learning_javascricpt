// primitive(7 types)

// string
const name="aditya";
//  number
const score=100;
let newscore=1235.21;

// boolean 
const isloggedIn=false;

// null
const outsidetemp=null;
// undefined
let username;

// symbol
const id= Symbol('145');
const anotherid =Symbol('145');

// console.log(id===anotherid);false

// bigint
const bignumber=12547896315725n;


console.table({name:typeof name,score:typeof score,isloggedIn: typeof isloggedIn,outsidetemp: typeof outsidetemp,username: typeof username,id: typeof id,bignumber: typeof bignumber})

// non primitive
//  arrays
const movies =["D-12","hangover","6 underground","96","tenent"];

// object
let student={
    name:"aditya",
    roll: 16,
    gpa: 7.5,
};

// function
const myfunction=function(){
    console.log("hello world");
}

console.table({movies: typeof movies, student: typeof student, myfunctionfunction: typeof myfunctionfunction})