// Assignment code here
var generateBtn = document.querySelector("#generate");
var upperCaseArray = ["A","B","C","D"]
var lowerCaseArray = ["a","b","C","d"]
var specialCharacterArray = ["!","@","$","%","~"]
var numberArray = [1,2,3,4,5,6,7,8,9,0]
var elementArray = []

// Get references to the #generate element


// Write password to the #password input
function writePassword() {
  generatePassword();
  var password = elementArray.join("").replace(",","");
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
    passwordString += upperCaseArray
  }
  if  (shouldUseLowercase) {
    passwordString += lowerCaseArray
  }
  if (shouldUseSpecial) {
    passwordString += specialCharacterArray
  }
  if (shouldUSeNumbers) {
    passwordString += numberArray
  }

  //creat a for loop that generates random values from the global arrays to fill the password to the password length determined by passLength
  for (var i = 0; i <passLength; i++) {
    var randomPass = passwordString[Math.floor(Math.random() * passwordString.length)];
    elementArray.push(randomPass);
}
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);