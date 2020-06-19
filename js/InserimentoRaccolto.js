$(document).ready(function() {
	$("#btn1").click(function() {
				showAlert(0,"Raccolto inserito");
				window.setTimeout(function () {
        location.href = "ListaRaccolto.html";
    }, 1000);
	});



});
