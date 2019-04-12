$(document).ready(function() {


    $('#send_email').click(function(e){
        e.preventDefault();
        var data = {
            email: $('#email').val(),
            name: $('#name').val(),
            firstname: $('#firstname').val(),
            message: $('#message').val()
        };
        $.ajax({
            url: "../../mail.php",
            type: 'POST',
            data: data,
            success: function(){
                $('.success').fadeIn(1000);
            }
            /*success: function(data) {
                $('#js_alert_success').css({'display' : 'block'});
                setTimeout(function(){
                    $('#js_alert_success').css({'display' : 'none'});
                    $('#email').val("");
                    $('#name').val("");
                    $('#firstname').val("");
                    $('#message').val("")
                }, 3000);
            },*/
            /*error: function(data) {
                $('#js_alert_danger').css({'display' : 'block'});
                setTimeout(function(){
                    $('#js_alert_danger').css({'display' : 'none'});
                    $('#email').val("");
                    $('#name').val("");
                    $('#firstname').val("");
                    $('#message').val("")
                }, 3000);
            }*/
        });
    });

});