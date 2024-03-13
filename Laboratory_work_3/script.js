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