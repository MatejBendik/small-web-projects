const btnEl = document.querySelector("#calculate");
const bill = document.querySelector("#bill");
const tip = document.querySelector("#tip");

function calculateTip() {
  const billValue = bill.value;
  const tipValue = tip.value;
  const tipAmount = (billValue * tipValue) / 100;
  const total = Number(billValue) + tipAmount;

  return total;
}

function displayTip() {
  const tipAmount = calculateTip();
  const totalSpan = document.querySelector("#total");
  totalSpan.innerText = "$" + tipAmount.toFixed(2);
}

btnEl.addEventListener("click", displayTip);
