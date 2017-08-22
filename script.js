$(document).ready(function() {
	$("#clicker").click(function() {
		$("#panel").slideToggle("slow");
	});
	$("#clicker2").click(function() {
		$("#panel2").slideToggle("slow");
	});
	$("#yesClicker").click(function() {
		$("#yesPanel").slideDown("slow");
	});
	$("#noClicker").click(function() {
		$("#yesPanel").slideUp("slow");
	});
	$('#colorPicker').ColorPicker({flat: true});
	$(function() {
		$('#datepicker').datepicker();
	});
});