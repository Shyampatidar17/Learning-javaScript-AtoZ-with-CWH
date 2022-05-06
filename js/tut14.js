// HTML Element Selectors in javaScript

/*
element selector:-
1. Single element selector
2. Multi element selector
*/

// 1. Single element selector

 let element = document.getElementById("myfirst")
//  console.log(element);
//  element = element.className;
//  element = element.childNodes;
//  element = element.parentNode;
 element.style.color = "red"
 element.innerText = "shyam is a good boy"
 element.innerHTML = "<b>shyam is a good boy</b>"
//  console.log(element.innerHTML);
//  console.log(element);
 
 let sel = document.querySelector("#myfirst");
  sel = document.querySelector(".child");
  sel = document.querySelector("b");
  sel = document.querySelector("h1");
  sel = document.querySelector("div");
  sel.style.color="green";
//  console.log(sel)

// 2. Multi element selector

let elems = document.getElementsByClassName("child")
elems = document.getElementsByClassName("container")
elems = document.getElementsByTagName("div")
console.log(elems)

for (let index = 0; index < elems.length; index++) {
    const element = elems[index];
    console.log(element)
    element.style.color="orange"
}

// Array.from(elems).forEach(element => {
//     console.log(element)
//     element.style.color="orange"
// });
// console.log(elems[0].getElementsByClassName('child'))