// Assignment code here
var generateBtn = document.querySelector("#generate");
var upperCaseArray = ["A","B","C","D","E","F","G","H","I","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z"]
var lowerCaseArray = ["a","b","C","d","e","f","g","h","i","j","k","l","m","o","p","q","r","t","u","v","x","y","z"]
var specialCharacterArray = ["!","@","$","%","~"]
var numberArray = [1,2,3,4,5,6,7,8,9,0]
var elementArray = []

// Get references to the #generate element


// Write password to the #password input
function writePassword() {
  generatePassword();
  var password = elementArray.join("");
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

function generatePassword() {
  var passwordString = []
    function getPasswordLength() {
    var lengthPrompt = parseInt(window.prompt("How long would you like your password to be? enter a number between 8 and 128"));
      if (isNaN(lengthPrompt)) {
        alert("Please enter a number between 8 and 128");
        return false
      }
      else if (lengthPrompt <8 || lengthPrompt > 128) {
        alert("Please enter a number between 8 and 128");
        return false; 
      }  
      else {
    return lengthPrompt;
  }
}
  function addRandomUppercase() {
    var uppercase = confirm("Do you want uppercase letters in your password?");
    return uppercase  
  }
  function addRandomLowercase() {
    var lowercase = confirm("Do you want lowercase letters in your password?");
    return lowercase
  }
  function addRandomSpecialCharacters() {
    var specialCharacters =confirm("Do you want special characters in your password?");
    return specialCharacters
  }
  function addRandomNumbers() {
    var numbers =confirm("Do you want numbers in your password?");
    return numbers
  }
  var passLength = getPasswordLength()
  if (passLength === false) {
    return ""
  };
  var shouldUseUppercase = addRandomUppercase() 
  var shouldUseLowercase = addRandomLowercase()
  var shouldUseSpecial = addRandomSpecialCharacters()
  var shouldUSeNumbers = addRandomNumbers()

  if (shouldUseUppercase) {
    alert("You have selected Uppercase letters");
    passwordString += upperCaseArray.join("");
  }
  if  (shouldUseLowercase) {
    alert("You have selected lowercase letters");
    passwordString += lowerCaseArray.join("");
  }
  if (shouldUseSpecial) {
    alert("You have Selected special characters");
    passwordString += specialCharacterArray.join("");
  }
  if (shouldUSeNumbers) {
    alert("You have selected numbers");
    passwordString += numberArray.join("");
  }
  //creat a for loop that generates random values from the global arrays to fill the password to the password length determined by passLength
  for (var i = 0; i <passLength; i++) {
    var randomPass = passwordString[Math.floor(Math.random() * passwordString.length)];
    elementArray.push(randomPass);
}
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);