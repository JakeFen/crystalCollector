$(document).ready(function() {
  var wins = 0;
  var losses = 0;
  $("#wins").text(wins);
  $("#losses").text(losses);
  var totalScore = 0;
  var randomNum = 0;
  
  var sapphire = 0;
  var ruby = 0;
  var emerald = 0;
  var topaz = 0;

  function reset() {
//   total score of gems
  totalScore = 0;
  $("#total-score").text(totalScore);

  randomNum = Math.floor(Math.random() * 101) + 19;
  $("#random-num").text(randomNum);

//   random num for each gem
  sapphire = Math.floor(Math.random() * 12) + 1;
  ruby = Math.floor(Math.random() * 12) + 1;
  emerald = Math.floor(Math.random() * 12) + 1;
  topaz = Math.floor(Math.random() * 12) + 1;
  }

  $(".gem").click(function() {
    if ($(this).attr("id") === "sapphire") {
      console.log(sapphire);
      totalScore += sapphire;
    } else if ($(this).attr("id") === "ruby") {
      console.log(ruby);
      totalScore += ruby;
    } else if ($(this).attr("id") === "emerald") {
      console.log(emerald);
      totalScore += emerald;
    } else if ($(this).attr("id") === "topaz") {
      console.log(topaz);
      totalScore += topaz;
    }
    $("#total-score").text(totalScore);

    if (totalScore === randomNum) {
        wins++;
        $("#wins").text(wins);
        alert("You have won!");
        reset();
    } else if (totalScore > randomNum) {
        losses++;
        $("#losses").text(losses);
        alert("You have lost ):");
        reset();
    }
  });

    reset();
});
