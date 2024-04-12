function NAME(){ //functon declaration
  console.log("Hello world");
}
NAME()// function call
NAME()
NAME()
NAME()
// argument pass
function add(num1,num2){
    console.log(num1+num2);
}
add(10,20)
add(10,"23")
add(10,"a")
add(10,null)

function add1(num1,num2){
//   let res=num1+num2;
  return num1+num2;// without return it undefined
}
const result=add1(20,40);
console.log("Result:",result);

function login(username){
    if(!username){ //undefined
        console.log("Please Enter the user name");
    }else{
        return `${username} just log in`
    }
    
}
console.log(login("Sohel"));
function calculate(...num1){
    return num1
}
console.log(calculate(200,400,500));

// object use in funtion
const user={
    Name:"Sohel",
    Roll:123
}
function Hand(){
    console.log(`Username is ${user.Name} and Roll is ${user.Roll}`);
}
Hand();

