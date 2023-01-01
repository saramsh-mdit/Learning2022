class CustomArray {
    data= [];

    constructor(array) {
        this.data = array;
    }
    map(anonymousFunc) {
        for (let a = 0; a < this.data.length; a++) {
            this.data[a] = anonymousFunc(this.data[a]);
        }
    }
}


const newData = new CustomArray([10, 20, 30, 40]);
console.log(newData.data);

newData.map((i) => i + 50);
console.log(newData.data);

