const request = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise Initiated");
    // resolve("Promise Fulfilled");
    reject("Request has been Rejected!!");
  }, 1000);
});

// console.log(request);

request
  .then((value) => {
    console.log(value);
  })
  .catch((err) => console.log(err)).finally(()=> console.log("Request Completed"));
