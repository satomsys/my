
/* -------------------------------------------------------------------------- **
**  GNAV
** -------------------------------------------------------------------------- */
(function($){

	// スクロールしたらナビを固定
	$(function(){
			
		if (!g.isSp()) {
			var $nav = $("#nav-area");
			var $cont = $('.section-area');
			var $enterBtn = $('.seminar-btn');
			var headerheight = $("#headerwrap").height();
			var navTop = 0;
			var enterBtnTop = 0;
			var conTop = [];
			var scrollHeight = $(document).height();
			var scrollPosition = 0;
		
			/**
			* 初期状態設定
			* 34pxはグローバルナビの高さ
			*/
			$(window).on('load resize', function(){

				if( $nav.length ){
					navTop = $nav.offset().top - 34 - $enterBtn.outerHeight();					
				}

				enterBtnTop = $enterBtn.offset().top - 15;
				console.log( enterBtnTop )

				$cont.each(function(i) {
					conTop[i] = $(this).offset().top - 180; //各.section-area上端からのOffset
					// conTop[i] = $(this).offset().top - 144;
				});
				conTop[conTop.length] = scrollHeight; //コンテンツ末尾まで
			})

			$(window).scroll(function(){
				var sTop = $(window).scrollTop();
				scrollPosition = $(window).height() + sTop; //スクロール末尾
				
				/**
				* ボタンのfix
				*/
				if(sTop >= enterBtnTop ){
					console.log( enterBtnTop )
					// navTop = $nav.offset().top - 34 - $enterBtn.outerHeight();
					$enterBtn.addClass('fixed');
				} else {
					$enterBtn.removeClass("fixed");					
				}

				if( ! $nav.length ) return;

				/**
				* ナビのFix カレント
				*/
				if(sTop >= navTop){
					$nav.addClass("fixed");
					
					$.each(conTop,function(index,val){
						if ((scrollHeight - scrollPosition) / scrollHeight <= 0.0001) {
							
							var targetNum = conTop.length - 1;
							
							$("#nav-area ul li:not(:eq("+targetNum+"))").removeClass('current');
							$("#nav-area ul li:not(.com)").eq(targetNum).addClass('current');
						}else if(sTop >= val && sTop < conTop[index + 1]) {
							$("#nav-area ul li:not(:eq("+index+1+"))").removeClass('current');
							$("#nav-area ul li:not(.com)").eq(index+1).addClass('current');
						}
						
					});
				
				} else {
					$nav.removeClass("fixed");
					$("#nav-area ul li").removeClass('current');
				}
			});
		}else{
			var $target = $("#sp-nav-area");
			var $nav = $("#nav-area");
			var $cont = $('.section-area');
			var $enterBtn = $('.seminar-btn');			
			var $contLength = $cont.length;
			var headerheight = $("#headerwrap").height();
			var navTop = 0;
			var enterBtnTop = 0;			
			var conTop = [];
			var scrollHeight = $(document).height();
			var scrollPosition = 0;

		
			$(window).on('load resize', function(){
				$cont.each(function(i) {
					// 最後のセクションのみ早くサーチされる
					if( i == $contLength-1 /* && /chiiki/.test(location.href)*/ ) {
						conTop[i] = $(this).offset().top - 90;						
					} else {
						conTop[i] = $(this).offset().top - 10;												
					}
					// console.log( conTop[i] );
				});
				conTop[conTop.length] = conTop[conTop.length-1] + 5000;
				
				navTop = conTop[0];
			})

			
			$(window).scroll(function(){
				scrollDirection();
			});
			$('body').on('touchmove', function() {
				scrollDirection();
			});
			
			var sTop = 0;
			function scrollDirection() {
				sTop = $(window).scrollTop(); // 現在のスクロール位置を取得
				scrollPosition = $(window).height() + sTop;
				
				if(sTop >= conTop[0]){
					$target.addClass("fixed");
					$enterBtn.addClass ('fixed');
					
					$.each(conTop,function(index,val){
						if(sTop >= val && sTop < conTop[index + 1]) {	
							var targetNum = index + 1;
							var targetText = $("#nav-area ul li:not(.com)").eq(targetNum).text();
							$("#sp-area-name span").text(targetText);
						}
						
					});
				
				} else {
					$target.removeClass("fixed");
					$enterBtn.removeClass("fixed");
					$("#sp-area-name span").text('');
				}
			}
			
		}
	});


})(jQuery);