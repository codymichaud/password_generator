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
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

//Characters that can be slected at random for password
character = [";", "#", "!", ":", "@", "$", "%", "&", "*", "+", "=", "?", "<", ">", "[", "]", "|", "{", "}", "-", "~", "(", ")", "_", "/", "\+", "."];

number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
