// Array and Objects in javaScript:-
//1. Array

let marks = [36,35,50,80,75,65];
const fruits =["apple","orange","Pineapple"];
const mixed = ["str", 85 ,[3,5]];

const arr = new Array(23,12,34,"orange");
// console.log(arr)
// console.log(mixed)
// console.log(marks)
// console.log(fruits[0])
// console.log(arr.length)
// console.log(Array.isArray(arr))
// console.log(Array.isArray('shy'))
arr[0]= "shyam";
let arrElement = arr[0];  
// console.log('element is:', arrElement);
// console.log(arr);

let value = marks.indexOf(50)
// console.log(value)

//2. mutating or Modifying arrays

marks.push(34); // value  push in end of array
marks.unshift(105); // value  push in start of array  
marks.pop() // value out from the end of array
marks.shift() //value out from the start of array
marks.splice(2,3) //value out from 2 to 3 from the array and so on
marks.reverse() // all value reverse
let marks2 = [1,2,3,4]
marks= marks.concat(marks2) // add value of marks2  
// console.log(marks)

//3. Object
let myobj = {
    'first name' : 'shyam',
    channel: 'code with shyam',
    isActive: true ,
    marks: [32,45,34,56,65]
}
console.log(myobj);
console.log(myobj.marks);
console.log(myobj.isActive);
console.log(myobj['channel']) //anather way to axis



