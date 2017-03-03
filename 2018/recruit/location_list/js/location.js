$(function () {

	var $window = $( window ),
		breakpoint = 768,
		timer = null,
		href = location.href,
		param = href.split('?'),
		$windowWidth;

	// $window.on( 'load resize', function(){
	// 	$windowWidth = $window.innerWidth();

	// 	clearTimeout( timer );

	// 	timer = setTimeout( function(){
	// 		if(  breakpoint <= $windowWidth ){
	// 			$('body').removeClass('MobileUI')
	// 			pc( param );
	// 		}			
	// 	}, 200);

	// });

	if( ! g.isSp()  ){
		pc( param );
	} else  {
		$('body').addClass('MobileUI')
		sp( param );
	} 



	function pc( param ){
		/**
		* リサイズ時のUI挙動リセット
		*/
		$('.area_data').add($('.selectArea_area')).add($('.activeMap')).each(function(){
			$(this).removeAttr('style')
		});

		(function setLayout(){
			$('.area_data').each(function(){
				var $this = $(this);
				var $myWrap = $this.closest('.area_wrap');
				var $myBtn = $myWrap.find('.area_btn');
				var valLeft = (function(){
					if($myWrap.attr('data-area') == 'kyushu'){
						return -(($this.outerWidth() - $myBtn.outerWidth())/5);
					}
					else {
						return -(($this.outerWidth() - $myBtn.outerWidth())/2);
					}
				}());
				var valTop = (function(){
					if($myBtn.hasClass('arrow_bottom')){
						return 44;
					}
					else {
						return -10 - $this.outerHeight();
					}
				}());
				$this.css({
					'top': valTop,
					'left': valLeft,
					'display': 'none'
				});
			});
			$('.activeMap').hide();
			if( ! param[1] ) $('.selectArea').hide().eq(0).show();
		}());


		/**
		* コースを選ぶ（上部メニュー）ボタンをクリックしたとき
		*/
	    $('.type_btn').click(function(){
			var $this = $(this);
			var speed = 400;
			$('.selectArea').each(function(){
			    var _$this = $(this);
			    if(_$this.find('.area_btn.active')){
					_$this.find('.area_btn.active').click();
					changeActiveMap(_$this.find('.activeMap'), 'base');
					_$this.stop(true,true).find('.activeMap').hide();
				}
				_$this.hide();
				if(_$this.hasClass($this.attr('data-type'))){
					_$this.stop(true,true).fadeIn(speed);
				}
	        });
	    });

		/**
		* 地図のボタンをクリックしたとき
		*/
	    $('.area_btn, .area_data_closer').click(function( e ){
	    	e.preventDefault();
	    	e.stopPropagation();
	        var $this = $(this).hasClass('area_data_closer') ? $(this).closest('.selectArea_area').find('.area_btn') : $(this);
	        // var $this = $(this).hasClass('area_data_closer') ? $(this).closest('.selectArea_area').find('.area_btn') : $(this);


			var $myWrap = $this.closest('.area_wrap');
			var $map = $this.closest('.selectArea').find('.activeMap');
	        var speed = 300;
	        if($this.hasClass('active')){
				$this.removeClass('active').css({'background-image':'url("img/area_btn_search.png")'});
				$myWrap.find('.area_data').stop(true,true).fadeOut(speed);
				$map.fadeOut(speed);
	        }
	        else {
				$('.area_btn').removeClass('active').css({'background-image':'url("img/area_btn_search.png")'});
				$this.addClass('active').css({'background-image':'url("img/area_btn_close.png")'});
				changeActiveMap($map, $myWrap.attr('data-area'));
				$map.stop(true,true).fadeIn(speed);
				$('.area_data').fadeOut(speed);
				$myWrap.find('.area_data').stop(true,true).fadeIn(speed);
	        }
	    });

		locationSetter( param, 'pc' );					    

	}

	function sp( param ){
		$('.area_data').add($('.selectArea')).each(function(){
			$(this).removeAttr('style')
		});
		$('.selectArea_area').each(function(){
			$(this).hide();
		});
		$('.activeMap').hide();
		

		$('.selectArea_ttl_wrap').on( 'click', function( e ){
			e.stopPropagation();
			e.preventDefault();
			if( $(this).hasClass('active') ){
				$(this).parent().find('.selectArea_area').stop(true,true).slideUp(1000).end().end().removeClass('active').css({'background-image':'url("img/area_btn_search.png")'});
			} else {
				$(this).parent().find('.selectArea_area').stop(true,true).slideDown(1000).end().end().addClass('active').css({'background-image':'url("img/area_btn_close.png")'});
			}

		});		
		locationSetter( param, 'sp' );//spの場合はあとに書く
	}

	
	function changeActiveMap(map, data){
		var src = $(map).attr('src');
		var file = src.match(".+/(.+?)\.[a-z]+([\?#;].*)?$");
		var area = file[1].split("\_");
		$(map).attr('src', src.replace(area[area.length-1], data));
	}

	/**
	* 別ページから　?〜パラムを送信して初期表示コンテンツを指定する。
	* example ahref="../location_list/index.html?chiiki_a"
	* @param param { str } <div class="selectArea ~ "> に指定してあるクラス
	* @param device { str } sp, pc 挙動を変える。
	*/
	function locationSetter( param, device ){
		// var href = location.href,
		// 	param = href.split('?');

		if(! param[1] ) return;
		
		// target = $( '[data-type="' + param[1] + '"]')
		$targetSection = $( '.' + param[1] );

		console.log( $targetSection )

		if( device == "pc" ){
			$.each( $('.selectArea'), function(){
				$(this).hide();
			});		

			$targetSection.fadeIn('fast');			
		} else {
			$.each( $('.selectArea'), function(){
				var sectionClass = $(this).attr('class'),
					reg = new RegExp( ".*" + param[1] );

				if( reg.test( sectionClass ) ){
					var $openTarget = $(this).find('.selectArea_area');
					$openTarget.fadeIn('fast', function(){
						$('body,html').animate({
							scrollTop: $openTarget.offset().top
						}, 0);
					});
				}
			})
		}

	}
	
});