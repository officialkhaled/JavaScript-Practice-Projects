function calculateTip() {
  // Input type values
  const billAmount = parseFloat(document.getElementById("bill").value);
  const tipPercent = parseFloat(document.getElementById("percent").value);

  // Calculating Tip
  const tipAmount = billAmount * (tipPercent / 100);
  const totalAmount = billAmount + tipAmount;

  // Displaying Results
  document.getElementById("tip-amount").textContent = "$" + tipAmount;
  document.getElementById("total-amount").textContent = "$" + totalAmount;
}
