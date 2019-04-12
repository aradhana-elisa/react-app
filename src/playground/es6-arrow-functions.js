//ES5
const square = function(x){
    return x*x;
};

//ES6
/* const squareArrow = (x) => {
    return x*x;
}; */

// concise version of the same function 
const squareArrow = (x) =>x*x;

console.log(square(5));

console.log(squareArrow(9));


const getFirstName = (name) => {
    return  name.split(' ')[0];
};

console.log(getFirstName('Aradhana Elisa'));