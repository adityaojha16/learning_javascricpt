//dates


let myDate=new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


let mynewdate= new Date(2026,1,6);
// console.log(mynewdate.toDateString());
// console.log(mynewdate.toLocaleDateString());
// console.log(mynewdate.toLocaleString());

let myTimestamp=Date.now()
// console.log(myTimestamp)
// console.log(mynewdate.getTime());
let mytime=(Math.floor(Date.now()/1000));
// console.log(mytime);


// console.log(myDate);
// console.log(myDate.getDay()+1)
// console.table([myDate.getDay()+1, myDate.getMonth()+1, myDate.getFullYear()])

console.log(`${myDate.getDate()} and time is ${mytime}`)

