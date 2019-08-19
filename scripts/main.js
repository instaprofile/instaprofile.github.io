/* Document Ready ---------- */
$(document).ready(function() {

	// App Screens
	$(function(){
	    $ps = $('.screen-slides li');
	    $ps.hide().eq(0).show();
	    setInterval(function(){
	        $ps.filter(':visible').fadeOut(function(){
	            var $li = $(this).next('li');
	            if ( $li.length == 0 ) {
	                $ps.eq(0).fadeIn();
	            } else {
	                $li.fadeIn();
	            }
	        });
	    }, 5000);
	});

});