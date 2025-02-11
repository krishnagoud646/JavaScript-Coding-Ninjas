const btn = document.createElement("button");
btn.textContent = "Click Here";
btn.className = "btn1";

const division = document.querySelector("div");
division.appendChild(btn);

// document.querySelector("p").remove();

const p = document.querySelector("p");
p.addEventListener("click", function () {
  clickPara("Hello");
});

function clickPara(name) {
  console.log(name + " Para Clicked");
}

const btn_click = document.querySelector("button");
btn_click.addEventListener("click", removeh2);
  
function removeh2() {
  document.querySelector("h2").remove();
}

p.addEventListener("mousedown", () => (p.style.backgroundColor = "yellow"));
p.addEventListener("mouseup", () => (p.style.backgroundColor = ""));

document.body.addEventListener("keydown", (event) => {
  console.log("Key Pressed");
  console.log(event.key);
});

// document.addEventListener("mousemove", (event) => {
//   const x = event.clientX; // X-coordinate relative to viewport
//   const y = event.clientY; // Y-coordinate relative to viewport
//   console.log(`Mouse X: ${x}, Mouse Y: ${y}`);
// });

const dragItem = document.getElementById("dragItem");
const dropZone = document.getElementById("dropZone");

// 1. Set up the dragstart event on the draggable element
dragItem.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("text/plain", "This is drag data!");
});

// 2. Allow the drop target to accept the dragged item
dropZone.addEventListener("dragover", (event) => {
  event.preventDefault(); // Necessary for drop event to work
});

// 3. Handle the drop event
dropZone.addEventListener("drop", (event) => {
  event.preventDefault();
  const data = event.dataTransfer.getData("text/plain");
  dropZone.textContent = `Dropped: ${data}`;
});
