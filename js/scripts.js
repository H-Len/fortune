$(document).ready(function() {
  //check to see jquery is working
  console.log("jqueryisworking");

  $("#fortune-survey").submit(function (event) {
    event.preventDefault();

    var fortuneTotal = 0;

    $("input:checkbox[name=occur]:checked").each(function() {
      fortuneTotal += parseInt($(".happened").val());
      console.log(fortuneTotal);
    });

  });
});
