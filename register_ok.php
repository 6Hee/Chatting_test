<?php
    $id = $_POST["id"];
    $pass = $_POST["pass"];
    $name = $_POST["name"];
    $email = $_POST["email"];
    $register_day = date("Y-m-d");

    include "./db_con.php";
    //DB에 동일한 아이디가 존재하는지를 찾는다.
    $sql = "select * from register where id='$id'";
    $result = mysqli_query($con, $sql);
    $total_record = mysqli_num_rows($result);  //1이면 동일한 아이디가 존재 /0이면 동일한 아이디가 존재하지 않는다.

    if($total_record){
        echo ("
            <script>
                alert('동일한 아이디가 존재합니다.');
                history.go(-1);
            </script>
        ");
    }else{


        //DB에 넣는다.
        //id, pass, name, email, register_day
        $sql = "insert into register (id, pass, name, email, register_day) values('$id', '$pass', '$name', '$email', '$register_day')";

        mysqli_query($con, $sql);
        mysqli_close($con);
        
        echo("
            <script>
                location.href = './login.html';
            </script>
        ");


    }

?>