$(document).ready(function() {
    var wins = 0;
    var losses = 0;
    var totalScore = 0;
    var gem = "";

    // Creates Random Number and plugs it in
    $("#random-num").text(Math.floor(Math.random() * 101) + 19);

    // displays starting scores
    $('#wins').text(wins);
    $('#losses').text(losses);
    $('#total-score').text(totalScore);

    // Random numbers for each gem
    sapphire = (Math.floor(Math.random() * 12) +1);
    ruby = (Math.floor(Math.random() * 12) + 1);
    emerald = (Math.floor(Math.random() * 12) + 1);
    topaz = (Math.floor(Math.random() * 12) + 1);


    $(".gem").click(function() {
        // testing on sapphire
        gem = $(this).val();
        console.log(gem);
        if (gem === 'sapphire') {
            console.log(sapphire);
        } 
        else if (gem === 'ruby') {
            console.log(ruby);
        } 
        else if (gem === 'emerald') {
            console.log(emerald);
        } 
        else if (gem === 'topaz') {
            console.log(topaz);
        }
    })

});
// 1-12 gems