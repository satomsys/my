window.onunload = function() {};

var g = {
    isSp: function() {
        return (g.winW() <= g.point) ? true : false;
    }, // SP or PC
    winW: function() {
        return $(window).width();
    },
    winH: function() {
        return $(window).height();
    },
    winT: function() {
        return $(window).scrollTop();
    },
    point: 768
};

var _ua = (function(u) {
    return {
        Tablet: (u.indexOf("windows") != -1 && u.indexOf("touch") != -1 && u.indexOf("tablet pc") == -1) ||
            u.indexOf("ipad") != -1 ||
            (u.indexOf("android") != -1 && u.indexOf("mobile") == -1) ||
            (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1) ||
            u.indexOf("kindle") != -1 ||
            u.indexOf("silk") != -1 ||
            u.indexOf("playbook") != -1,
        Mobile: (u.indexOf("windows") != -1 && u.indexOf("phone") != -1) ||
            u.indexOf("iphone") != -1 ||
            u.indexOf("ipod") != -1 ||
            (u.indexOf("android") != -1 && u.indexOf("mobile") != -1) ||
            (u.indexOf("firefox") != -1 && u.indexOf("mobile") != -1) ||
            u.indexOf("blackberry") != -1,
        iOS: u.indexOf("iphone") != -1
    };
})(window.navigator.userAgent.toLowerCase());

$(function() {
    var timer;


    //SP

    //resizeFlag
    if (g.isSp()) {
        $('body').removeClass('pcview').addClass('spview');
    } else {
        $('body').removeClass('spview').addClass('pcview');
    }

    //SP Image changer
    if (g.isSp()) {

        var before = /pc_/,
            after = 'sp_';

        replaceImg();

    } else {

        var before = /sp_/,
            after = 'pc_';

        replaceImg();

    }

    function replaceImg() {
        $('img[src*=pc_],img[src*=sp_]').each(function() {
            var spImg = $(this).attr('src').replace(before, after);
            if ($(this).attr('src').match(before)) {
                $(this).attr('src', spImg);
            }
        });
    }



    if (!_ua.Tablet && g.isSp()) {
        //nav位置下部へ
        $('.nav_naitei').insertAfter($('.main_wrap'));

        //naiteisha: link_boxのタッチ時処理(iOS)
        if (_ua.iOS) {
            $('.link_wrap').addClass('link_wrap_iphone')
                .bind('touchstart', function() {
                    timer = setTimeout($.proxy(function() {
                        $(this).addClass('link_wrap_hover');
                        $(this).find('.link_career-number').addClass('link_wrap_hover');
                    }, this), 150);
                }).bind('touchmove', function() {
                    clearTimeout(timer);
                    $(this).removeClass('link_wrap_hover');
                    $(this).find('.link_career-number').removeClass('link_wrap_hover');
                })
                .bind('touchend', function() {
                    clearTimeout(timer);
                    $(this).removeClass('link_wrap_hover');
                    $(this).find('.link_career-number').removeClass('link_wrap_hover');
                });
        }

    }

  if (g.isSp()) {
    var navBtn = $('<div class="navBtn"><span></span></div>')
    $('#headerwrap').append(navBtn);

    //nav位置下部へ
    $('#headtopright').prependTo('#headspecial');

  }


    //Tablet
    if (_ua.Tablet) {
        //viewportをデフォルトに
        $("meta[name='viewport']").attr('content',
            'width=1000,user-scalable=yes'
        );
    }

  //iphone
  if(_ua.iOS){
    $('body').addClass('is_ios');
  }
});
