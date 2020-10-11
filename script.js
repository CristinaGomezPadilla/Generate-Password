// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword(len) {
  alert("Password will contain:");
  alert("Letters, Numbers and Special Characters");

  var length = (len) ? (len) : (10);
  var string = "abcdefghijklmnopqrstuvwxyz"; //to upper 
  var numeric = '0123456789';
  var punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
  var password = "";
  var character = "";
  while (password.length < length) {
    entity1 = Math.ceil(string.length * Math.random() * Math.random());
    entity2 = Math.ceil(numeric.length * Math.random() * Math.random());
    entity3 = Math.ceil(punctuation.length * Math.random() * Math.random());
    hold = string.charAt(entity1);
    hold = (password.length % 2 == 0) ? (hold.toUpperCase()) : (hold);
    character += hold;
    character += numeric.charAt(entity2);
    character += punctuation.charAt(entity3);
    password = character;
  }
  password = password.split('').sort(function () { return 0.5 - Math.random() }).join('');
  return password.substr(0, len);
}

console.log(generatePassword());

// function generatePassword() {
//   var size = prompt("Lenght from 8 to 12");
//   size = Number.parseInt(size, 12);

//   if (Number.isNaN(size)) {
//     alert("Invalid length. Please select a lenght from 8 to 12");
//     return '';
//   }

//   if (size < 8 || size > 12) {
//     alert("Invalid length. Please select a lenght from 8 to 12");
//     return '';
//   }

//   console.log('size', size, typeof size);

//   var isPositive = confirm("Press OK if you understand that it will contain special characters.\nPress Cancel if you do not agree.");
//   console.log('isPositive', isPositive, typeof isPositive);

//   var String = "abcdefghijklmnopqrstuvwxyz";
//   var Number = '0123456789';
//   var symbols = "!#$%& '()*+,-./:;<=>?@[\]^_`{|}~";
//   var password = "";



//   var numlower = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
//   var numUpper = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
//   var RanmNum = String.fromCharCode(Math.floor(Math.random() * 0) + 10);
//   var syms = symbols[Math.floor(Math.random() * symbols.length)]




//}

// function generateRandomLower() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }

// function generateRandomUpper() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }

// function generateRandomNumber() {
//   return String.fromCharCode(Math.floor(Math.random() * 0) + 10);
// }

// function generateRandomSymbol() {
//   const symbols = "!#$%& '()*+,-./:;<=>?@[\]^_`{|}~";
//   return symbols[Math.floor(Math.random() * symbols.length)]
// }

//function generateLenght() {

generateBtn.addEventListener("click", writePassword);
