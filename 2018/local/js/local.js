/* -------------------------------------------------------------------------- **
 **  TOP
 ** -------------------------------------------------------------------------- */
// トップページ カバー
$(function () {
  if (!$('#mainView ul').length) return;

  $resize = null,
    $bxViewportHeight = null,
    $sliderHeight = null;

  mvHeightFixer();

  $(window).on('resize', function () {

    clearTimeout($resizer);

    var $resizer = setTimeout(function () {
      mvHeightFixer();
    }, 400);

  });

  if ($.fn.bxSlider) {
    $('#mainView ul').bxSlider({
      pager: true,
      controls: true,
      mode: 'fade',
      auto: true,
      speed: 2000,
      pause: 6000,
    });
  }

  /**
   * メインヴィジュアルの高さをウィンドウの85%に指定
   * @
   */
  function mvHeightFixer() {
    $bxViewportHeight = $('.bx-viewport').outerHeight(),
      $sliderHeight = Math.ceil($(window).outerHeight(true) * 0.85);
    if (g.isSp()) {
      $('#mainView, #mainView ul, #mainView ul li, #mainView ul li a').css('height', '120vw');
    } else {
      $('#mainView, #mainView ul, #mainView ul li, #mainView ul li a').css({
        'height': Math.ceil($(window).outerHeight(true) * 0.85)
      });

      /**
       * windowsでbx-viewportの高さが満ちない補完
       */
      if ($bxViewportHeight && $bxViewportHeight < $sliderHeight) {
        $('.bx-viewport').height($sliderHeight);
        // $('.bx-viewport').find('li').width( '100%' );

      }
    };

  };

  //topics
  $('#more').click(function () {
    var $dl = $('#topics dl');
    $dl.not($dl.eq(0)).slideToggle();
  });

  //クリック範囲拡大
  if (g.isSp()) {
    $(".contentContainer , .learnInner , .about2Inner , .contentBox , #special dl").not('#mainView , #about2 , #career2 , #special').css('cursor', 'pointer', '-webkit-tapHighlightColor', 'rgba(0,0,0,.7)')
    $(".contentContainer , .learnInner , .about2Inner , .contentBox , #special dl").not('#mainView , #about2 , #career2 , #special').click(function ( e ) {
      e.stopPropagation();
      var jumpTo = $(this).find("a").attr("href");
      if( !jumpTo && $(this).attr('id') == 'career'){
        window.location = '/2018/career/';
      } else {
        window.location = $(this).find("a").attr("href");      
      }
      return false;
    });
  }

  /**
  * 募集要項 PCのみ同ウィンドウ
  */
  var $boshuyokoLink = $('#boshuyoko').find('a');
  g.isSp() ? $boshuyokoLink.attr('target', '_blank') : $boshuyokoLink.attr('target', '_self'); 
});
