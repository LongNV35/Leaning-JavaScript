var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);

// john.firstName = 'test';
// john['lastName'] = 'test';

var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);