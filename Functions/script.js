// function declaration
// function whatDoYouDo(job, firstName) {}

// function expression (hoisting)
var whatDoYouDo = function(job, firstName) {
    switch (job) {
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'designer':
            return firstName + ' designer beautiful websites';
        default:
            return firstName + ' does something else';
    }
};

console.log(whatDoYouDo('teacher', 'Long'));