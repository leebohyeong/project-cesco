<?php
/** ==============================================================================
 * File: 이벤트 응모 처리
 * Date: 2023-08-24 12:00
 * Created by @krabbit2.DevGroup
 * Copyright 2023, cesco.com(DevGroup). All rights are reserved
 *
 * ==============================================================================*/
require_once $_SERVER['DOCUMENT_ROOT'] . "/vendor/autoload.php";

use \DevGroup\Model\ModelBase;
use \DevGroup\Common\CommonFunc;
use \DevGroup\Library\Validator;

header("Content-Type: application/json");

$today_date = date("Y-m-d");
$today_time = date('Y-m-d H:i:s');      // ### 운영오픈 전, 서버시각 맞는지 반드시 확인할 것

if ($today_date > '2024-01-15') {
    $response['message'] = '이벤트가 종료되었습니다.';
    $response['result']  = false;
    echo json_encode($response);
    exit;
}

//REFERER 체크
$hoststr =  $_SERVER['HTTP_HOST'];
if(isset($_SERVER['HTTP_REFERER'])) {
    $referstr = $_SERVER['HTTP_REFERER'];
    if (strpos($referstr, $hoststr) === false) {
        $response['result'] = false;
        echo json_encode($response);
        exit();
    };
}else{
    exit();
}

$db = new ModelBase();

// 전체 당첨자 수 체크
$db->from("EVENT1_QUIZ");
$db->where("is_win","Y");
$winCnt = $db->getCountAll();
$db->close();
if ($winCnt >= 9990){
    $response['result']       = false;
    //$response['code']       = $winCnt;
    $response['message'] = '선착순 이벤트가 마감되었습니다. ';
    echo json_encode($response);
    exit();
}else{
    $response['result']       = true;
    //$response['code']       = $winCnt;
    $response['message'] = 'ok';
    echo json_encode($response);
    exit();
}
