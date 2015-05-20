$(document).ready(function(){

	$('.about').click(function(){
		$('.content-box').animate( { right : "100%" }, 500, function() {
			$('.content-box').hide();
			$('.content-box').css( "right" , "initial");
			$('#about-content').fadeIn(500);
		});		
	});

	$('.play').click(function(){
		$('.content-box').animate( { right : "100%" }, 500, function() {
			$('.content-box').hide();
			$('.content-box').css( "right" , "initial");
			$('#play-content').fadeIn(500);
		});		
	});

	$('.produce').click(function(){
		$('.content-box').animate( { right : "100%" }, 500, function() {
			$('.content-box').hide();
			$('.content-box').css( "right" , "initial");
			$('#produce-content').fadeIn(500);
		});		
	});

	$('.teach').click(function(){
		$('.content-box').animate( { right : "100%" }, 500, function() {
			$('.content-box').hide();
			$('.content-box').css( "right" , "initial");
			$('#teach-content').fadeIn(500);
		});		
	});

	$('.web').click(function(){
		$('.content-box').animate( { right : "100%" }, 500, function() {
			$('.content-box').hide();
			$('.content-box').css( "right" , "initial");
			$('#web-content').fadeIn(500);
		});		
	});

});