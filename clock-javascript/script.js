const button = document.getElementById("btn");
function showTime() {
    const currentTime = new Date();
    // console.log(currentTime)
    const time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`
    // console.log(time)
    document.getElementById("time").innerText = time
}
// showTime()
let interval = setInterval(showTime, 1000)

button.addEventListener("click", () => {
    clearInterval(interval)
})