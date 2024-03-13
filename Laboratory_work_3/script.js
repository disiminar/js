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
