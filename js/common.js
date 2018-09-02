//rem
(function (doc, win) {
	var docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function () {
			var clientWidth = docEl.clientWidth;
			if (!clientWidth) return;
			if (clientWidth >= 640) {
				docEl.style.fontSize = '100px';
			} else {
				docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
			}
		};
	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
//微信hover效果
$(".weixin-erweima").hover(function () {
	$(".weixin-info").show();
}, function () {
	$(".weixin-info").hide();
})
$(".weixin-info").hover(function () {
	$(".weixin-info").show();
}, function () {
	$(".weixin-info").hide();
})
//图片延迟加载
Echo.init({
	offset: 0,
	throttle: 0
});
$(function () {
	//侧滑菜单
	$('[data-toggle="offcanvas"]').click(function () {
		$('#wrapper').toggleClass('toggled');
		$(".glyphicon-remove").toggle();
		$(".glyphicon-menu-hamburger").toggle();
	});
	//图片点击放大
	$('.enlarge-img').lightcase({
		transition: 'fade'
	});
})