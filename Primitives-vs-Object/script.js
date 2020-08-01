//Primitives vs Objects
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

var object1 = {
    name: 'John',
    age: 26
};

var object2 = object1;
object1.age = 30;
console.log(object1.age);
console.log(object2.age);

var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);
console.log(age);
console.log(obj.city);