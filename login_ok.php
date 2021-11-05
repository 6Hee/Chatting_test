<?php
    $id = $_POST["id"];
    $pass = $_POST["pass"];

    include "./db_con.php";

    $sql = "select * from register where id='$id'";
    $result = mysqli_query($con, $sql);
    $total_record = mysqli_num_rows($result);

    if(!$total_record){
        echo ("
            <script>
                alert('등록되지 않은 아이디입니다. 확인 바랍니다.');
                history.go(-1);
            </script>
        ");
    }else{
        $row = mysqli_fetch_array($result);
        $db_pass = $row["pass"];

        mysqli_close($con);

        //패스워드 일치 여부 확인
        if($pass != $db_pass){

            echo ("
                <script>
                    alert('입력한 패스워드가 다릅니다. 재입력 바랍니다.');
                    history.go(-1);
                </script>
            ");
            exit;
        }else{
            session_start();
            $_SESSION["userid"] = $row["id"];
            $_SESSION["username"] = $row["name"];

            echo ("
                <script>
                    location.href='./chat.php';
                </script>
            ");
        }
        
    }
?>