var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(birthYear) {
        return 2020 - birthYear;
    }
};

console.log(john.calcAge(1996));

var jane = {
    firstName: 'Jane',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['John', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        return 2020 - this.birthYear;
    }
};

console.log(jane.calcAge());