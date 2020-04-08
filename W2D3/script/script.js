"use strict";

const arrayUtils = function () {
    return {
        multiplesCount: function (nums, num) {
            let count = 0;
            for (n of nums) {
                if (nums % num === 0) {
                    count++;
                }
            }
            return count;
        },
        reverseInPlace: function (nums) {
            return nums.reverse();
        },
    }
};

const array = []; 

employee.prototype.printTheName=function(name){
    console.log(name)
};

/*
let car = {
    make: "default",
    model: "default",
    color:"default",
    drive: function (speed) {
        console.log(`The ${this.color} ${this.make} ${this.model} is driving at ${speed} mph.`);
    },
    stop: function () {
        console.log(`The ${this.color} ${this.make} ${this.model} is stoping.`);
    }
};

car.drive();
car.stop();

let redHondaAccord = Object.create(car);
redHondaAccord.make="Red";
redHondaAccord.model="Honda"
redHondaAccord.color="Accord"
redHondaAccord.drive(200);



function Car1(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;

    this.drive = function (speed) {
        console.log(`The ${this.color} ${this.make} ${this.model} is driving at ${speed} mph.`);
    },
        this.stop = function () {
            console.log(`The ${this.color} ${this.make} ${this.model} is stoping.`);
        }
}

let redHondaAccord1 = new Car1("Honda", "Accord", "Red");
redHondaAccord1.drive(300)
    * /

/*
let person = {
    name: "",
    dateOfBirth: "",
    getName: function () {
        return this.name;
    },
    setName: function (name) {
        this.name = name;
    }
};

let john = Object.create(person);

john.name = "John";
john.dateOfBirth = "1998-12-10";

console.log(`The person’s name is  ${john.name}`);
console.log(`${john.name} was born on ${john.dateOfBirth}`);

let employee = {
    salary: 0,
    hireDate: new Date(),
    doJob: function (jobTitle) {
        console.log(`${this.name} is a ${jobTitle} who earns ${this.salary}`);
    }
}

employee.prototype = person;



let anna = Object.create(employee);
anna.name = "Anna";
anna.salary = "$249.995.50";
anna.doJob("Programmer");



function PersonObj(name, dateOfBirth) {
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.getName = function () {
        return this.name;
    }
    this.setName = function (name) {
        this.name = name;
    }
    this.toString = function () {
        return `{Name: ${this.name}, DateOfBirth: ${this.dateOfBirth}`;
    }
}

let peter = new PersonObj("Peter", "1998-12-10}");
console.log(peter.toString());

class People extends PersonObj{
    show(){
        console.log(`==== > {Name: ${this.name}, DateOfBirth: ${this.dateOfBirth}`);
    }
}

let p = new People();
p.show();
*/