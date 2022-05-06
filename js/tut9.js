// For,while & Do while Loops in java Script:-
console.log('learn about tut9')

//1. For loops

// let a = 36;
// a += 1;
// a++;
// console.log(a);

// for(let i=0; i<100;i++){
//     console.log(i)
// }

// 2. While Loop

// let j = 0;
// while(j<10){
//     // console.log(j);
//     console.log(j+1);

//     j++;
// }

// 3. Do While Loop

// let k = 0;
// // let k = 110
// do{
//     // console.log(k+1);
//     if(k===5){
//         // break;
//         k +=1
//         continue;
//     }
//     console.log(k+1);
//     k+=1;
// } while(k < 10);
// console.log("done")

let arr = [2,3,4,5,6,7];
// for(let i=0;i<arr.length;i++){ //first way
//     const element = arr[i];
//     console.log(element)
// }

arr.forEach(function(element,index,array){ // second way
    console.log(element,index,array)
})

let obj ={
    name: "shyam patidar",
    age: "26",
    type: "Dangerous Programmer",
    learn:"javaScript"
    }
for(let key in obj){
    console.log(`The ${key} of object ${obj[key]}`)
}
