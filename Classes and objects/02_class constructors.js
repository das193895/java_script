// constructor example

class Person {
    constructor(name) {
    this.name = name;
    }
    introduce() {
    console.log(`Hello, my name is ${this.name}`);
    }
}
    const myName = new Person("Anuj");
    myName.introduce();

/**********************************************/

// constructor with default values

class Person {
    constructor(
    fName = 'Anuj',
    lName = 'Kumar',
    age = 25,
    city = 'Delhi'
    ) {
    this.fName = fName
    this.lName = lName
    this.age = age
    this.city = city
    }
}
    const person1 = new Person() // it will take the default values
    const person2 = new Person('Rohan', 'Sharma', 28, 'Jaipur')

    console.log(person1)
    console.log(person2)

/*********************************************/

//  Static methods :
class MyClass {
    static myStaticMethod() {
    console.log('This is a static method');
    }
}
    MyClass.myStaticMethod();



