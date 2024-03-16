"use strict";// treat as all js code newer version
//alert(3+3) // we are using nodejs not browser
console.log(3
    +
    3); //code readablity that should be high

    console.log("Sohel");
    let name="Sohel Aktar";
    let age=24
    let islogin=false
    const Id=Symbol('123')// its return unique value.
    const anotherId=Symbol('123')// its return another unique value which is not equal to Id variable.
    console.log(Id===anotherId);
    
    /*
    number 
    bigint
    string=>""
    boolean=>true/false
    null=> standalone value
    undefine=>
    symbol=>unique
    object
    */
   console.log(typeof undefined);//undefined
   console.log(typeof null);//object
const BigNumber=435464537673333372n

// array ,object, function
const abc=["sohel","abdul","mukhtar"];
let myobj={
name: "Sohel",
age: 24
}
console.log(myobj);
console.log(abc);
const myfun=function(){
    console.log("Hello world");
}

