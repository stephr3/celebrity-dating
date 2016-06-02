//Backend logic:



//User interface logic:

$(document).ready(function() {
  $("#survey").submit(function(event) {
    event.preventDefault();
    var gender = $("#gender").val();
    var height =  $("input:radio[name=height]:checked").val();
    var location = $("#location").val();
    var animal =  $("input:radio[name=animal]:checked").val();
    var language = $("#language").val();

  });
});
