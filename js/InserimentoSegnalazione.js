$(document).ready(function() {
	$("#btn1").click(function() {
				showAlert(0,"Segnalazione inserita");
				window.setTimeout(function () {
        location.href = "ListaSegnalazioni.html";
    }, 1000);
	});



});
