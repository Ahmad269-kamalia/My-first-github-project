let input = document.getElementById("inpu1");
let input2 = document.getElementById("inpu2");
let btn = document.getElementById("btn");

btn.addEventListener("click", function(){
  alert("login successfully");
  input.value = "";
  input2.value = ""; 
});