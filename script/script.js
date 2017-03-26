$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change изменить селектор формы с помощью которого обрабатывается скрипт
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change путь до файла
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
