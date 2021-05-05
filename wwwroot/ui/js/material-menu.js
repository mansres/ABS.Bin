document.addEventListener("touchstart", function () { }, false);
$(function () {
	$('.material-navtoggle').click(function () {
		$('.material-menucontainer').toggleClass('wsoffcanvasopener');
	});

	$('.overlapblackbg').click(function () {
		$('.material-menucontainer').removeClass('wsoffcanvasopener');
	});


});