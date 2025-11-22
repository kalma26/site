function cleanNumber(value) {
  return parseFloat(value.replace(/,/g, "")) || 0;
}

function calculateBuying() {
  let num1 = cleanNumber(document.getElementById("buyPrice").value);
  let mid = parseFloat(document.getElementById("buyTax").value);
  let num2 = cleanNumber(document.getElementById("buyPcs").value);

  let result = Math.floor(num1 / (1 + mid) * num2);
  document.getElementById("buyResult").value = result;
}

function calculateSelling() {
  let num1 = cleanNumber(document.getElementById("sellPrice").value);
  let mid = parseFloat(document.getElementById("sellTax").value);
  let num2 = cleanNumber(document.getElementById("sellPcs").value);

  let result = Math.floor((num1 * 2) / mid / num2);
  document.getElementById("sellResult").value = result;
}

function copyResult(id) {
  let field = document.getElementById(id);
  field.select();
  navigator.clipboard.writeText(field.value).then(() => {
    let btn = field.nextElementSibling;
    btn.textContent = "Copied!";
    setTimeout(() => btn.textContent = "Copy", 1500);
  });
}
