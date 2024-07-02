console.log("hello")

// arrow function
// syntax
// function say() {
//     console.log("hello")
// }
// say()
// const say = () => {// arrow function 
//     console.log("hello")
// }
// const add = (a, b) => {
//     return a+b
// }
// const add2 =(a,b) => a+b
// console.log (add(2,3))
// console.log (add2(2,3))
// say()


// // "arugument" keyword
// const add = (...num) => {
//     console.log(num)
// }
// add(1,2,3,4,5,6,7,8,9,10)

// hoisting

// say()
// function say() {
//     console.log("hello")
// }

const say = () => {
    console.log("hello")
}
say()

// this keyword

const obj = {
    value: 20,
    my: function () {
        console.log(this.value)
    }
}
obj.my()
