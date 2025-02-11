// console.log(document.querySelectorAll("h1"));
const firstHead = document.querySelector("h1");
console.log(firstHead);
const para = document.querySelector("#para");
console.log(document.querySelector(".second"));
console.log(document.querySelector("#para"));

console.log(document.getElementById("para"));
console.log(document.getElementsByClassName("first"));
console.log(document.getElementsByTagName("p"));

firstHead.style.color = "red";
para.style.backgroundColor = "grey"; 

const imageElement = document.getElementById('myImage');
imageElement.setAttribute('src', 'https://images.app.goo.gl/J9mxhNMB9JyyW5uC8');
