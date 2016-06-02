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
      if (gender === "Male" && location === "New York" && animal === "Yes") {
        alert("Jake Gyllenhaal");
      } else if (gender === "Male" && location === "New York" && animal === "No") {
        alert("Adam Sandler");
      } else if (gender === "Male" && location === "Los Angeles" && animal === "Yes") {
        alert("Chris Pine");
      } else if (gender === "Male" && location === "Los Angeles" && animal === "No") {
        alert("Christian Bale");
      } else if (gender === "Female" && location === "New York" && animal === "Yes") {
        alert("Alicia Keys");
      } else if (gender === "Female" && location === "New York" && animal === "No") {
        alert("Lindsay Lohan");
      } else if (gender === "Female" && location === "Los Angeles" && animal === "Yes") {
        alert("Tyra Banks");
      } else if (gender === "Female" && location === "Los Angeles" && animal === "No") {
        alert("Angelina Jolie");
      }

    } else {
      alert("Please answer all the questions.");
    }

  });
});
