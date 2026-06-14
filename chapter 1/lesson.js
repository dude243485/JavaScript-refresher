

// || will convert the value on their left hand side to a boolean 
// in order to figure out what to do

// ?? returns the value on the right if only the value on
//the left is null or undefined
console.log(null || "user")
console.log("" || "user")

console.log(0 ?? 100)
console.log(null ?? 100)