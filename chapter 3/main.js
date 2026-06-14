// function findSolution(target) {
//     function find(current, history) {
//         if (current == target) {
//             return history;
//         } else if (current > target){
//             return null
//         } else {
//             return find(current + 5, `(${history} + 5)`) ??
//             find(current * 3, `(${history} * 3)`);
//         }
//     }
//     return find(1, "1");
// }

// console.log(findSolution(24));

// const solve = (target, current, history) => {
//     if (current == target) {
//         return history;
//     } else if ( current > target ){
//         return null
//     } else {
//         return solve(target, current + 5, `(${history} + 5)`) ??
//         solve(target, current * 3, `(${history} * 3)`);
//     }

// }
// console.log(solve(24, 1, "1"));

