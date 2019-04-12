// arguments object - no longer bound with arrow functions ( meaning if yo try to access them you wont be able to)

const add = (a,b) => {
    // dont have access to arguements in ES6, if you wanna use then switch back to ES5
    //console.log(arguments); //prints all the arguments passed to the function, regardless of what's defined above
    return a+b;
}

// this keyword - no longer bound with arrow functions. If this doesnt exist in the current scope, it jus takes the value from the parent.

const user = {
    name: 'test',
    cities: ['fresno', 'CA', 'seattle'],
    //ES6 - way of definig the methods
    //printPlacesLived(){
    //ES5
    printPlacesLived : function(){
        //map method - array method but works differently, you can transform each elemnt from that array
        this.cities.map((city) => {
            console.log(this.name + ' has lived in ' + city);
        });


        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });
    }
};

user.printPlacesLived();


//challenge 

const multiplier = {
    numbers: [2, 3,4],
    multiplyBy: 3,
    multiplications: function(){
        return this.numbers.map((number) =>  this.multiplyBy * number);
        
    }
}

console.log(multiplier.multiplications());



