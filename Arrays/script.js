var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 2002, 2020);

console.log(names[2]);
console.log(names.length);

names[1] = 'Ben';
names[5] = 'Mary';
console.log(names);
console.log(years);


// Different data type
var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(1990));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT designer' : 'John is a designer';
console.log(isDesigner);