// JavaScript Document


//$(document).ready(function(){
//	var winname = "PopupWin";
//	var winWidth = 490;
//	var winHeight = 300;
//	$("a.TargetPopup").click(function() {
//			win = window.open(this.href,winname,'toolbar=1,location=1,status=1,menubar=1,scrollbars=yes,resizable=1,width='+winWidth+',height='+winHeight);
//			win.focus();
//			return false;
//		}
//	);
//	$("a.TargetPopupNomenu").click(function() {
//			win = window.open(this.href,winname,'toolbar=0,location=0,status=0,menubar=0,scrollbars=yes,resizable=1,width='+winWidth+',height='+winHeight);
//			win.focus();
//			return false;
//		}
//	);
//});



/* window & location */

function win_open(){
	if(arguments[0]){
		var url = arguments[0];
		var tgt = (arguments[1] ? arguments[1] : '_self');
		var prp = '';
		if(arguments.length > 3){
			var scroll = (arguments[2] ? 1 : 0);
			var resize = (arguments[3] ? 1 : 0);
			var width = (arguments[4] > 100 ? arguments[4] : 100);
			var height = (arguments[5] > 100 ? arguments[5] : 100);
			prp = 'toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=' + scroll + ',resizable=' + resize + ',width=' + width + ',height=' + height;
		}
		else if(arguments[2] != null){
			prp = arguments[2];
		}
		
		(arguments[2] ? arguments[2] : '');
		var newWin = new Object();
		if(prp) newWin = window.open(url,tgt,prp);
		else newWin = window.open(url,tgt);
		newWin.focus();
	}
}

/* ------------------------------
 window close
------------------------------ */
function close_win(){
	var nvua = navigator.userAgent;
		if(nvua.indexOf('MSIE') >= 0){
			if(nvua.indexOf('MSIE 5.0') == -1) {
				top.opener = '';
			}
		}
		else if(nvua.indexOf('Gecko') >= 0){
			top.name = 'CLOSE_WINDOW';
			wid = window.open('','CLOSE_WINDOW');
		}
	top.close();
}

/* example */
/*

<a href="javascript:close_win();">閉じる</a">
<a href="#" onClick="close_win();">閉じる</a">

*/