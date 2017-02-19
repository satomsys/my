$(function () {

	var href = location.href,
		param = href.split('?');

		if(! param.length) return;
		console.log( param )

console.log( $( '[data-type="' + param[1] + '"]').html() )
		$( '[data-type="' + param[1] + '"]').click();
	
});