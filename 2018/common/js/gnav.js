
/* -------------------------------------------------------------------------- **
**  GNAV
** -------------------------------------------------------------------------- */
(function($){
  $(function(){
    $('#headspecial > ul > li div').hide();

    if (g.isSp()) {
      $('#headspecial').hide();
      $('#headspecial > ul > li > a').wrap('<span></span>');

      $('.navBtn').click(function(){
        $(this).toggleClass('open');
        $('body').toggleClass('fixed');
        $('#headspecial').stop(false,true).slideToggle();
      });

    $('#headspecial > ul li').click(function(){
      $(this).not('.coming').toggleClass('open');
      $(this).children('div').not('.mysite_btn').stop(false,true).slideToggle();

      if( $(this).hasClass('coming')){
        return false;
      }

    });
    }else {
      $('#headspecial ul li').hover(function(){
        $(this).children('div').show();
        //$(this).children('ul').stop(true, true).slideDown('fast');
        //$('dd > ul', $(this)).stop(true, true).slideDown('fast');
      }, function(){
        $(this).children('div').hide();
        //$(this).children('ul').stop(true, true).slideUp('fast');
        //$('dd > ul', $(this)).stop(true, true).slideUp('fast');
      });
    }

  });


  // スクロールしたらナビを固定
  $(function(){
      //var scrollY = 200;    // ナビ切り替えのスクロール値
      //var viewTime = 500;    // 表示するまでの時間(ms)

      var gnav = $("#headspecial");
      var headerheight = $("#headerwrap").height();
      var gnavTop = gnav.offset().top;

      $(window).on( 'load', function(){
        gnavTop = gnav.offset().top;
        // alert( gnavTop )
      })

      //header.addClass("top");
      //gnav.addClass("top");
      if (!g.isSp()) {
      $(window).on('load scroll', function(){
          //var distanceY = $(this).scrollTop();
          if($(window).scrollTop() >= gnavTop){
            gnav.addClass("fixed");
            /*gnav.css("top","0");*/
            //$("body").css("margin-top","50px");
          } else {
            gnav.removeClass("fixed");

            /*gnav.css("top","63px");*/
            //$("body").css("margin-top","0");
          }
          // console.log( gnav, gnavTop );
      });
      }
  });


})(jQuery);


function currentGnav(target) {
  var targetId = "#gnav-" + target;

  $("#headspecial > ul > li").removeClass("selected");
  $(targetId).addClass("selected");
}
