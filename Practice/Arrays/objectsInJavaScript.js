const student = {
    name: 'Alexa',
    age: 10,
    hobby:'Dancing',
    100:'hundred',
    show: function(){
        console.log('This is the students detailed section');
    }
}
console.log(student);
console.log(student.name);
console.log(student['name']);
console.log(student[100]);
student.show();
student.ages = 21; // adds element to the object 
console.log(student);