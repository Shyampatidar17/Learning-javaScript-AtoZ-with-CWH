// If Else condition & Switches in JavaScript

// 1. If Else condition

// const age = 19;
// const age = 65;
// const age = "65";



// // if (age == 19 )
// if(age!=19){ 
//     // console.log("age is 19")
//     console.log("age is not 19")
// } 
// // else if(age === 65){
//  if(age !==65){
// //if(age ==65){      
//     // console.log("age is 65")
//     console.log("age is not 65")
// }
// else{
//      console.log("age is not 19")
// }

// const vari = 34;
//  if ( typeof vari !== "undefined"){
//     console.log("vari is defined")
//  }else{
//     console.log("vari is not defined")
//  }

// const doesDrive = true;
// const doesDrive = false;
// if ( doesDrive){
//     console.log("You can drive");
// }else{
//     console.log("You can not drive");
// }

// const doesDrive = true;
// const doesDrive = false;
// const age = 21;
// const age = 17;
// if ( doesDrive && age>18){
//     console.log("You can drive");
// }else{
//     console.log("You can not drive");
// }

// const doesDrive = true;
// const doesDrive = false;
// const age = 21;
// const age = 17
// if ( doesDrive || age>18){
//     console.log("You can drive");
// }else{
//     console.log("You can not drive");
// }

//2. Turnary oprator
// const age = 45;
// const age = 47;
// console.log(age==45? " age is 45": "age is not 45")

// 3. Switches

// const age = 18;
// const age = 26;
// const age = 23;
const age = 36 ;
switch (age) {
    case 18:
        console.log(" you are 18")
        break;
    case 26:
        console.log(" you are  26") 
        break;
    case 23:
        console.log(" you are  23")
        break;
    default:
        console.log(" you are not this age")
        break;
}





// NOTES for if else
/*
1. == this is comparision  only match value
2. === this is data type and value both are comparision
3. != this is not equal sign
4. !== this is also not equal sign
5.else if  apply when this cindition true than dont go to next step otherwise go
6. &&(and) means both condition are true 
7. ||(or) means any one condition are true

*/