/*コールバック
==========================================================================*/

function onAfter(curr, next, opts) {
    var index = opts.currSlide;
	$('#ReadMoreBtn')[index == 0 ? 'show' : 'hide']();
    $('#prev')[index == 0 ? 'hide' : 'show']();
    $('#next')[index == opts.slideCount - 1 ? 'hide' : 'show']();
}



/*ネストされたスライド（スライド内クロスフェード）＆スライド順番を制御
==========================================================================*/

$(document).ready(function() {
    
    // init and stop the inner slideshows
    var inners = $('.inner-slideshow').cycle().cycle('stop');
    
    var slideshow = $('#slideshow').cycle({
        fx: 'scrollVert',
        speed: 600,
        timeout: 0,
        prev: '#prev',
        next: '#next',
		after:   onAfter,
        before: function() {
            // stop all inner slideshows
            inners.cycle('stop');
            
            // start the new slide's slideshow
            $(this).cycle({
                fx: 'fade',
                timeout: 2000,
                autostop: true,
                end: function() {
                    // when inner slideshow ends, advance the outer slideshow
                    //slideshow.cycle('next');
                }
            });
        }
    });
	
});