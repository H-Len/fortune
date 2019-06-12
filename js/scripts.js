$(document).ready(function() {
  //check to see jquery is working
  console.log("jqueryisworking");

  $("#fortune-survey").submit(function (event) {
    event.preventDefault();
    var fortuneTotal = 0;

    $("input:checkbox[name=occur]:checked").each(function() {
      fortuneTotal += parseInt($(this).val());
    });
    console.log(fortuneTotal);

    var badReading = "I'm sorry... I'll leave it at that.";
    var goodReading = "Wow! You're lucky!";
    var aReading = "Neutral. Have a great day.";

    if(fortuneTotal < 0) {
      alert(badReading);
    } else if(fortuneTotal > 0) {
      alert(goodReading);
    } else {
      alert(aReading);
    }

  });
});
