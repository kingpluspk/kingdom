$(function () {
    var viewport = document.querySelector("meta[name=viewport]");
    var winWidths = $(window).width();
    var densityDpi = 750 / winWidths;
    densityDpi = densityDpi > 1 ? 300 * 750 * densityDpi / 750 : densityDpi;
    if (isWeixin()) {
        viewport.setAttribute('content', 'width=750,target-densityDpi=' + densityDpi);
    } else if (/(Android)/i.test(navigator.userAgent)) {
        viewport.setAttribute('content', 'width=' + screen.width + ', user-scalable=no,target-densityDpi=750,initial-scale=0.5,maximum-scale=1.0,minimum-scale=0.5');
    } else {
        viewport.setAttribute('content', 'width=750, user-scalable=no');
    }
})
function isWeixin() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return true;
    } else {
        return false;
    }
}