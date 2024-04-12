//object literals
const mySym= Symbol("key1")
const JsUser={
    name:"Sohel", //key :value
    age:23,
    [mySym]:"mykey2",
    location:"Haryana"
    ,email:"Sohel@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]
    ,"Full name":"Sohel aktar"

}
//access the object value..
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["Full name"])
console.log(JsUser[mySym]);//some cases
JsUser.email="She@gmail.com"
//Object.freeze(JsUser)//Freeze the previous value not change further
JsUser.email="Dohejha@gmail.com"
console.log(JsUser)
JsUser.greeting=function(){
    console.log(`Hello my fev, ${this.name}`);
}
console.log(JsUser.greeting());