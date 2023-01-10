"use strict";
// Data Types
let a = 15;
let b = 15.165;
let c = true;
let d = "Hello There";
// Array
let arr = ["asd", "asdasd", d];
let arrTwo = [12, 121, 121];
let arrThree = ['dsfsdf', 5645];
const Samip = {
    name: "sameep",
    surname: "ghimire",
    dateOfBirth: new Date().toUTCString(),
    age: () => {
        return 22;
    }
};
// Object and Array Mix 
const PersonsArray = [Samip];
PersonsArray.push(Samip);
const Person01Array = [];
Person01Array.push({});
const data = {};
Person01Array.push(data.a);
const Audi = {
    name: "sadas"
};
