$(function(){

	var button = $('li.sm-map a').filter('[href*="map"]');

	button.on( 'click', function( e ){

		e.stopPropagation();
		e.preventDefault();

		var $target = $(this),
			$href = $target.attr('href');

		window.open($href, 'map', 'width=450, height=600, menubar=no, toolbar=no, scrollbars=yes')

	});

});