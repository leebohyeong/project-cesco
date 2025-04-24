<?php
/** ==============================================================================
 * File: 이벤트 응모 처리
 * Date: 2023-12-06 12:00
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
    'ssul_title'        => $_POST['ssul_title'] ?? '',
    'ssul_content'        => $_POST['ssul_content'] ?? '',
    'ssul_url'        => $_POST['ssul_url'] ?? '',
    'ssul_image'        => $_POST['ssul_image'] ?? '',
    'is_agree1'     => $_POST['is_agree1'] ?? '',
    'is_agree2'     => $_POST['is_agree2'] ?? '',
    'is_agree3'     => $_POST['is_agree3'] ?? '',
    '14older'       => $_POST['14older'] ?? '',
    'zipcode'       => $_POST['zipcode'] ?? '',
    'address1'       => $_POST['addr1'] ?? '',
    'address2'       => $_POST['addr2'] ?? '',
    'device'        => $DEVICE_TYPE_,
    'brower'        => $_SERVER["HTTP_USER_AGENT"],
    'user_ip'       => $USER_IP_
);

$validator = new Validator($requestInfo);
$validator->rule('required', 'ssul_title')->message('썰 제목을 입력해주시기 바랍니다.');
$validator->rule('required', 'ssul_content')->message('썰을 풀어주세요.');
$validator->rule('required', 'user_name')->message('이름을 입력해주시기 바랍니다.');
$validator->rule('required', 'user_phone')->message('연락처를 입력해주시기 바랍니다.');
$validator->rule('required', 'user_gender')->message('성별을 선택해주시기 바랍니다.');
//$validator->rule('required', 'user_age')->message('연령대를 선택해주시기 바랍니다.');
//$validator->rule('required', 'residence')->message('거주지역을 선택해주시기 바랍니다.');
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

// 파일 처리
if(isset($_FILES['ssul_image']) && $_FILES['ssul_image']['name'] != "") {
    $file = $_FILES['ssul_image'];
    $ext = substr($file['name'], strrpos($file['name'], '.') + 1);
    $max_file_size = 10485760;
    if($file['size'] >= $max_file_size) {
        $response['result'] = false;
        $response['code'] = "501";
        $response['message'] = "10MB 까지만 업로드 가능합니다.";
        echo json_encode($response);
        exit();
    }
    $ext_str = "jpg,jpeg,png,gif";
    $allowed_extensions = explode(',', $ext_str);

    if(!in_array($ext, $allowed_extensions)) {
        $response['result'] = false;
        $response['code'] = "502";
        $response['message'] = "업로드할 수 없는 확장자 입니다.";
        echo json_encode($response);
        exit();
    }

    $uploadFilePath = "/upload/";
    $fileId = 'ssul_image';
    $image_url = isset($_FILES[$fileId]['name']) ? CommonFunc::uploadFile($ROOT_PATH_, $fileId, $uploadFilePath, "", "all", false) : '';

    $requestInfo['ssul_image'] = $uploadFilePath . $image_url;
}else{
    $requestInfo['ssul_image'] = "/assets/images/img_default.jpg";
}

//db저장
$db = new ModelBase();
$db->init();
$db->beginTransaction();
$db->from('EVENT2_SSUL');
if ($db->insert($requestInfo)){
    $lastSeq = $db->lastInsertId();
    $db->executeTransaction();
    $db->close();

    $response['result']       = true;
    $response['code']       = "200";
    $response['message'] = '참여가 완료 되었습니다.';
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