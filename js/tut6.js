// Strings: properties,Methods & Template Literals in JavaScript 

// strings in javaScript
console.log("we are a tut6")

const name = "shyam";
const greeting = "good morning";
// console.log(greeting +" " +name);

let html;
html = "<h1> this is heading</h1>"+
        "<p> this is My para</p>";
html = html.concat("this"," str2");
console.log(html);
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());
// console.log(html);

console.log(html[3]); //indexing properties.

console.log(html.indexOf("this"));
console.log(html.indexOf("dhys"));
console.log(html.indexOf("<"));
console.log(html.lastIndexOf("<")); //this for last index

console.log(html.charAt("5"));


// console.log(html.endsWith("str2"));
// console.log(html.endsWith("this"));

// console.log(html.includes("str2"));
// console.log(html.includes("is"));
// console.log(html.includes("shyam"));

// console.log(html.substring(1,6));
// console.log(html.substring(-4));

console.log(html.slice("7"))
// console.log(html.slice("-4"));
console.log(html.slice(0,4));

// console.log(html.split(" "));
// console.log(html.split(""));
// console.log(html.split(">"));

// console.log(html.replace("this","it")); // this replace only first occurance

//Template Literals;
let fruit1 = "orange";
let fruit2 = "apple";
let myHtml = `hello ${name} 
             <h1> this is "my" heading</h2>
             <p> you like ${fruit1} and ${fruit2}
        
             `;

// document.body.innerHTML = myHtml

// exercise1
let marks1 = 78;
let marks2 = 92;
let marks3 = 75;
let myHtm = `helle ${name}
             <h1> this is my "marks"</h>
            <p> in math ${marks1}, physics ${marks2} and  biology ${marks3}`;

// document.body.innerHTML= myHtm;          