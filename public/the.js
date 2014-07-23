$(function() {
	var $h1 = $("h1");
	var $umpNumber = $("input[name='number']");

	$("form").on("submit", function(event) {
		event.preventDefault();
		var number = $.trim($umpNumber.val());
		console.log(number);
		$h1.text("Loading ...");

		var request = $.ajax({
			url: "/" + number,
			datatype: "json"
		});

		request.done(function(data){
			var umpteenedNum = data.number;
			console.log(umpteenedNum);
			$h1.text(umpteenedNum);
		});
		request.fail(function (){
			$h1.text("Wow, something went wrong here.");
		});
	});
});