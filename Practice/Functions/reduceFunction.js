/** Reduce Function */

// reduce(redFn, initialValue);

// function refFn(accumulator, currentValue, currentIndex, arr)

const inputs = [2,3,4,6,10];

const sum = inputs.reduce((total,num,index)=> {
    // console.log(total,num);
    console.log(total,index);
    
    return total+num;
},0);

console.log(sum);
