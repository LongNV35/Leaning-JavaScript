//Closure

// function retirement(retirementAge) {
//     var a = ' year left util retirement.';
//     return function(yearOfBirth) {
//         var age = 2020 - yearOfBirth;
//         console.log((retirementAge - age) + a);
//     };
// }

// var retirementUS = retirement(66);
// retirementUS(1990);

// retirement(66)(1990);


/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what US design is?');
        };
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        };
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        };
    }
}
*/

// viết lại hàm trên theo closure
function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what US design is?');
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    };
}

var interviewQuestionTeacher = interviewQuestion('teacher');
interviewQuestionTeacher('John');

var interviewQuestionDesigner = interviewQuestion('designer');
interviewQuestionDesigner('Jane');

interviewQuestion('Dev')('Mark');