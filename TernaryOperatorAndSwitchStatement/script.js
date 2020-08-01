var firstName = 'John';
var age = 18;

// Ternary Operator
age >= 18 ? console.log(firstName + ' drinks beer') : console.log(firstName + ' drinks juice.');


// Switch Statement
var job = 'teacher';

switch (job) {
    case 'teacher':
        console.log(firstName + ' teach code kids.');
        break;
    case 'designer':
        console.log(firstName + ' is designer');
        break;
    default:
        console.log(firstName + ' does something else.');
}