// Getters

const person = {
    firstName: 'Anuj',
    lastName: 'Kumar',
    get fullName() {
    return `${this.firstName} ${this.lastName}`;
    }
};
    console.log(person.fullName);

// Setters

const person1 = {
    firstName: 'Anuj',
    lastName: 'Kumar',
    set fullName(name) {
    const parts = name.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
    }
};
    person1.fullName = 'Rohan Sharma';
    console.log(person.firstName);
    console.log(person.lastName);