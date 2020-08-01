/*
calculate(1996);

function calculate(year) {
    console.log(2020 - year);
    console.log(this);
}
*/

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2016 - this.yearOfBirth);

        function innerFunction() {
            console.log(this);
        }
        innerFunction();
    }
};

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1985
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();