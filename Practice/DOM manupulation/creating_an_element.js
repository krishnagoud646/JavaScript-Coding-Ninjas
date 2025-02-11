const btn = document.createElement("button");
btn.textContent = "Click Here";
btn.className = "btn1";

const div2 = document.createElement("div");

const div = document.querySelector("div");
div.appendChild(btn);
const body = document.querySelector("body");
body.appendChild(div2);

const para = document.createElement("p");
para.textContent =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda quidem temporibus maiores optio consequuntur aperiam. Dolore nobis quasi voluptate et";
btn.id = "#para";


div2.appendChild(para)



