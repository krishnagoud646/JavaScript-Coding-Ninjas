/** Call Back Functions */
function greet(wish){
    console.log(`${wish()}, Welcome to the JS course`);
}

function sayHi(){
    return 'Hi!';
}

function sayhello(){
    return 'Hello';
}

function goodMorning(){
    return 'Good Morning';
}

greet(sayHi);
greet(sayhello);
greet(goodMorning);