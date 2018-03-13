var age1 = prompt("Enter your age:");
var gender = prompt("Enter your gender");
if (age1 >=18){
  if(gender.toLowerCase() === "female")
    alert("You can have free drinks!");
  else if(gender.toLowerCase() == "male")
    alert("You can have a drink but you have to pay!");
  else alert("Ouch");
}
else alert ("You cannot have a drink!");


var citizen = prompt("Please enter your citizenship:");
if(citizen.toLowerCase() === "israeli" )
  alert("You can enter the country");
else alert("You cannot enter the country");

var age = prompt("Please enter your age:");
if (age >= 18){
  alert("You can have a drink!");
}
else alert("You cannot have a drink!");