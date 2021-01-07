// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copyButton");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
copyButton.addEventListener("click", copyPassword);

var enter;
var confirmNumbers;
var confirmSpecial;
var confirmUp;
var confirmLow;

//Characters that can be slected at random for password
character = [";", "#", "!", ":", "@", "$", "%", "&", "*", "+", "=", "?", "<", ">", "[", "]", "|", "{", "}", "-", "~", "(", ")", "_", "/", "\+", "."];

number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//for lowercase to uppercase conversion.
caps = []

var choices;
//converts uppercase to lowercase.
var upConv = function (x) {
  return x.upCaseConv();
}

//Var for uppercase
alpha2 = alpha.map(upConv);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;

});

//function to generate random password

function generatePassword() {
  enter = inpNumPass(prompt("How many characters would you like your new password to contain? No shorter than 6 and no higher than 100"));
  //Asks for user to select the amount of characters they would like in their password.
  //User inputs amount of characters.
  if (!enter) {
    alert("Please enter number of characters you would like");
  } else if (enter < 6 || enter > 100) {
    enter = inpNumPass(prompt("Password must contain between 6 to 100 characters"));

  } else {
    confirmNumbers = confirm("Do you want your password to contain numbers?");
    confirmSpecial = confirm("Do you want your password to contain any special characters? ie. !@#$%^&*()");
    confirmUp = confirm("Do you want your password to contain Uppercase Letters?");
    confirmLow = confirm("Do you want your password to contain lowercase letters?");
  };


}