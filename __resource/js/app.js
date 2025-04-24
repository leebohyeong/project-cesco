import {findOne, find, on} from "./helper";
import Modal from "./Modal";

const app = () => {

    //youtube api
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    let player;
    let player2;

    window.onYouTubeIframeAPIReady = () => {
        player = new YT.Player('main-intro__iframe', {
            playerVars: {
                'modestbranding': 1,
                'autoplay': 0, // 자동재생
                'controls': 1, // 컨트롤러의 유무
                'showinfo': 0, // 재생영상에 대한 정보 유무
                'rel': 0, // 해당 영상이 종류 된 후, 관련 동영상을 표시할지의 여부
                'loop': 0, // 반복 재생의 여부
                'playlist': '5V3I5dRC0UA',
            },
        });

        player2 = new YT.Player('event01-modal-quiz__iframe', {
            playerVars: {
                'modestbranding': 1,
                'autoplay': 0, // 자동재생
                'controls': 1, // 컨트롤러의 유무
                'showinfo': 0, // 재생영상에 대한 정보 유무
                'rel': 0, // 해당 영상이 종류 된 후, 관련 동영상을 표시할지의 여부
                'loop': 0, // 반복 재생의 여부
                'playlist': '5V3I5dRC0UA',
            },
            events: {
                onReady(event) {
                    // event.target.playVideo();
                },
                onStateChange(event) {
                    // console.log(event.data);
                }
            }
        });
    }

    const stopVideo = () => {
        player?.stopVideo?.();
    }

    const stopVideo2 = () => {
        player2?.stopVideo?.();
    }

    //modal close(x)버튼 클릭시
    // const modalCloseButtons = find('.modal__close-button');
    // modalCloseButtons.forEach(button => {
    //     button.addEventListener('click', (event) => {
    //         event.preventDefault();
    //         location.reload();
    //     });
    // });

    //nav event
    (() => {
        const nav = findOne('.main-event__nav');
        const navMenus = [...nav.querySelectorAll('a')];
        const sections = navMenus.reduce((sections, menu) => {
            const id = menu.hash;
            const section = document.getElementById(id.substring(1));

            sections[id] = section;

            return sections;
        }, {});
        const reverseSections = Object.keys(sections).reverse().map(id => sections[id]);
        const getOffsetTop = (target) => Math.ceil(target.getBoundingClientRect().top + window.scrollY - nav.clientHeight);
        const moveMenu = (event) => {
            event.preventDefault();

            const id = event.target.closest('a').hash;
            const section = sections[id];
            const top = getOffsetTop(section);

            window.scroll({
                top,
                behavior: 'smooth'
            });

        };
        const onScroll = () => {
            let sectionIndex = reverseSections.findIndex(section => ~~(window.scrollY) >= getOffsetTop(section));

            if (sectionIndex < 0) sectionIndex = navMenus.length - 1;

            const navIndex = navMenus.length - 1 - sectionIndex;

            navMenus.forEach((menu, index) => menu.classList[navIndex === index ? 'add' : 'remove']('active'));
        };

        navMenus.forEach(menu => menu.addEventListener('click', moveMenu));
        window.addEventListener('scroll', onScroll);
    })();

    //event01
    (() => {
        const event01 = findOne('#main-event-01');
        const event01Button = findOne('.main-event-01__button', event01);

        const modal = new Modal();
        const event01ModalWrap = findOne('.event01-modal-wrap');
        const form = findOne('form', event01ModalWrap);

        // 퀴즈 modal
        const quizModal = findOne('#event01-modal-quiz');
        const quizCheckLists = find('[name="quiz"]', quizModal);
        const quizUsa = findOne('[value="usa"]', quizModal);
        const quizModalButton = findOne('.event01-modal-quiz__button button', quizModal);

        // 퀴즈 결과 modal
        const resultModal = findOne('#event01-modal-result');
        const answer = findOne('.event01-modal-result__content--answer');
        const fail = findOne('.event01-modal-result__content--fail');

        // 개인정보 modal
        const informationModal = findOne('#event01-modal-information');
        const userName = findOne('[name="user_name"]', form);
        const userNameCheck = /^[가-힣a]+$/;
        const userPhone = findOne('[name="user_phone"]', form);
        const userPhoneCheck = /^[0-9]+$/;
        const userPhoneCheck2 = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
        const agree1 = findOne('[name="is_agree1"]', form);
        const agree3 = find('[name="is_agree3"]', form);
        const agreeOlder = findOne('[name="14older"]', form);
        const gender = findOne('[name="user_gender"]', form);
        const age = findOne('[name="user_age"]', form);
        const residence = findOne('[name="residence"]', form);
        const residenceType = findOne('[name="residence_type"]', form);
        let isQuiz = false;

        // 이벤트 참여버튼 클릭시
        event01Button.addEventListener('click', (event) => {
            event.preventDefault();

            fetch('/api/button-click.php?gubun=quiz', {
                method: 'post',
            })
                .then(response => response.json())
                .catch(error => {
                    // console.error(error);
                });

            // 선착순 마감일경우
            fetch('/api/quiz-count.php', {
                method: form.method,
            })
                .then(response => response.json())
                .then(data => {
                    if (data.result) {
                        modal.open(quizModal);
                        stopVideo();

                    } else {
                        alert(data.message);
                        location.reload();
                    }
                })
                .catch(error => {
                    console.error(error);
                });


            // modal.open(quizModal);
            // stopVideo();
        });

        // 정답 확인 버튼 클릭시
        quizModalButton.addEventListener('click', (event) => {
            event.preventDefault();

            if (quizCheckLists.every(input => !input.checked)) {
                alert('정답을 선택해주세요.');
                return false;
            } else {
                if (!quizUsa.checked) {
                    //오답
                    stopVideo2();
                    modal.close(quizModal);
                    modal.open(resultModal);
                    answer.style.display = 'none';
                    fail.style.display = 'block';
                    reChallenge();
                } else {
                    //정답
                    stopVideo2();
                    modal.close(quizModal);
                    modal.open(resultModal);
                    fail.style.display = 'none';
                    answer.style.display = 'block';
                    answerEvent();
                }
            }
        });

        // 오답일시 재참여 이벤트
        const reChallenge = () => {
            const button = findOne('[type=button]', fail);
            button.addEventListener('click', (event) => {
                event.preventDefault();
                form.reset();
                modal.close(resultModal);
                modal.open(quizModal);
            });
        };

        // 정답일시 개인정보입력창 띄우기
        const answerEvent = () => {
            const button = findOne('[type=button]', answer);
            button.addEventListener('click', (event) => {
                event.preventDefault();
                form.reset();
                modal.close(resultModal);
                modal.open(informationModal);
            });
        };

        const event01Valid = () => {
            if (!userName.value.trim()) {
                alert('이름을 입력해 주세요!');
                userName.focus();
                return false;
            }

            if (!userNameCheck.test(userName.value.trim())) {
                alert('한글로 입력해 주세요.');
                userName.focus();
                return false;
            }

            if (!userPhone.value.trim()) {
                alert('연락처를 입력해 주세요!');
                userPhone.focus();
                return false;
            }

            if (!userPhoneCheck.test(userPhone.value.trim())) {
                alert('숫자만 입력 가능합니다.');
                userPhone.focus();
                return false;
            }

            if (!userPhoneCheck2.test(userPhone.value.trim())) {
                alert('연락처를 확인해 주세요.');
                userPhone.focus();
                return false;
            }

            if(!gender.value.trim()) {
                alert('성별을 선택해 주세요.');
                gender.focus();
                return false;
            }

            if(!age.value.trim()) {
                alert('연령대를 선택해 주세요.');
                age.focus();
                return false;
            }

            if(!residence.value.trim()) {
                alert('거주지역을 선택해 주세요.');
                residence.focus();
                return false;
            }

            if(!residenceType.value.trim()) {
                alert('거주유형을 선택해 주세요.');
                residenceType.focus();
                return false;
            }

            if (!agree1.checked) {
                alert('개인정보 수집 이용에 동의해주세요.');
                agree1.focus();
                return false;
            }

            // if (!agree2.checked) {
            //     alert('개인정보 취급위탁에 동의해주세요.');
            //     agree2.focus();
            //     return false;
            // }

            // if (!agree3.checked) {
            //     alert('마케팅 활용에 동의해주세요.');
            //     agree3.focus();
            //     return false;
            // }

            if (!agree3.some(input => input.checked)) {
                alert('마케팅 동의여부를 확인해 주세요');
                agree3[0].focus();
                return false;
            }

            if (!agreeOlder.checked) {
                alert('만 14세 이상만 참여 가능합니다.');
                agreeOlder.focus();
                return false;
            }

            return true;
        };

        // 응모완료 버튼 클릭시
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            if (event01Valid()) {
                const formData = new FormData(form);

                fetch(form.action, {
                    method: form.method,
                    body: formData
                })
                    .then(response => response.json())
                    .then(data => {
                        alert(data.message);
                        location.reload();
                    })
                    .catch(error => {
                        console.error(error);
                    });
            }
        });

    })();

    //event02
    (() => {
        const modal = new Modal();
        const event02 = findOne('#main-event-02');
        const event02Button = findOne('.main-event-02__button', event02);
        const event02ModalWrap = findOne('.event02-modal-wrap');
        const form = findOne('form', event02ModalWrap);

        // SSUL 모달
        const ssulModal = findOne('#event02-modal-ssul');
        const ssulModalButton = findOne('.event02-modal-ssul__button button', ssulModal);
        const ssulTitle = findOne('[name="ssul_title"]');
        const ssulContent = findOne('[name="ssul_content"]');
        const ssulModalCloseButton = findOne('.modal__close-button', ssulModal);
        const fileNameBox = findOne('.file-name-box', ssulModal);
        const ssulUrl = findOne('[name="ssul_url"]');

        // 주소검색
        const addressSearch = findOne('.address-search');
        const addressSearchCloseButton = findOne('#btnCloseLayer');

        // 우편번호 찾기 화면을 넣을 element
        const element_layer = findOne('.address-layer-wrap');
        const dim = findOne('.dim');

        // 개인정보입력창 모달
        const informationModal = findOne('#event02-modal-information');
        const userName = findOne('[name="user_name"]', form);
        const userNameCheck = /^[가-힣a]+$/;
        const userPhone = findOne('[name="user_phone"]', form);
        const userPhoneCheck = /^[0-9]+$/;
        const userPhoneCheck2 = /^010-?([0-9]{4})-?([0-9]{4})$/;
        const userAdress = findOne('[name="zipcode"]', form);
        const userAdress2 = findOne('[name="addr2"]', form);
        const agree1 = findOne('[name="is_agree1"]', form);
        const agree3 = find('[name="is_agree3"]', form);
        const agreeOlder = findOne('[name="14older"]', form);
        const gender = findOne('[name="user_gender"]', form);
        const age = findOne('[name="user_age"]', form);
        const residence = findOne('[name="residence"]', form);
        const residenceType = findOne('[name="residence_type"]', form);
        const informationModalCloseButton = findOne('.modal__close-button', informationModal);

        const ssulValid = () => {
            if (!ssulTitle.value.trim()) {
                alert('썰 제목을 입력해 주세요!');
                ssulTitle.focus();
                return false;
            }

            if (ssulTitle.value.length > 20) {
                alert('20자 이내로 입력해 주세요!');
                ssulTitle.focus();
                return false;
            }

            if (!ssulContent.value.trim()) {
                alert('썰 내용을 입력해 주세요!');
                ssulContent.focus();
                return false;
            }

            if (ssulContent.value.length > 500) {
                alert('500자 이내로 입력해 주세요!');
                ssulContent.focus();
                return false;
            }

            if(ssulUrl.value) {
                if (!/^https?:\/\/\S{3}/i.test(ssulUrl.value)) {
                    alert('올바른 URL 형식이 아닙니다. http로 시작하는 URL로 다시 입력해 주세요.');
                    return false;
                }
            }

            return true;
        };

        // 썰 풀기 버튼 클릭시
        event02Button.addEventListener('click', (event) => {
            event.preventDefault();
            fileNameBox.innerHTML = '';

            fetch('/api/button-click.php?gubun=ssul', {
                method: 'post',
            })
                .then(response => response.json())
                .catch(error => {
                    // console.error(error);
                });

            modal.open(ssulModal);
        });

        // 썰 작성 모달에서 x버튼 클릭시
        ssulModalCloseButton.addEventListener('click', (event) => {
            event.preventDefault();
            form.reset();
        })

        // 썰 제목 내용 입력시 글자수 제한
        ssulTitle.addEventListener('input', () => {
            const ssulTitleValue = ssulTitle.value;

            if (ssulTitleValue.length > 20) {
                alert('20자 이내로 입력해 주세요!')
            }
        });

        ssulContent.addEventListener('input', () => {
            const ssulContentValue = ssulContent.value;

            if (ssulContentValue.length > 500) {
                alert('500자 이내로 입력해 주세요!')
            }
        });

        // 파일 첨부 클릭시
        const fileButton = findOne('input[type="file"]', ssulModal);

        fileButton.addEventListener('change', () => {
            const fileName = fileButton.files[0].name;
            const fileForm = /(.*?)\.(gif|png|jpg|jpeg)$/;
            const fileSize = fileButton.files[0].size;
            const maxSize = 10 * 1024 * 1024;

            if (!fileName.toLowerCase().match(fileForm)) {
                alert("지원하는 파일 확장자가 아닙니다.");
                fileNameBox.innerHTML = ''
                return false;
            } else {
                if (fileSize > maxSize) {
                    alert('이미지는 최대 10MB까지만 등록이 가능합니다.');
                    fileNameBox.innerHTML = ''
                    return false;
                } else {
                    fileNameBox.innerHTML = fileName
                }
            }
        });

        // 개인정보입력 버튼 클릭시
        ssulModalButton.addEventListener('click', (event) => {
            event.preventDefault();
            if (ssulValid()) {
                modal.close(ssulModal);
                modal.open(informationModal);
            }
        });

        // 개인정보입력창 모달 x버튼 클릭시
        informationModalCloseButton.addEventListener('click', (event) => {
            event.preventDefault();
            form.reset();
        })

        // event02 유효성검사
        const ssulValid2 = () => {
            if (!userName.value.trim()) {
                alert('이름을 입력해 주세요!');
                userName.focus();
                return false;
            }

            if (!userNameCheck.test(userName.value.trim())) {
                alert('한글로 입력해 주세요.');
                userName.focus();
                return false;
            }

            if (!userPhone.value.trim()) {
                alert('연락처를 입력해 주세요!');
                userPhone.focus();
                return false;
            }

            if (!userPhoneCheck.test(userPhone.value.trim())) {
                alert('숫자만 입력 가능합니다.');
                userPhone.focus();
                return false;
            }

            if (!userPhoneCheck2.test(userPhone.value.trim())) {
                alert('연락처를 확인해 주세요.');
                userPhone.focus();
                return false;
            }

            if (!userAdress.value.trim()) {
                alert('주소를 입력해 주세요!');
                userAdress.focus();
                return false;
            }

            if (!userAdress2.value.trim()) {
                alert('상세주소를 입력해 주세요!');
                userAdress2.focus();
                return false;
            }

            if(!gender.value.trim()) {
                alert('성별을 선택해 주세요.');
                gender.focus();
                return false;
            }

            if(!age.value.trim()) {
                alert('연령대를 선택해 주세요.');
                age.focus();
                return false;
            }

            if(!residence.value.trim()) {
                alert('거주지역을 선택해 주세요.');
                residence.focus();
                return false;
            }

            if(!residenceType.value.trim()) {
                alert('거주유형을 선택해 주세요.');
                residenceType.focus();
                return false;
            }

            if (!agree1.checked) {
                alert('개인정보 수집 이용에 동의해주세요.');
                agree1.focus();
                return false;
            }

            // if (!agree2.checked) {
            //     alert('개인정보 취급위탁에 동의해주세요.');
            //     agree2.focus();
            //     return false;
            // }

            // if (!agree3.checked) {
            //     alert('마케팅 활용에 동의해주세요.');
            //     agree3.focus();
            //     return false;
            // }

            if (!agree3.some(input => input.checked)) {
                alert('마케팅 동의여부를 확인해 주세요');
                agree3[0].focus();
                return false;
            }

            if (!agreeOlder.checked) {
                alert('만 14세 이상만 참여 가능합니다.');
                agreeOlder.focus();
                return false;
            }

            return true;
        }

        //응모완료 버튼 클릭시
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            if (ssulValid2()) {
                const formData = new FormData(form);

                findOne('body').inert = true;

                fetch(form.action, {
                    method: form.method,
                    body: formData
                })
                    .then(response => response.json())
                    .then(data => {
                        if (data.result === false) {
                            alert(data.message);
                        } else {
                            alert(data.message);
                            location.reload();
                        }
                    })
                    .catch(error => {
                        console.error(error);
                        location.reload();
                    });
            }
        });


        // 다음 지도 api
        const closeDaumPostcode = () => {
            // iframe을 넣은 element를 안보이게 한다.
            element_layer.style.display = 'none';
            dim.style.display = 'none';
        }
        const daumApi = () => {

            new daum.Postcode({
                oncomplete: function (data) {
                    // 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

                    // 각 주소의 노출 규칙에 따라 주소를 조합한다.
                    // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                    var addr = ''; // 주소 변수
                    var extraAddr = ''; // 참고항목 변수

                    //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
                    if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                        addr = data.roadAddress;
                    } else { // 사용자가 지번 주소를 선택했을 경우(J)
                        addr = data.jibunAddress;
                    }

                    // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
                    if (data.userSelectedType === 'R') {
                        // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                        // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                        if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
                            extraAddr += data.bname;
                        }
                        // 건물명이 있고, 공동주택일 경우 추가한다.
                        if (data.buildingName !== '' && data.apartment === 'Y') {
                            extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                        }
                        // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                        if (extraAddr !== '') {
                            extraAddr = ' (' + extraAddr + ')';
                        }
                        // 조합된 참고항목을 해당 필드에 넣는다.
                        // document.getElementById("sample2_extraAddress").value = extraAddr;

                    } else {
                        // document.getElementById("sample2_extraAddress").value = '';
                    }

                    // 우편번호와 주소 정보를 해당 필드에 넣는다.
                    document.getElementById('postal-code').value = data.zonecode;
                    document.getElementById("address").value = addr;
                    // 커서를 상세주소 필드로 이동한다.
                    document.getElementById("detail-address").focus();

                    // iframe을 넣은 element를 안보이게 한다.
                    // (autoClose:false 기능을 이용한다면, 아래 코드를 제거해야 화면에서 사라지지 않는다.)
                    element_layer.style.display = 'none';
                    dim.style.display = 'none';
                },
                width: '100%',
                height: '100%',
                maxSuggestItems: 5
            }).embed(element_layer);

            // iframe을 넣은 element를 보이게 한다.
            element_layer.style.display = 'block';
            dim.style.display = 'block';

            //
            // // iframe을 넣은 element의 위치를 화면의 가운데로 이동시킨다.
            // initLayerPosition();
            //
            // // 브라우저의 크기 변경에 따라 레이어를 가운데로 이동시키고자 하실때에는
            // // resize이벤트나, orientationchange이벤트를 이용하여 값이 변경될때마다 아래 함수를 실행 시켜 주시거나,
            // // 직접 element_layer의 top,left값을 수정해 주시면 됩니다.
            // function initLayerPosition() {
            //     var width = 300; //우편번호서비스가 들어갈 element의 width
            //     var height = 400; //우편번호서비스가 들어갈 element의 height
            //     var borderWidth = 5; //샘플에서 사용하는 border의 두께
            //
            //     // 위에서 선언한 값들을 실제 element에 넣는다.
            //     element_layer.style.width = width + 'px';
            //     element_layer.style.height = height + 'px';
            //     element_layer.style.border = borderWidth + 'px solid';
            //     // 실행되는 순간의 화면 너비와 높이 값을 가져와서 중앙에 뜰 수 있도록 위치를 계산한다.
            //     element_layer.style.left = (((window.innerWidth || document.documentElement.clientWidth) - width) / 2 - borderWidth) + 'px';
            //     element_layer.style.top = (((window.innerHeight || document.documentElement.clientHeight) - height) / 2 - borderWidth) + 'px';
            // }
        };

        // 주소검색 클릭시
        addressSearch.addEventListener('click', () => {
            daumApi();
        });

        // 주소검색 닫기 버튼 클릭시
        addressSearchCloseButton.addEventListener('click', () => {
            closeDaumPostcode();
        });

    })();

    //event02 게시판 paging
    (() => {
        const notice = findOne('.main-event-notice');
        const list = findOne('tbody', notice);
        const pagination = findOne('.main-notice-paging', notice);

        // 게시판 리스트 클릭시 모달
        const makeModalcontents = (data) => {
            const modal = new Modal();
            const noticeModal = findOne('.event02-modal-notice');
            const noticeModalContent = findOne('.event02-modal-notice__contents', noticeModal);
            const noticeModalButton = findOne('.event02-modal-notice__button', noticeModal);
            const listItems = find('.main-event-notice__link');

            on(findOne('.main-event-notice'), 'click', (event) => {
                if (event.target.closest('.main-event-notice__link')) {
                    event.preventDefault();

                    const currentButton = event.target.closest('.main-event-notice__link');
                    const currentData = data.data.filter(data => data.seq === Number(currentButton.dataset.seq))[0];
                    const url = currentData.ssul_url.trim();

                    let html = `
                            <div class="event02-modal-notice__contents-header">
                                <p class="event02-modal-notice__contents-date">${currentData.reg_date}</p>
                                <h3 class="event02-modal-notice__contents-title">
                                    ${currentData.ssul_title}
                                </h3>
                            </div>
                            <div class="event02-modal-notice__contents-image" style="background-image: url(${currentData.ssul_image})"></div>
                            <div class="event02-modal-notice__contents-content">${currentData.ssul_content.replaceAll(/(\r\n|\n|\r)/g, '<br>')}</div>
                            <p class="event02-modal-notice__button modal-button">
                         `;
                    if (url) {
                        html += `<a href="${/^(https?:)?\/\//i.test(url) ? url : `${url}`}" target="_blank">
                            <span>영상확인</span>
                        </a>
                        </p>`;
                    } else {
                        html += `<button type="button" class="event02-modal-notice__close-button">
                            <span>닫기</span>
                        </button>
                    </p>`;
                    }

                    noticeModalContent.innerHTML = html;
                    modal.open(noticeModal);
                }

                const closeButton = findOne('.event02-modal-notice__close-button', noticeModal);
                if(!closeButton) {
                    return false;
                } else {
                    closeButton.addEventListener('click', () => {
                        modal.close(noticeModal);
                        // location.reload();
                    });
                }
            });

        }

        // 게시판 리스트
        const makeList = (data) => {
            list.innerHTML = data.data.map(item =>
                `
                    <tr>
                        <td>
                            <a href="#" data-seq="${item.seq}" class="main-event-notice__link">
                                <div class="main-event-notice__contents-image" 
                                style="background-image: url(${item.ssul_image})"></div>
                                <div class="main-event-notice__contents-detail">
                                    <div>
                                        <h3>
                                            ${item.ssul_title}
                                        </h3>
                                        <span>${item.reg_date}</span>
                                    </div> 
                                    <p>${item.ssul_content}</p>
                                </div>
                            </a>
                        </td>
                    </tr>
                `
            ).join('');
        };

        const paging = (target, currentPage, pageCount, totalPage) => {
            // 타겟, 현재페이지, 페이지에 보여줄 넘버 갯수, 총페이지(페이지 갯수)

            let items = '';

            let pageGroup = Math.ceil(currentPage / pageCount);

            let lastNum = pageGroup * pageCount;

            let startNum = lastNum - (pageCount - 1);
            if (lastNum > totalPage) {
                lastNum = totalPage;
            }

            let prev = startNum - pageCount
            if (prev < 1) {
                prev = 1;
            }

            let next = lastNum + 1;

            if (startNum === 1) {
                items += '<li class="main-notice-paging__item main-notice-paging__item--first"><a href="#" class="disabled" data-page="1"><span class="visually-hidden">처음</span></a></li>';
            } else {
                items += '<li class="main-notice-paging__item main-notice-paging__item--first"><a href="#" data-page="1"><span class="visually-hidden">처음</span></a></li>';
            }

            // items += '<li><a href="#" data-page="'+ prev +'">이전</a></li>';
            if (startNum === 1) {   // prev===1 이렇게할경우 1일때 무조건 disabled 되기때문에 스타트값으로바꿔준다
                items += '<li class="main-notice-paging__item main-notice-paging__item--prev"><a href="#" class="disabled" data-page="' + prev + '"><span class="visually-hidden">이전</span></a></li>';
            } else {
                items += '<li class="main-notice-paging__item main-notice-paging__item--prev"><a href="#" data-page="' + prev + '"><span class="visually-hidden">이전</span></a></li>';
            }

            for (let i = startNum; i <= lastNum; i++) {
                if (currentPage === i) {
                    items += `<li><a href="#" class="active" data-page="${i}">${i}</a></li>`;
                } else {
                    items += `<li><a href="#" data-page="${i}">${i}</a></li>`;
                }
            }

            if (lastNum === totalPage) {
                items += '<li class="main-notice-paging__item main-notice-paging__item--next"><a href="#" class="disabled" data-page="' + next + '"><span class="visually-hidden">다음</span></a></li>';
            } else {
                items += '<li class="main-notice-paging__item main-notice-paging__item--next"><a href="#" data-page="' + next + '"><span class="visually-hidden">다음</span></a></li>';
            }

            if (lastNum === totalPage) {
                items += '<li class="main-notice-paging__item main-notice-paging__item--last"><a href="#" class="disabled" data-page="' + totalPage + '"><span class="visually-hidden">마지막</span></a></li>';
            } else {
                items += '<li class="main-notice-paging__item main-notice-paging__item--last"><a href="#" data-page="' + totalPage + '"><span class="visually-hidden">마지막</span></a></li>';
            }


            target.innerHTML = '<ul>' + items + '</ul>';

            const links = target.querySelectorAll('a');

            links.forEach((link) => {
                link.addEventListener('click', (event) => {   // = link.addEventListener(function('click')
                    event.preventDefault()

                    if (link.classList.contains('disabled')) { //disabled클래스 추가되면 클릭막기
                        return;
                    }
                    // console.log(link.dataset.page, pageCount,totalPage)
                    // paging(target, link.dataset.page * 1, pageCount, totalPage);  //현재페이지*1 하는 이유는 현재값은 문자열이기때문에 *1해줘서 숫자로 변경
                    paging(target, link.dataset.page * 1, pageCount, totalPage);
                });
            });
        };

        paging(pagination, 1, 5, 21);

        const makePagination = (data) => {
            paging(pagination, data.page, 5, data.pagetotalcnt);
        };

        const render = (page) => {
            fetch(`/api/ssul-list.php?page=${page}`)
                .then(response => response.json())
                .then(data => {
                    // console.log(data);
                    makeList(data);
                    makePagination(data);
                    makeModalcontents(data);
                })
                .catch(error => {
                    console.error(error)
                });
        };

        render(1);

        on(pagination, 'click', (event) => {
            event.preventDefault();

            const target = event.target.closest('[data-page]');

            if (target) {
                render(target.dataset.page * 1);
            }
        });

    })();
};

document.addEventListener('DOMContentLoaded', app);