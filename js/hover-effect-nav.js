(function($) {
	$(document).ready(function() {

		calcHover();
	});
})(jQuery);


















//functions declaration

	 
	function calcHover()
	{
			
		if(window.innerWidth > 767)
       {
      
          $('.navbar .dropdown').hover(function() {
                   $(this).find('.dropdown-menu').first().stop(true, true).fadeToggle( "fast", "linear" );
                   $(this).find('a').first().css('font-weight','bold');
                }, function() {
                   $(this).find('.dropdown-menu').first().stop(true, true).fadeToggle( "slow", "linear" );
                   $(this).find('a').first().css('font-weight','normal');

         });
              
       }//close if	
	   else
	   {
			$('.navbar .dropdown').hover(function() {
                   
                }, function() {});				   
	   }
	   
	}
	
	
	