/**
 * Created by leaves on 2015/2/10.
 */
$.fn.serializeObject = function() {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};
$(function(){
    $('#submit').click(function(){
        $.post("../mgr/blog",$("form").serializeObject(), function(data){
            alert("Data Loaded: " + data);
        });
    });

});