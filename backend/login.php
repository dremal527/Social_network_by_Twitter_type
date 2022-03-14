<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept, Origin, Authorization');
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, PATCH, OPTIONS');

    require_once('./connect_bd.php');

    # Функция для генерации случайной строки

    function generateCode($length=6) {

        $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHI JKLMNOPRQSTUVWXYZ0123456789";

        $code = "";

        $clen = strlen($chars) - 1;  
        while (strlen($code) < $length) {

                $code .= $chars[mt_rand(0,$clen)];  
        }

        return $code;
    }

    $data_ui = json_decode(file_get_contents('php://input'));

    $login = $data_ui->{'Email'};
    $password = $data_ui->{'Password'};

    # Вытаскиваем из БД запись, у которой логин равняеться введенному

    $data = mysqli_fetch_assoc(mysqli_query($link, "SELECT user_id, user_password FROM users WHERE user_login='".$login."' LIMIT 1"));  

    # Соавниваем пароли

    if($data['user_password'] === md5(md5($password))){

        # Генерируем случайное число и шифруем его

        $hash = md5(generateCode(10));

        # Записываем в БД новый хеш авторизации и IP

        mysqli_query($link, "UPDATE users SET user_hash='".$hash."' ".$insip." WHERE user_id='".$data['user_id']."'");

        # Ставим куки

        echo json_encode((object) array('status' => true, 'data' => ['id'=> $data['user_id'], 'hash' => $hash]));

    }else{
       echo json_encode((object) array('status' => false, 'error' => "Вы ввели неправильный логин/пароль"));
    }

