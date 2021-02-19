let calculator = document.querySelector(".calculator");
console.log(calculator);
let input = document.querySelector("input");
input.value = "0.0";

calculator.addEventListener("click", (e) => {
  if (e.target.classList.contains("input")) {
    e.target.textContent = "0.0";
  }
  if (input.value === "0.0") {
    input.value = e.target.textContent;
  } else {
    if (
      e.target.classList.contains("number") ||
      e.target.classList.contains("op")
    ) {
      input.value += e.target.textContent;
    } else if (e.target.classList.contains("equal")) {
      input.value = eval(input.value);
    } else if (e.target.classList.contains("del")) {
      input.value = "0.0";
    }
  }
});
