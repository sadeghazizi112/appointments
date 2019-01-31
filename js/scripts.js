$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var nameInput = $("input#name").val();
    var natureInput = $("input#nature").val();
    var dateInput= $("input#date").val();
    var startInput = $("input#start").val();
    var endInput = $("input#end").val();

    $(".name").append(nameInput);
    $(".nature").append(natureInput);
    $(".date").append(dateInput);
    $(".starttime").append(startInput);
    $(".endtime").append(endInput);

    $("#story").show();

    event.preventDefault();
  });
});
