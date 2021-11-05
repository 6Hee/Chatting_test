//회원가입 창이 뜨면 아이디 입력 상자에 포커싱한다.
document.register_form.id.focus();

//하단의 "회원가입" 버튼 클릭시 각 입력상자의 유효성을 검사한다.

function check_input(){

    if(!document.register_form.id.value){
        alert("아이디를 입력하세요.");
        document.register_form.id.focus();
        return;
    }
    if(!document.register_form.pass.value){
        alert("패스워드를 입력하세요.");
        document.register_form.pass.focus();
        return;
    }
    if(!document.register_form.pass_confirm.value){
        alert("패스워드 확인을 입력하세요.");
        document.register_form.pass_confirm.focus();
        return;
    }
    if(!document.register_form.email.value){
        alert("이메일을 입력하세요.");
        document.register_form.email.focus();
        return;
    }

    if(document.register_form.pass.value != document.register_form.pass_confirm.value){
        alert("패스워드와 패스워드 확인의 입력 값이 일치하지 않습니다.");
        document.register_form.pass.focus();

        return;
    }


    document.register_form.submit();


}



$(document).ready(function(){

    function resizeEvt(){

        
        var $bodyH = $(window).height();
        console.log($bodyH);

        var $frameH = $("#register .frame").height();
        console.log($frameH);

        if($bodyH < $frameH + 40){
            $("#register .frame").addClass("registerH630_down"); //position:static;
            $("html, body").animate({scrollTop:0}, 100);
            $("#register").css("height", "auto");
        }else{
            $("#register .frame").removeClass("registerH630_down");
        }
    }
    resizeEvt(); //브라우저가 최초로 로딩할 때 함수 호출하여 현재 디바이스 가로 또는 세로값을 측정하여 내부 실행문을 실행시키도록 한다.

    $(window).resize(function(){
        //가로 또는 세로 사이즈의 변동이 발생하면 이벤트가 작동한다.
        resizeEvt();  //브라우저의 최초 로딩을 제외하고 그 이후에 사이즈 변동이 발생했기 때문에 사이즈 변동 발생시마다 함수를 호출하여 현재 디바이스 가로 또는 세로값을 측정하여 내부 실행문을 실행시키도록 한다.
    });


});