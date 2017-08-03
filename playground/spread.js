// /**Spread Operator */

// function add (a, b) {
//     return a + b;
// }

// //console.log(add(1,3));

// var toAdd = [9, 5];
// //console.log(add(...toAdd)); // equivalent to add(toAdd[0], toAdd[1])

// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vikram'];
// var final = [...groupA, 3, ...groupB];

// console.log(final);

// console.log('***************');

function greet(name, age) {
    return "Hi " + name + ", " + "you are "  + age;
}

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];
// Hi Andrew, you are 25.
// Hi Jen you are 29.
console.log(greet(...person));
console.log(greet(...personTwo));

// Combine arrays into one and loop over the values and print them out.
var names = ['Mike', 'Ben'];
var final = [...names, 'Andrew'];

// array.forEach(function(currentValue, index, arr), thisValue);
final.forEach(function(final, index) {
    console.log(index + " -- " + final);
});