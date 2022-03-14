<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept, Origin, Authorization');
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, PATCH, OPTIONS');

    require_once('./connect_bd.php');

    $data_ui = json_decode(file_get_contents('php://input'));

    $id = $data_ui->{'id'};
    $part_FIO = $data_ui->{'part_FIO'};

    $query = mysqli_fetch_assoc(mysqli_query($link, "SELECT * FROM users WHERE user_id='".$id."' "));

    if($query){
        echo json_encode($query[$part_FIO]);
    }else{
        echo json_encode((object) array('result' => null));
    }
    