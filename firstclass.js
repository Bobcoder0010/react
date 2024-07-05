


const  arr = [1,2,3,4,5,33,45,55]

const arr2 = [4,5,64,2,46,35,24,66]

const newarr= [...arr,...arr2];
const {first,seond} = []
console.log (newarr);



const obj = {
    name: "bhupal",
    address: "Itahari",
    phone : "982000000"
}
const {name, phone, address} =obj;
const maya =[name, phone,address]



console.log(maya);
const arr5 =[1,4,5,6,35];
for (let i =0 ;i<arr.length; i++) console.log(arr[i])





    const age=9;
    const isyes = age <10|| age ==12 ? "Yes": "No";
   console.log(isyes);






const nage =25;
let myName = nage < 5 && "name";



// {/* <button 
// onCick={()=>{
//     console.log ("click");
// }}
// >signin 
// </button> */}

//map () fieter();
  let arr6 =["bobmarley","lname",12,"bobmarley","lname"];



  let arr7= [
 { 
    name : "john",
    age :"21",
    class : "fifthsem",
    address : "basbari"
 },
 { 
    name : "john",
    age :"21",
    class : "fifthsem",
    address : "Itahari"
 },
 { 
    name : "john",
    age :"21",
    class : "fifthsem",
    address : "biratnagr"
 },
 { 
    name : "john",
    age :"21",
    class : "fifthsem",

    address : "dharan"  
},
 { 
    name : "john",
    age :"21",
    class : "fifthsem",
    address : "damak"
 },
 { 
    name : "john",
    age :"21",
    class : "fifthsem",

    address : "bihar"
 },
]
// console.log(arr7);
// arr7.map((value)=>{
//     <div>
//         <h1>{value.name}</h1>
//         <h1>{value.age}</h1>
//         <h1>{value.class}</h1>
//         <h1>{value.address}</h1>
//     </div>
// })
arr7.map((value) =>{
    console.log("Name:",value.name);
    console.log("Age:",value.age);
    console.log("Class:",value.class);
    console.log("address:",value.address);
});



const myArry=["ram","shyam","hari","bobmarley","pranjal","manish","bishal"];
myArry.filter((value)=>{
    console.log(value ==="ram");
})