console.log("hello");

// itrator

// for (const val of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
//   console.log(val);
// }

//array has built in itrator function 

function makeit(start = 0, end = Infinity, step = 1) {
    let nextstart = start
    let itcount = 0
    
    return {
        next() {
            let result
            if (itcount < end) {
                result = { value: nextstart, done: false }
                nextstart = nextstart + step
                itcount = itcount + 1
                return result
            }
            return{value:itcount, done:true}
        }
    }
}


const my = makeit(1, 10, 1)
// while(!my.next.don
let result = my.next()

while (!result.done) {
    console.log(result.value)
    result = my.next()
}
