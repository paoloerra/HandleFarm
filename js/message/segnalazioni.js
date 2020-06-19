$(document).ready(function() {
	$("#btn1").click(function() {
				showAlert(0,"Segnalazione risolta");
	});

	$("#annulla").click(function() {
				showAlert(1,"Non hai cancellato la segnalazione");
	});
});
