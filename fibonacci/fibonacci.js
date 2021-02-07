const fibonacci = function(num) {
    num = Number(num);
    if(num === 1) {
        return 1;
    }
    else if(num <= 0) {
        return "OOPS";
    }
    let fibonacci = [1, 1];
    for(let i = 0; i < num; i++){
        let num1 = fibonacci[fibonacci.length - 1];
        let num2 = fibonacci[fibonacci.length - 2];
        fibonacci.push(num1 + num2);
    }
    console.log(fibonacci);
    return(fibonacci[num-1]);
}

module.exports = fibonacci
