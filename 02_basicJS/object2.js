const tinder= new Object() //singletone object 
const tindersu={

} //none singlleton object
console.log(tindersu);
tinder.name="sohel"
tinder.id="123abc"
tinder.isLoggedIn=false
//console.log(tinder);

const regular={
    email:"Sohel@gmail.com"
    ,fullname:{
        username:{
            firstName:"Sohel",
            lastName:"Aktar"
        }
        
    }
}
//console.log(regular);
//console.log(regular.fullname.username.firstName);
const obj1={
    1:"a",
    2:"b",
    3:"c"
}
const obj2={
    4:"p",
    5:"g"
}
const obj3={
6:"j",
7:"l"
}
//const obj3={obj2,obj1}
//const obj4=Object.assign({},obj1,obj2,obj3)
const obj4={...obj1,...obj2,...obj3} //another method to assign
//console.log(obj4)

const users=[ //array of object
    //CSV file =comma separeted value
    {
        id:1,
        Name:"sohel"
    },
    {
        id:2,
        age:34,
        email:"hitsh"

    },
    {
        id:3,
        Name:"Kakj",
        Roll:23410
    }

]

//   console.log(Object.keys(users));
//   console.log(Object.values(users));
//   console.log(users[0].Name);
//   console.log(users[2]);
  
  const student={
    StudId:"ABC123",
    Name:"Sohel",
    Dept:"CS & IT",
    Course:"MCA"
  }

  const{StudId: S_id}=student// StudId as S_id sort name
  console.log(S_id);


  //JSON=Java Script Object Notation
  {
   "Name"= "Sohel",
   "Course"="JS"
   "price"=13244
  }
// API 
[
{},
{},
{}
]
   
