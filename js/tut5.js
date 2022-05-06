// type conversion and type coercion
console.log('Welcome to tut5')

//(type conversion is=>)

//1. convert number to strings
let myvar;
// myvar = 35;
myvar = String(35);
// console.log(myvar,(typeof myvar));

//2. convert boolean to string
// let booleanVar = true;
let booleanVar = String(true);
// console.log(booleanVar,(typeof booleanVar));

//3. convert date to strings
// let date = new Date()
let date =String (new Date())
// console.log(date,(typeof date));

//4. convert array to strings
// let arr = [1,4,2,3,6,5]
let arr = String([1,4,2,3,6,5])
// console.log(arr.length,(typeof arr)) // array length means element in it,|| strings length means character in it

// anather way to convert in string
let i = 75;
 console.log(i);
//  console.log(i.toString());

let j = true;
console.log(j);
// console.log(j.toString());

//1.convert strings to number
// let stri = '3531';
let stri = Number('3531');
stri = Number('3536shyam')
stri = Number(true)
stri = Number(false)
stri = Number([1,2,3,4,5,6,7])
// console.log(stri,(typeof stri))

// let number = '17'
// let number = parseInt('17')
// let number = parseInt('17.475')
// let number = Number('17.475')
let number = parseFloat('17.475')
console.log(number,(typeof number))
console.log(number.toFixed(2),(typeof number))

// Type coercion

// let mystr = "698";
let mystr = Number("698")
let mynum = 34;
console.log(mystr+mynum)