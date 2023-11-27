function calculateAge() {
  var dogAgeInput = document.getElementById("dogAge").value;

  if (!dogAgeInput) {
    alert("Please enter the dog's age.");
    return;
  }

  var dogAge = +dogAgeInput; // Use the unary + operator for conversion
  var humanAge = (dogAge - 2) * 4 + 21;

  var resultElement = document.getElementById("result");
  resultElement.innerText =
    "Your dog is " + humanAge + " years old in human years.";
}
