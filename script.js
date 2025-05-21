
// let a = +prompt("enter the side of square");
// let b = +prompt("enter the length of rectangle");
// let c = +prompt("enter the width of rectangle");

// console.log("Perimeter of square is :- "+ a*4 );
// console.log("Area of square is :- "+ a*a );
// console.log(`Perimeter of rectangle is :- + ${2*(b+c)}` );
// console.log(`Area of rectangle is :- + ${b * c}` );

// console.log(`sum of a no:- ${a+b+c}` );

// console.log(`substraction of a no  :- + ${b * c -a}` );
// console.log(`Divisor  is :- + ${c / a}` );
// console.log(`percentage  is :- + ${ c % a}` );

// console.log(`${a +=b }`);
// console.log(`${a -=b }`);
// console.log(`${a *=b }`);
// console.log(`${a /=b }`);
// console.log(`${a %=b }`);


// console.log(10>20);
// let res = 10<20;
// console.log(res);
// console.log(`${"20" ==20}`)
// console.log(`${"20" ===20}`)

// console.log(10>20 && 20 < 40);
// console.log(10>=10 && "20" == 20);
// console.log(10>=10 && 20 === "20");

// let day = prompt("Enter the day");
// let result = day === "sunday"?"we are happy":"we have to do work";
// console.log(result);

// console.log(a>b?(a>c?a:c):(b>c?b:c));

// let day = prompt("Enter a day");
// if(day=== "saturday" || day === "sunday")
//     console.log("weekday enjoy");
// else
//     console.log("go & work");
    
// console.log("code ended");

// console.log(Math.floor(-2.322)); //   -3
// console.log(Math.floor(2.822)); //2

// console.log(Math.ceil(2.323)); // 3
// console.log(Math.ceil(2.665)); // 3

// console.log(Math.pow(2,3)); // 8

// console.log(Math.round(2.345)); // 2
// console.log(Math.round(2.645)); // 3

// console.log(Math.abs(-10));// 10

// console.log(Math.max(10, 6,345, 564,454, 654,231, 23, 556 , 9,90)); //654
// console.log(Math.min(53,4655,3243,45634,32435,54,989,5,7,457,435)); // 5

// console.log(Math.random()); // 0-1 0.1, 0.12,0.123

// console.log(Math.sqrt(4));// 2

// console.log(Math.cbrt(8)); // 2

// let num = +prompt("enter the no");
// let i=1;
// while(i<=10){
//     console.log(num*i);
//     i++;
// }

// let num = +prompt("enter the num");
// let count=0;
// for(let i=2; i <= num/2; i++ ){
//     if(num % i ==0)
//         count++;
//     if(count == 0)
//         console.log(`prime no is ${num}`);
//     else
//         console.log("not a prime no");
// }

    // function declaration
// let a=20;
// greet();
// function greet(){
//     console.log("hi team");
// }

   //function as expression
//  console.log(sum);
//  var sum = function(){
//     console.log("hi everyone");
//  }
//  console.log(sum);
//  sum();
 
    //Immediate invoke function
// (function sum(a,b,c){
//     console.log(`sum of ${a} & ${b} & ${c} is ${a+b+c}`);
// })(10,30,60);

// (function otpGeneration(){
//     alert(`otp is ${Math.floor(100000+Math.random()*90000)}`)
// })();

    // Arrow Functions
 let square = a=>{
                 console.log(a*a);
             }
    square(25);
//or   let square =a => console.log(a*a);     square(25);  //o/p- 625
      //Implicit return 
 let squares = d => d*d*d
       console.log(squares(4));
     // Explicit return 
// let check = f => {
//      if(f%2 == 0)
//         return "even";
//     else
//         return "odd";
// }   
// console.log(check(+prompt("enter number")));

// functional programming
// let sum=(a, b)=> a+b;
// let diff = (a,b)=> a-b;
// let mul = (a,b) => a*b;
// function calculater(work, c, g){   // call back function is work. 
//     return  work(c, g);
// }
// let result =calculater(diff, 50, 30); //higher order fun is calculator
// console.log(result);

      // nested function 
 function outer1(){
    console.log("i am a present.");
      function inner1(){
        console.log("i am a child.");
      }
      return inner1();
 } 
 outer1();

    // lexical scope
 let a= 20;
 function update(){
    a=21;
    console.log(a);
 }   
 update();
 console.log(a);
 
function outer(){
    let a= 20;
    function inner(){
        console.log(a);
    }
    return inner;
}
let res = outer();
  res();    // 20

  //   array    //
 let arr= [1,23,4,5,74,234,675,234,6,7,true,false,"li", "cons", null, "rahim", "ram"];
  let bool = () => {
    for(let i=0; i< arr.length; i++){
        if(typeof arr[i] === 'boolean')
            console.log(arr[i]);
    }
  } 
  bool();   // "li", "cons", "rahim", "ram"

//           print boolean equavalent value
//   for(let i=0; i<arr.length; i++){
//     console.log(Boolean(arr[i]));   
//   }

// for(let i=0; i<arr.length; i++){
//      if(typeof arr[i] === 'boolean' || typeof arr[i] === 'string')
//         console.log(arr[i]);
// }

// // 1>.. for of loop ;- iterate over array element 
//   for(let value of arr){
//     // console.log(value);
//       if(value %2 ==0)
//         console.log(value);
//   }

//   //   2>. for in loop;- iterate over array indexes.
//    for(let index in arr ){
//     if(index %2 ==0)
//          console.log(arr[index]);
//    }

 //  //  3>. forEach loop;- Higher order configuration
//   1>. push method;- insert element at last index. return length of array
  let arr1 = [10,20, 30, 40];
   let data = arr1.push(23,465,676);
   console.log(arr1);
   console.log(data);

//    pop() ;- delete element at last index , return deleted element
   let deleteAtLast = arr1.pop();
   console.log(deleteAtLast);
   
//    unshifted():- insert element at first element, return length
    let inserts = arr1.unshift(120, 200, 300);
    console.log(inserts);
    console.log(arr1);
    
//   shift():- delete at first index, return deleted element  
   let deleteFirst =  arr1.shift();
   console.log(deleteAtLast);
   console.log(arr1);        

//    splice():- insertion, deletion, updation; return deleted element; modifies original array.
//  arr_ref.splice(a,b,c) a-starting index,b-no. of elemnt to delete; c- element to insert
   let arr3 = [12,23,34,45];
   arr3.splice(2,1,100,200,300);
   console.log(arr3);  // [12, 23,100,200,300,45]

//  slice:- copy element, return new array ; 
//  arr_ref.slice(a,b) a- starting index, b- last index(excluded)
   let arr4 = [10,78,765,20,30,40,60,90];
   let copied = arr4.slice(1,3);
   console.log(copied);  //[78, 765]
   
//  indexOf():- return index of element;if not present element then -1 .    
//    arr_ref.indexOf(a,b) a- value to be select; b- search starting index 
   console.log(arr4.indexOf(30, 2)); // 4 index
   console.log(arr4.indexOf(390, 2)); // -1 index
   
//  includes():- checks availability in range. 
//  arr_ref.includes(a,b); a- value to be search, b- search starting index
     console.log(arr4.includes(20,2)); // true

//  reverse():-reversed array; return reversed original array.
    let rev = arr4.reverse();
    console.log(rev);   //(8) [90, 60, 40, 30, 20, 765, 78, 10]

//  Array.isArray():-check is array or not return true,false
   let obj = {name: "dgg"};
   console.log(Array.isArray(arr4));  //true
   console.log(Array.isArray(obj));  // false

//  Array.form():-convert literal to array; 
    console.log(Array.from("hello world")); //(11) ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']

//  Sort():-Callback,higher order function; asc, desc
    console.log(arr4.sort((a,b) =>a-b));// (8) [10, 20, 30, 40, 60, 78, 90, 765]
    console.log(arr4.sort((a,b) =>b-a)); //(8) [765, 90, 78, 60, 40, 30, 20, 10]
     
//  forEach();-iterate over elements & index.
    arr4.forEach((value,idx,arr4)=>{
        arr4[idx] = value*2;
    })
    console.log(arr4); //(8) [1530, 180, 156, 120, 80, 60, 40, 20]

//   Map():-callback, iterate over array, return new array,   
//   arr_ref.map((value,index,array) =>{  statement })
 let arr7 = [566,45,354,78,9,456,2,5,5,3,24,54];
  let new_array = arr7.map((val,idx,arr7)=>val*5);
  console.log(new_array); // (12) [2830, 225, 1770, 390, 45, 2280, 10, 25, 25, 15, 120, 270]
  
   let result = arr7.map(val => Boolean(val));
   console.log(result);  //(12)[true,true,...]
   
//   filter():-iterate over array element,return new array.
//   arr_ref.filter((value,index,array)=>{ statement  return true})
  let arr6 = [true," ","hello",0,null,false,34,67,undefined,1,"good"];
  let results = arr6.filter((val) =>{
    if(val%2==0)
        return true;
  });
  console.log(results);   // (5) [' ', 0 , null, false, 34]

  let results_arr = arr6.filter((val)=>{
    if(val === String(val) || val === Boolean(val) )
        return true;
  })
  console.log(results_arr);   // (5) [true,' ', 'hello',false, 'good']
  
//   reduce():-iterate over array & result into single value. (accumulator)variable
//  arr_ref.reduce((accumulator,value,index,array)=>{ statements },initial value of accumulator) 
    let arr8 = [10,45,75,32,89];
    let total = arr8.reduce((acc, val) =>{
        acc += val;
        return acc;
    },6);
    console.log(total);   // 257
    
    let getMax= arr8.reduce((acc,val) =>{
        if(acc < val)
            acc = val;
        return acc;
    });
console.log(getMax);   // 89

// STRING  ////////////
  let str= `hello`+" world "+' hi there.';
  console.log(str);
 let str1= new String("India");
  console.log(str1);

//How to access characters in a string.
//  str_ref[index]; str_ref.length;
   let str7 = "Hello world ";
   console.log(str7.toLowerCase());   //1 hello world
   console.log(str7.toUpperCase()); //2   HELLO WORLD   
   console.log(str7.indexOf('w'));  //3.  6
   console.log(str7.includes("He"));  //4.  true
   console.log(str7.startsWith("H")); //5.   true 0th place
   console.log(str7.endsWith("u")); //6.    false last place.
   console.log(str7.charAt(8)); //7.     r  value present give
   let str9 = "Hello India is my country";
   console.log(str9.length);     //   25
   console.log(str9.slice(3,9)); //8.   lo Ind  
   
//    subString str_ref.substring(a,b); a-start index, b- end index;
   console.log(str9.substring(3,9)); // lo Ind
 
   console.log(str9.charCodeAt(1)) ;// e=101 ascii value
   //split()
   console.log(str9.split(" "));
   // join()
   let arr5  = [1,2,3,4,5];
   let str2 = arr5.join('#'); 
   console.log(str2);  //  1#2#3#4#5

 // reverse the string 
 let string = "Bluethink";
 let arr10 = string.split("");   // B l u e t h i n k  
 arr10.reverse();               // k n i h t e u l B
 console.log(arr10.join(""));   // o/p:- knihteulB
 
 //////  OBJECT   //////////
//   ways to create Object :-
//  let obj = { };  // empty object
     let obj1 = {
         key1 : "34",
         key2: "56",
     } ;
  console.log(obj1);
//   by using curley braces and literal
  const obj3 = {
    4 : "orange",
    0 : "papaya",
    3 : "yellow",
    1 : "apple",
  };
  console.log(obj3);
  
let obj4 = {
    "first name": "lallu",
    "last name" : "yadav",
    "a conveted" : "singh",
    age :26
}
console.log(obj4);
console.log(obj4["age"]);
console.log(obj4["first name"]);
//  by using new keyword
let obj5 = new Object({12: 45,11:67});
console.log(obj5);
console.log(obj5["12"]);

// by using new keyword & constructor function.
function CreateObject(name, age, degree){
    this.name = name;
    this.age = age;  this.degree = degree;
} 
let Obj6 = new CreateObject("sgubham", 24, "BE");
console.log("Object-1");
console.log(Obj6);
let obj7 = new CreateObject("vikas", 18, "B-Tech");
console.log("object-2");
console.log(obj7);
// add a key value pair to object or update 
let obj8 = {
    name: "ravi",
    age: 28
}
console.log(obj8);
obj8.name ="sidhant";
obj8.age = 26;
console.log(obj8);
// square Bracket
obj8["name"] = "Mukesh";
obj8["age"] = 28;
console.log(obj8);

let obj9 ={
    name : "ABC",
    age: 28,
    display : function(){
        console.log("hello world");
    }
} 
console.log(obj9);
console.log(obj9.name);
console.log(obj9.display());
//  
let obj23 = {
    name : "GHJ",
    age : 12,
    display : function(){
        console.log(this.name);
        console.log(this.age);    
    }
}
console.log(obj23.display());
console.log("-----for arrow funcction---------------------");
let obj24 = {
    name : "jsdf",
    age : 13,
    display : function(){
        console.log(obj24.name);
        console.log(obj24.age);    
    }
}
console.log(obj24.display());
console.log("-----for in operator---------------------");
let obj25 = { name : "ram", age:89, city:"ayodhya"}
console.log("city" in obj25);  //true
console.log("country" in obj25); // false beacuse country not present.

console.log("-----Copy of Object 1 shallow copy---------------------");
// copy of object directly connected to original object is shallow copy.
let objs = {
    name : "abhj", age: 27, city : "noida", country :"india"
} 
let object2 = objs ;
object2.age = 60;
console.log(objs)
console.log(object2);

console.log("-----Copy of Object 2  Deep copy---------------------");
// copy of object which is not connected to original object is Deep copy.
let objt = {
    name : "abhj", age: 27, city : "noida", country :"india"
} 
let object3 = {};
for(let prop in objt){
    object3[prop] = objt[prop]; 
}
object3.age = 60;
console.log(objt)
console.log(object3);

console.log("--Json.stringify(), Json.parse() ----------------");
// Json
let objec = {
    name : "Rohan",
    age : 20,
    address : {
        houseNo : 123,
        area : "sector 5", city : "Noida", pincode : 201301
    },
}
console.log(objec);
let datas  = JSON.stringify(objec); // json string
console.log(datas);
let copyObject = JSON.parse(datas);  // plain JS object
copyObject.address.city = "new Delhi";
console.log(objec);
console.log(copyObject);












   
   
   
   
  

  
