	$( document ).ajaxError(function() {
	  $( ".log" ).text( "Triggered ajaxError handler." );
	});

$(function() {


	var $h2 = $("h2");
	var $umpNumber = $("input[name='number']");

	$("form").on("submit", function(event) {
		event.preventDefault();
		var number = $.trim($umpNumber.val());
		$h2.text("Loading ...");

		var request = $.ajax({
			url: "/" + number,
			datatype: "json"
		});


		request.done(function(data){
			var umpteenedNum = data;

			console.dir(data);
			$h2.text(umpteenedNum);
		});
		request.fail(function (){
			console.log("here's the error: " + error);
			$h2.text("Wow, something went wrong here.");
		});
	});
});