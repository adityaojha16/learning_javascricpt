
const tinderuser ={}
tinderuser.id="123asd"
tinderuser.name="sunny"
tinderuser.isLoggedIn="false"
const obj1={1:"a", 2:"b" }
const obj2={3:"a",4:"b"}
const obj3={5:"a",6:"b"}

// const obj4={...obj1,...obj2}
// console.log(obj4)

const user =[
    {
        id: 1,
        email: "ad@hotmail.com",
    },
     {
        id: 2,
        email: "au@hotmail.com",
    },
     {
        id: 3,
        email: "adfg@hotmail.com",
    },
     {
        id: 4,
        email: "akjd@hotmail.com",
    }
]
user[1].email
console.log(user[0].email)

console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))
console.table(Object.entries(tinderuser))//keys and values are in a single table

console.log(tinderuser.hasOwnProperty('isLoggedIn'))