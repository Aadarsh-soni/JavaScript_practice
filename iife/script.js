// console.log("hello")
// iife = immeditly invoked function expression

// (function add(a, b) {
//     // return a + b;
//     console.log(a + b)
// })(10, 20)

//     (function say() {
//     console.log("hey")
// })()
(() => console.log("i am es6"))();

const value = (() => 100)();
console.log(value);

const data = (async () => await fetch())();

const atm = function (intialbalance) {
  let balance = intialbalance;
  function withdraw(amt) {
    if (amt > balance) {
      return "are you kiding";
    } else {
      balance -= amt;
      return balance;
    }
  }
    return {withdraw}
};


const a = atm(1000)
console.log(a.withdraw(100))
console.log(a.withdraw(100))
console.log(a.withdraw(1000))