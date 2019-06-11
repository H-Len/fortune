$(document).ready(function() {
  //check to see jquery is working
  console.log("jqueryisworking");
  //this submits the form when you click the button
  $("form#fortune-survey").submit(function(event) {
    event.preventDefault();
    //this shows the future or result div
    $("#future").show();
    //this hides the checkboxes
    $("#fortune-survey").hide();
    //this grabs the inputs for the bad checkboxes and runs a for each function
    $("input:checkbox[name=good]:checked").each(function() {
      var badStuff = 0;
      //this is a variable that captures each value for bad stuff inputs
      var badStuff = $(this).val();
      console.log(badStuff)
      var total += badStuff
    })

    var total =[]
    console.log(total)
  });
});
