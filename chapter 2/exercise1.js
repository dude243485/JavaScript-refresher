//Looping a triangle
let sign = "#";
for (let i = 0; i < 7; i += 1){
    console.log(sign);
    sign += "#";
}

//FizzBuzz
for (let i = 1; i <= 100; i += 1){
    if (i % 15 == 0){
        console.log("FizzBuzz");
    } else if (i % 3 == 0){
        console.log("Fizz");
    }else if (i % 5 == 0){
        console.log("Buzz");
    } else {
        console.log(i)
    }
    
}