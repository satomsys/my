$(function(){


  var $tab  = $('.tab_item'),
      $foottab  = $('.foot_block .tab_item'),
      $cnts = $('.main_cnts'),
      hash  = location.hash
      index = parseInt( location.hash.match(/\d/) ) - 1; // URLからハッシュを取得
      index = ( hash == '' ) ? 0 : index;

  $tab.eq(index).addClass('active');
  $foottab.eq(index).addClass('active');
  $cnts.eq(index).show();
  $cnts.not($cnts.eq(index)).hide();

  $tab.click(function(){

    var i = $(this).index();

    $tab.eq(i).addClass('active')
      .siblings().removeClass('active');
    $foottab.eq(i).addClass('active')
      .siblings().removeClass('active');

    $cnts.not($cnts.eq(i)).hide();
    $cnts.eq(i).fadeIn(1000);

    var $cntsTop = $('.container').offset();
    $('html,body').animate({scrollTop: $cntsTop.top}, 700 , 'swing');

  });

  $foottab.click(function(){

    var i = $(this).index();

    $tab.eq(i).addClass('active')
      .siblings().removeClass('active');
    $foottab.eq(i).addClass('active')
      .siblings().removeClass('active');

    $cnts.not($cnts.eq(i)).hide();
    $cnts.eq(i).fadeIn(1000);

    var $cntsTop = $('.container').offset();
    $('html,body').animate({scrollTop: $cntsTop.top}, 700 , 'swing');

  });

});


