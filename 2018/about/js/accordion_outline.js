$(document).ready(function(){
  //acordion_tree����U��\����    
  $(".slide-contents").css("display","none");
  //trigger���N���b�N����ƈȉ������s  
  $(".slide").click(function(){
    //�������N���b�N����trigger�̒����.acordion_tree����\���Ȃ� 
    if($("+.slide-contents",this).css("display")=="none"){
         //class��active��ǉ� 
         $(this).addClass("slide02");
         //�����acordion_tree���X���C�h�_�E�� 
         $("+.slide-contents",this).slideDown("normal");

  }else{
    //class����active���폜
    $(this).removeClass("slide02");
    //�N���b�N����trigger�̒����.acordion_tree���\������Ă���΃X���C�h�A�b�v 
    $("+.slide-contents",this).slideUp("normal");
  }
  });

  
});