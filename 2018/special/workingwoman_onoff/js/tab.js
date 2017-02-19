
$(function () {
	$('.tab').hide();

	$('.tabnavi').find('a').on( 'click',function( e  ){
		e.stopPropagation();
		e.preventDefault();

		var tab = $(this) ,
			href = tab.attr("href"),
			hash = tab.data("href");

			console.log( $(this), hash );

		$('#tabcontent > div').hide().filter( hash ).fadeIn();

		/**
		* フッターナビをクリックしたとき
		*/
		if(tab.closest('.tabnavi').hasClass('tabnavi_foot')){
			$('body, html').animate({
				scrollTop: $('#tabcontent').offset().top - tab.outerHeight() - 60
			});
		}

		$('.tabnavi a').each(function(){
			var img = $(this).find('img'),
				src = img.attr('src');
			if($(this).data("href") == hash){
				img.attr('src', src.replace('-off.', '-on.')).addClass('active');
			}
			else {
				img.attr('src', src.replace('-on.', '-off.')).removeClass('active');
			}
		});

		// return false;
	}).filter(':eq(0)').click();

	$('img').hover(
		function () {
			if ($(this).attr('src')) {
				$(this).attr('src', $(this).attr('src').replace('-off.', '-on.'));
			}
	}, function () {
		if (!$(this).hasClass('active')) {
			$(this).attr('src', $(this).attr('src').replace('-on.', '-off.'));
		}
	});

	var url = location.href,
			params = url.split("?");
			console.log( params )
	if(params[1].match("tab02")){
		$('.tabnavi a').eq(1).click();
	}				
});