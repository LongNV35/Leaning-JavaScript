var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}