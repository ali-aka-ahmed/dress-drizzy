$(document).ready(function() {

	$(".outfit-selection").click(function() {
		$(".outfit").hide();
		$("#body").hide();
		var num = $(this).attr("id").split("")[1];
		$("#o" + num).show();
	});

	$("#strip-button").click(function() {
		$(".outfit").fadeOut();
		$("#body").fadeIn();
	});

});
