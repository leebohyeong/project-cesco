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

// 결과값 리턴
$response = array();
$response['result'] = false;
$response['message'] = '이벤트가 정상적으로 참여되지 않았습니다.';

$requestInfo = array(
    'user_name'     => $_POST['user_name'] ?? '',
    'user_phone'    => $_POST['user_phone'] ?? '',
    'user_gender'     => $_POST['user_gender'] ?? '',
    'user_age'      => $_POST['user_age'] ?? '',
    'residence'    => $_POST['residence'] ?? '',
    'residence_type'    => $_POST['residence_type'] ?? '',
    'is_agree1'     => $_POST['is_agree1'] ?? '',
    'is_agree2'     => $_POST['is_agree2'] ?? '',
    'is_agree3'     => $_POST['is_agree3'] ?? '',
    '14older'       => $_POST['14older'] ?? '',
    'device'        => $DEVICE_TYPE_,
    'brower'        => $_SERVER["HTTP_USER_AGENT"],
    'user_ip'       => $USER_IP_
);

$validator = new Validator($requestInfo);
$validator->rule('required', 'user_name')->message('이름을 입력해주시기 바랍니다.');
$validator->rule('required', 'user_phone')->message('연락처를 입력해주시기 바랍니다.');
$validator->rule('required', 'user_gender')->message('성별을 선택해주시기 바랍니다.');
$validator->rule('required', 'user_age')->message('연령대를 선택해주시기 바랍니다.');
$validator->rule('required', 'residence')->message('거주지역을 선택해주시기 바랍니다.');
$validator->rule('required', 'residence_type')->message('거주유형을 선택해주시기 바랍니다.');
$validator->rule('required', 'is_agree1')->message('동의해주시기 바랍니다.');
$validator->rule('required', '14older')->message('만 14세 이상만 참여 가능합니다.');
$validator->rule('in', 'is_agree1', array('Y'))->message('동의 여부를 확인해 주세요.');
$validator->rule('in', 'is_agree3', array('Y','N'))->message('동의 여부를 확인해 주세요.');

if ($validator->validate()) {
    $requestInfo = $validator->data();

    // 암호화 처리
    $requestInfo['user_name']   = CommonFunc::stringEncrypt($requestInfo['user_name'], $ENCRYPT_KEY_);
    $requestInfo['user_phone']  = CommonFunc::stringEncrypt($requestInfo['user_phone'], $ENCRYPT_KEY_);

} else {
    foreach ($validator->errors() as $key => $message) {
        $response['message'] = $message[0];
        $response['result']  = false;
        break;
    }
    echo json_encode($response);
    exit();
}

$db = new ModelBase();

// 전체 당첨자 수 체크
$db->from("EVENT1_QUIZ");
$db->where("is_win","Y");
$winCnt = $db->getCountAll();
if ($winCnt >= 9990){
    $response['result'] = true;
    $response['code'] = "999";
    $response['message'] = "선착순 이벤트가 마감되었습니다";
    echo json_encode($response);
    exit();
}

// 당첨된 번호인지 체크
$db->init();
$db->from("EVENT1_QUIZ");
$db->where("user_phone",$requestInfo['user_phone']);
$db->where("is_win","Y");
$applyCnt = $db->getCountAll();
if ($applyCnt >= 1){
    $requestInfo['is_win']   = "N";
}else{
    $requestInfo['is_win']   = "Y";
}

$db->init();
$db->beginTransaction();
$db->from('EVENT1_QUIZ');
if ($db->insert($requestInfo)){
    $lastSeq = $db->lastInsertId();
    $db->executeTransaction();
    $db->close();

    $response['result']       = true;
    if ($applyCnt >= 1){
        $response['code']       = "100";
        $response['message'] = '기존에 당첨된 이력이 있습니다. 이벤트 2에 참여해 주세요';
    }else{
        $response['code']       = "200";
        $response['message'] = '참여가 완료 되었습니다.';
    }
    echo json_encode($response);
    exit();

}else{
    $db->rollBack();
    $db->close();
    $response['result'] = false;
    $response['code'] = "500";
    $response['message'] = "Participation failed.\\n Please check and try again.";
    echo json_encode($response);
    exit();
}