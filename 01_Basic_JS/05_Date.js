// let mydate =new Date()
// console.log(mydate.toString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toLocaleString());
// console.log(typeof mydate);
//let createdate= new Date(2023,0,23); //here 0 is first month denoted 
//console.log(createdate.toDateString());
//let createdate= new Date(2023,0,23,5,3) //  5 and 3 is denoted time
//let createdate= new Date("2023-00-23") //Invalid date
let createdate= new Date("01-24-2023") //
console.log(createdate.toLocaleString());

let myTimeStamp=Date.now()
console.log(myTimeStamp);
console.log(createdate.getTime());
console.log(Math.floor(Date.now()/1000));
 //convert milisecond to sec

 console.log(new Date().getMonth());
 console.log(new Date().getDay());
 console.log(new Date().getTime());
 console.log(new Date().getFullYear());
 

 myTimeStamp.toLocaleString('default',
 {
    //ctrl+[space] for get properties
    weekday: "long"  

 })
