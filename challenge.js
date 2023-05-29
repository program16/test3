
  document.getElementById("myButton").addEventListener("click", function() {
  var input = document.getElementById("myInput");
  if (input.value === "") {
    input.style.borderBlockColor = "red";
    alert("Please enter your email adress");
  }
});