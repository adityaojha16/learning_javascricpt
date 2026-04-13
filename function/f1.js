function calculateprice(...num1 ){
    return num1
}
// console.log(calculateprice(200,400,600,800))

const user ={
     name:"aditya",
     age:18
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.name} and age is  ${anyobject.age}`);
}
// handleobject(user)
handleobject({
    name:"bipasha",
    age:21
})

const mynewarray =[200,400,600,800]

function returnsecondvalue(getArray){
    return getArray[1]


}

console.log(returnsecondvalue(mynewarray))