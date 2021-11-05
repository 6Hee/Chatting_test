$(document).ready(function(){


    $("#message").focus();

    $("#chat_msg").keyup(function(e){
        console.log(e);

        if(e.keyCode == 13){
            if($(this).find("#message").val().length < 1){
                $(this).find("#message").val("");
                //alert("메세지를 입력해 주세요.");
            }else{
                $(this).submit();
                $(this).find("#message").val("");
            }
        }
    });

});