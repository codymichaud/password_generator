// Assignment Code


var enter;
var confirmNumbers;
var confirmSpecial;
var confirmUp;
var confirmLow;

//Characters that can be slected at random for password
special = [";", "#", "!", ":", "@", "$", "%", "&", "*", "+", "=", "?", "<", ">", "[", "]", "|", "{", "}", "-", "~", "(", ")", "_", "/", "\+", "."];

numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//for lowercase to uppercase conversion.
caps = []

var choices;
//converts uppercase to lowercase.
var upConv = function (x) {
  return x.toUpperCase();
}

//Var for uppercase
alphaUp = alphabet.map(upConv);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;

});

//function to generate random password

function generatePassword() {
  enter = parseInt(prompt("How many characters would you like your new password to contain? No shorter than 6 and no higher than 100"));
  //Asks for user to select the amount of characters they would like in their password.
  //User inputs amount of characters.
  if (!enter) {
    alert("Please enter number of characters you would like");
  } else if (enter < 6 || enter > 100) {
    enter = parseInt(prompt("Password must contain between 6 to 100 characters"));

  } else {
    confirmNumbers = confirm("Do you want your password to contain numbers?");
    confirmSpecial = confirm("Do you want your password to contain any special characters? ie. !@#$%^&*()");
    confirmUp = confirm("Do you want your password to contain Uppercase Letters?");
    confirmLow = confirm("Do you want your password to contain lowercase letters?");
  };

  //if user cancels all confirms. User gets this message.
  if (!confirmSpecial && !confirmNumbers && !confirmUp && !confirmLow) {
    choices = alert("You have to have at least one criteria");
  }

  //else ifs for 4 criteria

  else if (confirmSpecial && confirmNumbers && confirmUp && confirmLow) {

    choices = special.concat(numbers, alphabet, alphaUp);
  }
  //else if for 3 criteria
  else if (confirmSpecial && confirmNumbers && confirmUp) {
    choices = special.concat(numbers, alphaUp);
  }
  else if (confirmSpecial && confirmNumbers && confirmLow) {
    choices = special.concat(numbers, alphabet);
  }
  else if (confirmSpecial && confirmLow && confirmUp) {
    choices = special.concat(alphabet, alphaUp);
  }
  else if (confirmNumbers && confirmLow && confirmUp) {
    choices = numbers.concat(alphabet, alphaUp);
  }
  // else if for 2 criteria
  else if (confirmSpecial && confirmNumbers) {
    choices = special.concat(numbers);
  }
  else if (confirmSpecial && confirmLow) {
    choices = special.concat(alphabet);
  }
  else if (confirmSpecial && confirmUp) {
    choices = special.concat(alphaUp);
  }
  else if (confirmLow && confirmNumbers) {
    choices = alphabet.concat(numbers);
  }
  else if (confirmLow && confirmUp) {
    choices = numbers.concat(alphaUp);
  }
  else if (confirmNumbers && confirmUp) {
    choices = numbers.concat(alphaUp);
  }
  //else ifs for 1 criteria
  else if (confirmSpecial) {
    choices = special;
  }
  else if (confirmNumbers) {
    choices = numbers;
  }
  else if (confirmLow) {
    choices = alphabet;
  }

  else if (confirmUp) {
    choices = caps.concat(alphaUp)
  };

  //password variable

  var password = []

  //random char selector for password

  for (var i = 0; i < enter; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices); //pickPass
  }

  var ps = password.join("");
  UserInput(ps);
  return ps;
}

function UserInput(ps) {
  document.getElementById("password").textContent = ps;

}
//var for copy button
var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
  copyPassword();
});
//function to copy new password
function copyPassword() {
  document.getElementById("password").select();
  document.execCommand("Copy");
  alert("Password copied to clipboard!");
}