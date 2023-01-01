class Shape {
  Area;
}

class Rectangle extends Shape {
  length;
  breadth;
  constructor(length, breadth) {
    super();
    this.length = length;
    this.breadth = breadth;
    this.Area = this.length * this.breadth;
  
  }
}

class Square extends Shape {
  length;
  constructor(length) {
    super();
    this.length = length;
    this.Area = this.length * this.length;
  }
}

const sq1 = new Square(15);
sq1.calculateArea();
console.log(sq1.Area);

const req1 = new Rectangle(10,20);
req1.calculateArea();
console.log(req1.Area);

