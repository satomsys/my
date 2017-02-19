$(function () {

  var imgBox = '<div class="img_box"></div>'
  var closeBTn = '<span class="close_btn"></span>'
  var img01 = '<img src="images/ac/img_list01.png">'
  var img03 = '<img src="images/ac/img_list03.png">'
  var img05 = '<img src="images/ac/img_list05.png">'

  if (g.isSp()) {
    $('.actually .acContentsList dd').append(closeBTn);
    $('.actually .acContentsList #list01 dd , .actually .acContentsList #list03 dd , .actually .acContentsList #list05 dd').prepend(imgBox);
    $('.actually .acContentsList #list01 .img_box').append(img01);
    $('.actually .acContentsList #list03 .img_box').append(img03);
    $('.actually .acContentsList #list05 .img_box').append(img05);

    $('.actually .acContentsList dt').click(function(){
      $(this).addClass('open');
      $(this).next('dd').slideDown();
    });
    $('.actually .acContentsList dd .close_btn').click(function(){
      $(this).parent().prev().removeClass('open');
      $(this).parent().slideUp();
    });

  }

});
