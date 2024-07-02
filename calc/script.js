const input = document.getElementById("number-input");
const result = document.getElementById("result");

function handelClickButton(ele) {
  console.log(ele.innerText);
  const exp = `${input.value}${ele.innerText}`;
  input.value = exp;
  if (["+", "-", "*", "/"].includes(ele.innerText)) return;

  result.value = eval(exp);
}

function reset() {
  input.value = "";
  result.value = "";
}
