// On your marks, get set...
$(document).ready(function(){
    
										
	// Cache the Window object
	$window = $(window);
	
	// Cache the Y offset and the speed of each sprite
	$('[data-type]').each(function() {	
		$(this).data('offsetY', parseInt($(this).attr('data-offsetY')));
		$(this).data('Xposition', $(this).attr('data-Xposition'));
		$(this).data('speed', $(this).attr('data-speed'));
	});
	
	// For each element that has a data-type attribute
	$('section[data-type="background"]').each(function(){
	
	
		// Store some variables based on where we are
		var $self = $(this),
			offsetCoords = $self.offset(),
			topOffset = offsetCoords.top;
		
		// When the window is scrolled...
	    $(window).scroll(function() {
	
			
			// If this section is in view
			if ( ($window.scrollTop() + $window.height()) > (topOffset) &&
				 ( (topOffset + $self.height()) > $window.scrollTop() ) ) {
	
				// Scroll the background at var speed
				// the yPos is a negative value because we're scrolling it UP!								
				var yPos = -($window.scrollTop() / $self.data('speed')); 
				
				// If this element has a Y offset then add it on
				if ($self.data('offsetY')) {
					yPos += $self.data('offsetY');
				}
				
				// Put together our final background position
				var coords = '50% '+ yPos + 'px';

				// Move the background
				$self.css({ backgroundPosition: coords });
				
				// Check for other sprites in this section	
				$('[data-type="sprite"]', $self).each(function() {
					
					// Cache the sprite
					var $sprite = $(this);
					
					// Use the same calculation to work out how far to scroll the sprite
					var yPos = -($window.scrollTop() / $sprite.data('speed'));					
					var coords = $sprite.data('Xposition') + ' ' + (yPos + $sprite.data('offsetY')) + 'px';
					
					$sprite.css({ backgroundPosition: coords });													
					
				}); // sprites
			
			
			}; // in view
	
		}); // window scroll
			
	});	// each data-type

	/* Next/prev and primary nav btn click handlers */
	$('a.first').click(function(){
    	$('#main').animate({
    		scrollTop:0
    	}, 1000, function() {
		});
    	return false;
	});
    $('a.second').click(function(){
    	$('#main').animate({
    		scrollTop:$('#second').offset().top
    	}, 1000, function() {
		});
    	return false;
    });
    $('a.third').click(function(){
    	$('#main').animate({
    		scrollTop:$('#third').offset().top
    	}, 1000, function() {
		});
    	return false;
    });
	


	$('.p_image').hover(function(){
		$(this).find('.hover').fadeIn(100);
	}, function(){
		$(this).find('.hover').fadeOut(100);
	});


}); // document ready



// FAQ
