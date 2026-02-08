// objects

const mysymbol=Symbol("key1")

const jsUser={

    name:"aady",
    "full name":"aditya ojha",
    mysymbol:"mykey1",
    age:18,
    location:"haldia",
    email:"addy@hit.com",
    islogedin: false,
    lastlogedin:["monday","sunday","wednesday"]
};


// console.table(jsUser)
// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser.mysymbol)
// console.log(jsUser)

// jsUser.email="aditya@amazon.com"
// Object.freeze(jsUser)
// jsUser.email="aditya@microsoft.com"
// console.log(jsUser.email)


jsUser.greeting = function(){
    console.log(`namaste js user`)
}
jsUser.greetingtwo = function(){
    console.log(`namaste js user ${this.name}`)
}

console.log( jsUser.greeting())
console.log( jsUser.greetingtwo())