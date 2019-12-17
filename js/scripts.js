$(document).ready(function() {

  $("form#value-input").submit(function(event) {
    event.preventDefault();

    var userInput = parseInt($("#value").val());
    var result = factorial(userInput);

    function factorial(userInput) {
      for (var currentNumber = userInput -1; currentNumber >= 1; currentNumber -= 1) {
        userInput *= currentNumber;}

      return userInput;
     };

    $("#result").text(result);

 });
});
