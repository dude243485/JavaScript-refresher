// console.log("coconuts".slice(4, 7));

// console.log("Pneumathorax".indexOf("th"))
// console.log("   Sailor moon ".trim());

// console.log(String(6).padStart(3, "0"));

// let sentence = "The quick brown fox jumps over the lazy dog";
// let words = sentence.split(" ");
// console.log(words);
// console.log(words.join(", "));

// function max(...numbers){
//     let result = -Infinity;
//     for ( let number of numbers){
//         if (number > result) result = number;
//     } return result;
// }
// let numbers = [5, 1 , 7];

// console.log(max(6, 4, 3, 0));
// console.log(max(...numbers))
// console.log(Math.max(9, ...numbers, 3))

// let coords = { x : 10, y : 0};
// console.log({ ...coords, y : 5, z : 1})

//math object
// let angle = Math.random() * 2 * Math.PI;

// console.log({ x : 7 * Math.cos(angle)})
// console.log(angle)

//getting a random whole number
console.log(Math.floor(Math.random() * 10));

//Math.round() Math.ceil() Math.abs()

function city (object) {
    return object.address?.city;
}