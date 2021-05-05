document.addEventListener("touchstart", function () { }, false);
$(function () {
	$('.material-navtoggle').click(function () {
		$('.material-menucontainer').toggleClass('material-offcanvasopener');
	});

	$('#material-navtoggle').click(function () {
		$('.material-menucontainer').toggleClass('material-offcanvasopener');
	});

	$('.overlapblackbg').click(function () {
		$('.material-menucontainer').removeClass('material-offcanvasopener');
	});



});