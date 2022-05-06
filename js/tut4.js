// Data types in JavaScript(Primitive & Reference Types)

//1. Primitive data types :-
// Strings
let name = 'shyam'
console.log("My string is " +name);
console.log("Data type is " +(typeof name));

//Numbers
let marks = 17.5;
console.log("Data type of "+(typeof marks))

//Boolean
let isDriver = true;
console.log("Data type of "+(typeof isDriver));

//Null
let nullVar = null;
console.log("Data type of "+(typeof nullVar)) 

// Undefined
let undef = undefined;
console.log("Data type of "+(typeof undef))

// Reference Data Types
// Array
let myarr = [1,3,2,4,34,false,"string"];
console.log("Data type of "+(typeof myarr));

//Object Literals
let stMarks ={
    shyam: 97,
    shubham:80,
    sumit :65,
}
console.log("Data type of "+ (typeof stMarks))

//Function
function findName() {
    
}
console.log("Data type of "+(typeof findName))

// Date
let date = new Date();
console.log("Data type of "+ (typeof date))