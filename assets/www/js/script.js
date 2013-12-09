function submit(){
	
	var html = "<p>Hello, " + document.getElementById("name").value + "!</p>";
	
	$("#response").html(html);
	
	
}

$(document).ready(function() {
  $( "#submit" ).click(function() {
    submit();
  });
});
