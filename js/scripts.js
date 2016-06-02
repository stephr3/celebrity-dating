//Backend logic:



//User interface logic:

$(document).ready(function() {
  $("#survey").submit(function(event) {
    event.preventDefault();
    var gender = $("#gender").val();
    // var height =  $("input:radio[name=height]:checked").val();
    var location = $("#location").val();
    var animal =  $("input:radio[name=animal]:checked").val();
    // var language = $("#language").val();

    if (gender && location && animal){
      var result = "";
      if (gender === "Male" && location === "New York" && animal === "Yes") {
        result = "Jake Gyllenhaal";
      } else if (gender === "Male" && location === "New York" && animal === "No") {
        result = "Adam Sandler";
      } else if (gender === "Male" && location === "Los Angeles" && animal === "Yes") {
        result = "Chris Pine";
      } else if (gender === "Male" && location === "Los Angeles" && animal === "No") {
        result = "John Cho";
      } else if (gender === "Female" && location === "New York" && animal === "Yes") {
        result = "Alicia Keys";
      } else if (gender === "Female" && location === "New York" && animal === "No") {
        result = "Lindsay Lohan";
      } else if (gender === "Female" && location === "Los Angeles" && animal === "Yes") {
        result = "Tyra Banks";
      } else if (gender === "Female" && location === "Los Angeles" && animal === "No") {
        result = "Angelina Jolie";
      }
      $(".celebrityName").text(result);
      $(".survey").hide();
      $(".result").show();
    } else {
      alert("Please answer all the questions.");
    }

  });
  $(".result button").click(function(event) {
    event.preventDefault();
    $(".result").hide();
    $(".survey").show();
  });
});
