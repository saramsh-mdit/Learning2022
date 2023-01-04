const obj1 = {
    name: "something",
    data: {
        value:1600
    },
    getData() {
        return this.name
    }
}

// const obj2 = { ...obj1, data: {...obj1.data}};
const obj2 = JSON.parse(JSON.stringify(obj1));


console.log("Before");
console.log("obj1",obj1);
console.log("obj2",obj2);

obj1.name = "new something";
obj1.data.value = "HAHAHa"

console.log('After');

console.log("obj1",obj1);
console.log("obj2",obj2);