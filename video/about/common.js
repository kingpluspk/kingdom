var isMobile = {
	All: function () {
		return navigator.userAgent.match(/ipad|iphone os|android|windows mobile|windows phone|symbian|hpwos|blackberry|nokiabrowser|nokia|mqqbrowser|htc_sensation|K-Touch|AliyunOs|bingbot|Googlebot|EtaoSpider|YoudaoBot|spider|Baiduspider|360Spider/i) ? true : false;
	},
	any: function () {
		return (isMobile.All());
	}
};
if (isMobile.any()) {
	window.location.href = './video.html';
}

$(function () {
	$("#scrolltop").hide();
	$(window).scroll(function(){
		if ($(window).scrollTop() > 100) {
			$("#scrolltop").fadeIn();
		} else {
			$("#scrolltop").fadeOut();
		}
	});

	$("#scrolltop").click(function(){
		$('body,html').animate({scrollTop:0},1000);
		return false;
	});
});