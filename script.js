// JavaScript File
$(document).ready(function() {
  $("button").click(function() {
    var search = $("input").val()
    var url = "https://api.apixu.com/v1/current.json?key=48664efaae034090bc9131838171201&q=" + search;
    $.getJSON(url, function(response) {
    response.current.temp_f
    console.log(response.current.temp_f)
  $("#weather-results").append("temp is" + response.current.temp_f)
    
    
    })
  })
})