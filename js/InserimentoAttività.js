$(document).ready(function() {
	$("#btn1").click(function() {
				showAlert(0,"Attività inserita");
				window.setTimeout(function () {
        location.href = "ListaAttività.html";
    }, 1000);
	});



});
