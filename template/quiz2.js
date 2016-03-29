(function($){
	// This is where you will write your function for the programming challenge
	// Do not commit console.log statements
	// Use ajax to reach the api endpoint
	// Whether or not you use jQuery, you still have to fix the jQuery errors. Removing jQuery is not fixing the problem.

	$mouseover = $('.mouse-over');
	$click     = $('.click');
	$sub       = $('.submit');
	$timeout   = $('.timeout');
	
	$mouseover.on('mouseover', function() {
		$this = $(this);
		$(this).html('Scrooge McDuck!');
		$(this).height($(this).height() + 50);
	});

	$click.click('click', function() {
		$this = $(this);
		$this.html('Peace Out!')
		$(this).fadeOut(1500);
		return false;
	});

	$sub.on('submit', function(e) {
		e.preventDefault();
		if ($(this).find('input[type="text"]').val() !== '') {
			$(this).find('input').each(function() {
				$(this).fadeOut('slow');
			});
			$(this).append('<h2>Congratulations! You\'ve entered some text!</h2>');
		}
	});

	$(document).on('ready', function() {
		setTimeout( function(){
			$timeout.fadeIn('slow');
		}, 1000);
	});
	
	
	/* Here is my function for section 2 of the quiz. I'm sorry I could not complete the cookie portion of the prompt, 
		I didn't quite understand what needed to be saved */
		
	$('#getTitle').click(function(){
		$('#getTitle').attr('value', 'Change It');
		$.getJSON('http://www.mattbowytz.com/simple_api.json?data=quizData', function(quizData){
			$.each(quizData, function(item){
				$('.section2List').append('<li>' + item + '</li>');
			});
		});
		$('.section2').append('<input type="button" id="keepIt" value="Keep It"></input>');
	});

})(jQuery);