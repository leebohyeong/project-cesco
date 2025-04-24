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
    exit();
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

// 결과값 리턴
$response = array();
$response['result'] = false;
$response['message'] = '이벤트가 정상적으로 참여되지 않았습니다.';

$requestInfo = array(
    'gubun'     => $_REQUEST['gubun'] ?? '',
    'device'        => $DEVICE_TYPE_,
    'brower'        => $_SERVER["HTTP_USER_AGENT"],
    'user_ip'       => $USER_IP_
);

$validator = new Validator($requestInfo);
$validator->rule('required', 'gubun');
$validator->rule('in', 'gubun', array('quiz','ssul'));

if ($validator->validate()) {
    $requestInfo = $validator->data();
} else {
    foreach ($validator->errors() as $key => $message) {
        $response['message'] = $message[0];
        $response['result']  = false;
        break;
    }
    //echo json_encode($response);
    exit();
}

$db = new ModelBase();

$db->init();
$db->beginTransaction();
$db->from('BUTTON_CLICK');
if ($db->insert($requestInfo)){
    //$lastSeq = $db->lastInsertId();
    $db->executeTransaction();
    $db->close();
}else{
    $db->rollBack();
    $db->close();
}
exit();