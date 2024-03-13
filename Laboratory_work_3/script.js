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
          "Square Information:",
          "\n",
          "- Side lengths: ",
          this.a,
          "\n",
          "- All angles = 90 degrees",
          "\n",
          "- Perimeter: ",
          4 * this.a,
          "\n",
          "- Area: ",
          this.a * this.a
        );
      } 
}

class Rectangle extends Square {
    constructor(a, b) {
        super(a);
        this.b = b;
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