const dobInput = document.getElementById("dob");
const calculateBtn = document.getElementById("calculate-btn");
const resultDiv = document.getElementById("result");

calculateBtn.addEventListener("click", function () {
  const dob = new Date(dobInput.value);
  const ageInMins = Date.now() - dob.getTime();
  const ageDate = new Date(ageInMins);

  const age = Math.abs(ageDate.getUTCFullYear() - 1970); // Logic to calculate age from date object

  resultDiv.innerHTML = `Your age is ${age} years`;
});
