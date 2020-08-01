// function b() {
//     var myVar;
// }

// function a() {
//     b();
//     var myVar = 69;
//     var text = 'fsoft.com.vn';
// }

// var myVar = 0;
// console.log(myVar);
// a();

var text = 'outside';

function show() {
    console.log(text);
    var text = 'inside';
}

show();