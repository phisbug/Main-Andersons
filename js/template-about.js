(function($) {
	$(document).ready(function() {
		
		shenanigans();
		
		
		
		$(window).resize(function() {
            
				shenanigans();
			
        });

	});//end doc ready
})(jQuery);


function shenanigans()
{
		if(window.innerWidth > 767)
		{
				$('.navbar .dropdown').hover(function() {
					  
					}, function() {
					  
					});	
		}else
		{	
				$(this).find('.dropdown-menu').hide();
				$(this).find('.dropdown-menu.hidden-xs').hide();
				$('.navbar .dropdown').unbind('hover');
		}
		
		
		
}


function hovershenanigans()
{
	$('.navbar .dropdown').hover(function() {
                   $(this).find('.dropdown-menu').first().stop(true, true).fadeToggle( "fast", "linear" );
				   $(this).find('.dropdown-menu.hidden-xs').stop(true, true).fadeToggle( "fast", "linear" );
                   $(this).find('a').first().css('font-weight','bold');
                }, function() {
                   $(this).find('.dropdown-menu').first().stop(true, true).fadeToggle( "slow", "linear" );
				   $(this).find('.dropdown-menu.hidden-xs').stop(true, true).fadeToggle( "fast", "linear" );
                   $(this).find('a').first().css('font-weight','normal');

         });
              
		
}