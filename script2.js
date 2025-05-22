console.log("---call method-------------");
// call:-accepts obj_ref at its 1st parameter then pass n no of arguments.
let obje= {
    name:"hdf", age : 23,
    printDetails : function(c,d){
        console.log(`my name is ${this.name} & my age is ${this.age} the addition is ${c+d}`);
    }
}
let obje2 = {
    name : "laxman",age:34
}
console.log(obje.printDetails.call(obje, 20, 30));
console.log(obje.printDetails.call(obje2, 20, 30));

console.log("---Apply method-------------");
// apply:- accepts only 2 parameter, 1st obj_ref, 2nd array 
let result = obje.printDetails.apply(obje, [40,60]);
console.log(result);
let result1 = obje.printDetails.apply(obje2, [4,6]);
console.log(result1);

console.log("---Bind method-------------");
// bind:- accept obj_ref at 1st parameter & accept 'n' no of values.
let totalresult = obje.printDetails.bind(obje2, 2,4);
console.log(totalresult());

console.log("--Object-Dstructuring -------");
 // destructuring:-process of extracting values from object or array & storing inside variables.
//  Object_Destructuring:- extracting values from object into variables. ex:- let { } = ;

function random({username,age,state}){
    console.log(username);
    console.log(age);
    console.log(state);
}
let ob1 = {
    username : "kamal", age: 27, state: "UP"
}
random(ob1);

console.log("--Array-Dstructuring:-extracting value from array into variable.-------");
// array_destructuring:-extracting value from array into variable.
let arr =[10,20,30,40,50,60];
function arrayDest([first,second,third,fourth,fifth,sixth]){
    console.log(first);
    console.log(second);
    console.log(third);
    console.log(fourth);
    console.log(fifth);
    console.log(sixth);
}
arrayDest(arr);

console.log("--Rest parameter-----------");
// Rest parameter:- used to store 'n' no of values, store them in an array & the refrence of array will be stored in the variable. ...variable name; eg: function work(a,b, ...rest)
function displayRest(a,b, ...rest){
    console.log(a);
    console.log(b);
    console.log(rest);
    console.log(rest[0]);
    console.log(rest[1]);
    console.log(rest[2]);
    console.log(rest[7]);
}
displayRest(10,20,30,40,50,60,70,80,90,100);

console.log("--Spread parameter---used to unpack values from object or array.");
// Spread parameter:-used to unpack values from object or array.
let  array =[23,12,34,45,67,89,64];
function displayspread(a,b,c,d,e,f,g){
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
    console.log(g);   
}
displayspread(...array);

console.log("--prototype------------");
//prototype
let arrays = [24,464,879,89];
let oral = {
    name: "bhola",
    age: 54
} 
console.log(oral.__proto__);
console.log(arrays.__proto__.__proto__);
console.log(arrays.__proto__);

// Objects in build methods
console.log("---Object in Build Method.------------");
console.log("1>. object.keys(obj_ref):- return array of given object keys");
let obt = {
    name:"laal", age:45,city:"gurgoan",state:"haryana"
}

//object keys & values
console.log(Object.keys(obt));
console.log("2>. object.values(obj_ref):- return array of given object values");
console.log(Object.values(obt));

//object entries
console.log("---3>.Object.entries(obj_ref):- return key and values");
console.log(Object.entries(obt));

//objects assign
console.log("--Object.assign():-it copies key value pair from one or more source objects into target objects.");
console.log("Object.assign(target, source1, source2,--- source n--");

let target ={
    state:"UP"
}
let source2 = {
    name:"monu"
}
let source1 = {
    age: 12
}
Object.assign(target,source1,source2);
console.log(target);
console.log(source1);




