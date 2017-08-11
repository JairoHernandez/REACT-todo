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
console.log(greet(...person)); // Hi Andrew, you are 25
console.log(greet(...personTwo)); // Hi Jen, you are 29

// Combine arrays into one and loop over the values and print them out.
var names = ['Mike', 'Ben'];
var final = [...names, 'Andrew'];

// array.forEach(function(currentValue, index, arr), thisValue);
final.forEach(function(final, index) {
    console.log(index + " -- " + final);
});
// 0 -- Mike
// 1 -- Ben
// 2 -- Andrew

// console.log('***************');
list = [1, 2, 3];
list2 = [{'jairo': 'old'}, {'odie': 'wife'}, {'rose': 'daughter'}];
result = list.map((item) => {
    console.log('test');
    return item + 1;
})
console.log(result); // [ 2, 3, 4 ]
console.log(...list); // 1 2 3
//console.log({...list2}); // error
console.log('***************');
list3 = [1,2,2,3];
list3filtered = list3.filter((element) => {
    console.log('filter');
    //return true; // Return conditoin is true so it returns all array elements.
    return element > 1;
});

console.log('list3filtered:', list3filtered)
