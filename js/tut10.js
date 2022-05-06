// Function in javaScript
console.log("tut10")

// var i = 234;
let i = 234;
{
    
}
console.log(i);
function ui(name){
    // var i = 9;
    i=9;
    //  let i = 9;
    console.log(i);
    return `This is a ${name} ui`
}
console.log(ui("herry"),i);

// function greet(name, thank="Thank You"){
//     console.log(`happy birthday ${name}. Happy days are 2 stay forever Just because you are together And brighter days are yet 2 come Filled with laughter and fun ${thank}.`)
//     let msg = `happy birthday ${name}. Happy days are 2 stay forever Just because you are together And brighter days are yet 2 come Filled with laughter and fun ${thank}.`;
//     return msg;
// }

  const mygreet = function(name, thank="Thank You"){
    let msg = `happy birthday ${name}. Happy days are 2 stay forever Just because you are together And brighter days are yet 2 come Filled with laughter and fun ${thank}.`;
    return msg;
  }
let name = "sud"
let name2 = "pulkit"
// greet(name,"thanks a lot");
 
// let val = greet(name);
let val = mygreet(name);
// console.log(val)

const myobj={
    name: "sud",
    game: function(){
        return "GTA"
    }
}
// console.log(myobj.game());

arr = ['fruit' , 'vegetable','food']
arr.forEach(function(element,index,array) {
//    console.log(element,index) 
});