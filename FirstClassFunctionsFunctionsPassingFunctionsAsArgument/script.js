var years = [1990, 1969, 1985, 2010, 1996];

function arrayCalc(arr, fn) {
    var arrayRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrayRes.push(fn(arr[i]));
    }
    return arrayRes;
}

function calculateAge(element) {
    return 2020 - element;
}

function isFullAge(element) {
    return element >= 18;
}

function maxHeartRate(element) {
    if (element >= 18 && element <= 81) {
        return Math.round(206.9 - (0.67 * element));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
console.log(ages);

var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);

var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);