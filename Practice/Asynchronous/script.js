// for (var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }
// for(let i = 0; i<5; i++) {
//     setTimeout(function(){
//         console.log(i);
//     }, 1000);
// }

function timer() {
    for (let i = 1; i <= 5; i++) {
      setTimeout(
        function () {
          console.log(i);
        },i * 1000);
      console.log("Hello ninjas!");
    }
  }
  timer();

// function greet(name) {
//   console.log(`Hello ${name}!`);
// }
// // Greet with a name every second (1000 milliseconds)
// const intervalId = setInterval(greet, 1000, "Alice");
// // Stop greeting after 5 seconds
// setTimeout(() => {
//   clearInterval(intervalId); // Clearing interval using
//   clearInterval();
// }, 5000);
  