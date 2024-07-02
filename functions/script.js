console.log("hello")

// function - block perform particular task 

// function say() {
//     console.log("hello")
// }
// say() // calling of function 

// parameter
// function multiply(a,b) { // argument
//     console.log(a*b)
// }
// multiply(10,20) // parameter
// multiply(10,50)

// mutiply 

// function mul(a, b) {
//     let ans = a*b
//     // console.log(a * b)
//     return a*b
// }
// mul(10, 20)
// let a = mul(10, 20)
// console.log("that is the answer"+a)


// function add(...numbers) {
//     return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// }

// // Example usage:
// console.log(add(1, 2, 3)); // Output: 6
// console.log(add(5, 10, 15, 20)); // Output: 50
// console.log(add(2)); // Output: 2
// console.log(add()); // Output: 0


// unlimited argument accept
function add() {
    let ans = 0
    for (let i = 0;i<arguments.length;i = i+1) {
        ans = ans +arguments[i]
    }
    // console.log(arguments)
    return ans

}
let result = add(1, 2, 3,100,200,300)
console.log(result)


