let car1 = new Object();
car1.color = "white";
car1.maxSpeed = 197; // 197mph O.o
car1.tuning = true;
car1["number of accidents"] = 0;

car1.driver = new Object();
car1.driver.name = "Oleh Zapukhliak";
car1.driver.category = "C";
car1.driver["personal limitations"] = "No driving at night";

let car2 = {
          color: "black",
          maxSpeed: 220,
          tuning: false,
          "number of accidents": 2,
          driver: {
                    name: "Oleh Zapukhliak",
                    category: "B",
                    "personal limitations": null
          }
}

//
car1.drive = function () {
    console.log("I am not driving at night");
  };
  console.log("usage -> car1.drive()");
  car1.drive();

  car2.drive = function () {
    console.log("I can drive anytime");
  };
  console.log("usage -> car2.drive()");
  car2.drive();

//
//

function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;

    this.trip = function () {
        if (!this.hasOwnProperty("driver")) {
          console.log("No driver assigned");
        } else {
          let message = "Driver " + this.driver.name;
          if (this.driver.nightDriving) {
            message += " drives at night";
          } else {
            message += " does not drive at night";
          }
          message += " and has " + this.driver.experience + " years of experience";
          console.log(message);
        }
    }
}

Truck.prototype.AssignDriver = function (name, nightDriving, experience) {
    this.driver = {
      name: name,
      nightDriving: nightDriving,
      experience: experience,
    };
  };

  let Truck1 = new Truck("grey", 1520, 90, "Toyota", "Supra");
  Truck1.AssignDriver("Oleh Zapukhliak", true, 2);
  let Truck2 = new Truck("red", 1268, 85, "Honda", "Civic");
  Truck2.AssignDriver("Oleh Zapukhliak", false, 3);

  console.log("usage -> Truck1.drive():");
  Truck1.trip();
  console.log("usage -> Truck2.drive():");
  Truck2.trip();

//es6

class Square {
    constructor(a) {
        this.a = a;
    }
    static help() {
        console.log(
            "Square Properties:" + "\n" +
            "1) All sides are equal in length" + "\n" +
            "2) Opposite sides are parallel" + "\n" +
            "3) All angles are 90 degrees"
        );
    }

    length() {
        console.log("Perimeter of a square: ", 4 * this.a);
    }
    
    square() {
        console.log("Area of the square: ", this.a * this.a);
    }
    info() {
        console.log(
          "Square Information:","\n",
          "1) Side lengths: ",this.a,"\n",
          "2) All angles = 90 degrees","\n",
          "3) Perimeter: ", 4 * this.a, "\n",
          "4) Area: ",this.a * this.a
        );
      } 
}

class Rectangle extends Square {
    constructor(a, b) {
        super(a);
        this._b = b;
        this._a = a;
    }
    get a() {
        return this._a;
    }
    set a(p) {
        this._a = p;
    }
    get b(){
        return this._b;
    }
    set b(p) {
        this._b = p;
    }

    static help() {
    console.log(
        "Rectangle information:", "\n",
        "Opposite sides are equal, all angles = 90", "\n",
        "1) Length of rectangle (a)", "\n",
        "2) Width of rectangle (b)"
        );
    }
    
    length() {
        console.log("Perimeter of a rectangle: ", 2 * (this.a + this.b));
    }
    
    square() {
        console.log("Area of the rectangle: ", this.a * this.b);
    }

    info() {
        console.log(
            "Rectangle Information:", "\n",
            "1) Length: ", this.a, "\n",
            "2) Width: ", this.b, "\n",
            "3) All angles = 90 degrees", "\n",
            "4) Sum of all sides: ", 2 * (this.a + this.b), "\n",
            "5) Area: ", this.a * this.b
        );
      }
}

class Rhombus extends Square {
    constructor(a, alpha, beta) {
      super(a);
      this.alpha = alpha;
      this.beta = beta;
    }

    static help() {
      console.log(
        "All sides & opposite angles equal", "\n",
        "Properties of Rhombus:", "\n",
        "1) Side length (a)", "\n",
        "2) Measure of obtuse angle (alpha)", "\n",
        "3) Measure of acute angle (beta)"
      );
    }
    length() {
      console.log("Perimeter of a rhombus: ", 4 * this.a);
    }
    square() {
      console.log(
        "Area of the rhombus: ",
        this.a * this.a * Math.sin((this.alpha * Math.PI) / 180)
      );
    }
    info() {
      console.log(
        "Rhombus Information:", "\n",
        "1) Side length: ", this.a, "\n",
        "2) Measure of big angle: ", this.alpha, "degrees", "\n", // )
        "3) Measure of small angle: ", this.beta, "degrees", "\n", // ))
        "4) Sum of all sides: ", 4 * this.a, "\n",
        "5) Area: ",
        this.a * this.a * Math.sin((this.alpha * Math.PI) / 180)
      );
    }
  }

  class Parallelogram extends Rhombus {
    constructor(a, b, alpha, beta) {
      super(a, b);
      this.alpha = alpha;
      this.beta = beta;
      this.a = a;
      this.b = b;
    }
    static help() {
      console.log(
        "Opposite sides parallel", "\n",
        "Properties of Parallelogram:", "\n",
        "- Length of parallelogram (a)","\n",
        "- Width of parallelogram (b)","\n",
        "- Measure of obtuse angle (alpha)","\n",
        "- Measure of acute angle (beta)"
      );
    }
    length() {
      console.log("Perimeter of parallelogram: ", 2 * (this.a + this.b));
    }
    square() {
      console.log(
        "Area of the parallelogram: ",
        this.a * this.b * Math.sin((this.alpha * Math.PI) / 180)
      );
    }
  
    info() {
      console.log(
        "Parallelogram Information:", "\n",
        "1) Length: ",this.a, "\n",
        "2) Width: ",this.b, "\n",
        "3) Measure of obtuse angle: ", this.alpha, "degrees", "\n",
        "4) Measure of acute angle: ", this.beta, "degrees", "\n",
        "5) Sum of all sides: ", 2 * (this.a + this.b), "\n",
        "6) Area: ",
        this.a * this.b * Math.sin((this.alpha * Math.PI) / 180)
      );
    }
  }


//

Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

const squareObject = new Square(8);
const rectangleObject = new Rectangle(8, 13);
const rhombusObject = new Rhombus(8, 120, 60);
const parallelogramObject = new Parallelogram(8, 9, 100, 80);
squareObject.info();
rectangleObject.info();
rhombusObject.info();
parallelogramObject.info();

function Triangular(a = 3, b = 4, c = 5) {
    return { a, b, c };
}

const triangle1 = Triangular();
console.log(triangle1);
const triangle2 = Triangular(6, 7, 8);
console.log(triangle2);
const triangle3 = Triangular(9, 10, 11);
console.log(triangle3);

function PiMultiplier(number) {
    return function () {
      return number * Math.PI;
    };
  }
  //1.2.28
  const doublePi = PiMultiplier(2);
  console.log("2*pi = ", doublePi());
  const Pi2_3 = PiMultiplier(2 / 3);
  console.log("(2/3)*pi = ", Pi2_3());
  const halfPi = PiMultiplier(1 / 2);
  console.log("pi/2 = ", halfPi());

  function Painter(color) {
    return function (object) {
      if (object.hasOwnProperty("type")) {
        console.log(
          "Painting object with type " + object.type + " in " + color + " color"
        );
      } else {
        console.log("No 'type' property occurred!");
      }
    };
  }

const PaintBlue = Painter("blue");
const PaintRed = Painter("red");
const PaintYellow = Painter("yellow");

const obj1 = {
    maxSpeed: 280,
    type: "Sportcar",
    color: "magenta",
  };
  console.log("Painting obj1:");
  PaintBlue(obj1);
  PaintRed(obj1);
  PaintYellow(obj1);
  
  const obj2 = {
    type: "Truck",
    avgSpeed: 90,
    loadCapacity: 2400,
  };
  console.log("Painting obj2:");
  PaintBlue(obj2);
  PaintRed(obj2);
  PaintYellow(obj2);
  
  const obj3 = {
    maxSpeed: 180,
    color: "purple",
    isCar: true,
  };
  console.log("Painting obj3:");
  PaintBlue(obj3);
  PaintRed(obj3);
  PaintYellow(obj3);


  