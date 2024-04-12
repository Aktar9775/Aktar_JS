//Scope
//var c=900 var not use for scope
let a=900 // global scope
if(true){
    let a=1;
    const b=20;
    var c=90;
    //all the variable value are avilable for in the scope of if block
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
