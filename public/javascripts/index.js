/**
 * Created by leaves on 2015/2/1.
 */
$(function () {
    var url = window.location.hash;
    if (url) {
        url = url.replace('#/', './').replace('#', './');
        $.get(url, function (data) {
            $('#list').html(data);
        });
    }
    window.onhashchange = function () {
        getResource();
    };


    $('#bar a').click(function () {
        $('#bar a').removeClass('navbar-select');
        $(this).addClass('navbar-select');
    });

});
function getResource() {
    var url = window.location.hash;
    if (!url) url = '#list/All/1-10';

    url = url.replace('#/', './').replace('#', './');
    //NProgress.start();
    var value=0.2;
    var rd=0;
    var timer = setInterval(function () {
        value=value+(1-value)*(Math.random()*0.2+0.2);
        NProgress.set(value);
    }, 50);
    $.get(url, function (data) {
        window.clearInterval(timer);
        $('#list').html(data).hide();
        $('#list').fadeIn();
        NProgress.done();
        setTimeout(function () {
            NProgress.remove();
        }, 1500)
    });

}