
$( document ).ready(function() {
    $("#btn-login").bind("click", function(){
        $.ajax({
            url : 'api/connect/' + encodeURI($("#login-username").val()) + '/' + encodeURI($("#login-password").val()),
            type : 'GET',
            success : function(data, status){
                if (data.success)
                    alert("Usr found!");
                else
                    alert("GTFO!");
            },

            error : function(res, status, error){
                alert(error);
            }

        });
    });
});