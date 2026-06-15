// function speak(line) {
//     console.log(`The ${this.type} rabbit says '${line}'`);
// }

// let whiteRabbit = { type : "white", speak};

// whiteRabbit.speak("Shiver me timbers")
// speak.call(whiteRabbit, "Hurry");

// let value = 60;
// let finder = {
//     find(array) {
//         return array.some(v => v == this.value);
//     },

//     findee(array) {
//         return array.some( function(v) {
//             // console.log("value :", this.value) //undefined
//             return v == this.value;
//         } ) 
//     },
//     value : 5
// };



// console.log(finder.find([4, 5]))
// console.log(finder.findee([4, 5]));

let empty = {}
console.log(empty.toString());

console.log(Object.getPrototypeOf({}) == Object.prototype)


