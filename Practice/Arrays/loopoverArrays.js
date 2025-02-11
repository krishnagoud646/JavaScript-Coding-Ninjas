const students = ["Tina", "Raj", "Bobby", "Seema", "Alex", "Sita"];

// For loop
for(let i=0; i<students.length; i++){
    console.log(`Roll No ${i+1}: ${students[i]}`);
}

/** for .. in loop */
console.log("...for .. in loop..............")
for (let i in students){
    console.log(`Roll No ${Number(i)+1}: ${students[i]}`)
}

/** for .. of loop*/
console.log("....for .. of loop...............")
for(let student of students){
    console.log(student);
}