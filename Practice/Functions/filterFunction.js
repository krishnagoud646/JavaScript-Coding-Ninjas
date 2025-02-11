const inputs = [2,4,3,-3,-4,-9,7];

const positives = inputs.filter(noNegatives);

function noNegatives(num){
    return num > 0;
}

console.log(positives)

const negatives = inputs.filter((num) => num <0);

console.log(negatives);
