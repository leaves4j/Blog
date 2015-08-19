/**
 * Created by leaves on 2015/2/7.
 */

$.fn.serializeObject = function () {
    var o = {};
    var a = this.find('[name]');
    this.find('[name]').each(function () {
        o[$(this).attr('name')] = $(this).val();
    });
    return o;
};
$(function () {
    $('#replySubmit').click(function () {
        var data = $("#reply").serializeObject();
        if (data.ReplyTo == "")
            delete data.ReplyTo;
        if (data.ReplyName == '' || data.ReplyEmail == '' || data.ReplyContent == '') {
            $('#reply-alert').show();
        }
        else
            $.post("./reply", data, function (data) {
                getResource();
            });
    });
});