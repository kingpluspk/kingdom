/**
 * Created by Administrator on 2017/5/26.
 */
$(function () {
    $(".navbt").click(function () {
        if ($('.navlistcon').css('display') == 'none') {
            $(".navlistcon").show(500);
        }
        else {
            $(".navlistcon").hide(500);
        }
    });
})
