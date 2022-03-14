<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept, Origin, Authorization');
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, PATCH, OPTIONS');

    require_once('./connect_bd.php');

    $data = json_decode(file_get_contents('php://input'));

    $login = $data->{'Email'};
    $password = md5(md5(trim($data->{'Password'})));
    $Name = $data->{'Name'};
    $Surname = $data->{'Surname'};

    $err = [];

    # проверяем, не сущестует ли пользователя с таким именем

    $query = mysqli_query($link,"SELECT user_id FROM users WHERE user_login='".$data->{'Email'}."'");

    if($query->num_rows > 0){
       array_push($err, "Пользователь с таким логином уже существует в базе данных");
    }

    # Если нет ошибок, то добавляем в БД нового пользователя

    $Good_Result = (object) array('status' => true, 'error' => false);
    $Bad_Result = (object) array('status' => false, 'error' => $err);

    if(count($err) == 0){

        $res = mysqli_query($link,"INSERT INTO users SET user_login='".$login."', user_password='".$password."', user_name='".$Name."', user_surname='".$Surname."' ");

        if($res){
            echo json_encode($Good_Result);
        }else{
            echo 'Не коннект';
        }

    }else{
        echo json_encode($Bad_Result);
    }
