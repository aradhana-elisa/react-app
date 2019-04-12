//Car 
    //Make, model, vin 
    //getDescription 

class Person {
    constructor(name = 'Anonymous', age=0){
        //this is the instance of the class 
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        //tempate strings using `` - no need of concatenations 
        return `HI I am ${this.name}`;
        //return 'Hi ' + this.name;
    }

    getDescription(){
        return `${this.name} is ${this.age} years old`;
    }

}

class Student extends Person {
    constructor(name, age, major){
        super(name, age); // calls the constructor from the parent class
        this.major = major
    }
    hasMajor(){
        return !!this.major;
    }


    getDescription(){
        //calling parents method into child class 
        let description = super.getDescription();

        if(this.hasMajor()){
            description += `. Her major is ${this.major}`;
        }

        return description;
    }
}

class Traveller extends Person {

    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }
/* 
    hasHomeLocation(){
        return !!this.homeLocation;
    } */

    getGreeting(){
        let greeting = super.getGreeting();

        if(this.homeLocation){
            greeting += `. I am visiting from ${this.homeLocation}`;
        }

        return greeting;
    }
}

//creating instance of class 
const me = new Traveller('Aradhana Elisa', 23, 'California');
console.log(me.getGreeting());

const other = new Traveller();
console.log(other.getGreeting());