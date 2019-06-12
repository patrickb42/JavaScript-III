/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. `this` binds to the window whenever it's called inside of a function in the global scope.
* 2. Whatever is calling a function (example.fun()) gets tied to `this`
* 3. `this` gets tied to the instance of a new object whenever used with a constructor
* 4. call and apply explicitly tie `this`
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function example() {
    console.log(this);
}
example();

// Principle 2
// code example for Implicit Binding
let var1 = {
    thing1: "I'm a thing",
    whatAreYou: function () {
        console.log(this.thing1);
    }
}
var1.whatAreYou();

// Principle 3
// code example for New Binding
function Foo() {
    this.name = "bar";
    this.speak = function () {
        console.log(this.name);
    };
}
let baz = new Foo();
baz.speak();

// Principle 4
// code example for Explicit Binding
function unoriginal() {
    console.log(this.name);
}
let var2 = {
    name: "var2",
};
let var3 = {
    name: "var3",
};
unoriginal.call(var2);
unoriginal.apply(var3);
