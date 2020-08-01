// Object.create
var personProto = {
    calculate: function() {
        console.log(2020 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'designer';

var jane = Object.create(personProto, {
    name: { value: 'Jane' },
    yearOfBirth: { value: 1999 },
    job: { value: 'teacher' }
});

console.log(john.calculate());
console.log(jane.calculate());