$(document).ready(function(){
  //acordion_treeを一旦非表示に    
  $(".slide-contents").css("display","none");
  //triggerをクリックすると以下を実行  
  $(".slide").click(function(){
    //もしもクリックしたtriggerの直後の.acordion_treeが非表示なら 
    if($("+.slide-contents",this).css("display")=="none"){
         //classにactiveを追加 
         $(this).addClass("slide02");
         //直後のacordion_treeをスライドダウン 
         $("+.slide-contents",this).slideDown("normal");

  }else{
    //classからactiveを削除
    $(this).removeClass("slide02");
    //クリックしたtriggerの直後の.acordion_treeが表示されていればスライドアップ 
    $("+.slide-contents",this).slideUp("normal");
  }
  });

  
});