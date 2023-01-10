// Data Types

let a:number = 15;
let b:number = 15.165;
let c:boolean = true;
let d:string = "Hello There";

// Array
let arr:string[] = ["asd","asdasd",d];
let arrTwo:number[] = [12,121,121];

// Custom
type arrThreeType = number | string
let arrThree:arrThreeType[] = ['dsfsdf',5645];

// Object
type PersonType = {
    name:string,
    surname:string,
    middleName?:string,
    dateOfBirth: string,
    age:()=>number,
} 

const Samip:PersonType = {
    name : "sameep",
    surname:"ghimire",
    dateOfBirth: new Date().toUTCString(),
    age:()=> {
        return 22
    }
}

// Object and Array Mix 

const PersonsArray:PersonType[] = [Samip];

PersonsArray.push(Samip);


// If Not Defined

type Person01Type = {
    name:string,
    surname:string
}

const Person01Array:Person01Type[] = [];


Person01Array.push({} as Person01Type )

const data: {a?:Person01Type} = {};

Person01Array.push( data.a! )


// PARTIAL
interface Car {
    name?:string,
    model?:string
}

const Audi:Partial<Car> = {
    name:"sadas"
}