$(document).ready(function() {
	$('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
	$('.ryu-ready').show();
    })
    .mouseleave(function() {
    $('.ryu-ready').hide();
	$('.ryu-still').show();
  	})
  	
  	.mousedown(function() {
    playHadouken();
    // play hadouken sound
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    // show hadouken and animate it to the right of the screen
    $('.hadouken').finish().show().animate(
		{'left': '1020px'},
		500,
		function() {
			$(this).hide();
			$(this).css('left', '520px');
  		});
  	})
  	.mouseup(function() {
    // ryu goes back to his ready position
    $('.ryu-throwing').hide();
	$('.ryu-ready').show();
  	})
  	
  	$("html").keydown(function(event) {
	  	 var keycode = (event.keyCode ? event.keyCode : event.which);
	  	 if(keycode == '88'){
	  	 $('.ryu-still').hide();
	  	 $('.ryu-looking-cool').show();
    	}
    })
    $("html").keyup(function(event) {
	    var keycode = (event.keyCode ? event.keyCode : event.which);
	  	 if(keycode == '88') {
		$('.ryu-still').show();
	  	$('.ryu-looking-cool').hide();
    	}
  	});
   
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}