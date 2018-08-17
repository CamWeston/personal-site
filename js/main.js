/*------------------------------------------*/
/* Start Jquery code */
$(function(){ 
  $(window).on("load", function(){
    $('.preloader-background').delay(1700).fadeOut('slow');
	
	$('.preloader-wrapper')
		.delay(1700)
		.fadeOut()
		.promise();
		
 	$('.parallax').parallax();
    $('.sidenav').sidenav();

    $('#rumrShowMore').click(function() {
    	$("#rumrP2").show();
    	$("#rumrShowMore").hide();
    	$("#rumrShowLess").show();
    });

    $("#rumrShowLess").click(function(){
    		$("#rumrShowLess").hide();
    		$("#rumrP2").hide();
    		$("#rumrShowMore").show();
    	});
  });
  });

