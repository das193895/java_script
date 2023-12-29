/*
Defining a class : 
 */

class Animal {
    makeSound() {
    console.log("Animal sound");
    }
}

const myAnimal = new Animal();
myAnimal.makeSound();

/****************************************/

class Car {
    honk() {
    console.log("Beep Beep!");
    }
    }
    const mycar = new Car();
    mycar.honk();


/****************************************/

class Car {
    setMake(make) {
    this.make = make;
    }
    setModel(model) {
    this.model = model;
    }
    setYear(year) {
    this.year = year;
    }
    honk() {
    console.log("Beep Beep!");
    }
}

    const myCar = new Car();
    myCar.setMake("Toyota");
    myCar.setModel("Camry");
    myCar.setYear(2020);
    console.log(myCar.make);
    console.log(myCar.model);
    console.log(myCar.year);
    myCar.honk();

/*************************************/