$(document).ready(function(){

	$('.about').click(function(){
		$('.play-content, .produce-content, .teach-content, .web-content').hide();
		$('.about-content').show();
	});

	$('.play').click(function(){
		$('.about-content, .produce-content, .teach-content, .web-content').hide();	
		$('.play-content').show();
	});

	$('.produce').click(function(){
		$('.play-content, .about-content, .teach-content, .web-content').hide();	
		$('.produce-content').show();
	});

	$('.teach').click(function(){
		$('.play-content, .produce-content, .about-content, .web-content').hide();
		$('.teach-content').show();
	});

	$('.web').click(function(){
		$('.play-content, .produce-content, .teach-content, .about-content').hide();
		$('.web-content').show();
	});



});