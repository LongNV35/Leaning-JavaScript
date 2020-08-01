// Prototype
// Create a new object, object literal
var mouse = {
    weight: 0.2,
    getWeight: function() {
        return this.weight;
    }
};

// constructor function
function Mouse(color, weight) {
    this.type = 'mouse';
    this.color = color;
    this.weight = weight;

    // this.sleep = function() {
    //     console.log('sleeping...');
    // };
}

Mouse.prototype.sleep = function() {
    console.log('sleeping...');
};

console.log(Mouse.prototype.constructor === Mouse);

var jerry = new Mouse('orange', 20);
console.log(jerry);
jerry.sleep();

var mickey = new Mouse('black', 10);
mickey.sleep();

console.log(jerry.sleep === mickey.sleep);

console.log(Mouse.prototype);
console.log(jerry.prototype);
console.log(jerry.__proto__);

console.log(typeof Mouse.prototype);
console.log(typeof jerry.__proto__);

console.log(Mouse.prototype === jerry.__proto__);