const score=400
const balance= new Number(100)
console.log(balance);
console.log(score);
console.log(balance.toString().length);
console.log(balance.toFixed(2)); // precision value 2 after dot
const num=1786.807898
console.log(num.toPrecision(4));
const num1=300000000
console.log(num1.toLocaleString('en-IN'));// 30,00,00,000 like this print the value


//++++++++++++++++++++++ Math +++++++++++++++++++++
console.log(Math.PI); 
console.log(Math.sqrt(81));
console.log(Math.abs(-90));
console.log(Math.round(7.5));
console.log(Math.ceil(7.2));// roundoff top value
console.log(Math.floor(7.6));// low value
console.log(Math.min (4,6,7,3,2,9));// found min value
console.log(Math.max(4,6,7,3,2,9));// found max va;ue
console.log(Math.random()*10); // gen random value
//================================= Random funtion ======
console.log(Math.floor(Math.random()*10)+1);
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)












