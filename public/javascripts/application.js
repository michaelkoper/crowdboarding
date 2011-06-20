$(document).ready(function() {
	mouseOverEvent();
	mouseOverHelmet();
	showNotifyBar();
});
mouseOverEvent = function(){
	$("div.event").hover(function(){$(this).toggleClass('hover');});
}
mouseOverHelmet = function(){
	$("div#helmet").hover(function(){
		$(this).css('background-position', '0 -123px');
	}, function() { 
		$(this).css('background-position', '0 0');
	});
}

showNotifyBar = function(){
	notifier = $('div#wrapper_noticebar');
	if(notifier.length) {
		notifier.slideDown().delay(3000).slideUp();
	}
}