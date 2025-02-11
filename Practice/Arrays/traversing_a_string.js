/** String Traversal */
function countChars(str, ch){
    let count = 0;
    for(let i=0; i<str.length; i++){
        if(str.charAt(i) === ch){
            count++;
        }
    }
    return count;
}

let str = 'JavaScript is an amazing language.';
charToFind = 'a';

let c = countChars(str, charToFind);
console.log(c);