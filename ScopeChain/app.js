function b() {
    console.log(text);
}

function a() {
    var text = 'in a';
    b();
}

var text = 'in global';
a();