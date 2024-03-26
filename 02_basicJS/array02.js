const arr=["sohel","salman","Abdul","mukhtar"]
const arr1=["safia","neha"];
//arr.push(arr1);
//console.log(arr[4][1]);// to print perticuler value
//console.log(arr.concat(arr1));// concetinate of two array
// const newarr= [...arr,...arr1] //marge two array
// console.log(newarr);

// const arr2=[1,2,3,[4,5,6],7,[3,4,5,[1,23]]];
// console.log(arr2.flat(Infinity));
console.log(Array.isArray("sohel"));
console.log(Array.from("sohel"));// convert in array
console.log(Array.from({name:"Sohel"}));// result empty

let num=100;
let num1=200;
let num2=300;
console.log(Array.of(num,num1,num2));//insert the values in array
