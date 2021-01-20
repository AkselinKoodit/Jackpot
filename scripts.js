
let first, second, third, fourth, fifth, ones;
ones=0;
first=(Math.floor(Math.random()*10))%2;
    if(first===1) {
       ones++; 
    }
console.log(first);

second=(Math.floor(Math.random()*10))%2;
    if(second===1) {
        ones++; 
    }
console.log(second);

third=(Math.floor(Math.random()*10))%2;
    if(third===1) {
        ones++; 
    }
console.log(third);

fourth=(Math.floor(Math.random()*10))%2;
    if(fourth===1) {
        ones++; 
    }
console.log(fourth);

fifth=(Math.floor(Math.random()*10))%2;
    if(fifth===1) {
        ones++; 
    }
console.log(fifth);

if (ones===5) {
    console.log("Congratulation! You've won the jackpot!! Chances of that are One out of "+(2**5)+"(2**5 right?)")
} else if (ones===0) {
    console.log("Congratulations! You didn't win but all numbers were 0's so that's pretty rare...")
} else {
    console.log("No winners here");
}
