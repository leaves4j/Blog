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


    $('#bar a').click(function(){
        $('#bar a').removeClass('navbar-select');
        $(this).addClass('navbar-select');
    });

});
function getResource() {
    var url = window.location.hash;
    if (!url) url = '#list/All/1-10';

    url = url.replace('#/', './').replace('#', './');
    $.get(url, function (data) {

        // $('#list').fadeOut();
        $('#list').html(data).hide();
        $('#list').fadeIn();
    })
}