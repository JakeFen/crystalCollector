$(document).ready(function() {
  var wins = 0;
  var losses = 0;
  $("#wins").text(wins);
  $("#losses").text(losses);
  var totalScore = 0;

  function reset() {
//   total score of gems
  totalScore = 0;
  $("#total-score").text(totalScore);
  console.log(totalScore);

  var randomNum = Math.floor(Math.random() * 101) + 19;
  $("#random-num").text(randomNum);

//   random num for each gem
  var sapphire = Math.floor(Math.random() * 12) + 1;
  console.log(sapphire)

  var ruby = Math.floor(Math.random() * 12) + 1;
  console.log(ruby)

  var emerald = Math.floor(Math.random() * 12) + 1;
  console.log(emerald)

  var topaz = Math.floor(Math.random() * 12) + 1;
  console.log(topaz)

  $(".gem").click(function() {
    if ($(this).attr("id") === "sapphire") {
      totalScore += sapphire;
    } else if ($(this).attr("id") === "ruby") {
      totalScore += ruby;
    } else if ($(this).attr("id") === "emerald") {
      totalScore += emerald;
    } else if ($(this).attr("id") === "topaz") {
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
};
    reset();
});
