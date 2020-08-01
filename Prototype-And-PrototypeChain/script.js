// let person = {};
// person.name = 'Leo';

// person.age = 20;

// person.eat = function() {
//     console.log(`${this.name} is eating`);
// };

// person.eat();

function Person(name, age) {
    this.name = name;
    this.age = age;
}
// console.log(person.prototype);

Person.prototype.eat = function() {
    console.log(`${this.name} is eating`);
};

Person.prototype.sleep = function() {
    console.log(`${this.name} is sleeping`);
};

Person.prototype.walk = function() {
    console.log(`${this.name} is walking`);
};


const john = new Person('John', 23);
console.log(john.prototype);