/** Funtion returing Funtions */

function greet(message){
    return function(wishes) {
        console.log(`${wishes}, ${message}`);
    }
}

greet("Welcome to the Session")("Hi");