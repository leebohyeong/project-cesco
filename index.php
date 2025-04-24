<?php require_once $_SERVER['DOCUMENT_ROOT'] . "/vendor/autoload.php"; ?>
<!doctype html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>세스코 | SAY스코 이벤트</title>
    <meta property="og:url" content="<?=$OG_URL_?>">
    <meta property="og:site_name" content="<?=$OG_TITLE_?>">
    <meta property="og:title" content="<?=$OG_TITLE_?>">
    <meta property="og:description" content="<?=$OG_DESCRIPTION_?>">
    <meta property="og:image" content="<?=$OG_IMAGE_?>">
    <meta property="og:image:width" content="800">
    <meta property="og:image:height" content="450">

    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-QVC374QVR3"></script>
    <script>
        window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date()); gtag('config', 'G-QVC374QVR3');
    </script>

    <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon-16x16.png">
    <link rel="stylesheet" href="assets/css/app.css">
    <script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
    <script src="assets/js/app.js"></script>
</head>
<body>
<div class="container">
    <main class="main">
        <section class="main-intro">
            <div>
                <header class="visually-hidden">
                    <h2>SAY~스코</h2>
                    <p>
                        아는 형님의 아는 누님의 아는 동생의 아는 벌레o...
                        76대장 세스코가 들어주는 해충 벌레 썰!.
                        <strong>영상을 확인하고 이벤트를 참여해 보세요!</strong>
                    </p>
                </header>
                <div id="main-intro__iframe" class="main-intro__iframe">유튜브영상</div>
            </div>
        </section>
        <section class="main-event">
            <nav class="main-event__nav">
                <ul>
                    <li>
                        <a href="#main-event-01" class="active">
                            <span class="visually-hidden">EVENT 01 <br> [파인다이잉] 영상 퀴즈 이벤트</span>
                        </a>
                    </li>
                    <li>
                        <a href="#main-event-02">
                            <span class="visually-hidden">EVENT 02 <br> 세스코에게 탈탈 풀어썰(ssul)</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <div id="main-event-01" class="main-event-01">
                <div>
                    <header class="visually-hidden">
                        <h2>EVENT 01</h2>
                        <p>
                            빼이이이 나선욱이 함께한
                            <strong>파인다이잉 영상퀴즈이벤트</strong>
                        </p>
                    </header>
                    <div class="visually-hidden">
                        <p>
                            영상을 확인한 후 퀴즈의 정답을 맞추시면
                            선착순 5,000분께 비타500 기프티콘을
                            증정합니다.
                        </p>
                        <p>이벤트 기간 : 2/18(월)-12/31(일)</p>
                        <p>당첨자 발표 : 1월 10일(수) 세스코 홈페이지</p>
                        <p>참여방법</p>
                        <ol>
                            <li>
                                <span> step 01</span>
                                나선욱과 함께한 <br>
                                [파인다이잉] 영상 확인
                            </li>
                            <li>
                                <span> step 02</span>
                                하단에 [이벤트 참여] <br>
                                누르고 퀴즈 풀기
                            </li>
                            <li>
                                <span> step 03</span>
                                경품 발송을 위한 <br>
                                개인정보 입력
                            </li>
                        </ol>
                    </div>
                    <button class="main-event-01__button" type="button" onclick="
                    gtag('event','event1',{
                        '이벤트참여' : '퀴즈 팝업창'
                    });">
                        <span class="visually-hidden">이벤트 참여</span>
                    </button>
                </div>
            </div>
            <div id="main-event-02" class="main-event-02">
                <div>
                    <header class="visually-hidden">
                        <h2>EVENT 02</h2>
                        <p>
                            세스코에게 <br>
                            탈탈풀어썰(ssul)
                        </p>
                    </header>
                    <div class="visually-hidden">
                        <p>세상 오만가지 벌레 탓에 세스코가 생각난 적이 있으시죠?</p>
                        <p>
                            그 이야기(썰)를 허심탄회하게 탈탈 풀어 주세요. <br>
                            추첨을 통해 다양한 경품을 증정합니다.
                        </p>
                        <p>이벤트 기간 : 12/18(월)-12/31(일)</p>
                        <p>당첨자 발표 : 1월 10일(수) 세스코 홈페이지</p>
                        <p>이벤트 경품</p>
                        <ul>
                            <li>
                                <span>1명</span>
                                1등 <br>
                                <strong>에어팟 맥스</strong>
                            </li>
                            <li>
                                <span>2명</span>
                                2등
                                <strong>
                                    세스코 Air loT
                                    룸케어 공기청정기
                                    3UP (화이트)
                                </strong>
                            </li>
                            <li>
                                <span>30명</span>
                                3등
                                <strong>
                                    세스코 마이랩
                                    베이직 2종
                                    선물세트
                                </strong>
                            </li>
                            <li>
                                <span>50명</span>
                                4등
                                <strong>
                                    세스코 마이랩
                                    배수구클리너
                                </strong>
                            </li>
                        </ul>
                    </div>
                    <button class="main-event-02__button" type="button" onclick="
                    gtag('event','event2',{
                        '썰(SSUL)풀기' : '썰 풀기 팝업'
                    });">
                        <span class="visually-hidden">썰(ssul) 풀기 ></span>
                    </button>
                </div>
            </div>
            <div class="main-event-notice">
                <div>
                    <header>
                        <h2 class="visually-hidden">흥미로운 남의 ‘썰‘ 확인하기</h2>
                        <p class="visually-hidden">
                            경쟁심 불끈! 다른 분들은 이런 에피소드를 남겨 주셨어요. <br>
                            *해당 썰(ssul) 을 클릭하시면 상세한 내용 확인이 가능합니다.
                        </p>
                    </header>
                    <div class="main-event-notice__contents">
                        <table>
                            <tbody></tbody>
                        </table>
                    </div>
                    <nav class="main-notice-paging"></nav>
                </div>
            </div>
        </section>
        <div class="main-payment">
            <div>
                <div class="visually-hidden">
                    <h2>경품 지급</h2>
                    <p>
                        ●  비타 500 기프티콘 경품은 작성하신 휴대폰 번호로 발송 되며, <br>
                        지급 일정은 다음과 같습니다. <br>
                        1) 12월 18일 ~ 24일 참여자:12월 26일 발송 (18:00 이전) <br>
                        2) 12월 25일 ~ 31일 참여자:2024년 1월 2일 발송 (18:00 이전) <br>
                        ●  기프티콘 발송은 별도 사전 안내 없이 기입하신 연락처로 문자 발송 됩니다. <br>
                        ●  SSUL 이벤트 경품은 1월 10일(수)에 세스코 공식 홈페이지 공지사항을 통해
                        발표됩니다. <br>
                        ●  경품은 당첨자 발표 이후 1개월 이내로 기입하신 주소로 배송 될 예정입니다. <br>
                        ●  경품 색상 지정은 불가하며, 랜덤으로 발송됩니다. <br>
                        ●  공기청정기의 경우 세스코 전문 설치 기사님이 직접 방문하여 설치 드립니다. <br>
                        (설치 전 사전 연락하여 일정 협의) <br>
                        ●  관련 문의는 sns@cesco.co.kr로 남겨주시기 바랍니다.
                    </p>
                </div>
            </div>
        </div>
        <section class="main-note">
            <div>
                <div class="visually-hidden">
                    <h2>유의사항</h2>
                    <p>
                        ●  개인정보 수집·이용 동의 및 마케팅 활용 동의한 고객만 참여 가능합니다. <br>
                        ●  이벤트 중복 참여는 가능하나 당첨은 1인당 1회로 제한됩니다. <br>
                        ●  당첨자에게는 개별 전화 혹은 문자를 통해 안내드립니다. <br>
                        ●  썰 이벤트의 경품 선정 기준은 당사 내부 기준에 따라 진행합니다. <br>
                        ●  당첨자, 증정 제품 등은 제3자에게 양도할 수 없습니다. <br>
                        ●  경품은 예시 이미지이며 추후 전달되는 경품과 다를 수 있습니다. <br>
                        ●  모바일 이용권은 유효기간 내 이용 가능하며 자세한 사항은 <br>
                        모바일 이용권 유의사항 확인바랍니다. <br>
                        ●  잘못된 개인 정보 입력으로 인해 당첨자에게 연락이 불가능하거나 경품이 <br>
                        오발송 및 반송/분실될 경우 재발송하지 않으며 당사에서 책임지지 않습니다. <br>
                        ●  해당 이벤트는 내부 사정에 따라 내용이 변경될 수 있으며, 사전 고지 없이 <br>
                        조기 종료될 수 있습니다. <br>
                        ●  제세공과금은 세스코에서 대납 처리하며 이벤트 대행업체 <br>
                        ㈜애드쿠아인터랙티브에서 제세공과금 처리를 위해 당첨자의 개인정보를 <br>
                        활용할 수 있습니다. <br>
                        ●  개인정보 수집·이용 동의로 수집된 개인정보는 개인정보 보호법 제15조에 <br>
                        의거하여 처리되며, 이벤트 종료 후 3개월간 보유 후 일괄 폐기됩니다. <br>
                        단, 관계 법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 관계 법령에서 <br>
                        정한 일정한 기간 동안 개인정보를 보관합니다.
                    </p>
                </div>
            </div>
        </section>
        <footer class="main-footer">
            <div>
                <div class="visually-hidden">
                    <p>(주)세스코 (대표이사 회장: 전찬혁)</p>
                    <p>
                        서울시 강동구 상일로 10길 46 세스코 터치센터 (우 : 05288) <br>
                        FAX : 02-488-1720ㆍ TEL : 02-1588-1119 <br>
                        사업자등록번호 : 212-81-05946 <br>
                        통신판매업신고번호 : 제 2008-서울강동-0240호 <br>
                        Copyright © CESCO All Rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    </main>

    <!--      event01 modal   -->
    <div class="event01-modal-wrap">
        <form action="/api/quiz-proc.php" method="post">
            <div id="event01-modal-quiz" class="event01-modal-quiz modal">
                <div class="modal__backdrop"></div>
                <div class="modal__dialog">
                    <div class="modal__container">
                        <div class="event01-modal-quiz__header">
                            <h2 class="visually-hidden">
                                <span>QUIZ</span>
                                영상 속 문돼커플은 바퀴 벌레입니다. <br>
                                한 국가의 이름이기도 한 <br>
                                은 무엇일까요?
                            </h2>
                            <div class="modal__close">
                                <button class="modal__close-button" type="button">
                                    <span class="visually-hidden">닫기</span>
                                </button>
                            </div>
                        </div>
                        <div class="event01-modal-quiz__content">
                            <div id="event01-modal-quiz__iframe" class="event01-modal-quiz__iframe"></div>
                            <fieldset class="event01-modal-quiz__list">
                                <label>
                                    <input type="radio" name="quiz" value="china">
                                    <span>중국</span>
                                </label>
                                <label>
                                    <input type="radio" name="quiz" value="korea">
                                    <span>한국</span>
                                </label>
                                <label>
                                    <input type="radio" name="quiz" value="japan">
                                    <span>일본</span>
                                </label>
                                <label>
                                    <input type="radio" name="quiz" value="usa">
                                    <span>미국</span>
                                </label>
                            </fieldset>
                            <p class="event01-modal-quiz__button modal-button">
                                <button type="button">정답 확인</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="event01-modal-result" class="event01-modal-result modal">
                <div class="modal__backdrop"></div>
                <div class="modal__dialog">
                    <div class="modal__container">
                        <div class="modal__content">
                            <div class="event01-modal-result__content event01-modal-result__content--answer">
                                <p class="visually-hidden">정답입니다!</p>
                                <p class="visually-hidden">GOOD~미국바퀴지이~!</p>
                                <p class="visually-hidden">
                                    경품 발송을 위해 <br>
                                    개인정보를 입력해 주세요!
                                </p>
                                <p class="event01-modal-result__button">
                                    <button type="button">
                                        <span class="visually-hidden">개인정보 입력</span>
                                    </button>
                                </p>
                            </div>
                            <div class="event01-modal-result__content event01-modal-result__content--fail">
                                <p class="visually-hidden">딩동땡!</p>
                                <p class="visually-hidden">아쉬워요, 재도전 하실래요?</p>
                                <p class="visually-hidden">hint. 영상 속에 정답이 숨어있어요!</p>
                                <p class="event01-modal-result__button">
                                    <button type="button">
                                        <span class="visually-hidden">재도전</span>
                                    </button>
                                </p>
                            </div>
                        </div>
                        <div class="modal__close">
                            <button class="modal__close-button" type="button">
                                <span class="visually-hidden">닫기</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div id="event01-modal-information" class="event-modal-information event01-modal-information modal">
                <div class="modal__backdrop"></div>
                <div class="modal__dialog">
                    <div class="modal__container">
                        <div class="event01-modal-information__header">
                            <h2 class="visually-hidden">이벤트 당첨 시 경품 수령을 위한 정보를 입력해주세요!</h2>
                        </div>
                        <div class="event-modal-information__content">
                            <div class="event-modal-information__content-box">
                                <h3>참여자 정보</h3>
                                <div class="event-modal-information__content-list">
                                    <div class="event-modal-information__content-list-item">
                                        <div class="event-modal-information__name">
                                            <p><span>*</span>이름</p>
                                            <input type="text" name="user_name">
                                        </div>
                                        <div class="event-modal-information__phone">
                                            <p><span>*</span>연락처</p>
                                            <input type="text" name="user_phone" maxlength="11">
                                        </div>
                                    </div>
                                    <div class="event-modal-information__content-list-item">
                                        <div class="event-modal-information__gender">
                                            <p>&nbsp;&nbsp;&nbsp;성별</p>
                                            <select name="user_gender">
                                                <option value="남성">남성</option>
                                                <option value="여성">여성</option>
                                            </select>
                                        </div>
                                        <div class="event-modal-information__age">
                                            <p>&nbsp;&nbsp;&nbsp;연령대</p>
                                            <select name="user_age">
                                                <option value="10대">10대</option>
                                                <option value="20대">20대</option>
                                                <option value="30대">30대</option>
                                                <option value="40대">40대</option>
                                                <option value="50대 이상">50대 이상</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="event-modal-information__content-list-item">
                                        <div class="event-modal-information__residence">
                                            <p>&nbsp;&nbsp;&nbsp;거주 <br>&nbsp;&nbsp;&nbsp;지역</p>
                                            <select name="residence">
                                                <option value="서울">서울</option>
                                                <option value="부산">부산</option>
                                                <option value="대구">대구</option>
                                                <option value="인천">인천</option>
                                                <option value="광주">광주</option>
                                                <option value="대전">대전</option>
                                                <option value="울산">울산</option>
                                                <option value="세종">세종</option>
                                                <option value="경기">경기</option>
                                                <option value="강원">강원</option>
                                                <option value="충북">충북</option>
                                                <option value="충남">충남</option>
                                                <option value="전북">전북</option>
                                                <option value="전남">전남</option>
                                                <option value="경북">경북</option>
                                                <option value="경남">경남</option>
                                                <option value="제주">제주</option>
                                            </select>
                                        </div>
                                        <div class="event-modal-information__residence-type">
                                            <p>&nbsp;&nbsp;&nbsp;거주 <br>&nbsp;&nbsp;&nbsp;유형</p>
                                            <select name="residence_type">
                                                <option value="원룸">원룸</option>
                                                <option value="단독 주택">단독 주택</option>
                                                <option value="빌라">빌라</option>
                                                <option value="아파트">아파트</option>
                                                <option value="주상복합">주상복합</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="event-modal-information__content-box">
                                <h3>개인정보 수집·이용 동의(필수)</h3>
                                <div class="event-modal-information__privacy">
                                    <div class="event-modal-information__privacy-box">
                                        <p>파인다이잉 이벤트 참여 (영상 퀴즈 이벤트)</p>
                                        <p>수집 항목: 이름, 연락처, 성별, 연령대, 거주 지역, 거주 유형</p>
                                        <p>보유 기간: 목적 달성 후 즉시 파기</p>
                                        <p>단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우, ㈜세스코는 관계법령에서 정한 일정한 기간 동안 개인정보를 보관합니다.</p>
                                        <p>
                                            <br>
                                        </p>
                                        <p>* 개인정보 수집·이용 동의 및 마케팅 활용 동의한 고객만 참여 가능합니다.</p>
                                        <p>* 귀하는 동의를 거부할 수 있으나, 동의 거부 시 이벤트 참여가 불가할 수 있습니다.</p>
                                        <p>* 본인은 귀사가 본 이벤트 신청 및 확인 목적으로 상기한 개인정보를 수집·이용하는 것에 동의합니다.</p>
                                    </div>
                                    <div class="event-modal-information__privacy-radio">
                                        <label>
                                            <input type="radio" name="is_agree1" value="Y">
                                            <span>동의합니다</span>
                                        </label>
                                        <label>
                                            <input type="radio" name="is_agree1" value="N">
                                            <span>동의하지 않습니다</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="event-modal-information__content-box">
                                <h3>마케팅 활용 동의(선택)</h3>
                                <div class="event-modal-information__privacy">
                                    <div class="event-modal-information__privacy-box">
                                        <p>세스코와 관련된 신제품 소식, 이벤트 안내, 고객 혜택 등 다양한 정보를 제공합니다.</p>
                                        <p>
                                            <br>
                                        </p>
                                        <p>* 귀하는 동의를 거부할 수 있으나, 동의 거부 시 이벤트 참여가 불가할 수 있습니다.</p>
                                    </div>
                                    <div class="event-modal-information__privacy-radio">
                                        <label>
                                            <input type="radio" name="is_agree3" value="Y">
                                            <span>동의합니다</span>
                                        </label>
                                        <label>
                                            <input type="radio" name="is_agree3" value="N">
                                            <span>동의하지 않습니다</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="event-modal-information__checkbox">
                                <label for="check14older">
                                    <input type="checkbox" id="check14older" name="14older" value="Y">
                                    <div></div>
                                    <span>만 14세 이상입니다.</span>
                                </label>
                            </div>
                            <p class="event01-modal-information__button modal-button">
                                <button type="submit">응모 완료</button>
                            </p>
                        </div>
                        <div class="modal__close">
                            <button class="modal__close-button" type="button">
                                <span class="visually-hidden">닫기</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>

    <!--      event02 modal   -->
    <div class="event02-modal-wrap">
        <form action="/api/ssul-proc.php" method="post" enctype="multipart/form-data">
            <div id="event02-modal-ssul" class="event02-modal-ssul modal">
                <div class="modal__backdrop"></div>
                <div class="modal__dialog">
                    <div class="modal__container">
                        <header class="event02-modal-ssul__header">
                            <h2 class="visually-hidden">세스코가 생각났던 SSUL 작성하기</h2>
                        </header>
                        <div class="modal__content event02-modal-ssul__content">
                            <div class="event02-modal-ssul__title">
                                <p><span>*</span>썰 제목을 입력하세요. [20자 이내]</p>
                                <input type="text" maxlength="20" name="ssul_title">
                            </div>
                            <div class="event02-modal-ssul__contents">
                                <p><span>*</span>썰을 풀어주세요. [500자 이내]</p>
                                <textarea name="ssul_content" id="" maxlength="500"></textarea>
                            </div>
                            <div class="event02-modal-ssul__url">
                                <p>썰 영상 URL을 입력하세요. [선택사항]</p>
                                <input type="text" name="ssul_url">
                            </div>
                            <div class="event02-modal-ssul__image">
                                <p>썰 이미지를 첨부하세요. [선택사항]</p>
                                <div>
                                    <label for="file">
                                        <input type="file" id="file" class="ssul_image" name="ssul_image" accept=".gif, .png, .jpg, .jpeg">
                                        <span class="event02-modal-ssul__image-file">
                                            <span class="file-name-box"></span>
                                            <span>파일 첨부하기</span>
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <p class="event02-modal-ssul__button modal-button">
                                <button type="button">개인정보 입력</button>
                            </p>
                        </div>
                        <div class="modal__close">
                            <button class="modal__close-button" type="button">
                                <span class="visually-hidden">닫기</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div id="event02-modal-information" class="event-modal-information event02-modal-information modal">
                <div class="modal__backdrop"></div>
                <div class="modal__dialog">
                    <div class="modal__container">
                        <div class="event02-modal-information__header">
                            <h2 class="visually-hidden">
                                이벤트 당첨 시 <br>
                                경품 수령을 위한 정보를 입력해주세요!
                            </h2>
                        </div>
                        <div class="event-modal-information__content">
                            <div class="event-modal-information__content-box">
                                <h3>참여자 정보</h3>
                                <div class="event-modal-information__content-list">
                                    <div class="event-modal-information__content-list-item">
                                        <div class="event-modal-information__name">
                                            <p><span>*</span>이름</p>
                                            <input type="text" name="user_name">
                                        </div>
                                        <div class="event-modal-information__phone">
                                            <p><span>*</span>연락처</p>
                                            <input type="text" name="user_phone" maxlength="11">
                                        </div>
                                    </div>
                                    <div class="event-modal-information__content-list-item">
                                        <div class="event-modal-information__address event02-modal-information__address">
                                            <p><span>*</span>주소</p>
                                            <label>
                                                <span>
                                                    <input type="text" id="postal-code" placeholder="우편번호"
                                                           name="zipcode" readonly>
                                                    <input type="button" class="address-search" value="주소검색">
                                                </span>
                                                <span>
                                                    <input type="text" id="address" placeholder="주소" name="addr1"
                                                       readonly>
                                              <input type="text" id="detail-address" placeholder="상세주소"
                                                         name="addr2" maxlength="190">
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="event-modal-information__content-list-item">
                                        <div class="event-modal-information__gender">
                                            <p>&nbsp;&nbsp;&nbsp;성별</p>
                                            <select name="user_gender">
                                                <option value="남성">남성</option>
                                                <option value="여성">여성</option>
                                            </select>
                                        </div>
                                        <div class="event-modal-information__age">
                                            <p>&nbsp;&nbsp;&nbsp;연령대</p>
                                            <select name="user_age">
                                                <option value="10대">10대</option>
                                                <option value="20대">20대</option>
                                                <option value="30대">30대</option>
                                                <option value="40대">40대</option>
                                                <option value="50대 이상">50대 이상</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="event-modal-information__content-list-item">
                                        <div class="event-modal-information__residence">
                                            <p>&nbsp;&nbsp;&nbsp;거주 <br>&nbsp;&nbsp;&nbsp;지역</p>
                                            <select name="residence">
                                                <option value="서울">서울</option>
                                                <option value="부산">부산</option>
                                                <option value="대구">대구</option>
                                                <option value="인천">인천</option>
                                                <option value="광주">광주</option>
                                                <option value="대전">대전</option>
                                                <option value="울산">울산</option>
                                                <option value="세종">세종</option>
                                                <option value="경기">경기</option>
                                                <option value="강원">강원</option>
                                                <option value="충북">충북</option>
                                                <option value="충남">충남</option>
                                                <option value="전북">전북</option>
                                                <option value="전남">전남</option>
                                                <option value="경북">경북</option>
                                                <option value="경남">경남</option>
                                                <option value="제주">제주</option>
                                            </select>
                                        </div>
                                        <div class="event-modal-information__residence-type">
                                            <p>&nbsp;&nbsp;&nbsp;거주 <br>&nbsp;&nbsp;&nbsp;유형</p>
                                            <select name="residence_type">
                                                <option value="원룸">원룸</option>
                                                <option value="단독 주택">단독 주택</option>
                                                <option value="빌라">빌라</option>
                                                <option value="아파트">아파트</option>
                                                <option value="주상복합">주상복합</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="event-modal-information__content-box">
                                <h3>개인정보 수집·이용 동의(필수)</h3>
                                <div class="event-modal-information__privacy">
                                    <div class="event-modal-information__privacy-box">
                                        <p>파인다이잉 이벤트 참여 (영상 퀴즈 이벤트)</p>
                                        <p>수집 항목: 이름, 연락처, 주소, 성별, 연령대, 거주 지역, 거주 유형</p>
                                        <p>보유 기간: 목적 달성 후 즉시 파기</p>
                                        <p>단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우, ㈜세스코는 관계법령에서 정한 일정한 기간 동안 개인정보를 보관합니다.</p>
                                        <p>
                                            <br>
                                        </p>
                                        <p>* 개인정보 수집·이용 동의 및 마케팅 활용 동의한 고객만 참여 가능합니다.</p>
                                        <p>* 귀하는 동의를 거부할 수 있으나, 동의 거부 시 이벤트 참여가 불가할 수 있습니다.</p>
                                        <p>* 본인은 귀사가 본 이벤트 신청 및 확인 목적으로 상기한 개인정보를 수집·이용하는 것에 동의합니다.</p>
                                    </div>
                                    <div class="event-modal-information__privacy-radio">
                                        <label>
                                            <input type="radio" name="is_agree1" value="Y">
                                            <span>동의합니다</span>
                                        </label>
                                        <label>
                                            <input type="radio" name="is_agree1" value="N">
                                            <span>동의하지 않습니다</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="event-modal-information__content-box">
                                <h3>마케팅 활용 동의(선택)</h3>
                                <div class="event-modal-information__privacy">
                                    <div class="event-modal-information__privacy-box">
                                        <p>세스코와 관련된 신제품 소식, 이벤트 안내, 고객 혜택 등 다양한 정보를 제공합니다.</p>
                                        <p>
                                            <br>
                                        </p>
                                        <p>* 귀하는 동의를 거부할 수 있으나, 동의 거부 시 이벤트 참여가 불가할 수 있습니다.</p>
                                    </div>
                                    <div class="event-modal-information__privacy-radio">
                                        <label>
                                            <input type="radio" name="is_agree3" value="Y">
                                            <span>동의합니다</span>
                                        </label>
                                        <label>
                                            <input type="radio" name="is_agree3" value="N">
                                            <span>동의하지 않습니다</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="event-modal-information__checkbox">
                                <label for="check14older2">
                                    <input type="checkbox" id="check14older2" name="14older" value="Y">
                                    <div></div>
                                    <span>만 14세 이상입니다.</span>
                                </label>
                            </div>
                            <p class="event02-modal-information__button modal-button">
                                <button type="submit">응모 완료</button>
                            </p>
                        </div>
                        <div class="modal__close">
                            <button type="button" class="modal__close-button">
                                <span class="visually-hidden">닫기</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>

    <!--      notice modal   -->
    <div id="event02-modal-notice" class="event02-modal-notice modal">
        <div class="modal__backdrop"></div>
        <div class="modal__dialog">
            <div class="modal__container">
                <div class="event02-modal-notice__contents"></div>
                <div class="modal__close">
                    <button type="button" class="modal__close-button">
                        <span class="visually-hidden">닫기</span>
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div class="dim"></div>
    <div class="address-layer-wrap">
        <div id="address-layer" class="address-layer">
            <div id="btnCloseLayer"></div>
            <h2>우편번호 찾기</h2>
        </div>
    </div>
</div>
</body>
</html>