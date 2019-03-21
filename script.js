// Write a click handler here
$("button").click(function() {
    var message = $(".input1").val();
    $(".results").append("i will have my own "+message);
});

$("button").click(function() {
    var message = $(".input2").val();
    $(".results").append(" with a luxury " +message);
});

$("button").click(function() {
    var message = $(".input3").val();
    $(".results").append(" in the state of "+message);
});