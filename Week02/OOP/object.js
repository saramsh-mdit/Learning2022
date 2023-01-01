// Copy Object using spread operator // Partial Copy
const object = {
    data: 100,
    person: {
        name: "Samip",
        secondName:"Nripesh"
    }
};
// const objectTwo = {...object, person:{...object.person}};
// // const objectTwo = object;

// console.log('\n', object, '\n', objectTwo);

// object.data = 2500;
// object.person.name = 2500;

// console.log('\n', object, '\n', objectTwo);


// Fully Copy

const objectTwo = Object.create(object);
console.log('\n', object, '\n', objectTwo);

object.data = 2500;
object.person.name = 2500;

console.log('\n', object, '\n', objectTwo);