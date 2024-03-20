let Name="Sohel"
let surname="Aktar"
console.log(Name+surname+" Age 24");

console.log(`Hello my name is ${Name} ${surname} and my age is 23 `);
const Kame= new String("jkjk");
console.log(Name.length + 4);
const gameName=new String ('Soh-el');
console.log(gameName[0])
console.log(gameName.length) //length of string
console.log(gameName.toUpperCase());// to convert upper case
console.log(gameName.__proto__)
console.log(gameName.charAt(3))// find char of given index
console.log(gameName.indexOf('o'))// find index of 
const newString= gameName.substring(0,2)//small part 
console.log(newString);
const anotherString= gameName.slice(-5,5)// reverse stirng
console.log(anotherString)
const st= "   3   Sohel   1   "
console.log(st)
console.log(st.trim());// remove extra space
console.log(st.trimStart());
console.log(st.trimEnd());
let text="Sohel i am very happy with happy family";
let result=text.replaceAll(/happy/gi,"Sad") //replace all 'happy' word to 'sad'
console.log(result);
let tx="5"
let padded=tx.padStart(4,"0")
console.log(padded);
let pad=tx.padEnd(4,"0")
console.log(pad);
console.log(text.repeat(5));
console.log(text.search("happy"))
console.log(text.includes('happy'))
console.log(tx.valueOf())
console.log(text.valueOf());