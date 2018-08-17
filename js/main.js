document.addEventListener("DOMContentLoaded", function(){
	$('.preloader-background').delay(1700).fadeOut('slow');
	
	$('.preloader-wrapper')
		.delay(1700)
		.fadeOut()
		.promise()
		.done(function() {
		if ($('.workexperience').length > 0) {
 			M.toast({html: 'Click the logos to find out more about the position! '})	
 			}
 		});
 	$('.parallax').parallax();
});

