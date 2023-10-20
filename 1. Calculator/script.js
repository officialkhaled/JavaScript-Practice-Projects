function calculateMaturityAmount() {
  // Get input values from the form DOM

  const principle = parseFloat(document.getElementById("principle").value);
  const interestRate = parseFloat(
    document.getElementById("interestRate").value
  );
  const tenure = parseFloat(document.getElementById("tenure").value);

  // Perform the calculation

  const maturityAmount = principle + (principle * interestRate * tenure) / 100;

  // Display the result

  document.getElementById(
    "result"
  ).innerText = `Maturity Amount: ${maturityAmount.toFixed(2)}`;
}

// Attach the event listener to the Calculate button
document
  .getElementById("calculateBtn")
  .addEventListener("click", calculateMaturityAmount);
