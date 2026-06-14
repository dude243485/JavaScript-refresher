// function repeat(n, action){
//     for(let i = 0; i < n; i++){
//         action(i);
//     }
// }


// repeat(4, console.log)

// let labels = [];
// repeat(5, i => {
//     labels.push(`Unit ${i + 1}`);
// });
// console.log(labels)

//higher order functions are functions that operate on other functions

// function greaterThan(n) {
//     return m => m > n;
// }
// let greaterThan10 = greaterThan(10);
// console.log(greaterThan10(40));

// function noisy(F) {
//     return (...args) => {
//         console.log("calling with", args);
//         let result = F(...args);
//         console.log("called with", args, ", returned", result);
//         return result;
//     }
// }

// function sum (...array){
//     let total = 0;
//     for (let entry of array){
//         total += entry;   
//     }
//     return total;
// }

// noisy(sum)(3, 4, 5);


// ["A", "B"].forEach(l => console.log(l));

// console.log([1, 2, 3 ,4].reduce((a, b) => a + b));

// function flatten (array){
//     let res = array.reduce((a, b) => a.concat(b), []);
//     return res;
// }

// console.log(flatten([1, [3, 4], [5, 6, [9]]]))

