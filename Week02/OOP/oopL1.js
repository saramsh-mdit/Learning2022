class Shape {
    static noOfShapes = 0;

    constructor() {
        Shape.noOfShapes++;
    }
    static getNoOfShape() {
        console.log(Shape.noOfShapes);
    }
    getArea() {
        return
    }
}

class Rectangle extends Shape {
    length;
    breadth;

    getArea() {
        return this.length * this.breadth;
    }
}

class Square extends Shape {
  length;

    constructor(length) {
        super();
        this.length = length;
    }
    
  getArea() {
    return this.length * this.length;
  }
}

class Circle extends Shape {
  radius;
  getArea() {
    return this.radius * this.radius * 3.14;
  }
}

const s1 = new Square();

const s2 = new Square(25);

const c1 = new Circle();
const c2 = new Circle();
const c3 = new Circle();
const c4 = new Circle();


Shape.getNoOfShape();