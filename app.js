let buttons = document.querySelector(".buttons");
let countAmount = document.querySelector(".countAmount");
let count = 0;

buttons.addEventListener("click", (e) => {
  if (e.target.className === "decrease") {
    count--;
    countAmount.textContent = count;
    console.log("Decrease!", count);
  } else if (e.target.className === "increase") {
    count++;
    countAmount.textContent = count;
    console.log("Increase", count);
  } else {
    return;
  }
});
