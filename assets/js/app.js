/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/Modal.js":
/*!*********************!*\
  !*** ./js/Modal.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./js/helper.js");

const CLASS_NAME_BODY_OPEN = "modal-open";
const CLASS_NAME_OPEN = "modal--open";
const CLASS_NAME_FADE = "modal--fade";
const Modal = class {
  constructor() {
    this.body = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)("body");
    this.modals = [];
    this.onEvent();
  }
  open(target) {
    if (!this.modals.length) {
      this.body.classList.add(CLASS_NAME_BODY_OPEN);
    }
    this.modals.push(target);
    target.classList.add(CLASS_NAME_OPEN);
    setTimeout(() => target.classList.add(CLASS_NAME_FADE), 0);
    return this;
  }
  close(targetModal) {
    let index = this.modals.length - 1;
    if (targetModal) {
      index = this.modals.indexOf(targetModal);
      if (index === -1) {
        index = 0;
      }
    }
    const target = this.modals.splice(index, 1)[0];
    if (!target)
      return;
    target.classList.remove(CLASS_NAME_FADE, CLASS_NAME_OPEN);
    if (!this.modals.length) {
      this.body.classList.remove(CLASS_NAME_BODY_OPEN);
    }
  }
  onClose(event) {
    const close = event.target.closest(".modal__close");
    if (close) {
      if (close.tagName === "A")
        event.preventDefault();
      this.close();
    }
  }
  onEvent() {
    (0,_helper__WEBPACK_IMPORTED_MODULE_0__.on)(this.body, "click", this.onClose.bind(this), false);
  }
  get scrollWidth() {
    return Math.abs(window.innerWidth - document.documentElement.clientWidth);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);


/***/ }),

/***/ "./js/helper.js":
/*!**********************!*\
  !*** ./js/helper.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   debounce: () => (/* binding */ debounce),
/* harmony export */   delegate: () => (/* binding */ delegate),
/* harmony export */   find: () => (/* binding */ find),
/* harmony export */   findOne: () => (/* binding */ findOne),
/* harmony export */   getOffset: () => (/* binding */ getOffset),
/* harmony export */   off: () => (/* binding */ off),
/* harmony export */   on: () => (/* binding */ on)
/* harmony export */ });
const findOne = (selector, context = document) => context.querySelector(selector);
const find = (selector, context = document) => [...context.querySelectorAll(selector)];
const on = (target, type, callback, capture = false) => {
  if (!target || !target.addEventListener)
    return;
  target.addEventListener(type, callback, capture);
};
const off = (target, type, callback) => target.removeEventListener(type, callback);
const delegate = (target, selector, type, handler, capture) => {
  const dispatchEvent = (event) => {
    const targetElement = event.target;
    const potentialElements = targetElement.closest(selector);
    if (potentialElements) {
      handler.call(potentialElements, event);
    }
  };
  on(target, type, dispatchEvent, !!capture);
};
const getOffset = (element) => {
  const rect = element.getBoundingClientRect();
  return {
    top: rect.top + window.scrollY,
    left: rect.left + window.scrollX
  };
};
const debounce = (func, wait = 300) => {
  let inDebounce;
  return (...args) => {
    inDebounce && clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func(...args), wait);
  };
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./js/helper.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal */ "./js/Modal.js");


const app = () => {
  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  let player;
  let player2;
  window.onYouTubeIframeAPIReady = () => {
    player = new YT.Player("main-intro__iframe", {
      playerVars: {
        "modestbranding": 1,
        "autoplay": 0,
        // 자동재생
        "controls": 1,
        // 컨트롤러의 유무
        "showinfo": 0,
        // 재생영상에 대한 정보 유무
        "rel": 0,
        // 해당 영상이 종류 된 후, 관련 동영상을 표시할지의 여부
        "loop": 0,
        // 반복 재생의 여부
        "playlist": "5V3I5dRC0UA"
      }
    });
    player2 = new YT.Player("event01-modal-quiz__iframe", {
      playerVars: {
        "modestbranding": 1,
        "autoplay": 0,
        // 자동재생
        "controls": 1,
        // 컨트롤러의 유무
        "showinfo": 0,
        // 재생영상에 대한 정보 유무
        "rel": 0,
        // 해당 영상이 종류 된 후, 관련 동영상을 표시할지의 여부
        "loop": 0,
        // 반복 재생의 여부
        "playlist": "5V3I5dRC0UA"
      },
      events: {
        onReady(event) {
        },
        onStateChange(event) {
        }
      }
    });
  };
  const stopVideo = () => {
    var _a;
    (_a = player == null ? void 0 : player.stopVideo) == null ? void 0 : _a.call(player);
  };
  const stopVideo2 = () => {
    var _a;
    (_a = player2 == null ? void 0 : player2.stopVideo) == null ? void 0 : _a.call(player2);
  };
  (() => {
    const nav = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)(".main-event__nav");
    const navMenus = [...nav.querySelectorAll("a")];
    const sections = navMenus.reduce((sections2, menu) => {
      const id = menu.hash;
      const section = document.getElementById(id.substring(1));
      sections2[id] = section;
      return sections2;
    }, {});
    const reverseSections = Object.keys(sections).reverse().map((id) => sections[id]);
    const getOffsetTop = (target) => Math.ceil(target.getBoundingClientRect().top + window.scrollY - nav.clientHeight);
    const moveMenu = (event) => {
      event.preventDefault();
      const id = event.target.closest("a").hash;
      const section = sections[id];
      const top = getOffsetTop(section);
      window.scroll({
        top,
        behavior: "smooth"
      });
    };
    const onScroll = () => {
      let sectionIndex = reverseSections.findIndex((section) => ~~window.scrollY >= getOffsetTop(section));
      if (sectionIndex < 0)
        sectionIndex = navMenus.length - 1;
      const navIndex = navMenus.length - 1 - sectionIndex;
      navMenus.forEach((menu, index) => menu.classList[navIndex === index ? "add" : "remove"]("active"));
    };
    navMenus.forEach((menu) => menu.addEventListener("click", moveMenu));
    window.addEventListener("scroll", onScroll);
  })();
  (() => {
    const event01 = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)("#main-event-01");
    const event01Button = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)(".main-event-01__button", event01);
    const modal = new _Modal__WEBPACK_IMPORTED_MODULE_1__["default"]();
    const event01ModalWrap = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)(".event01-modal-wrap");
    const form = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)("form", event01ModalWrap);
    const quizModal = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)("#event01-modal-quiz");
    const quizCheckLists = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.find)('[name="quiz"]', quizModal);
    const quizUsa = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)('[value="usa"]', quizModal);
    const quizModalButton = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)(".event01-modal-quiz__button button", quizModal);
    const resultModal = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)("#event01-modal-result");
    const answer = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)(".event01-modal-result__content--answer");
    const fail = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)(".event01-modal-result__content--fail");
    const informationModal = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)("#event01-modal-information");
    const userName = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)('[name="user_name"]', form);
    const userNameCheck = /^[가-힣a]+$/;
    const userPhone = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)('[name="user_phone"]', form);
    const userPhoneCheck = /^[0-9]+$/;
    const userPhoneCheck2 = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    const agree1 = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)('[name="is_agree1"]', form);
    const agree3 = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.find)('[name="is_agree3"]', form);
    const agreeOlder = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)('[name="14older"]', form);
    const gender = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)('[name="user_gender"]', form);
    const age = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)('[name="user_age"]', form);
    const residence = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)('[name="residence"]', form);
    const residenceType = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)('[name="residence_type"]', form);
    let isQuiz = false;
    event01Button.addEventListener("click", (event) => {
      event.preventDefault();
      fetch("/api/button-click.php?gubun=quiz", {
        method: "post"
      }).then((response) => response.json()).catch((error) => {
      });
      fetch("/api/quiz-count.php", {
        method: form.method
      }).then((response) => response.json()).then((data) => {
        if (data.result) {
          modal.open(quizModal);
          stopVideo();
        } else {
          alert(data.message);
          location.reload();
        }
      }).catch((error) => {
        console.error(error);
      });
    });
    quizModalButton.addEventListener("click", (event) => {
      event.preventDefault();
      if (quizCheckLists.every((input) => !input.checked)) {
        alert("\uC815\uB2F5\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694.");
        return false;
      } else {
        if (!quizUsa.checked) {
          stopVideo2();
          modal.close(quizModal);
          modal.open(resultModal);
          answer.style.display = "none";
          fail.style.display = "block";
          reChallenge();
        } else {
          stopVideo2();
          modal.close(quizModal);
          modal.open(resultModal);
          fail.style.display = "none";
          answer.style.display = "block";
          answerEvent();
        }
      }
    });
    const reChallenge = () => {
      const button = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)("[type=button]", fail);
      button.addEventListener("click", (event) => {
        event.preventDefault();
        form.reset();
        modal.close(resultModal);
        modal.open(quizModal);
      });
    };
    const answerEvent = () => {
      const button = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)("[type=button]", answer);
      button.addEventListener("click", (event) => {
        event.preventDefault();
        form.reset();
        modal.close(resultModal);
        modal.open(informationModal);
      });
    };
    const event01Valid = () => {
      if (!userName.value.trim()) {
        alert("\uC774\uB984\uC744 \uC785\uB825\uD574 \uC8FC\uC138\uC694!");
        userName.focus();
        return false;
      }
      if (!userNameCheck.test(userName.value.trim())) {
        alert("\uD55C\uAE00\uB85C \uC785\uB825\uD574 \uC8FC\uC138\uC694.");
        userName.focus();
        return false;
      }
      if (!userPhone.value.trim()) {
        alert("\uC5F0\uB77D\uCC98\uB97C \uC785\uB825\uD574 \uC8FC\uC138\uC694!");
        userPhone.focus();
        return false;
      }
      if (!userPhoneCheck.test(userPhone.value.trim())) {
        alert("\uC22B\uC790\uB9CC \uC785\uB825 \uAC00\uB2A5\uD569\uB2C8\uB2E4.");
        userPhone.focus();
        return false;
      }
      if (!userPhoneCheck2.test(userPhone.value.trim())) {
        alert("\uC5F0\uB77D\uCC98\uB97C \uD655\uC778\uD574 \uC8FC\uC138\uC694.");
        userPhone.focus();
        return false;
      }
      if (!gender.value.trim()) {
        alert("\uC131\uBCC4\uC744 \uC120\uD0DD\uD574 \uC8FC\uC138\uC694.");
        gender.focus();
        return false;
      }
      if (!age.value.trim()) {
        alert("\uC5F0\uB839\uB300\uB97C \uC120\uD0DD\uD574 \uC8FC\uC138\uC694.");
        age.focus();
        return false;
      }
      if (!residence.value.trim()) {
        alert("\uAC70\uC8FC\uC9C0\uC5ED\uC744 \uC120\uD0DD\uD574 \uC8FC\uC138\uC694.");
        residence.focus();
        return false;
      }
      if (!residenceType.value.trim()) {
        alert("\uAC70\uC8FC\uC720\uD615\uC744 \uC120\uD0DD\uD574 \uC8FC\uC138\uC694.");
        residenceType.focus();
        return false;
      }
      if (!agree1.checked) {
        alert("\uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uC774\uC6A9\uC5D0 \uB3D9\uC758\uD574\uC8FC\uC138\uC694.");
        agree1.focus();
        return false;
      }
      if (!agree3.some((input) => input.checked)) {
        alert("\uB9C8\uCF00\uD305 \uB3D9\uC758\uC5EC\uBD80\uB97C \uD655\uC778\uD574 \uC8FC\uC138\uC694");
        agree3[0].focus();
        return false;
      }
      if (!agreeOlder.checked) {
        alert("\uB9CC 14\uC138 \uC774\uC0C1\uB9CC \uCC38\uC5EC \uAC00\uB2A5\uD569\uB2C8\uB2E4.");
        agreeOlder.focus();
        return false;
      }
      return true;
    };
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (event01Valid()) {
        const formData = new FormData(form);
        fetch(form.action, {
          method: form.method,
          body: formData
        }).then((response) => response.json()).then((data) => {
          alert(data.message);
          location.reload();
        }).catch((error) => {
          console.error(error);
        });
      }
    });
  })();
  (() => {
    const modal = new _Modal__WEBPACK_IMPORTED_MODULE_1__["default"]();
    const event02 = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)("#main-event-02");
    const event02Button = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)(".main-event-02__button", event02);
    const event02ModalWrap = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)(".event02-modal-wrap");
    const form = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)("form", event02ModalWrap);
    const ssulModal = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)("#event02-modal-ssul");
    const ssulModalButton = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)(".event02-modal-ssul__button button", ssulModal);
    const ssulTitle = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)('[name="ssul_title"]');
    const ssulContent = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)('[name="ssul_content"]');
    const ssulModalCloseButton = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)(".modal__close-button", ssulModal);
    const fileNameBox = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)(".file-name-box", ssulModal);
    const ssulUrl = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)('[name="ssul_url"]');
    const addressSearch = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)(".address-search");
    const addressSearchCloseButton = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)("#btnCloseLayer");
    const element_layer = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)(".address-layer-wrap");
    const dim = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)(".dim");
    const informationModal = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)("#event02-modal-information");
    const userName = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)('[name="user_name"]', form);
    const userNameCheck = /^[가-힣a]+$/;
    const userPhone = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)('[name="user_phone"]', form);
    const userPhoneCheck = /^[0-9]+$/;
    const userPhoneCheck2 = /^010-?([0-9]{4})-?([0-9]{4})$/;
    const userAdress = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)('[name="zipcode"]', form);
    const userAdress2 = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)('[name="addr2"]', form);
    const agree1 = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)('[name="is_agree1"]', form);
    const agree3 = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.find)('[name="is_agree3"]', form);
    const agreeOlder = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)('[name="14older"]', form);
    const gender = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)('[name="user_gender"]', form);
    const age = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)('[name="user_age"]', form);
    const residence = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)('[name="residence"]', form);
    const residenceType = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)('[name="residence_type"]', form);
    const informationModalCloseButton = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)(".modal__close-button", informationModal);
    const ssulValid = () => {
      if (!ssulTitle.value.trim()) {
        alert("\uC370 \uC81C\uBAA9\uC744 \uC785\uB825\uD574 \uC8FC\uC138\uC694!");
        ssulTitle.focus();
        return false;
      }
      if (ssulTitle.value.length > 20) {
        alert("20\uC790 \uC774\uB0B4\uB85C \uC785\uB825\uD574 \uC8FC\uC138\uC694!");
        ssulTitle.focus();
        return false;
      }
      if (!ssulContent.value.trim()) {
        alert("\uC370 \uB0B4\uC6A9\uC744 \uC785\uB825\uD574 \uC8FC\uC138\uC694!");
        ssulContent.focus();
        return false;
      }
      if (ssulContent.value.length > 500) {
        alert("500\uC790 \uC774\uB0B4\uB85C \uC785\uB825\uD574 \uC8FC\uC138\uC694!");
        ssulContent.focus();
        return false;
      }
      if (ssulUrl.value) {
        if (!/^https?:\/\/\S{3}/i.test(ssulUrl.value)) {
          alert("\uC62C\uBC14\uB978 URL \uD615\uC2DD\uC774 \uC544\uB2D9\uB2C8\uB2E4. http\uB85C \uC2DC\uC791\uD558\uB294 URL\uB85C \uB2E4\uC2DC \uC785\uB825\uD574 \uC8FC\uC138\uC694.");
          return false;
        }
      }
      return true;
    };
    event02Button.addEventListener("click", (event) => {
      event.preventDefault();
      fileNameBox.innerHTML = "";
      fetch("/api/button-click.php?gubun=ssul", {
        method: "post"
      }).then((response) => response.json()).catch((error) => {
      });
      modal.open(ssulModal);
    });
    ssulModalCloseButton.addEventListener("click", (event) => {
      event.preventDefault();
      form.reset();
    });
    ssulTitle.addEventListener("input", () => {
      const ssulTitleValue = ssulTitle.value;
      if (ssulTitleValue.length > 20) {
        alert("20\uC790 \uC774\uB0B4\uB85C \uC785\uB825\uD574 \uC8FC\uC138\uC694!");
      }
    });
    ssulContent.addEventListener("input", () => {
      const ssulContentValue = ssulContent.value;
      if (ssulContentValue.length > 500) {
        alert("500\uC790 \uC774\uB0B4\uB85C \uC785\uB825\uD574 \uC8FC\uC138\uC694!");
      }
    });
    const fileButton = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)('input[type="file"]', ssulModal);
    fileButton.addEventListener("change", () => {
      const fileName = fileButton.files[0].name;
      const fileForm = /(.*?)\.(gif|png|jpg|jpeg)$/;
      const fileSize = fileButton.files[0].size;
      const maxSize = 10 * 1024 * 1024;
      if (!fileName.toLowerCase().match(fileForm)) {
        alert("\uC9C0\uC6D0\uD558\uB294 \uD30C\uC77C \uD655\uC7A5\uC790\uAC00 \uC544\uB2D9\uB2C8\uB2E4.");
        fileNameBox.innerHTML = "";
        return false;
      } else {
        if (fileSize > maxSize) {
          alert("\uC774\uBBF8\uC9C0\uB294 \uCD5C\uB300 10MB\uAE4C\uC9C0\uB9CC \uB4F1\uB85D\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4.");
          fileNameBox.innerHTML = "";
          return false;
        } else {
          fileNameBox.innerHTML = fileName;
        }
      }
    });
    ssulModalButton.addEventListener("click", (event) => {
      event.preventDefault();
      if (ssulValid()) {
        modal.close(ssulModal);
        modal.open(informationModal);
      }
    });
    informationModalCloseButton.addEventListener("click", (event) => {
      event.preventDefault();
      form.reset();
    });
    const ssulValid2 = () => {
      if (!userName.value.trim()) {
        alert("\uC774\uB984\uC744 \uC785\uB825\uD574 \uC8FC\uC138\uC694!");
        userName.focus();
        return false;
      }
      if (!userNameCheck.test(userName.value.trim())) {
        alert("\uD55C\uAE00\uB85C \uC785\uB825\uD574 \uC8FC\uC138\uC694.");
        userName.focus();
        return false;
      }
      if (!userPhone.value.trim()) {
        alert("\uC5F0\uB77D\uCC98\uB97C \uC785\uB825\uD574 \uC8FC\uC138\uC694!");
        userPhone.focus();
        return false;
      }
      if (!userPhoneCheck.test(userPhone.value.trim())) {
        alert("\uC22B\uC790\uB9CC \uC785\uB825 \uAC00\uB2A5\uD569\uB2C8\uB2E4.");
        userPhone.focus();
        return false;
      }
      if (!userPhoneCheck2.test(userPhone.value.trim())) {
        alert("\uC5F0\uB77D\uCC98\uB97C \uD655\uC778\uD574 \uC8FC\uC138\uC694.");
        userPhone.focus();
        return false;
      }
      if (!userAdress.value.trim()) {
        alert("\uC8FC\uC18C\uB97C \uC785\uB825\uD574 \uC8FC\uC138\uC694!");
        userAdress.focus();
        return false;
      }
      if (!userAdress2.value.trim()) {
        alert("\uC0C1\uC138\uC8FC\uC18C\uB97C \uC785\uB825\uD574 \uC8FC\uC138\uC694!");
        userAdress2.focus();
        return false;
      }
      if (!gender.value.trim()) {
        alert("\uC131\uBCC4\uC744 \uC120\uD0DD\uD574 \uC8FC\uC138\uC694.");
        gender.focus();
        return false;
      }
      if (!age.value.trim()) {
        alert("\uC5F0\uB839\uB300\uB97C \uC120\uD0DD\uD574 \uC8FC\uC138\uC694.");
        age.focus();
        return false;
      }
      if (!residence.value.trim()) {
        alert("\uAC70\uC8FC\uC9C0\uC5ED\uC744 \uC120\uD0DD\uD574 \uC8FC\uC138\uC694.");
        residence.focus();
        return false;
      }
      if (!residenceType.value.trim()) {
        alert("\uAC70\uC8FC\uC720\uD615\uC744 \uC120\uD0DD\uD574 \uC8FC\uC138\uC694.");
        residenceType.focus();
        return false;
      }
      if (!agree1.checked) {
        alert("\uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uC774\uC6A9\uC5D0 \uB3D9\uC758\uD574\uC8FC\uC138\uC694.");
        agree1.focus();
        return false;
      }
      if (!agree3.some((input) => input.checked)) {
        alert("\uB9C8\uCF00\uD305 \uB3D9\uC758\uC5EC\uBD80\uB97C \uD655\uC778\uD574 \uC8FC\uC138\uC694");
        agree3[0].focus();
        return false;
      }
      if (!agreeOlder.checked) {
        alert("\uB9CC 14\uC138 \uC774\uC0C1\uB9CC \uCC38\uC5EC \uAC00\uB2A5\uD569\uB2C8\uB2E4.");
        agreeOlder.focus();
        return false;
      }
      return true;
    };
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (ssulValid2()) {
        const formData = new FormData(form);
        (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)("body").inert = true;
        fetch(form.action, {
          method: form.method,
          body: formData
        }).then((response) => response.json()).then((data) => {
          if (data.result === false) {
            alert(data.message);
          } else {
            alert(data.message);
            location.reload();
          }
        }).catch((error) => {
          console.error(error);
          location.reload();
        });
      }
    });
    const closeDaumPostcode = () => {
      element_layer.style.display = "none";
      dim.style.display = "none";
    };
    const daumApi = () => {
      new daum.Postcode({
        oncomplete: function(data) {
          var addr = "";
          var extraAddr = "";
          if (data.userSelectedType === "R") {
            addr = data.roadAddress;
          } else {
            addr = data.jibunAddress;
          }
          if (data.userSelectedType === "R") {
            if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
              extraAddr += data.bname;
            }
            if (data.buildingName !== "" && data.apartment === "Y") {
              extraAddr += extraAddr !== "" ? ", " + data.buildingName : data.buildingName;
            }
            if (extraAddr !== "") {
              extraAddr = " (" + extraAddr + ")";
            }
          } else {
          }
          document.getElementById("postal-code").value = data.zonecode;
          document.getElementById("address").value = addr;
          document.getElementById("detail-address").focus();
          element_layer.style.display = "none";
          dim.style.display = "none";
        },
        width: "100%",
        height: "100%",
        maxSuggestItems: 5
      }).embed(element_layer);
      element_layer.style.display = "block";
      dim.style.display = "block";
    };
    addressSearch.addEventListener("click", () => {
      daumApi();
    });
    addressSearchCloseButton.addEventListener("click", () => {
      closeDaumPostcode();
    });
  })();
  (() => {
    const notice = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)(".main-event-notice");
    const list = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)("tbody", notice);
    const pagination = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)(".main-notice-paging", notice);
    const makeModalcontents = (data) => {
      const modal = new _Modal__WEBPACK_IMPORTED_MODULE_1__["default"]();
      const noticeModal = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)(".event02-modal-notice");
      const noticeModalContent = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)(".event02-modal-notice__contents", noticeModal);
      const noticeModalButton = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)(".event02-modal-notice__button", noticeModal);
      const listItems = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.find)(".main-event-notice__link");
      (0,_helper__WEBPACK_IMPORTED_MODULE_0__.on)((0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)(".main-event-notice"), "click", (event) => {
        if (event.target.closest(".main-event-notice__link")) {
          event.preventDefault();
          const currentButton = event.target.closest(".main-event-notice__link");
          const currentData = data.data.filter((data2) => data2.seq === Number(currentButton.dataset.seq))[0];
          const url = currentData.ssul_url.trim();
          let html = `
                            <div class="event02-modal-notice__contents-header">
                                <p class="event02-modal-notice__contents-date">${currentData.reg_date}</p>
                                <h3 class="event02-modal-notice__contents-title">
                                    ${currentData.ssul_title}
                                </h3>
                            </div>
                            <div class="event02-modal-notice__contents-image" style="background-image: url(${currentData.ssul_image})"></div>
                            <div class="event02-modal-notice__contents-content">${currentData.ssul_content.replaceAll(/(\r\n|\n|\r)/g, "<br>")}</div>
                            <p class="event02-modal-notice__button modal-button">
                         `;
          if (url) {
            html += `<a href="${/^(https?:)?\/\//i.test(url) ? url : `${url}`}" target="_blank">
                            <span>\uC601\uC0C1\uD655\uC778</span>
                        </a>
                        </p>`;
          } else {
            html += `<button type="button" class="event02-modal-notice__close-button">
                            <span>\uB2EB\uAE30</span>
                        </button>
                    </p>`;
          }
          noticeModalContent.innerHTML = html;
          modal.open(noticeModal);
        }
        const closeButton = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.findOne)(".event02-modal-notice__close-button", noticeModal);
        if (!closeButton) {
          return false;
        } else {
          closeButton.addEventListener("click", () => {
            modal.close(noticeModal);
          });
        }
      });
    };
    const makeList = (data) => {
      list.innerHTML = data.data.map(
        (item) => `
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
      ).join("");
    };
    const paging = (target, currentPage, pageCount, totalPage) => {
      let items = "";
      let pageGroup = Math.ceil(currentPage / pageCount);
      let lastNum = pageGroup * pageCount;
      let startNum = lastNum - (pageCount - 1);
      if (lastNum > totalPage) {
        lastNum = totalPage;
      }
      let prev = startNum - pageCount;
      if (prev < 1) {
        prev = 1;
      }
      let next = lastNum + 1;
      if (startNum === 1) {
        items += '<li class="main-notice-paging__item main-notice-paging__item--first"><a href="#" class="disabled" data-page="1"><span class="visually-hidden">\uCC98\uC74C</span></a></li>';
      } else {
        items += '<li class="main-notice-paging__item main-notice-paging__item--first"><a href="#" data-page="1"><span class="visually-hidden">\uCC98\uC74C</span></a></li>';
      }
      if (startNum === 1) {
        items += '<li class="main-notice-paging__item main-notice-paging__item--prev"><a href="#" class="disabled" data-page="' + prev + '"><span class="visually-hidden">\uC774\uC804</span></a></li>';
      } else {
        items += '<li class="main-notice-paging__item main-notice-paging__item--prev"><a href="#" data-page="' + prev + '"><span class="visually-hidden">\uC774\uC804</span></a></li>';
      }
      for (let i = startNum; i <= lastNum; i++) {
        if (currentPage === i) {
          items += `<li><a href="#" class="active" data-page="${i}">${i}</a></li>`;
        } else {
          items += `<li><a href="#" data-page="${i}">${i}</a></li>`;
        }
      }
      if (lastNum === totalPage) {
        items += '<li class="main-notice-paging__item main-notice-paging__item--next"><a href="#" class="disabled" data-page="' + next + '"><span class="visually-hidden">\uB2E4\uC74C</span></a></li>';
      } else {
        items += '<li class="main-notice-paging__item main-notice-paging__item--next"><a href="#" data-page="' + next + '"><span class="visually-hidden">\uB2E4\uC74C</span></a></li>';
      }
      if (lastNum === totalPage) {
        items += '<li class="main-notice-paging__item main-notice-paging__item--last"><a href="#" class="disabled" data-page="' + totalPage + '"><span class="visually-hidden">\uB9C8\uC9C0\uB9C9</span></a></li>';
      } else {
        items += '<li class="main-notice-paging__item main-notice-paging__item--last"><a href="#" data-page="' + totalPage + '"><span class="visually-hidden">\uB9C8\uC9C0\uB9C9</span></a></li>';
      }
      target.innerHTML = "<ul>" + items + "</ul>";
      const links = target.querySelectorAll("a");
      links.forEach((link) => {
        link.addEventListener("click", (event) => {
          event.preventDefault();
          if (link.classList.contains("disabled")) {
            return;
          }
          paging(target, link.dataset.page * 1, pageCount, totalPage);
        });
      });
    };
    paging(pagination, 1, 5, 21);
    const makePagination = (data) => {
      paging(pagination, data.page, 5, data.pagetotalcnt);
    };
    const render = (page) => {
      fetch(`/api/ssul-list.php?page=${page}`).then((response) => response.json()).then((data) => {
        makeList(data);
        makePagination(data);
        makeModalcontents(data);
      }).catch((error) => {
        console.error(error);
      });
    };
    render(1);
    (0,_helper__WEBPACK_IMPORTED_MODULE_0__.on)(pagination, "click", (event) => {
      event.preventDefault();
      const target = event.target.closest("[data-page]");
      if (target) {
        render(target.dataset.page * 1);
      }
    });
  })();
};
document.addEventListener("DOMContentLoaded", app);

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!***********************!*\
  !*** ./scss/app.scss ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzL2pzL2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFFMUIsTUFBTSx1QkFBdUI7QUFDN0IsTUFBTSxrQkFBa0I7QUFDeEIsTUFBTSxrQkFBa0I7QUFFeEIsTUFBTSxRQUFRLE1BQU07QUFBQSxFQUNoQixjQUFjO0FBQ1YsU0FBSyxPQUFPLGdEQUFPLENBQUMsTUFBTTtBQUUxQixTQUFLLFNBQVMsQ0FBQztBQUNmLFNBQUssUUFBUTtBQUFBLEVBQ2pCO0FBQUEsRUFFQSxLQUFLLFFBQVE7QUFDVCxRQUFJLENBQUMsS0FBSyxPQUFPLFFBQVE7QUFDckIsV0FBSyxLQUFLLFVBQVUsSUFBSSxvQkFBb0I7QUFBQSxJQUNoRDtBQUVBLFNBQUssT0FBTyxLQUFLLE1BQU07QUFDdkIsV0FBTyxVQUFVLElBQUksZUFBZTtBQUNwQyxlQUFXLE1BQU0sT0FBTyxVQUFVLElBQUksZUFBZSxHQUFHLENBQUM7QUFFekQsV0FBTztBQUFBLEVBQ1g7QUFBQSxFQUVBLE1BQU0sYUFBYTtBQUNmLFFBQUksUUFBUSxLQUFLLE9BQU8sU0FBUztBQUVqQyxRQUFJLGFBQWE7QUFDYixjQUFRLEtBQUssT0FBTyxRQUFRLFdBQVc7QUFFdkMsVUFBSSxVQUFVLElBQUk7QUFDZCxnQkFBUTtBQUFBLE1BQ1o7QUFBQSxJQUNKO0FBRUEsVUFBTSxTQUFTLEtBQUssT0FBTyxPQUFPLE9BQU8sQ0FBQyxFQUFFLENBQUM7QUFFN0MsUUFBSSxDQUFDO0FBQVE7QUFFYixXQUFPLFVBQVUsT0FBTyxpQkFBaUIsZUFBZTtBQUV4RCxRQUFJLENBQUMsS0FBSyxPQUFPLFFBQVE7QUFDckIsV0FBSyxLQUFLLFVBQVUsT0FBTyxvQkFBb0I7QUFBQSxJQUNuRDtBQUFBLEVBQ0o7QUFBQSxFQUVBLFFBQVEsT0FBTztBQUNYLFVBQU0sUUFBUSxNQUFNLE9BQU8sUUFBUSxlQUFlO0FBRWxELFFBQUksT0FBTztBQUNQLFVBQUksTUFBTSxZQUFZO0FBQUssY0FBTSxlQUFlO0FBRWhELFdBQUssTUFBTTtBQUFBLElBQ2Y7QUFBQSxFQUNKO0FBQUEsRUFFQSxVQUFVO0FBQ04sK0NBQUUsQ0FBQyxLQUFLLE1BQU0sU0FBUyxLQUFLLFFBQVEsS0FBSyxJQUFJLEdBQUcsS0FBSztBQUFBLEVBQ3pEO0FBQUEsRUFFQSxJQUFJLGNBQWM7QUFDZCxXQUFPLEtBQUssSUFBSSxPQUFPLGFBQWEsU0FBUyxnQkFBZ0IsV0FBVztBQUFBLEVBQzVFO0FBQ0o7QUFFQSxpRUFBZSxLQUFLLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25FZCxNQUFNLFVBQVUsQ0FBQyxVQUFVLFVBQVUsYUFBYSxRQUFRLGNBQWMsUUFBUTtBQUNoRixNQUFNLE9BQU8sQ0FBQyxVQUFVLFVBQVUsYUFBYSxDQUFDLEdBQUcsUUFBUSxpQkFBaUIsUUFBUSxDQUFDO0FBRXJGLE1BQU0sS0FBSyxDQUFDLFFBQVEsTUFBTSxVQUFVLFVBQVUsVUFBVTtBQUMzRCxNQUFJLENBQUMsVUFBVSxDQUFDLE9BQU87QUFBa0I7QUFFekMsU0FBTyxpQkFBaUIsTUFBTSxVQUFVLE9BQU87QUFDbkQ7QUFDTyxNQUFNLE1BQU0sQ0FBQyxRQUFRLE1BQU0sYUFBYSxPQUFPLG9CQUFvQixNQUFNLFFBQVE7QUFDakYsTUFBTSxXQUFXLENBQUMsUUFBUSxVQUFVLE1BQU0sU0FBUyxZQUFZO0FBQ2xFLFFBQU0sZ0JBQWdCLENBQUMsVUFBVTtBQUM3QixVQUFNLGdCQUFnQixNQUFNO0FBQzVCLFVBQU0sb0JBQW9CLGNBQWMsUUFBUSxRQUFRO0FBRXhELFFBQUksbUJBQW1CO0FBQ25CLGNBQVEsS0FBSyxtQkFBbUIsS0FBSztBQUFBLElBQ3pDO0FBQUEsRUFDSjtBQUVBLEtBQUcsUUFBUSxNQUFNLGVBQWUsQ0FBQyxDQUFDLE9BQU87QUFDN0M7QUFFTyxNQUFNLFlBQVksQ0FBQyxZQUFZO0FBQ2xDLFFBQU0sT0FBTyxRQUFRLHNCQUFzQjtBQUUzQyxTQUFPO0FBQUEsSUFDSCxLQUFLLEtBQUssTUFBTSxPQUFPO0FBQUEsSUFDdkIsTUFBTSxLQUFLLE9BQU8sT0FBTztBQUFBLEVBQzdCO0FBQ0o7QUFFTyxNQUFNLFdBQVcsQ0FBQyxNQUFNLE9BQU8sUUFBUTtBQUMxQyxNQUFJO0FBRUosU0FBTyxJQUFJLFNBQVM7QUFDaEIsa0JBQWMsYUFBYSxVQUFVO0FBQ3JDLGlCQUFhLFdBQVcsTUFBTSxLQUFLLEdBQUcsSUFBSSxHQUFHLElBQUk7QUFBQSxFQUNyRDtBQUNKOzs7Ozs7O1VDdENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ04yQztBQUNmO0FBRTVCLE1BQU0sTUFBTSxNQUFNO0FBR2QsUUFBTSxNQUFNLFNBQVMsY0FBYyxRQUFRO0FBQzNDLE1BQUksTUFBTTtBQUNWLFFBQU0saUJBQWlCLFNBQVMscUJBQXFCLFFBQVEsRUFBRSxDQUFDO0FBQ2hFLGlCQUFlLFdBQVcsYUFBYSxLQUFLLGNBQWM7QUFFMUQsTUFBSTtBQUNKLE1BQUk7QUFFSixTQUFPLDBCQUEwQixNQUFNO0FBQ25DLGFBQVMsSUFBSSxHQUFHLE9BQU8sc0JBQXNCO0FBQUEsTUFDekMsWUFBWTtBQUFBLFFBQ1Isa0JBQWtCO0FBQUEsUUFDbEIsWUFBWTtBQUFBO0FBQUEsUUFDWixZQUFZO0FBQUE7QUFBQSxRQUNaLFlBQVk7QUFBQTtBQUFBLFFBQ1osT0FBTztBQUFBO0FBQUEsUUFDUCxRQUFRO0FBQUE7QUFBQSxRQUNSLFlBQVk7QUFBQSxNQUNoQjtBQUFBLElBQ0osQ0FBQztBQUVELGNBQVUsSUFBSSxHQUFHLE9BQU8sOEJBQThCO0FBQUEsTUFDbEQsWUFBWTtBQUFBLFFBQ1Isa0JBQWtCO0FBQUEsUUFDbEIsWUFBWTtBQUFBO0FBQUEsUUFDWixZQUFZO0FBQUE7QUFBQSxRQUNaLFlBQVk7QUFBQTtBQUFBLFFBQ1osT0FBTztBQUFBO0FBQUEsUUFDUCxRQUFRO0FBQUE7QUFBQSxRQUNSLFlBQVk7QUFBQSxNQUNoQjtBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBQ0osUUFBUSxPQUFPO0FBQUEsUUFFZjtBQUFBLFFBQ0EsY0FBYyxPQUFPO0FBQUEsUUFFckI7QUFBQSxNQUNKO0FBQUEsSUFDSixDQUFDO0FBQUEsRUFDTDtBQUVBLFFBQU0sWUFBWSxNQUFNO0FBaEQ1QjtBQWlEUSwyQ0FBUSxjQUFSO0FBQUEsRUFDSjtBQUVBLFFBQU0sYUFBYSxNQUFNO0FBcEQ3QjtBQXFEUSw2Q0FBUyxjQUFUO0FBQUEsRUFDSjtBQVlBLEdBQUMsTUFBTTtBQUNILFVBQU0sTUFBTSxnREFBTyxDQUFDLGtCQUFrQjtBQUN0QyxVQUFNLFdBQVcsQ0FBQyxHQUFHLElBQUksaUJBQWlCLEdBQUcsQ0FBQztBQUM5QyxVQUFNLFdBQVcsU0FBUyxPQUFPLENBQUNBLFdBQVUsU0FBUztBQUNqRCxZQUFNLEtBQUssS0FBSztBQUNoQixZQUFNLFVBQVUsU0FBUyxlQUFlLEdBQUcsVUFBVSxDQUFDLENBQUM7QUFFdkQsTUFBQUEsVUFBUyxFQUFFLElBQUk7QUFFZixhQUFPQTtBQUFBLElBQ1gsR0FBRyxDQUFDLENBQUM7QUFDTCxVQUFNLGtCQUFrQixPQUFPLEtBQUssUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLFFBQU0sU0FBUyxFQUFFLENBQUM7QUFDOUUsVUFBTSxlQUFlLENBQUMsV0FBVyxLQUFLLEtBQUssT0FBTyxzQkFBc0IsRUFBRSxNQUFNLE9BQU8sVUFBVSxJQUFJLFlBQVk7QUFDakgsVUFBTSxXQUFXLENBQUMsVUFBVTtBQUN4QixZQUFNLGVBQWU7QUFFckIsWUFBTSxLQUFLLE1BQU0sT0FBTyxRQUFRLEdBQUcsRUFBRTtBQUNyQyxZQUFNLFVBQVUsU0FBUyxFQUFFO0FBQzNCLFlBQU0sTUFBTSxhQUFhLE9BQU87QUFFaEMsYUFBTyxPQUFPO0FBQUEsUUFDVjtBQUFBLFFBQ0EsVUFBVTtBQUFBLE1BQ2QsQ0FBQztBQUFBLElBRUw7QUFDQSxVQUFNLFdBQVcsTUFBTTtBQUNuQixVQUFJLGVBQWUsZ0JBQWdCLFVBQVUsYUFBVyxDQUFDLENBQUUsT0FBTyxXQUFZLGFBQWEsT0FBTyxDQUFDO0FBRW5HLFVBQUksZUFBZTtBQUFHLHVCQUFlLFNBQVMsU0FBUztBQUV2RCxZQUFNLFdBQVcsU0FBUyxTQUFTLElBQUk7QUFFdkMsZUFBUyxRQUFRLENBQUMsTUFBTSxVQUFVLEtBQUssVUFBVSxhQUFhLFFBQVEsUUFBUSxRQUFRLEVBQUUsUUFBUSxDQUFDO0FBQUEsSUFDckc7QUFFQSxhQUFTLFFBQVEsVUFBUSxLQUFLLGlCQUFpQixTQUFTLFFBQVEsQ0FBQztBQUNqRSxXQUFPLGlCQUFpQixVQUFVLFFBQVE7QUFBQSxFQUM5QyxHQUFHO0FBR0gsR0FBQyxNQUFNO0FBQ0gsVUFBTSxVQUFVLGdEQUFPLENBQUMsZ0JBQWdCO0FBQ3hDLFVBQU0sZ0JBQWdCLGdEQUFPLENBQUMsMEJBQTBCLE9BQU87QUFFL0QsVUFBTSxRQUFRLElBQUksOENBQUssQ0FBQztBQUN4QixVQUFNLG1CQUFtQixnREFBTyxDQUFDLHFCQUFxQjtBQUN0RCxVQUFNLE9BQU8sZ0RBQU8sQ0FBQyxRQUFRLGdCQUFnQjtBQUc3QyxVQUFNLFlBQVksZ0RBQU8sQ0FBQyxxQkFBcUI7QUFDL0MsVUFBTSxpQkFBaUIsNkNBQUksQ0FBQyxpQkFBaUIsU0FBUztBQUN0RCxVQUFNLFVBQVUsZ0RBQU8sQ0FBQyxpQkFBaUIsU0FBUztBQUNsRCxVQUFNLGtCQUFrQixnREFBTyxDQUFDLHNDQUFzQyxTQUFTO0FBRy9FLFVBQU0sY0FBYyxnREFBTyxDQUFDLHVCQUF1QjtBQUNuRCxVQUFNLFNBQVMsZ0RBQU8sQ0FBQyx3Q0FBd0M7QUFDL0QsVUFBTSxPQUFPLGdEQUFPLENBQUMsc0NBQXNDO0FBRzNELFVBQU0sbUJBQW1CLGdEQUFPLENBQUMsNEJBQTRCO0FBQzdELFVBQU0sV0FBVyxnREFBTyxDQUFDLHNCQUFzQixJQUFJO0FBQ25ELFVBQU0sZ0JBQWdCO0FBQ3RCLFVBQU0sWUFBWSxnREFBTyxDQUFDLHVCQUF1QixJQUFJO0FBQ3JELFVBQU0saUJBQWlCO0FBQ3ZCLFVBQU0sa0JBQWtCO0FBQ3hCLFVBQU0sU0FBUyxnREFBTyxDQUFDLHNCQUFzQixJQUFJO0FBQ2pELFVBQU0sU0FBUyw2Q0FBSSxDQUFDLHNCQUFzQixJQUFJO0FBQzlDLFVBQU0sYUFBYSxnREFBTyxDQUFDLG9CQUFvQixJQUFJO0FBQ25ELFVBQU0sU0FBUyxnREFBTyxDQUFDLHdCQUF3QixJQUFJO0FBQ25ELFVBQU0sTUFBTSxnREFBTyxDQUFDLHFCQUFxQixJQUFJO0FBQzdDLFVBQU0sWUFBWSxnREFBTyxDQUFDLHNCQUFzQixJQUFJO0FBQ3BELFVBQU0sZ0JBQWdCLGdEQUFPLENBQUMsMkJBQTJCLElBQUk7QUFDN0QsUUFBSSxTQUFTO0FBR2Isa0JBQWMsaUJBQWlCLFNBQVMsQ0FBQyxVQUFVO0FBQy9DLFlBQU0sZUFBZTtBQUVyQixZQUFNLG9DQUFvQztBQUFBLFFBQ3RDLFFBQVE7QUFBQSxNQUNaLENBQUMsRUFDSSxLQUFLLGNBQVksU0FBUyxLQUFLLENBQUMsRUFDaEMsTUFBTSxXQUFTO0FBQUEsTUFFaEIsQ0FBQztBQUdMLFlBQU0sdUJBQXVCO0FBQUEsUUFDekIsUUFBUSxLQUFLO0FBQUEsTUFDakIsQ0FBQyxFQUNJLEtBQUssY0FBWSxTQUFTLEtBQUssQ0FBQyxFQUNoQyxLQUFLLFVBQVE7QUFDVixZQUFJLEtBQUssUUFBUTtBQUNiLGdCQUFNLEtBQUssU0FBUztBQUNwQixvQkFBVTtBQUFBLFFBRWQsT0FBTztBQUNILGdCQUFNLEtBQUssT0FBTztBQUNsQixtQkFBUyxPQUFPO0FBQUEsUUFDcEI7QUFBQSxNQUNKLENBQUMsRUFDQSxNQUFNLFdBQVM7QUFDWixnQkFBUSxNQUFNLEtBQUs7QUFBQSxNQUN2QixDQUFDO0FBQUEsSUFLVCxDQUFDO0FBR0Qsb0JBQWdCLGlCQUFpQixTQUFTLENBQUMsVUFBVTtBQUNqRCxZQUFNLGVBQWU7QUFFckIsVUFBSSxlQUFlLE1BQU0sV0FBUyxDQUFDLE1BQU0sT0FBTyxHQUFHO0FBQy9DLGNBQU0sMERBQWE7QUFDbkIsZUFBTztBQUFBLE1BQ1gsT0FBTztBQUNILFlBQUksQ0FBQyxRQUFRLFNBQVM7QUFFbEIscUJBQVc7QUFDWCxnQkFBTSxNQUFNLFNBQVM7QUFDckIsZ0JBQU0sS0FBSyxXQUFXO0FBQ3RCLGlCQUFPLE1BQU0sVUFBVTtBQUN2QixlQUFLLE1BQU0sVUFBVTtBQUNyQixzQkFBWTtBQUFBLFFBQ2hCLE9BQU87QUFFSCxxQkFBVztBQUNYLGdCQUFNLE1BQU0sU0FBUztBQUNyQixnQkFBTSxLQUFLLFdBQVc7QUFDdEIsZUFBSyxNQUFNLFVBQVU7QUFDckIsaUJBQU8sTUFBTSxVQUFVO0FBQ3ZCLHNCQUFZO0FBQUEsUUFDaEI7QUFBQSxNQUNKO0FBQUEsSUFDSixDQUFDO0FBR0QsVUFBTSxjQUFjLE1BQU07QUFDdEIsWUFBTSxTQUFTLGdEQUFPLENBQUMsaUJBQWlCLElBQUk7QUFDNUMsYUFBTyxpQkFBaUIsU0FBUyxDQUFDLFVBQVU7QUFDeEMsY0FBTSxlQUFlO0FBQ3JCLGFBQUssTUFBTTtBQUNYLGNBQU0sTUFBTSxXQUFXO0FBQ3ZCLGNBQU0sS0FBSyxTQUFTO0FBQUEsTUFDeEIsQ0FBQztBQUFBLElBQ0w7QUFHQSxVQUFNLGNBQWMsTUFBTTtBQUN0QixZQUFNLFNBQVMsZ0RBQU8sQ0FBQyxpQkFBaUIsTUFBTTtBQUM5QyxhQUFPLGlCQUFpQixTQUFTLENBQUMsVUFBVTtBQUN4QyxjQUFNLGVBQWU7QUFDckIsYUFBSyxNQUFNO0FBQ1gsY0FBTSxNQUFNLFdBQVc7QUFDdkIsY0FBTSxLQUFLLGdCQUFnQjtBQUFBLE1BQy9CLENBQUM7QUFBQSxJQUNMO0FBRUEsVUFBTSxlQUFlLE1BQU07QUFDdkIsVUFBSSxDQUFDLFNBQVMsTUFBTSxLQUFLLEdBQUc7QUFDeEIsY0FBTSwyREFBYztBQUNwQixpQkFBUyxNQUFNO0FBQ2YsZUFBTztBQUFBLE1BQ1g7QUFFQSxVQUFJLENBQUMsY0FBYyxLQUFLLFNBQVMsTUFBTSxLQUFLLENBQUMsR0FBRztBQUM1QyxjQUFNLDJEQUFjO0FBQ3BCLGlCQUFTLE1BQU07QUFDZixlQUFPO0FBQUEsTUFDWDtBQUVBLFVBQUksQ0FBQyxVQUFVLE1BQU0sS0FBSyxHQUFHO0FBQ3pCLGNBQU0saUVBQWU7QUFDckIsa0JBQVUsTUFBTTtBQUNoQixlQUFPO0FBQUEsTUFDWDtBQUVBLFVBQUksQ0FBQyxlQUFlLEtBQUssVUFBVSxNQUFNLEtBQUssQ0FBQyxHQUFHO0FBQzlDLGNBQU0saUVBQWU7QUFDckIsa0JBQVUsTUFBTTtBQUNoQixlQUFPO0FBQUEsTUFDWDtBQUVBLFVBQUksQ0FBQyxnQkFBZ0IsS0FBSyxVQUFVLE1BQU0sS0FBSyxDQUFDLEdBQUc7QUFDL0MsY0FBTSxpRUFBZTtBQUNyQixrQkFBVSxNQUFNO0FBQ2hCLGVBQU87QUFBQSxNQUNYO0FBRUEsVUFBRyxDQUFDLE9BQU8sTUFBTSxLQUFLLEdBQUc7QUFDckIsY0FBTSwyREFBYztBQUNwQixlQUFPLE1BQU07QUFDYixlQUFPO0FBQUEsTUFDWDtBQUVBLFVBQUcsQ0FBQyxJQUFJLE1BQU0sS0FBSyxHQUFHO0FBQ2xCLGNBQU0saUVBQWU7QUFDckIsWUFBSSxNQUFNO0FBQ1YsZUFBTztBQUFBLE1BQ1g7QUFFQSxVQUFHLENBQUMsVUFBVSxNQUFNLEtBQUssR0FBRztBQUN4QixjQUFNLHVFQUFnQjtBQUN0QixrQkFBVSxNQUFNO0FBQ2hCLGVBQU87QUFBQSxNQUNYO0FBRUEsVUFBRyxDQUFDLGNBQWMsTUFBTSxLQUFLLEdBQUc7QUFDNUIsY0FBTSx1RUFBZ0I7QUFDdEIsc0JBQWMsTUFBTTtBQUNwQixlQUFPO0FBQUEsTUFDWDtBQUVBLFVBQUksQ0FBQyxPQUFPLFNBQVM7QUFDakIsY0FBTSxnR0FBcUI7QUFDM0IsZUFBTyxNQUFNO0FBQ2IsZUFBTztBQUFBLE1BQ1g7QUFjQSxVQUFJLENBQUMsT0FBTyxLQUFLLFdBQVMsTUFBTSxPQUFPLEdBQUc7QUFDdEMsY0FBTSx5RkFBbUI7QUFDekIsZUFBTyxDQUFDLEVBQUUsTUFBTTtBQUNoQixlQUFPO0FBQUEsTUFDWDtBQUVBLFVBQUksQ0FBQyxXQUFXLFNBQVM7QUFDckIsY0FBTSxpRkFBcUI7QUFDM0IsbUJBQVcsTUFBTTtBQUNqQixlQUFPO0FBQUEsTUFDWDtBQUVBLGFBQU87QUFBQSxJQUNYO0FBR0EsU0FBSyxpQkFBaUIsVUFBVSxDQUFDLFVBQVU7QUFDdkMsWUFBTSxlQUFlO0FBRXJCLFVBQUksYUFBYSxHQUFHO0FBQ2hCLGNBQU0sV0FBVyxJQUFJLFNBQVMsSUFBSTtBQUVsQyxjQUFNLEtBQUssUUFBUTtBQUFBLFVBQ2YsUUFBUSxLQUFLO0FBQUEsVUFDYixNQUFNO0FBQUEsUUFDVixDQUFDLEVBQ0ksS0FBSyxjQUFZLFNBQVMsS0FBSyxDQUFDLEVBQ2hDLEtBQUssVUFBUTtBQUNWLGdCQUFNLEtBQUssT0FBTztBQUNsQixtQkFBUyxPQUFPO0FBQUEsUUFDcEIsQ0FBQyxFQUNBLE1BQU0sV0FBUztBQUNaLGtCQUFRLE1BQU0sS0FBSztBQUFBLFFBQ3ZCLENBQUM7QUFBQSxNQUNUO0FBQUEsSUFDSixDQUFDO0FBQUEsRUFFTCxHQUFHO0FBR0gsR0FBQyxNQUFNO0FBQ0gsVUFBTSxRQUFRLElBQUksOENBQUssQ0FBQztBQUN4QixVQUFNLFVBQVUsZ0RBQU8sQ0FBQyxnQkFBZ0I7QUFDeEMsVUFBTSxnQkFBZ0IsZ0RBQU8sQ0FBQywwQkFBMEIsT0FBTztBQUMvRCxVQUFNLG1CQUFtQixnREFBTyxDQUFDLHFCQUFxQjtBQUN0RCxVQUFNLE9BQU8sZ0RBQU8sQ0FBQyxRQUFRLGdCQUFnQjtBQUc3QyxVQUFNLFlBQVksZ0RBQU8sQ0FBQyxxQkFBcUI7QUFDL0MsVUFBTSxrQkFBa0IsZ0RBQU8sQ0FBQyxzQ0FBc0MsU0FBUztBQUMvRSxVQUFNLFlBQVksZ0RBQU8sQ0FBQyxxQkFBcUI7QUFDL0MsVUFBTSxjQUFjLGdEQUFPLENBQUMsdUJBQXVCO0FBQ25ELFVBQU0sdUJBQXVCLGdEQUFPLENBQUMsd0JBQXdCLFNBQVM7QUFDdEUsVUFBTSxjQUFjLGdEQUFPLENBQUMsa0JBQWtCLFNBQVM7QUFDdkQsVUFBTSxVQUFVLGdEQUFPLENBQUMsbUJBQW1CO0FBRzNDLFVBQU0sZ0JBQWdCLGdEQUFPLENBQUMsaUJBQWlCO0FBQy9DLFVBQU0sMkJBQTJCLGdEQUFPLENBQUMsZ0JBQWdCO0FBR3pELFVBQU0sZ0JBQWdCLGdEQUFPLENBQUMscUJBQXFCO0FBQ25ELFVBQU0sTUFBTSxnREFBTyxDQUFDLE1BQU07QUFHMUIsVUFBTSxtQkFBbUIsZ0RBQU8sQ0FBQyw0QkFBNEI7QUFDN0QsVUFBTSxXQUFXLGdEQUFPLENBQUMsc0JBQXNCLElBQUk7QUFDbkQsVUFBTSxnQkFBZ0I7QUFDdEIsVUFBTSxZQUFZLGdEQUFPLENBQUMsdUJBQXVCLElBQUk7QUFDckQsVUFBTSxpQkFBaUI7QUFDdkIsVUFBTSxrQkFBa0I7QUFDeEIsVUFBTSxhQUFhLGdEQUFPLENBQUMsb0JBQW9CLElBQUk7QUFDbkQsVUFBTSxjQUFjLGdEQUFPLENBQUMsa0JBQWtCLElBQUk7QUFDbEQsVUFBTSxTQUFTLGdEQUFPLENBQUMsc0JBQXNCLElBQUk7QUFDakQsVUFBTSxTQUFTLDZDQUFJLENBQUMsc0JBQXNCLElBQUk7QUFDOUMsVUFBTSxhQUFhLGdEQUFPLENBQUMsb0JBQW9CLElBQUk7QUFDbkQsVUFBTSxTQUFTLGdEQUFPLENBQUMsd0JBQXdCLElBQUk7QUFDbkQsVUFBTSxNQUFNLGdEQUFPLENBQUMscUJBQXFCLElBQUk7QUFDN0MsVUFBTSxZQUFZLGdEQUFPLENBQUMsc0JBQXNCLElBQUk7QUFDcEQsVUFBTSxnQkFBZ0IsZ0RBQU8sQ0FBQywyQkFBMkIsSUFBSTtBQUM3RCxVQUFNLDhCQUE4QixnREFBTyxDQUFDLHdCQUF3QixnQkFBZ0I7QUFFcEYsVUFBTSxZQUFZLE1BQU07QUFDcEIsVUFBSSxDQUFDLFVBQVUsTUFBTSxLQUFLLEdBQUc7QUFDekIsY0FBTSxrRUFBZ0I7QUFDdEIsa0JBQVUsTUFBTTtBQUNoQixlQUFPO0FBQUEsTUFDWDtBQUVBLFVBQUksVUFBVSxNQUFNLFNBQVMsSUFBSTtBQUM3QixjQUFNLG9FQUFrQjtBQUN4QixrQkFBVSxNQUFNO0FBQ2hCLGVBQU87QUFBQSxNQUNYO0FBRUEsVUFBSSxDQUFDLFlBQVksTUFBTSxLQUFLLEdBQUc7QUFDM0IsY0FBTSxrRUFBZ0I7QUFDdEIsb0JBQVksTUFBTTtBQUNsQixlQUFPO0FBQUEsTUFDWDtBQUVBLFVBQUksWUFBWSxNQUFNLFNBQVMsS0FBSztBQUNoQyxjQUFNLHFFQUFtQjtBQUN6QixvQkFBWSxNQUFNO0FBQ2xCLGVBQU87QUFBQSxNQUNYO0FBRUEsVUFBRyxRQUFRLE9BQU87QUFDZCxZQUFJLENBQUMscUJBQXFCLEtBQUssUUFBUSxLQUFLLEdBQUc7QUFDM0MsZ0JBQU0sdUtBQStDO0FBQ3JELGlCQUFPO0FBQUEsUUFDWDtBQUFBLE1BQ0o7QUFFQSxhQUFPO0FBQUEsSUFDWDtBQUdBLGtCQUFjLGlCQUFpQixTQUFTLENBQUMsVUFBVTtBQUMvQyxZQUFNLGVBQWU7QUFDckIsa0JBQVksWUFBWTtBQUV4QixZQUFNLG9DQUFvQztBQUFBLFFBQ3RDLFFBQVE7QUFBQSxNQUNaLENBQUMsRUFDSSxLQUFLLGNBQVksU0FBUyxLQUFLLENBQUMsRUFDaEMsTUFBTSxXQUFTO0FBQUEsTUFFaEIsQ0FBQztBQUVMLFlBQU0sS0FBSyxTQUFTO0FBQUEsSUFDeEIsQ0FBQztBQUdELHlCQUFxQixpQkFBaUIsU0FBUyxDQUFDLFVBQVU7QUFDdEQsWUFBTSxlQUFlO0FBQ3JCLFdBQUssTUFBTTtBQUFBLElBQ2YsQ0FBQztBQUdELGNBQVUsaUJBQWlCLFNBQVMsTUFBTTtBQUN0QyxZQUFNLGlCQUFpQixVQUFVO0FBRWpDLFVBQUksZUFBZSxTQUFTLElBQUk7QUFDNUIsY0FBTSxvRUFBa0I7QUFBQSxNQUM1QjtBQUFBLElBQ0osQ0FBQztBQUVELGdCQUFZLGlCQUFpQixTQUFTLE1BQU07QUFDeEMsWUFBTSxtQkFBbUIsWUFBWTtBQUVyQyxVQUFJLGlCQUFpQixTQUFTLEtBQUs7QUFDL0IsY0FBTSxxRUFBbUI7QUFBQSxNQUM3QjtBQUFBLElBQ0osQ0FBQztBQUdELFVBQU0sYUFBYSxnREFBTyxDQUFDLHNCQUFzQixTQUFTO0FBRTFELGVBQVcsaUJBQWlCLFVBQVUsTUFBTTtBQUN4QyxZQUFNLFdBQVcsV0FBVyxNQUFNLENBQUMsRUFBRTtBQUNyQyxZQUFNLFdBQVc7QUFDakIsWUFBTSxXQUFXLFdBQVcsTUFBTSxDQUFDLEVBQUU7QUFDckMsWUFBTSxVQUFVLEtBQUssT0FBTztBQUU1QixVQUFJLENBQUMsU0FBUyxZQUFZLEVBQUUsTUFBTSxRQUFRLEdBQUc7QUFDekMsY0FBTSwwRkFBb0I7QUFDMUIsb0JBQVksWUFBWTtBQUN4QixlQUFPO0FBQUEsTUFDWCxPQUFPO0FBQ0gsWUFBSSxXQUFXLFNBQVM7QUFDcEIsZ0JBQU0saUhBQTRCO0FBQ2xDLHNCQUFZLFlBQVk7QUFDeEIsaUJBQU87QUFBQSxRQUNYLE9BQU87QUFDSCxzQkFBWSxZQUFZO0FBQUEsUUFDNUI7QUFBQSxNQUNKO0FBQUEsSUFDSixDQUFDO0FBR0Qsb0JBQWdCLGlCQUFpQixTQUFTLENBQUMsVUFBVTtBQUNqRCxZQUFNLGVBQWU7QUFDckIsVUFBSSxVQUFVLEdBQUc7QUFDYixjQUFNLE1BQU0sU0FBUztBQUNyQixjQUFNLEtBQUssZ0JBQWdCO0FBQUEsTUFDL0I7QUFBQSxJQUNKLENBQUM7QUFHRCxnQ0FBNEIsaUJBQWlCLFNBQVMsQ0FBQyxVQUFVO0FBQzdELFlBQU0sZUFBZTtBQUNyQixXQUFLLE1BQU07QUFBQSxJQUNmLENBQUM7QUFHRCxVQUFNLGFBQWEsTUFBTTtBQUNyQixVQUFJLENBQUMsU0FBUyxNQUFNLEtBQUssR0FBRztBQUN4QixjQUFNLDJEQUFjO0FBQ3BCLGlCQUFTLE1BQU07QUFDZixlQUFPO0FBQUEsTUFDWDtBQUVBLFVBQUksQ0FBQyxjQUFjLEtBQUssU0FBUyxNQUFNLEtBQUssQ0FBQyxHQUFHO0FBQzVDLGNBQU0sMkRBQWM7QUFDcEIsaUJBQVMsTUFBTTtBQUNmLGVBQU87QUFBQSxNQUNYO0FBRUEsVUFBSSxDQUFDLFVBQVUsTUFBTSxLQUFLLEdBQUc7QUFDekIsY0FBTSxpRUFBZTtBQUNyQixrQkFBVSxNQUFNO0FBQ2hCLGVBQU87QUFBQSxNQUNYO0FBRUEsVUFBSSxDQUFDLGVBQWUsS0FBSyxVQUFVLE1BQU0sS0FBSyxDQUFDLEdBQUc7QUFDOUMsY0FBTSxpRUFBZTtBQUNyQixrQkFBVSxNQUFNO0FBQ2hCLGVBQU87QUFBQSxNQUNYO0FBRUEsVUFBSSxDQUFDLGdCQUFnQixLQUFLLFVBQVUsTUFBTSxLQUFLLENBQUMsR0FBRztBQUMvQyxjQUFNLGlFQUFlO0FBQ3JCLGtCQUFVLE1BQU07QUFDaEIsZUFBTztBQUFBLE1BQ1g7QUFFQSxVQUFJLENBQUMsV0FBVyxNQUFNLEtBQUssR0FBRztBQUMxQixjQUFNLDJEQUFjO0FBQ3BCLG1CQUFXLE1BQU07QUFDakIsZUFBTztBQUFBLE1BQ1g7QUFFQSxVQUFJLENBQUMsWUFBWSxNQUFNLEtBQUssR0FBRztBQUMzQixjQUFNLHVFQUFnQjtBQUN0QixvQkFBWSxNQUFNO0FBQ2xCLGVBQU87QUFBQSxNQUNYO0FBRUEsVUFBRyxDQUFDLE9BQU8sTUFBTSxLQUFLLEdBQUc7QUFDckIsY0FBTSwyREFBYztBQUNwQixlQUFPLE1BQU07QUFDYixlQUFPO0FBQUEsTUFDWDtBQUVBLFVBQUcsQ0FBQyxJQUFJLE1BQU0sS0FBSyxHQUFHO0FBQ2xCLGNBQU0saUVBQWU7QUFDckIsWUFBSSxNQUFNO0FBQ1YsZUFBTztBQUFBLE1BQ1g7QUFFQSxVQUFHLENBQUMsVUFBVSxNQUFNLEtBQUssR0FBRztBQUN4QixjQUFNLHVFQUFnQjtBQUN0QixrQkFBVSxNQUFNO0FBQ2hCLGVBQU87QUFBQSxNQUNYO0FBRUEsVUFBRyxDQUFDLGNBQWMsTUFBTSxLQUFLLEdBQUc7QUFDNUIsY0FBTSx1RUFBZ0I7QUFDdEIsc0JBQWMsTUFBTTtBQUNwQixlQUFPO0FBQUEsTUFDWDtBQUVBLFVBQUksQ0FBQyxPQUFPLFNBQVM7QUFDakIsY0FBTSxnR0FBcUI7QUFDM0IsZUFBTyxNQUFNO0FBQ2IsZUFBTztBQUFBLE1BQ1g7QUFjQSxVQUFJLENBQUMsT0FBTyxLQUFLLFdBQVMsTUFBTSxPQUFPLEdBQUc7QUFDdEMsY0FBTSx5RkFBbUI7QUFDekIsZUFBTyxDQUFDLEVBQUUsTUFBTTtBQUNoQixlQUFPO0FBQUEsTUFDWDtBQUVBLFVBQUksQ0FBQyxXQUFXLFNBQVM7QUFDckIsY0FBTSxpRkFBcUI7QUFDM0IsbUJBQVcsTUFBTTtBQUNqQixlQUFPO0FBQUEsTUFDWDtBQUVBLGFBQU87QUFBQSxJQUNYO0FBR0EsU0FBSyxpQkFBaUIsVUFBVSxDQUFDLFVBQVU7QUFDdkMsWUFBTSxlQUFlO0FBRXJCLFVBQUksV0FBVyxHQUFHO0FBQ2QsY0FBTSxXQUFXLElBQUksU0FBUyxJQUFJO0FBRWxDLHdEQUFPLENBQUMsTUFBTSxFQUFFLFFBQVE7QUFFeEIsY0FBTSxLQUFLLFFBQVE7QUFBQSxVQUNmLFFBQVEsS0FBSztBQUFBLFVBQ2IsTUFBTTtBQUFBLFFBQ1YsQ0FBQyxFQUNJLEtBQUssY0FBWSxTQUFTLEtBQUssQ0FBQyxFQUNoQyxLQUFLLFVBQVE7QUFDVixjQUFJLEtBQUssV0FBVyxPQUFPO0FBQ3ZCLGtCQUFNLEtBQUssT0FBTztBQUFBLFVBQ3RCLE9BQU87QUFDSCxrQkFBTSxLQUFLLE9BQU87QUFDbEIscUJBQVMsT0FBTztBQUFBLFVBQ3BCO0FBQUEsUUFDSixDQUFDLEVBQ0EsTUFBTSxXQUFTO0FBQ1osa0JBQVEsTUFBTSxLQUFLO0FBQ25CLG1CQUFTLE9BQU87QUFBQSxRQUNwQixDQUFDO0FBQUEsTUFDVDtBQUFBLElBQ0osQ0FBQztBQUlELFVBQU0sb0JBQW9CLE1BQU07QUFFNUIsb0JBQWMsTUFBTSxVQUFVO0FBQzlCLFVBQUksTUFBTSxVQUFVO0FBQUEsSUFDeEI7QUFDQSxVQUFNLFVBQVUsTUFBTTtBQUVsQixVQUFJLEtBQUssU0FBUztBQUFBLFFBQ2QsWUFBWSxTQUFVLE1BQU07QUFLeEIsY0FBSSxPQUFPO0FBQ1gsY0FBSSxZQUFZO0FBR2hCLGNBQUksS0FBSyxxQkFBcUIsS0FBSztBQUMvQixtQkFBTyxLQUFLO0FBQUEsVUFDaEIsT0FBTztBQUNILG1CQUFPLEtBQUs7QUFBQSxVQUNoQjtBQUdBLGNBQUksS0FBSyxxQkFBcUIsS0FBSztBQUcvQixnQkFBSSxLQUFLLFVBQVUsTUFBTSxZQUFZLEtBQUssS0FBSyxLQUFLLEdBQUc7QUFDbkQsMkJBQWEsS0FBSztBQUFBLFlBQ3RCO0FBRUEsZ0JBQUksS0FBSyxpQkFBaUIsTUFBTSxLQUFLLGNBQWMsS0FBSztBQUNwRCwyQkFBYyxjQUFjLEtBQUssT0FBTyxLQUFLLGVBQWUsS0FBSztBQUFBLFlBQ3JFO0FBRUEsZ0JBQUksY0FBYyxJQUFJO0FBQ2xCLDBCQUFZLE9BQU8sWUFBWTtBQUFBLFlBQ25DO0FBQUEsVUFJSixPQUFPO0FBQUEsVUFFUDtBQUdBLG1CQUFTLGVBQWUsYUFBYSxFQUFFLFFBQVEsS0FBSztBQUNwRCxtQkFBUyxlQUFlLFNBQVMsRUFBRSxRQUFRO0FBRTNDLG1CQUFTLGVBQWUsZ0JBQWdCLEVBQUUsTUFBTTtBQUloRCx3QkFBYyxNQUFNLFVBQVU7QUFDOUIsY0FBSSxNQUFNLFVBQVU7QUFBQSxRQUN4QjtBQUFBLFFBQ0EsT0FBTztBQUFBLFFBQ1AsUUFBUTtBQUFBLFFBQ1IsaUJBQWlCO0FBQUEsTUFDckIsQ0FBQyxFQUFFLE1BQU0sYUFBYTtBQUd0QixvQkFBYyxNQUFNLFVBQVU7QUFDOUIsVUFBSSxNQUFNLFVBQVU7QUFBQSxJQXNCeEI7QUFHQSxrQkFBYyxpQkFBaUIsU0FBUyxNQUFNO0FBQzFDLGNBQVE7QUFBQSxJQUNaLENBQUM7QUFHRCw2QkFBeUIsaUJBQWlCLFNBQVMsTUFBTTtBQUNyRCx3QkFBa0I7QUFBQSxJQUN0QixDQUFDO0FBQUEsRUFFTCxHQUFHO0FBR0gsR0FBQyxNQUFNO0FBQ0gsVUFBTSxTQUFTLGdEQUFPLENBQUMsb0JBQW9CO0FBQzNDLFVBQU0sT0FBTyxnREFBTyxDQUFDLFNBQVMsTUFBTTtBQUNwQyxVQUFNLGFBQWEsZ0RBQU8sQ0FBQyx1QkFBdUIsTUFBTTtBQUd4RCxVQUFNLG9CQUFvQixDQUFDLFNBQVM7QUFDaEMsWUFBTSxRQUFRLElBQUksOENBQUssQ0FBQztBQUN4QixZQUFNLGNBQWMsZ0RBQU8sQ0FBQyx1QkFBdUI7QUFDbkQsWUFBTSxxQkFBcUIsZ0RBQU8sQ0FBQyxtQ0FBbUMsV0FBVztBQUNqRixZQUFNLG9CQUFvQixnREFBTyxDQUFDLGlDQUFpQyxXQUFXO0FBQzlFLFlBQU0sWUFBWSw2Q0FBSSxDQUFDLDBCQUEwQjtBQUVqRCxpREFBRSxDQUFDLGdEQUFPLENBQUMsb0JBQW9CLEdBQUcsU0FBUyxDQUFDLFVBQVU7QUFDbEQsWUFBSSxNQUFNLE9BQU8sUUFBUSwwQkFBMEIsR0FBRztBQUNsRCxnQkFBTSxlQUFlO0FBRXJCLGdCQUFNLGdCQUFnQixNQUFNLE9BQU8sUUFBUSwwQkFBMEI7QUFDckUsZ0JBQU0sY0FBYyxLQUFLLEtBQUssT0FBTyxDQUFBQyxVQUFRQSxNQUFLLFFBQVEsT0FBTyxjQUFjLFFBQVEsR0FBRyxDQUFDLEVBQUUsQ0FBQztBQUM5RixnQkFBTSxNQUFNLFlBQVksU0FBUyxLQUFLO0FBRXRDLGNBQUksT0FBTztBQUFBO0FBQUEsaUZBRWtELFlBQVk7QUFBQTtBQUFBLHNDQUV2RCxZQUFZO0FBQUE7QUFBQTtBQUFBLDZHQUcyRCxZQUFZO0FBQUEsa0ZBQ3ZDLFlBQVksYUFBYSxXQUFXLGlCQUFpQixNQUFNO0FBQUE7QUFBQTtBQUd6SCxjQUFJLEtBQUs7QUFDTCxvQkFBUSxZQUFZLG1CQUFtQixLQUFLLEdBQUcsSUFBSSxNQUFNLEdBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUloRSxPQUFPO0FBQ0gsb0JBQVE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUlaO0FBRUEsNkJBQW1CLFlBQVk7QUFDL0IsZ0JBQU0sS0FBSyxXQUFXO0FBQUEsUUFDMUI7QUFFQSxjQUFNLGNBQWMsZ0RBQU8sQ0FBQyx1Q0FBdUMsV0FBVztBQUM5RSxZQUFHLENBQUMsYUFBYTtBQUNiLGlCQUFPO0FBQUEsUUFDWCxPQUFPO0FBQ0gsc0JBQVksaUJBQWlCLFNBQVMsTUFBTTtBQUN4QyxrQkFBTSxNQUFNLFdBQVc7QUFBQSxVQUUzQixDQUFDO0FBQUEsUUFDTDtBQUFBLE1BQ0osQ0FBQztBQUFBLElBRUw7QUFHQSxVQUFNLFdBQVcsQ0FBQyxTQUFTO0FBQ3ZCLFdBQUssWUFBWSxLQUFLLEtBQUs7QUFBQSxRQUFJLFVBQzNCO0FBQUE7QUFBQTtBQUFBLG9EQUdvQyxLQUFLO0FBQUE7QUFBQSwrREFFTSxLQUFLO0FBQUE7QUFBQTtBQUFBO0FBQUEsOENBSXRCLEtBQUs7QUFBQTtBQUFBLGdEQUVILEtBQUs7QUFBQTtBQUFBLHlDQUVaLEtBQUs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFNbEMsRUFBRSxLQUFLLEVBQUU7QUFBQSxJQUNiO0FBRUEsVUFBTSxTQUFTLENBQUMsUUFBUSxhQUFhLFdBQVcsY0FBYztBQUcxRCxVQUFJLFFBQVE7QUFFWixVQUFJLFlBQVksS0FBSyxLQUFLLGNBQWMsU0FBUztBQUVqRCxVQUFJLFVBQVUsWUFBWTtBQUUxQixVQUFJLFdBQVcsV0FBVyxZQUFZO0FBQ3RDLFVBQUksVUFBVSxXQUFXO0FBQ3JCLGtCQUFVO0FBQUEsTUFDZDtBQUVBLFVBQUksT0FBTyxXQUFXO0FBQ3RCLFVBQUksT0FBTyxHQUFHO0FBQ1YsZUFBTztBQUFBLE1BQ1g7QUFFQSxVQUFJLE9BQU8sVUFBVTtBQUVyQixVQUFJLGFBQWEsR0FBRztBQUNoQixpQkFBUztBQUFBLE1BQ2IsT0FBTztBQUNILGlCQUFTO0FBQUEsTUFDYjtBQUdBLFVBQUksYUFBYSxHQUFHO0FBQ2hCLGlCQUFTLGlIQUFpSCxPQUFPO0FBQUEsTUFDckksT0FBTztBQUNILGlCQUFTLGdHQUFnRyxPQUFPO0FBQUEsTUFDcEg7QUFFQSxlQUFTLElBQUksVUFBVSxLQUFLLFNBQVMsS0FBSztBQUN0QyxZQUFJLGdCQUFnQixHQUFHO0FBQ25CLG1CQUFTLDZDQUE2QyxNQUFNO0FBQUEsUUFDaEUsT0FBTztBQUNILG1CQUFTLDhCQUE4QixNQUFNO0FBQUEsUUFDakQ7QUFBQSxNQUNKO0FBRUEsVUFBSSxZQUFZLFdBQVc7QUFDdkIsaUJBQVMsaUhBQWlILE9BQU87QUFBQSxNQUNySSxPQUFPO0FBQ0gsaUJBQVMsZ0dBQWdHLE9BQU87QUFBQSxNQUNwSDtBQUVBLFVBQUksWUFBWSxXQUFXO0FBQ3ZCLGlCQUFTLGlIQUFpSCxZQUFZO0FBQUEsTUFDMUksT0FBTztBQUNILGlCQUFTLGdHQUFnRyxZQUFZO0FBQUEsTUFDekg7QUFHQSxhQUFPLFlBQVksU0FBUyxRQUFRO0FBRXBDLFlBQU0sUUFBUSxPQUFPLGlCQUFpQixHQUFHO0FBRXpDLFlBQU0sUUFBUSxDQUFDLFNBQVM7QUFDcEIsYUFBSyxpQkFBaUIsU0FBUyxDQUFDLFVBQVU7QUFDdEMsZ0JBQU0sZUFBZTtBQUVyQixjQUFJLEtBQUssVUFBVSxTQUFTLFVBQVUsR0FBRztBQUNyQztBQUFBLFVBQ0o7QUFHQSxpQkFBTyxRQUFRLEtBQUssUUFBUSxPQUFPLEdBQUcsV0FBVyxTQUFTO0FBQUEsUUFDOUQsQ0FBQztBQUFBLE1BQ0wsQ0FBQztBQUFBLElBQ0w7QUFFQSxXQUFPLFlBQVksR0FBRyxHQUFHLEVBQUU7QUFFM0IsVUFBTSxpQkFBaUIsQ0FBQyxTQUFTO0FBQzdCLGFBQU8sWUFBWSxLQUFLLE1BQU0sR0FBRyxLQUFLLFlBQVk7QUFBQSxJQUN0RDtBQUVBLFVBQU0sU0FBUyxDQUFDLFNBQVM7QUFDckIsWUFBTSwyQkFBMkIsTUFBTSxFQUNsQyxLQUFLLGNBQVksU0FBUyxLQUFLLENBQUMsRUFDaEMsS0FBSyxVQUFRO0FBRVYsaUJBQVMsSUFBSTtBQUNiLHVCQUFlLElBQUk7QUFDbkIsMEJBQWtCLElBQUk7QUFBQSxNQUMxQixDQUFDLEVBQ0EsTUFBTSxXQUFTO0FBQ1osZ0JBQVEsTUFBTSxLQUFLO0FBQUEsTUFDdkIsQ0FBQztBQUFBLElBQ1Q7QUFFQSxXQUFPLENBQUM7QUFFUiwrQ0FBRSxDQUFDLFlBQVksU0FBUyxDQUFDLFVBQVU7QUFDL0IsWUFBTSxlQUFlO0FBRXJCLFlBQU0sU0FBUyxNQUFNLE9BQU8sUUFBUSxhQUFhO0FBRWpELFVBQUksUUFBUTtBQUNSLGVBQU8sT0FBTyxRQUFRLE9BQU8sQ0FBQztBQUFBLE1BQ2xDO0FBQUEsSUFDSixDQUFDO0FBQUEsRUFFTCxHQUFHO0FBQ1A7QUFFQSxTQUFTLGlCQUFpQixvQkFBb0IsR0FBRzs7Ozs7Ozs7OztBQzE1QmpEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvTW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vanMvaGVscGVyLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zY3NzL2FwcC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ZmluZE9uZSwgb259IGZyb20gJy4vaGVscGVyJztcclxuXHJcbmNvbnN0IENMQVNTX05BTUVfQk9EWV9PUEVOID0gJ21vZGFsLW9wZW4nO1xyXG5jb25zdCBDTEFTU19OQU1FX09QRU4gPSAnbW9kYWwtLW9wZW4nO1xyXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnbW9kYWwtLWZhZGUnO1xyXG5cclxuY29uc3QgTW9kYWwgPSBjbGFzcyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmJvZHkgPSBmaW5kT25lKCdib2R5Jyk7XHJcblxyXG4gICAgICAgIHRoaXMubW9kYWxzID0gW107XHJcbiAgICAgICAgdGhpcy5vbkV2ZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgb3Blbih0YXJnZXQpIHtcclxuICAgICAgICBpZiAoIXRoaXMubW9kYWxzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmJvZHkuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0JPRFlfT1BFTik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm1vZGFscy5wdXNoKHRhcmdldCk7XHJcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9PUEVOKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRhcmdldC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfRkFERSksIDApO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSh0YXJnZXRNb2RhbCkge1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMubW9kYWxzLmxlbmd0aCAtIDE7XHJcblxyXG4gICAgICAgIGlmICh0YXJnZXRNb2RhbCkge1xyXG4gICAgICAgICAgICBpbmRleCA9IHRoaXMubW9kYWxzLmluZGV4T2YodGFyZ2V0TW9kYWwpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgaW5kZXggPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLm1vZGFscy5zcGxpY2UoaW5kZXgsIDEpWzBdO1xyXG5cclxuICAgICAgICBpZiAoIXRhcmdldCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0ZBREUsIENMQVNTX05BTUVfT1BFTik7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5tb2RhbHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYm9keS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQk9EWV9PUEVOKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25DbG9zZShldmVudCkge1xyXG4gICAgICAgIGNvbnN0IGNsb3NlID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5tb2RhbF9fY2xvc2UnKTtcclxuXHJcbiAgICAgICAgaWYgKGNsb3NlKSB7XHJcbiAgICAgICAgICAgIGlmIChjbG9zZS50YWdOYW1lID09PSAnQScpIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRXZlbnQoKSB7XHJcbiAgICAgICAgb24odGhpcy5ib2R5LCAnY2xpY2snLCB0aGlzLm9uQ2xvc2UuYmluZCh0aGlzKSwgZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzY3JvbGxXaWR0aCgpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5hYnMod2luZG93LmlubmVyV2lkdGggLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7IiwiZXhwb3J0IGNvbnN0IGZpbmRPbmUgPSAoc2VsZWN0b3IsIGNvbnRleHQgPSBkb2N1bWVudCkgPT4gY29udGV4dC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxuZXhwb3J0IGNvbnN0IGZpbmQgPSAoc2VsZWN0b3IsIGNvbnRleHQgPSBkb2N1bWVudCkgPT4gWy4uLmNvbnRleHQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcildO1xyXG5cclxuZXhwb3J0IGNvbnN0IG9uID0gKHRhcmdldCwgdHlwZSwgY2FsbGJhY2ssIGNhcHR1cmUgPSBmYWxzZSkgPT4ge1xyXG4gICAgaWYgKCF0YXJnZXQgfHwgIXRhcmdldC5hZGRFdmVudExpc3RlbmVyKSByZXR1cm47XHJcblxyXG4gICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2ssIGNhcHR1cmUpO1xyXG59O1xyXG5leHBvcnQgY29uc3Qgb2ZmID0gKHRhcmdldCwgdHlwZSwgY2FsbGJhY2spID0+IHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrKTtcclxuZXhwb3J0IGNvbnN0IGRlbGVnYXRlID0gKHRhcmdldCwgc2VsZWN0b3IsIHR5cGUsIGhhbmRsZXIsIGNhcHR1cmUpID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoRXZlbnQgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIGNvbnN0IHBvdGVudGlhbEVsZW1lbnRzID0gdGFyZ2V0RWxlbWVudC5jbG9zZXN0KHNlbGVjdG9yKTtcclxuXHJcbiAgICAgICAgaWYgKHBvdGVudGlhbEVsZW1lbnRzKSB7XHJcbiAgICAgICAgICAgIGhhbmRsZXIuY2FsbChwb3RlbnRpYWxFbGVtZW50cywgZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgb24odGFyZ2V0LCB0eXBlLCBkaXNwYXRjaEV2ZW50LCAhIWNhcHR1cmUpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldE9mZnNldCA9IChlbGVtZW50KSA9PiB7XHJcbiAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRvcDogcmVjdC50b3AgKyB3aW5kb3cuc2Nyb2xsWSxcclxuICAgICAgICBsZWZ0OiByZWN0LmxlZnQgKyB3aW5kb3cuc2Nyb2xsWFxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWJvdW5jZSA9IChmdW5jLCB3YWl0ID0gMzAwKSA9PiB7XHJcbiAgICBsZXQgaW5EZWJvdW5jZTtcclxuXHJcbiAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcclxuICAgICAgICBpbkRlYm91bmNlICYmIGNsZWFyVGltZW91dChpbkRlYm91bmNlKTtcclxuICAgICAgICBpbkRlYm91bmNlID0gc2V0VGltZW91dCgoKSA9PiBmdW5jKC4uLmFyZ3MpLCB3YWl0KTtcclxuICAgIH07XHJcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge2ZpbmRPbmUsIGZpbmQsIG9ufSBmcm9tIFwiLi9oZWxwZXJcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCIuL01vZGFsXCI7XHJcblxyXG5jb25zdCBhcHAgPSAoKSA9PiB7XHJcblxyXG4gICAgLy95b3V0dWJlIGFwaVxyXG4gICAgY29uc3QgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICB0YWcuc3JjID0gXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9pZnJhbWVfYXBpXCI7XHJcbiAgICBjb25zdCBmaXJzdFNjcmlwdFRhZyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVswXTtcclxuICAgIGZpcnN0U2NyaXB0VGFnLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRhZywgZmlyc3RTY3JpcHRUYWcpO1xyXG5cclxuICAgIGxldCBwbGF5ZXI7XHJcbiAgICBsZXQgcGxheWVyMjtcclxuXHJcbiAgICB3aW5kb3cub25Zb3VUdWJlSWZyYW1lQVBJUmVhZHkgPSAoKSA9PiB7XHJcbiAgICAgICAgcGxheWVyID0gbmV3IFlULlBsYXllcignbWFpbi1pbnRyb19faWZyYW1lJywge1xyXG4gICAgICAgICAgICBwbGF5ZXJWYXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnbW9kZXN0YnJhbmRpbmcnOiAxLFxyXG4gICAgICAgICAgICAgICAgJ2F1dG9wbGF5JzogMCwgLy8g7J6Q64+Z7J6s7IOdXHJcbiAgICAgICAgICAgICAgICAnY29udHJvbHMnOiAxLCAvLyDsu6jtirjroaTrn6zsnZgg7Jyg66y0XHJcbiAgICAgICAgICAgICAgICAnc2hvd2luZm8nOiAwLCAvLyDsnqzsg53smIHsg4Hsl5Ag64yA7ZWcIOygleuztCDsnKDrrLRcclxuICAgICAgICAgICAgICAgICdyZWwnOiAwLCAvLyDtlbTri7kg7JiB7IOB7J20IOyiheulmCDrkJwg7ZuELCDqtIDroKgg64+Z7JiB7IOB7J2EIO2RnOyLnO2VoOyngOydmCDsl6zrtoBcclxuICAgICAgICAgICAgICAgICdsb29wJzogMCwgLy8g67CY67O1IOyerOyDneydmCDsl6zrtoBcclxuICAgICAgICAgICAgICAgICdwbGF5bGlzdCc6ICc1VjNJNWRSQzBVQScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHBsYXllcjIgPSBuZXcgWVQuUGxheWVyKCdldmVudDAxLW1vZGFsLXF1aXpfX2lmcmFtZScsIHtcclxuICAgICAgICAgICAgcGxheWVyVmFyczoge1xyXG4gICAgICAgICAgICAgICAgJ21vZGVzdGJyYW5kaW5nJzogMSxcclxuICAgICAgICAgICAgICAgICdhdXRvcGxheSc6IDAsIC8vIOyekOuPmeyerOyDnVxyXG4gICAgICAgICAgICAgICAgJ2NvbnRyb2xzJzogMSwgLy8g7Luo7Yq466Gk65+s7J2YIOycoOustFxyXG4gICAgICAgICAgICAgICAgJ3Nob3dpbmZvJzogMCwgLy8g7J6s7IOd7JiB7IOB7JeQIOuMgO2VnCDsoJXrs7Qg7Jyg66y0XHJcbiAgICAgICAgICAgICAgICAncmVsJzogMCwgLy8g7ZW064u5IOyYgeyDgeydtCDsooXrpZgg65CcIO2bhCwg6rSA66CoIOuPmeyYgeyDgeydhCDtkZzsi5ztlaDsp4DsnZgg7Jes67aAXHJcbiAgICAgICAgICAgICAgICAnbG9vcCc6IDAsIC8vIOuwmOuztSDsnqzsg53snZgg7Jes67aAXHJcbiAgICAgICAgICAgICAgICAncGxheWxpc3QnOiAnNVYzSTVkUkMwVUEnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBldmVudHM6IHtcclxuICAgICAgICAgICAgICAgIG9uUmVhZHkoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBldmVudC50YXJnZXQucGxheVZpZGVvKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb25TdGF0ZUNoYW5nZShldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3RvcFZpZGVvID0gKCkgPT4ge1xyXG4gICAgICAgIHBsYXllcj8uc3RvcFZpZGVvPy4oKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdG9wVmlkZW8yID0gKCkgPT4ge1xyXG4gICAgICAgIHBsYXllcjI/LnN0b3BWaWRlbz8uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9tb2RhbCBjbG9zZSh4KeuyhO2KvCDtgbTrpq3si5xcclxuICAgIC8vIGNvbnN0IG1vZGFsQ2xvc2VCdXR0b25zID0gZmluZCgnLm1vZGFsX19jbG9zZS1idXR0b24nKTtcclxuICAgIC8vIG1vZGFsQ2xvc2VCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgIC8vICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgIC8vICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICAvL25hdiBldmVudFxyXG4gICAgKCgpID0+IHtcclxuICAgICAgICBjb25zdCBuYXYgPSBmaW5kT25lKCcubWFpbi1ldmVudF9fbmF2Jyk7XHJcbiAgICAgICAgY29uc3QgbmF2TWVudXMgPSBbLi4ubmF2LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKV07XHJcbiAgICAgICAgY29uc3Qgc2VjdGlvbnMgPSBuYXZNZW51cy5yZWR1Y2UoKHNlY3Rpb25zLCBtZW51KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkID0gbWVudS5oYXNoO1xyXG4gICAgICAgICAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQuc3Vic3RyaW5nKDEpKTtcclxuXHJcbiAgICAgICAgICAgIHNlY3Rpb25zW2lkXSA9IHNlY3Rpb247XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gc2VjdGlvbnM7XHJcbiAgICAgICAgfSwge30pO1xyXG4gICAgICAgIGNvbnN0IHJldmVyc2VTZWN0aW9ucyA9IE9iamVjdC5rZXlzKHNlY3Rpb25zKS5yZXZlcnNlKCkubWFwKGlkID0+IHNlY3Rpb25zW2lkXSk7XHJcbiAgICAgICAgY29uc3QgZ2V0T2Zmc2V0VG9wID0gKHRhcmdldCkgPT4gTWF0aC5jZWlsKHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB3aW5kb3cuc2Nyb2xsWSAtIG5hdi5jbGllbnRIZWlnaHQpO1xyXG4gICAgICAgIGNvbnN0IG1vdmVNZW51ID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpZCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCdhJykuaGFzaDtcclxuICAgICAgICAgICAgY29uc3Qgc2VjdGlvbiA9IHNlY3Rpb25zW2lkXTtcclxuICAgICAgICAgICAgY29uc3QgdG9wID0gZ2V0T2Zmc2V0VG9wKHNlY3Rpb24pO1xyXG5cclxuICAgICAgICAgICAgd2luZG93LnNjcm9sbCh7XHJcbiAgICAgICAgICAgICAgICB0b3AsXHJcbiAgICAgICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3Qgb25TY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBzZWN0aW9uSW5kZXggPSByZXZlcnNlU2VjdGlvbnMuZmluZEluZGV4KHNlY3Rpb24gPT4gfn4od2luZG93LnNjcm9sbFkpID49IGdldE9mZnNldFRvcChzZWN0aW9uKSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2VjdGlvbkluZGV4IDwgMCkgc2VjdGlvbkluZGV4ID0gbmF2TWVudXMubGVuZ3RoIC0gMTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG5hdkluZGV4ID0gbmF2TWVudXMubGVuZ3RoIC0gMSAtIHNlY3Rpb25JbmRleDtcclxuXHJcbiAgICAgICAgICAgIG5hdk1lbnVzLmZvckVhY2goKG1lbnUsIGluZGV4KSA9PiBtZW51LmNsYXNzTGlzdFtuYXZJbmRleCA9PT0gaW5kZXggPyAnYWRkJyA6ICdyZW1vdmUnXSgnYWN0aXZlJykpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIG5hdk1lbnVzLmZvckVhY2gobWVudSA9PiBtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbW92ZU1lbnUpKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG4gICAgfSkoKTtcclxuXHJcbiAgICAvL2V2ZW50MDFcclxuICAgICgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZXZlbnQwMSA9IGZpbmRPbmUoJyNtYWluLWV2ZW50LTAxJyk7XHJcbiAgICAgICAgY29uc3QgZXZlbnQwMUJ1dHRvbiA9IGZpbmRPbmUoJy5tYWluLWV2ZW50LTAxX19idXR0b24nLCBldmVudDAxKTtcclxuXHJcbiAgICAgICAgY29uc3QgbW9kYWwgPSBuZXcgTW9kYWwoKTtcclxuICAgICAgICBjb25zdCBldmVudDAxTW9kYWxXcmFwID0gZmluZE9uZSgnLmV2ZW50MDEtbW9kYWwtd3JhcCcpO1xyXG4gICAgICAgIGNvbnN0IGZvcm0gPSBmaW5kT25lKCdmb3JtJywgZXZlbnQwMU1vZGFsV3JhcCk7XHJcblxyXG4gICAgICAgIC8vIO2AtOymiCBtb2RhbFxyXG4gICAgICAgIGNvbnN0IHF1aXpNb2RhbCA9IGZpbmRPbmUoJyNldmVudDAxLW1vZGFsLXF1aXonKTtcclxuICAgICAgICBjb25zdCBxdWl6Q2hlY2tMaXN0cyA9IGZpbmQoJ1tuYW1lPVwicXVpelwiXScsIHF1aXpNb2RhbCk7XHJcbiAgICAgICAgY29uc3QgcXVpelVzYSA9IGZpbmRPbmUoJ1t2YWx1ZT1cInVzYVwiXScsIHF1aXpNb2RhbCk7XHJcbiAgICAgICAgY29uc3QgcXVpek1vZGFsQnV0dG9uID0gZmluZE9uZSgnLmV2ZW50MDEtbW9kYWwtcXVpel9fYnV0dG9uIGJ1dHRvbicsIHF1aXpNb2RhbCk7XHJcblxyXG4gICAgICAgIC8vIO2AtOymiCDqsrDqs7wgbW9kYWxcclxuICAgICAgICBjb25zdCByZXN1bHRNb2RhbCA9IGZpbmRPbmUoJyNldmVudDAxLW1vZGFsLXJlc3VsdCcpO1xyXG4gICAgICAgIGNvbnN0IGFuc3dlciA9IGZpbmRPbmUoJy5ldmVudDAxLW1vZGFsLXJlc3VsdF9fY29udGVudC0tYW5zd2VyJyk7XHJcbiAgICAgICAgY29uc3QgZmFpbCA9IGZpbmRPbmUoJy5ldmVudDAxLW1vZGFsLXJlc3VsdF9fY29udGVudC0tZmFpbCcpO1xyXG5cclxuICAgICAgICAvLyDqsJzsnbjsoJXrs7QgbW9kYWxcclxuICAgICAgICBjb25zdCBpbmZvcm1hdGlvbk1vZGFsID0gZmluZE9uZSgnI2V2ZW50MDEtbW9kYWwtaW5mb3JtYXRpb24nKTtcclxuICAgICAgICBjb25zdCB1c2VyTmFtZSA9IGZpbmRPbmUoJ1tuYW1lPVwidXNlcl9uYW1lXCJdJywgZm9ybSk7XHJcbiAgICAgICAgY29uc3QgdXNlck5hbWVDaGVjayA9IC9eW+qwgC3tnqNhXSskLztcclxuICAgICAgICBjb25zdCB1c2VyUGhvbmUgPSBmaW5kT25lKCdbbmFtZT1cInVzZXJfcGhvbmVcIl0nLCBmb3JtKTtcclxuICAgICAgICBjb25zdCB1c2VyUGhvbmVDaGVjayA9IC9eWzAtOV0rJC87XHJcbiAgICAgICAgY29uc3QgdXNlclBob25lQ2hlY2syID0gL14wMShbMHwxfDZ8N3w4fDldKS0/KFswLTldezMsNH0pLT8oWzAtOV17NH0pJC87XHJcbiAgICAgICAgY29uc3QgYWdyZWUxID0gZmluZE9uZSgnW25hbWU9XCJpc19hZ3JlZTFcIl0nLCBmb3JtKTtcclxuICAgICAgICBjb25zdCBhZ3JlZTMgPSBmaW5kKCdbbmFtZT1cImlzX2FncmVlM1wiXScsIGZvcm0pO1xyXG4gICAgICAgIGNvbnN0IGFncmVlT2xkZXIgPSBmaW5kT25lKCdbbmFtZT1cIjE0b2xkZXJcIl0nLCBmb3JtKTtcclxuICAgICAgICBjb25zdCBnZW5kZXIgPSBmaW5kT25lKCdbbmFtZT1cInVzZXJfZ2VuZGVyXCJdJywgZm9ybSk7XHJcbiAgICAgICAgY29uc3QgYWdlID0gZmluZE9uZSgnW25hbWU9XCJ1c2VyX2FnZVwiXScsIGZvcm0pO1xyXG4gICAgICAgIGNvbnN0IHJlc2lkZW5jZSA9IGZpbmRPbmUoJ1tuYW1lPVwicmVzaWRlbmNlXCJdJywgZm9ybSk7XHJcbiAgICAgICAgY29uc3QgcmVzaWRlbmNlVHlwZSA9IGZpbmRPbmUoJ1tuYW1lPVwicmVzaWRlbmNlX3R5cGVcIl0nLCBmb3JtKTtcclxuICAgICAgICBsZXQgaXNRdWl6ID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIOydtOuypO2KuCDssLjsl6zrsoTtirwg7YG066at7IucXHJcbiAgICAgICAgZXZlbnQwMUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgZmV0Y2goJy9hcGkvYnV0dG9uLWNsaWNrLnBocD9ndWJ1bj1xdWl6Jywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyDshKDssKnsiJwg66eI6rCQ7J286rK97JqwXHJcbiAgICAgICAgICAgIGZldGNoKCcvYXBpL3F1aXotY291bnQucGhwJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBmb3JtLm1ldGhvZCxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RhbC5vcGVuKHF1aXpNb2RhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BWaWRlbygpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChkYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIG1vZGFsLm9wZW4ocXVpek1vZGFsKTtcclxuICAgICAgICAgICAgLy8gc3RvcFZpZGVvKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIOygleuLtSDtmZXsnbgg67KE7Yq8IO2BtOumreyLnFxyXG4gICAgICAgIHF1aXpNb2RhbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHF1aXpDaGVja0xpc3RzLmV2ZXJ5KGlucHV0ID0+ICFpbnB1dC5jaGVja2VkKSkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ+ygleuLteydhCDshKDtg53tlbTso7zshLjsmpQuJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXF1aXpVc2EuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v7Jik64u1XHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcFZpZGVvMigpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsLmNsb3NlKHF1aXpNb2RhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWwub3BlbihyZXN1bHRNb2RhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5zd2VyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgZmFpbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgICAgICByZUNoYWxsZW5nZSgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+ygleuLtVxyXG4gICAgICAgICAgICAgICAgICAgIHN0b3BWaWRlbzIoKTtcclxuICAgICAgICAgICAgICAgICAgICBtb2RhbC5jbG9zZShxdWl6TW9kYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsLm9wZW4ocmVzdWx0TW9kYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZhaWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICBhbnN3ZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5zd2VyRXZlbnQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyDsmKTri7Xsnbzsi5wg7J6s7LC47JesIOydtOuypO2KuFxyXG4gICAgICAgIGNvbnN0IHJlQ2hhbGxlbmdlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSBmaW5kT25lKCdbdHlwZT1idXR0b25dJywgZmFpbCk7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGZvcm0ucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgIG1vZGFsLmNsb3NlKHJlc3VsdE1vZGFsKTtcclxuICAgICAgICAgICAgICAgIG1vZGFsLm9wZW4ocXVpek1vZGFsKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8g7KCV64u17J287IucIOqwnOyduOygleuztOyeheugpeywvSDrnYTsmrDquLBcclxuICAgICAgICBjb25zdCBhbnN3ZXJFdmVudCA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gZmluZE9uZSgnW3R5cGU9YnV0dG9uXScsIGFuc3dlcik7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGZvcm0ucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgIG1vZGFsLmNsb3NlKHJlc3VsdE1vZGFsKTtcclxuICAgICAgICAgICAgICAgIG1vZGFsLm9wZW4oaW5mb3JtYXRpb25Nb2RhbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGV2ZW50MDFWYWxpZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCF1c2VyTmFtZS52YWx1ZS50cmltKCkpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCfsnbTrpoTsnYQg7J6F66Cl7ZW0IOyjvOyEuOyalCEnKTtcclxuICAgICAgICAgICAgICAgIHVzZXJOYW1lLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghdXNlck5hbWVDaGVjay50ZXN0KHVzZXJOYW1lLnZhbHVlLnRyaW0oKSkpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCftlZzquIDroZwg7J6F66Cl7ZW0IOyjvOyEuOyalC4nKTtcclxuICAgICAgICAgICAgICAgIHVzZXJOYW1lLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghdXNlclBob25lLnZhbHVlLnRyaW0oKSkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ+yXsOudveyymOulvCDsnoXroKXtlbQg7KO87IS47JqUIScpO1xyXG4gICAgICAgICAgICAgICAgdXNlclBob25lLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghdXNlclBob25lQ2hlY2sudGVzdCh1c2VyUGhvbmUudmFsdWUudHJpbSgpKSkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ+yIq+yekOunjCDsnoXroKUg6rCA64ql7ZWp64uI64ukLicpO1xyXG4gICAgICAgICAgICAgICAgdXNlclBob25lLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghdXNlclBob25lQ2hlY2syLnRlc3QodXNlclBob25lLnZhbHVlLnRyaW0oKSkpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCfsl7Drnb3sspjrpbwg7ZmV7J247ZW0IOyjvOyEuOyalC4nKTtcclxuICAgICAgICAgICAgICAgIHVzZXJQaG9uZS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZighZ2VuZGVyLnZhbHVlLnRyaW0oKSkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ+yEseuzhOydhCDshKDtg53tlbQg7KO87IS47JqULicpO1xyXG4gICAgICAgICAgICAgICAgZ2VuZGVyLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKCFhZ2UudmFsdWUudHJpbSgpKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgn7Jew66C564yA66W8IOyEoO2Dne2VtCDso7zshLjsmpQuJyk7XHJcbiAgICAgICAgICAgICAgICBhZ2UuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoIXJlc2lkZW5jZS52YWx1ZS50cmltKCkpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCfqsbDso7zsp4Dsl63snYQg7ISg7YOd7ZW0IOyjvOyEuOyalC4nKTtcclxuICAgICAgICAgICAgICAgIHJlc2lkZW5jZS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZighcmVzaWRlbmNlVHlwZS52YWx1ZS50cmltKCkpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCfqsbDso7zsnKDtmJXsnYQg7ISg7YOd7ZW0IOyjvOyEuOyalC4nKTtcclxuICAgICAgICAgICAgICAgIHJlc2lkZW5jZVR5cGUuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFhZ3JlZTEuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ+qwnOyduOygleuztCDsiJjsp5Eg7J207Jqp7JeQIOuPmeydmO2VtOyjvOyEuOyalC4nKTtcclxuICAgICAgICAgICAgICAgIGFncmVlMS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBpZiAoIWFncmVlMi5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBhbGVydCgn6rCc7J247KCV67O0IOy3qOq4ieychO2DgeyXkCDrj5nsnZjtlbTso7zshLjsmpQuJyk7XHJcbiAgICAgICAgICAgIC8vICAgICBhZ3JlZTIuZm9jdXMoKTtcclxuICAgICAgICAgICAgLy8gICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgLy8gaWYgKCFhZ3JlZTMuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAvLyAgICAgYWxlcnQoJ+uniOy8gO2MhSDtmZzsmqnsl5Ag64+Z7J2Y7ZW07KO87IS47JqULicpO1xyXG4gICAgICAgICAgICAvLyAgICAgYWdyZWUzLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghYWdyZWUzLnNvbWUoaW5wdXQgPT4gaW5wdXQuY2hlY2tlZCkpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCfrp4jsvIDtjIUg64+Z7J2Y7Jes67aA66W8IO2ZleyduO2VtCDso7zshLjsmpQnKTtcclxuICAgICAgICAgICAgICAgIGFncmVlM1swXS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWFncmVlT2xkZXIuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ+unjCAxNOyEuCDsnbTsg4Hrp4wg7LC47JesIOqwgOuKpe2VqeuLiOuLpC4nKTtcclxuICAgICAgICAgICAgICAgIGFncmVlT2xkZXIuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8g7J2R66qo7JmE66OMIOuyhO2KvCDtgbTrpq3si5xcclxuICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGV2ZW50MDFWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmZXRjaChmb3JtLmFjdGlvbiwge1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogZm9ybS5tZXRob2QsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9keTogZm9ybURhdGFcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChkYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSkoKTtcclxuXHJcbiAgICAvL2V2ZW50MDJcclxuICAgICgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbW9kYWwgPSBuZXcgTW9kYWwoKTtcclxuICAgICAgICBjb25zdCBldmVudDAyID0gZmluZE9uZSgnI21haW4tZXZlbnQtMDInKTtcclxuICAgICAgICBjb25zdCBldmVudDAyQnV0dG9uID0gZmluZE9uZSgnLm1haW4tZXZlbnQtMDJfX2J1dHRvbicsIGV2ZW50MDIpO1xyXG4gICAgICAgIGNvbnN0IGV2ZW50MDJNb2RhbFdyYXAgPSBmaW5kT25lKCcuZXZlbnQwMi1tb2RhbC13cmFwJyk7XHJcbiAgICAgICAgY29uc3QgZm9ybSA9IGZpbmRPbmUoJ2Zvcm0nLCBldmVudDAyTW9kYWxXcmFwKTtcclxuXHJcbiAgICAgICAgLy8gU1NVTCDrqqjri6xcclxuICAgICAgICBjb25zdCBzc3VsTW9kYWwgPSBmaW5kT25lKCcjZXZlbnQwMi1tb2RhbC1zc3VsJyk7XHJcbiAgICAgICAgY29uc3Qgc3N1bE1vZGFsQnV0dG9uID0gZmluZE9uZSgnLmV2ZW50MDItbW9kYWwtc3N1bF9fYnV0dG9uIGJ1dHRvbicsIHNzdWxNb2RhbCk7XHJcbiAgICAgICAgY29uc3Qgc3N1bFRpdGxlID0gZmluZE9uZSgnW25hbWU9XCJzc3VsX3RpdGxlXCJdJyk7XHJcbiAgICAgICAgY29uc3Qgc3N1bENvbnRlbnQgPSBmaW5kT25lKCdbbmFtZT1cInNzdWxfY29udGVudFwiXScpO1xyXG4gICAgICAgIGNvbnN0IHNzdWxNb2RhbENsb3NlQnV0dG9uID0gZmluZE9uZSgnLm1vZGFsX19jbG9zZS1idXR0b24nLCBzc3VsTW9kYWwpO1xyXG4gICAgICAgIGNvbnN0IGZpbGVOYW1lQm94ID0gZmluZE9uZSgnLmZpbGUtbmFtZS1ib3gnLCBzc3VsTW9kYWwpO1xyXG4gICAgICAgIGNvbnN0IHNzdWxVcmwgPSBmaW5kT25lKCdbbmFtZT1cInNzdWxfdXJsXCJdJyk7XHJcblxyXG4gICAgICAgIC8vIOyjvOyGjOqygOyDiVxyXG4gICAgICAgIGNvbnN0IGFkZHJlc3NTZWFyY2ggPSBmaW5kT25lKCcuYWRkcmVzcy1zZWFyY2gnKTtcclxuICAgICAgICBjb25zdCBhZGRyZXNzU2VhcmNoQ2xvc2VCdXR0b24gPSBmaW5kT25lKCcjYnRuQ2xvc2VMYXllcicpO1xyXG5cclxuICAgICAgICAvLyDsmrDtjrjrsojtmLgg7LC+6riwIO2ZlOuptOydhCDrhKPsnYQgZWxlbWVudFxyXG4gICAgICAgIGNvbnN0IGVsZW1lbnRfbGF5ZXIgPSBmaW5kT25lKCcuYWRkcmVzcy1sYXllci13cmFwJyk7XHJcbiAgICAgICAgY29uc3QgZGltID0gZmluZE9uZSgnLmRpbScpO1xyXG5cclxuICAgICAgICAvLyDqsJzsnbjsoJXrs7TsnoXroKXssL0g66qo64usXHJcbiAgICAgICAgY29uc3QgaW5mb3JtYXRpb25Nb2RhbCA9IGZpbmRPbmUoJyNldmVudDAyLW1vZGFsLWluZm9ybWF0aW9uJyk7XHJcbiAgICAgICAgY29uc3QgdXNlck5hbWUgPSBmaW5kT25lKCdbbmFtZT1cInVzZXJfbmFtZVwiXScsIGZvcm0pO1xyXG4gICAgICAgIGNvbnN0IHVzZXJOYW1lQ2hlY2sgPSAvXlvqsIAt7Z6jYV0rJC87XHJcbiAgICAgICAgY29uc3QgdXNlclBob25lID0gZmluZE9uZSgnW25hbWU9XCJ1c2VyX3Bob25lXCJdJywgZm9ybSk7XHJcbiAgICAgICAgY29uc3QgdXNlclBob25lQ2hlY2sgPSAvXlswLTldKyQvO1xyXG4gICAgICAgIGNvbnN0IHVzZXJQaG9uZUNoZWNrMiA9IC9eMDEwLT8oWzAtOV17NH0pLT8oWzAtOV17NH0pJC87XHJcbiAgICAgICAgY29uc3QgdXNlckFkcmVzcyA9IGZpbmRPbmUoJ1tuYW1lPVwiemlwY29kZVwiXScsIGZvcm0pO1xyXG4gICAgICAgIGNvbnN0IHVzZXJBZHJlc3MyID0gZmluZE9uZSgnW25hbWU9XCJhZGRyMlwiXScsIGZvcm0pO1xyXG4gICAgICAgIGNvbnN0IGFncmVlMSA9IGZpbmRPbmUoJ1tuYW1lPVwiaXNfYWdyZWUxXCJdJywgZm9ybSk7XHJcbiAgICAgICAgY29uc3QgYWdyZWUzID0gZmluZCgnW25hbWU9XCJpc19hZ3JlZTNcIl0nLCBmb3JtKTtcclxuICAgICAgICBjb25zdCBhZ3JlZU9sZGVyID0gZmluZE9uZSgnW25hbWU9XCIxNG9sZGVyXCJdJywgZm9ybSk7XHJcbiAgICAgICAgY29uc3QgZ2VuZGVyID0gZmluZE9uZSgnW25hbWU9XCJ1c2VyX2dlbmRlclwiXScsIGZvcm0pO1xyXG4gICAgICAgIGNvbnN0IGFnZSA9IGZpbmRPbmUoJ1tuYW1lPVwidXNlcl9hZ2VcIl0nLCBmb3JtKTtcclxuICAgICAgICBjb25zdCByZXNpZGVuY2UgPSBmaW5kT25lKCdbbmFtZT1cInJlc2lkZW5jZVwiXScsIGZvcm0pO1xyXG4gICAgICAgIGNvbnN0IHJlc2lkZW5jZVR5cGUgPSBmaW5kT25lKCdbbmFtZT1cInJlc2lkZW5jZV90eXBlXCJdJywgZm9ybSk7XHJcbiAgICAgICAgY29uc3QgaW5mb3JtYXRpb25Nb2RhbENsb3NlQnV0dG9uID0gZmluZE9uZSgnLm1vZGFsX19jbG9zZS1idXR0b24nLCBpbmZvcm1hdGlvbk1vZGFsKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3N1bFZhbGlkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXNzdWxUaXRsZS52YWx1ZS50cmltKCkpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCfsjbAg7KCc66qp7J2EIOyeheugpe2VtCDso7zshLjsmpQhJyk7XHJcbiAgICAgICAgICAgICAgICBzc3VsVGl0bGUuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHNzdWxUaXRsZS52YWx1ZS5sZW5ndGggPiAyMCkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJzIw7J6QIOydtOuCtOuhnCDsnoXroKXtlbQg7KO87IS47JqUIScpO1xyXG4gICAgICAgICAgICAgICAgc3N1bFRpdGxlLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghc3N1bENvbnRlbnQudmFsdWUudHJpbSgpKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgn7I2wIOuCtOyaqeydhCDsnoXroKXtlbQg7KO87IS47JqUIScpO1xyXG4gICAgICAgICAgICAgICAgc3N1bENvbnRlbnQuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHNzdWxDb250ZW50LnZhbHVlLmxlbmd0aCA+IDUwMCkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJzUwMOyekCDsnbTrgrTroZwg7J6F66Cl7ZW0IOyjvOyEuOyalCEnKTtcclxuICAgICAgICAgICAgICAgIHNzdWxDb250ZW50LmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHNzdWxVcmwudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlmICghL15odHRwcz86XFwvXFwvXFxTezN9L2kudGVzdChzc3VsVXJsLnZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCfsmKzrsJTrpbggVVJMIO2YleyLneydtCDslYTri5nri4jri6QuIGh0dHDroZwg7Iuc7J6R7ZWY64qUIFVSTOuhnCDri6Tsi5wg7J6F66Cl7ZW0IOyjvOyEuOyalC4nKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIOyNsCDtkoDquLAg67KE7Yq8IO2BtOumreyLnFxyXG4gICAgICAgIGV2ZW50MDJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZmlsZU5hbWVCb3guaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgICAgICAgICBmZXRjaCgnL2FwaS9idXR0b24tY2xpY2sucGhwP2d1YnVuPXNzdWwnLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIG1vZGFsLm9wZW4oc3N1bE1vZGFsKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8g7I2wIOyekeyEsSDrqqjri6zsl5DshJwgeOuyhO2KvCDtgbTrpq3si5xcclxuICAgICAgICBzc3VsTW9kYWxDbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBmb3JtLnJlc2V0KCk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8g7I2wIOygnOuqqSDrgrTsmqkg7J6F66Cl7IucIOq4gOyekOyImCDsoJztlZxcclxuICAgICAgICBzc3VsVGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNzdWxUaXRsZVZhbHVlID0gc3N1bFRpdGxlLnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNzdWxUaXRsZVZhbHVlLmxlbmd0aCA+IDIwKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgnMjDsnpAg7J2064K066GcIOyeheugpe2VtCDso7zshLjsmpQhJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzc3VsQ29udGVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3N1bENvbnRlbnRWYWx1ZSA9IHNzdWxDb250ZW50LnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNzdWxDb250ZW50VmFsdWUubGVuZ3RoID4gNTAwKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgnNTAw7J6QIOydtOuCtOuhnCDsnoXroKXtlbQg7KO87IS47JqUIScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8g7YyM7J28IOyyqOu2gCDtgbTrpq3si5xcclxuICAgICAgICBjb25zdCBmaWxlQnV0dG9uID0gZmluZE9uZSgnaW5wdXRbdHlwZT1cImZpbGVcIl0nLCBzc3VsTW9kYWwpO1xyXG5cclxuICAgICAgICBmaWxlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZmlsZU5hbWUgPSBmaWxlQnV0dG9uLmZpbGVzWzBdLm5hbWU7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbGVGb3JtID0gLyguKj8pXFwuKGdpZnxwbmd8anBnfGpwZWcpJC87XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbGVTaXplID0gZmlsZUJ1dHRvbi5maWxlc1swXS5zaXplO1xyXG4gICAgICAgICAgICBjb25zdCBtYXhTaXplID0gMTAgKiAxMDI0ICogMTAyNDtcclxuXHJcbiAgICAgICAgICAgIGlmICghZmlsZU5hbWUudG9Mb3dlckNhc2UoKS5tYXRjaChmaWxlRm9ybSkpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwi7KeA7JuQ7ZWY64qUIO2MjOydvCDtmZXsnqXsnpDqsIAg7JWE64uZ64uI64ukLlwiKTtcclxuICAgICAgICAgICAgICAgIGZpbGVOYW1lQm94LmlubmVySFRNTCA9ICcnXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmlsZVNpemUgPiBtYXhTaXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ+ydtOuvuOyngOuKlCDstZzrjIAgMTBNQuq5jOyngOunjCDrk7HroZ3snbQg6rCA64ql7ZWp64uI64ukLicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lQm94LmlubmVySFRNTCA9ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZUJveC5pbm5lckhUTUwgPSBmaWxlTmFtZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIOqwnOyduOygleuztOyeheugpSDrsoTtirwg7YG066at7IucXHJcbiAgICAgICAgc3N1bE1vZGFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGlmIChzc3VsVmFsaWQoKSkge1xyXG4gICAgICAgICAgICAgICAgbW9kYWwuY2xvc2Uoc3N1bE1vZGFsKTtcclxuICAgICAgICAgICAgICAgIG1vZGFsLm9wZW4oaW5mb3JtYXRpb25Nb2RhbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8g6rCc7J247KCV67O07J6F66Cl7LC9IOuqqOuLrCB467KE7Yq8IO2BtOumreyLnFxyXG4gICAgICAgIGluZm9ybWF0aW9uTW9kYWxDbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBmb3JtLnJlc2V0KCk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gZXZlbnQwMiDsnKDtmqjshLHqsoDsgqxcclxuICAgICAgICBjb25zdCBzc3VsVmFsaWQyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXVzZXJOYW1lLnZhbHVlLnRyaW0oKSkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ+ydtOumhOydhCDsnoXroKXtlbQg7KO87IS47JqUIScpO1xyXG4gICAgICAgICAgICAgICAgdXNlck5hbWUuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCF1c2VyTmFtZUNoZWNrLnRlc3QodXNlck5hbWUudmFsdWUudHJpbSgpKSkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ+2VnOq4gOuhnCDsnoXroKXtlbQg7KO87IS47JqULicpO1xyXG4gICAgICAgICAgICAgICAgdXNlck5hbWUuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCF1c2VyUGhvbmUudmFsdWUudHJpbSgpKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgn7Jew65297LKY66W8IOyeheugpe2VtCDso7zshLjsmpQhJyk7XHJcbiAgICAgICAgICAgICAgICB1c2VyUGhvbmUuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCF1c2VyUGhvbmVDaGVjay50ZXN0KHVzZXJQaG9uZS52YWx1ZS50cmltKCkpKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgn7Iir7J6Q66eMIOyeheugpSDqsIDriqXtlanri4jri6QuJyk7XHJcbiAgICAgICAgICAgICAgICB1c2VyUGhvbmUuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCF1c2VyUGhvbmVDaGVjazIudGVzdCh1c2VyUGhvbmUudmFsdWUudHJpbSgpKSkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ+yXsOudveyymOulvCDtmZXsnbjtlbQg7KO87IS47JqULicpO1xyXG4gICAgICAgICAgICAgICAgdXNlclBob25lLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghdXNlckFkcmVzcy52YWx1ZS50cmltKCkpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCfso7zshozrpbwg7J6F66Cl7ZW0IOyjvOyEuOyalCEnKTtcclxuICAgICAgICAgICAgICAgIHVzZXJBZHJlc3MuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCF1c2VyQWRyZXNzMi52YWx1ZS50cmltKCkpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCfsg4HshLjso7zshozrpbwg7J6F66Cl7ZW0IOyjvOyEuOyalCEnKTtcclxuICAgICAgICAgICAgICAgIHVzZXJBZHJlc3MyLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKCFnZW5kZXIudmFsdWUudHJpbSgpKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgn7ISx67OE7J2EIOyEoO2Dne2VtCDso7zshLjsmpQuJyk7XHJcbiAgICAgICAgICAgICAgICBnZW5kZXIuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoIWFnZS52YWx1ZS50cmltKCkpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCfsl7DroLnrjIDrpbwg7ISg7YOd7ZW0IOyjvOyEuOyalC4nKTtcclxuICAgICAgICAgICAgICAgIGFnZS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZighcmVzaWRlbmNlLnZhbHVlLnRyaW0oKSkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ+qxsOyjvOyngOyXreydhCDshKDtg53tlbQg7KO87IS47JqULicpO1xyXG4gICAgICAgICAgICAgICAgcmVzaWRlbmNlLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKCFyZXNpZGVuY2VUeXBlLnZhbHVlLnRyaW0oKSkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ+qxsOyjvOycoO2YleydhCDshKDtg53tlbQg7KO87IS47JqULicpO1xyXG4gICAgICAgICAgICAgICAgcmVzaWRlbmNlVHlwZS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWFncmVlMS5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgn6rCc7J247KCV67O0IOyImOynkSDsnbTsmqnsl5Ag64+Z7J2Y7ZW07KO87IS47JqULicpO1xyXG4gICAgICAgICAgICAgICAgYWdyZWUxLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGlmICghYWdyZWUyLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgLy8gICAgIGFsZXJ0KCfqsJzsnbjsoJXrs7Qg7Leo6riJ7JyE7YOB7JeQIOuPmeydmO2VtOyjvOyEuOyalC4nKTtcclxuICAgICAgICAgICAgLy8gICAgIGFncmVlMi5mb2N1cygpO1xyXG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICAvLyBpZiAoIWFncmVlMy5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBhbGVydCgn66eI7LyA7YyFIO2ZnOyaqeyXkCDrj5nsnZjtlbTso7zshLjsmpQuJyk7XHJcbiAgICAgICAgICAgIC8vICAgICBhZ3JlZTMuZm9jdXMoKTtcclxuICAgICAgICAgICAgLy8gICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFhZ3JlZTMuc29tZShpbnB1dCA9PiBpbnB1dC5jaGVja2VkKSkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ+uniOy8gO2MhSDrj5nsnZjsl6zrtoDrpbwg7ZmV7J247ZW0IOyjvOyEuOyalCcpO1xyXG4gICAgICAgICAgICAgICAgYWdyZWUzWzBdLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghYWdyZWVPbGRlci5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgn66eMIDE07IS4IOydtOyDgeunjCDssLjsl6wg6rCA64ql7ZWp64uI64ukLicpO1xyXG4gICAgICAgICAgICAgICAgYWdyZWVPbGRlci5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v7J2R66qo7JmE66OMIOuyhO2KvCDtgbTrpq3si5xcclxuICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNzdWxWYWxpZDIoKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XHJcblxyXG4gICAgICAgICAgICAgICAgZmluZE9uZSgnYm9keScpLmluZXJ0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBmZXRjaChmb3JtLmFjdGlvbiwge1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogZm9ybS5tZXRob2QsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9keTogZm9ybURhdGFcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5yZXN1bHQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChkYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIC8vIOuLpOydjCDsp4Drj4QgYXBpXHJcbiAgICAgICAgY29uc3QgY2xvc2VEYXVtUG9zdGNvZGUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGlmcmFtZeydhCDrhKPsnYAgZWxlbWVudOulvCDslYjrs7TsnbTqsowg7ZWc64ukLlxyXG4gICAgICAgICAgICBlbGVtZW50X2xheWVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIGRpbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkYXVtQXBpID0gKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgbmV3IGRhdW0uUG9zdGNvZGUoe1xyXG4gICAgICAgICAgICAgICAgb25jb21wbGV0ZTogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDqsoDsg4nqsrDqs7wg7ZWt66qp7J2EIO2BtOumre2WiOydhOuVjCDsi6TtlontlaAg7L2U65Oc66W8IOyekeyEse2VmOuKlCDrtoDrtoQuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOqwgSDso7zshozsnZgg64W47LacIOq3nOy5meyXkCDrlLDrnbwg7KO87IaM66W8IOyhsO2Vqe2VnOuLpC5cclxuICAgICAgICAgICAgICAgICAgICAvLyDrgrTroKTsmKTripQg67OA7IiY6rCAIOqwkuydtCDsl4bripQg6rK97Jqw7JeUIOqzteuwsSgnJynqsJLsnYQg6rCA7KeA66+A66GcLCDsnbTrpbwg7LC46rOg7ZWY7JesIOu2hOq4sCDtlZzri6QuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFkZHIgPSAnJzsgLy8g7KO87IaMIOuzgOyImFxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBleHRyYUFkZHIgPSAnJzsgLy8g7LC46rOg7ZWt66qpIOuzgOyImFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL+yCrOyaqeyekOqwgCDshKDtg53tlZwg7KO87IaMIO2DgOyeheyXkCDrlLDrnbwg7ZW064u5IOyjvOyGjCDqsJLsnYQg6rCA7KC47Jio64ukLlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnVzZXJTZWxlY3RlZFR5cGUgPT09ICdSJykgeyAvLyDsgqzsmqnsnpDqsIAg64+E66Gc66qFIOyjvOyGjOulvCDshKDtg53tlojsnYQg6rK97JqwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZHIgPSBkYXRhLnJvYWRBZGRyZXNzO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7IC8vIOyCrOyaqeyekOqwgCDsp4Drsogg7KO87IaM66W8IOyEoO2Dne2WiOydhCDqsr3smrAoSilcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkciA9IGRhdGEuamlidW5BZGRyZXNzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g7IKs7Jqp7J6Q6rCAIOyEoO2Dne2VnCDso7zshozqsIAg64+E66Gc66qFIO2DgOyeheydvOuVjCDssLjqs6Dtla3rqqnsnYQg7KGw7ZWp7ZWc64ukLlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnVzZXJTZWxlY3RlZFR5cGUgPT09ICdSJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDrspXsoJXrj5nrqoXsnbQg7J6I7J2EIOqyveyasCDstpTqsIDtlZzri6QuICjrspXsoJXrpqzripQg7KCc7Jm4KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDrspXsoJXrj5nsnZgg6rK97JqwIOuniOyngOuniSDrrLjsnpDqsIAgXCLrj5kv66GcL+qwgFwi66GcIOuBneuCnOuLpC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuYm5hbWUgIT09ICcnICYmIC9b64+ZfOuhnHzqsIBdJC9nLnRlc3QoZGF0YS5ibmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhQWRkciArPSBkYXRhLmJuYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOqxtOusvOuqheydtCDsnojqs6AsIOqzteuPmeyjvO2DneydvCDqsr3smrAg7LaU6rCA7ZWc64ukLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5idWlsZGluZ05hbWUgIT09ICcnICYmIGRhdGEuYXBhcnRtZW50ID09PSAnWScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhQWRkciArPSAoZXh0cmFBZGRyICE9PSAnJyA/ICcsICcgKyBkYXRhLmJ1aWxkaW5nTmFtZSA6IGRhdGEuYnVpbGRpbmdOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDtkZzsi5ztlaAg7LC46rOg7ZWt66qp7J20IOyeiOydhCDqsr3smrAsIOq0hO2YuOq5jOyngCDstpTqsIDtlZwg7LWc7KKFIOusuOyekOyXtOydhCDrp4zrk6Dri6QuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleHRyYUFkZHIgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRyYUFkZHIgPSAnICgnICsgZXh0cmFBZGRyICsgJyknO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOyhsO2VqeuQnCDssLjqs6Dtla3rqqnsnYQg7ZW064u5IO2VhOuTnOyXkCDrhKPripTri6QuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2FtcGxlMl9leHRyYUFkZHJlc3NcIikudmFsdWUgPSBleHRyYUFkZHI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2FtcGxlMl9leHRyYUFkZHJlc3NcIikudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOyasO2OuOuyiO2YuOyZgCDso7zshowg7KCV67O066W8IO2VtOuLuSDtlYTrk5zsl5Ag64Sj64qU64ukLlxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3N0YWwtY29kZScpLnZhbHVlID0gZGF0YS56b25lY29kZTtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZHJlc3NcIikudmFsdWUgPSBhZGRyO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOy7pOyEnOulvCDsg4HshLjso7zshowg7ZWE65Oc66GcIOydtOuPme2VnOuLpC5cclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRldGFpbC1hZGRyZXNzXCIpLmZvY3VzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmcmFtZeydhCDrhKPsnYAgZWxlbWVudOulvCDslYjrs7TsnbTqsowg7ZWc64ukLlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIChhdXRvQ2xvc2U6ZmFsc2Ug6riw64ql7J2EIOydtOyaqe2VnOuLpOuptCwg7JWE656YIOy9lOuTnOulvCDsoJzqsbDtlbTslbwg7ZmU66m07JeQ7IScIOyCrOudvOyngOyngCDslYrripTri6QuKVxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRfbGF5ZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICBkaW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICBtYXhTdWdnZXN0SXRlbXM6IDVcclxuICAgICAgICAgICAgfSkuZW1iZWQoZWxlbWVudF9sYXllcik7XHJcblxyXG4gICAgICAgICAgICAvLyBpZnJhbWXsnYQg64Sj7J2AIGVsZW1lbnTrpbwg67O07J206rKMIO2VnOuLpC5cclxuICAgICAgICAgICAgZWxlbWVudF9sYXllci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgZGltLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gLy8gaWZyYW1l7J2EIOuEo+ydgCBlbGVtZW507J2YIOychOy5mOulvCDtmZTrqbTsnZgg6rCA7Jq0642w66GcIOydtOuPmeyLnO2CqOuLpC5cclxuICAgICAgICAgICAgLy8gaW5pdExheWVyUG9zaXRpb24oKTtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gLy8g67iM65287Jqw7KCA7J2YIO2BrOq4sCDrs4Dqsr3sl5Ag65Sw6528IOugiOydtOyWtOulvCDqsIDsmrTrjbDroZwg7J2064+Z7Iuc7YKk6rOg7J6QIO2VmOyLpOuVjOyXkOuKlFxyXG4gICAgICAgICAgICAvLyAvLyByZXNpemXsnbTrsqTtirjrgpgsIG9yaWVudGF0aW9uY2hhbmdl7J2067Kk7Yq466W8IOydtOyaqe2VmOyXrCDqsJLsnbQg67OA6rK965Cg65WM66eI64ukIOyVhOuemCDtlajsiJjrpbwg7Iuk7ZaJIOyLnOy8nCDso7zsi5zqsbDrgpgsXHJcbiAgICAgICAgICAgIC8vIC8vIOyngeygkSBlbGVtZW50X2xheWVy7J2YIHRvcCxsZWZ06rCS7J2EIOyImOygle2VtCDso7zsi5zrqbQg65Cp64uI64ukLlxyXG4gICAgICAgICAgICAvLyBmdW5jdGlvbiBpbml0TGF5ZXJQb3NpdGlvbigpIHtcclxuICAgICAgICAgICAgLy8gICAgIHZhciB3aWR0aCA9IDMwMDsgLy/smrDtjrjrsojtmLjshJzruYTsiqTqsIAg65Ok7Ja06rCIIGVsZW1lbnTsnZggd2lkdGhcclxuICAgICAgICAgICAgLy8gICAgIHZhciBoZWlnaHQgPSA0MDA7IC8v7Jqw7Y6467KI7Zi47ISc67mE7Iqk6rCAIOuTpOyWtOqwiCBlbGVtZW507J2YIGhlaWdodFxyXG4gICAgICAgICAgICAvLyAgICAgdmFyIGJvcmRlcldpZHRoID0gNTsgLy/sg5jtlIzsl5DshJwg7IKs7Jqp7ZWY64qUIGJvcmRlcuydmCDrkZDqu5hcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gICAgIC8vIOychOyXkOyEnCDshKDslrjtlZwg6rCS65Ok7J2EIOyLpOygnCBlbGVtZW507JeQIOuEo+uKlOuLpC5cclxuICAgICAgICAgICAgLy8gICAgIGVsZW1lbnRfbGF5ZXIuc3R5bGUud2lkdGggPSB3aWR0aCArICdweCc7XHJcbiAgICAgICAgICAgIC8vICAgICBlbGVtZW50X2xheWVyLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XHJcbiAgICAgICAgICAgIC8vICAgICBlbGVtZW50X2xheWVyLnN0eWxlLmJvcmRlciA9IGJvcmRlcldpZHRoICsgJ3B4IHNvbGlkJztcclxuICAgICAgICAgICAgLy8gICAgIC8vIOyLpO2WieuQmOuKlCDsiJzqsITsnZgg7ZmU66m0IOuEiOu5hOyZgCDrhpLsnbQg6rCS7J2EIOqwgOyguOyZgOyEnCDspJHslZnsl5Ag65ywIOyImCDsnojrj4TroZ0g7JyE7LmY66W8IOqzhOyCsO2VnOuLpC5cclxuICAgICAgICAgICAgLy8gICAgIGVsZW1lbnRfbGF5ZXIuc3R5bGUubGVmdCA9ICgoKHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCkgLSB3aWR0aCkgLyAyIC0gYm9yZGVyV2lkdGgpICsgJ3B4JztcclxuICAgICAgICAgICAgLy8gICAgIGVsZW1lbnRfbGF5ZXIuc3R5bGUudG9wID0gKCgod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpIC0gaGVpZ2h0KSAvIDIgLSBib3JkZXJXaWR0aCkgKyAncHgnO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8g7KO87IaM6rKA7IOJIO2BtOumreyLnFxyXG4gICAgICAgIGFkZHJlc3NTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRhdW1BcGkoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8g7KO87IaM6rKA7IOJIOuLq+q4sCDrsoTtirwg7YG066at7IucXHJcbiAgICAgICAgYWRkcmVzc1NlYXJjaENsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjbG9zZURhdW1Qb3N0Y29kZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0pKCk7XHJcblxyXG4gICAgLy9ldmVudDAyIOqyjOyLnO2MkCBwYWdpbmdcclxuICAgICgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgbm90aWNlID0gZmluZE9uZSgnLm1haW4tZXZlbnQtbm90aWNlJyk7XHJcbiAgICAgICAgY29uc3QgbGlzdCA9IGZpbmRPbmUoJ3Rib2R5Jywgbm90aWNlKTtcclxuICAgICAgICBjb25zdCBwYWdpbmF0aW9uID0gZmluZE9uZSgnLm1haW4tbm90aWNlLXBhZ2luZycsIG5vdGljZSk7XHJcblxyXG4gICAgICAgIC8vIOqyjOyLnO2MkCDrpqzsiqTtirgg7YG066at7IucIOuqqOuLrFxyXG4gICAgICAgIGNvbnN0IG1ha2VNb2RhbGNvbnRlbnRzID0gKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbW9kYWwgPSBuZXcgTW9kYWwoKTtcclxuICAgICAgICAgICAgY29uc3Qgbm90aWNlTW9kYWwgPSBmaW5kT25lKCcuZXZlbnQwMi1tb2RhbC1ub3RpY2UnKTtcclxuICAgICAgICAgICAgY29uc3Qgbm90aWNlTW9kYWxDb250ZW50ID0gZmluZE9uZSgnLmV2ZW50MDItbW9kYWwtbm90aWNlX19jb250ZW50cycsIG5vdGljZU1vZGFsKTtcclxuICAgICAgICAgICAgY29uc3Qgbm90aWNlTW9kYWxCdXR0b24gPSBmaW5kT25lKCcuZXZlbnQwMi1tb2RhbC1ub3RpY2VfX2J1dHRvbicsIG5vdGljZU1vZGFsKTtcclxuICAgICAgICAgICAgY29uc3QgbGlzdEl0ZW1zID0gZmluZCgnLm1haW4tZXZlbnQtbm90aWNlX19saW5rJyk7XHJcblxyXG4gICAgICAgICAgICBvbihmaW5kT25lKCcubWFpbi1ldmVudC1ub3RpY2UnKSwgJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5tYWluLWV2ZW50LW5vdGljZV9fbGluaycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEJ1dHRvbiA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcubWFpbi1ldmVudC1ub3RpY2VfX2xpbmsnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50RGF0YSA9IGRhdGEuZGF0YS5maWx0ZXIoZGF0YSA9PiBkYXRhLnNlcSA9PT0gTnVtYmVyKGN1cnJlbnRCdXR0b24uZGF0YXNldC5zZXEpKVswXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBjdXJyZW50RGF0YS5zc3VsX3VybC50cmltKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBodG1sID0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV2ZW50MDItbW9kYWwtbm90aWNlX19jb250ZW50cy1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImV2ZW50MDItbW9kYWwtbm90aWNlX19jb250ZW50cy1kYXRlXCI+JHtjdXJyZW50RGF0YS5yZWdfZGF0ZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiZXZlbnQwMi1tb2RhbC1ub3RpY2VfX2NvbnRlbnRzLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7Y3VycmVudERhdGEuc3N1bF90aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXZlbnQwMi1tb2RhbC1ub3RpY2VfX2NvbnRlbnRzLWltYWdlXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtjdXJyZW50RGF0YS5zc3VsX2ltYWdlfSlcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJldmVudDAyLW1vZGFsLW5vdGljZV9fY29udGVudHMtY29udGVudFwiPiR7Y3VycmVudERhdGEuc3N1bF9jb250ZW50LnJlcGxhY2VBbGwoLyhcXHJcXG58XFxufFxccikvZywgJzxicj4nKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZXZlbnQwMi1tb2RhbC1ub3RpY2VfX2J1dHRvbiBtb2RhbC1idXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVybCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sICs9IGA8YSBocmVmPVwiJHsvXihodHRwcz86KT9cXC9cXC8vaS50ZXN0KHVybCkgPyB1cmwgOiBgJHt1cmx9YH1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPuyYgeyDge2ZleyduDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+YDtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sICs9IGA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImV2ZW50MDItbW9kYWwtbm90aWNlX19jbG9zZS1idXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPuuLq+q4sDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBub3RpY2VNb2RhbENvbnRlbnQuaW5uZXJIVE1MID0gaHRtbDtcclxuICAgICAgICAgICAgICAgICAgICBtb2RhbC5vcGVuKG5vdGljZU1vZGFsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGZpbmRPbmUoJy5ldmVudDAyLW1vZGFsLW5vdGljZV9fY2xvc2UtYnV0dG9uJywgbm90aWNlTW9kYWwpO1xyXG4gICAgICAgICAgICAgICAgaWYoIWNsb3NlQnV0dG9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kYWwuY2xvc2Uobm90aWNlTW9kYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g6rKM7Iuc7YyQIOumrOyKpO2KuFxyXG4gICAgICAgIGNvbnN0IG1ha2VMaXN0ID0gKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgbGlzdC5pbm5lckhUTUwgPSBkYXRhLmRhdGEubWFwKGl0ZW0gPT5cclxuICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgZGF0YS1zZXE9XCIke2l0ZW0uc2VxfVwiIGNsYXNzPVwibWFpbi1ldmVudC1ub3RpY2VfX2xpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbi1ldmVudC1ub3RpY2VfX2NvbnRlbnRzLWltYWdlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtpdGVtLnNzdWxfaW1hZ2V9KVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluLWV2ZW50LW5vdGljZV9fY29udGVudHMtZGV0YWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtpdGVtLnNzdWxfdGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JHtpdGVtLnJlZ19kYXRlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ke2l0ZW0uc3N1bF9jb250ZW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICApLmpvaW4oJycpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHBhZ2luZyA9ICh0YXJnZXQsIGN1cnJlbnRQYWdlLCBwYWdlQ291bnQsIHRvdGFsUGFnZSkgPT4ge1xyXG4gICAgICAgICAgICAvLyDtg4Dqsp8sIO2YhOyerO2OmOydtOyngCwg7Y6Y7J207KeA7JeQIOuztOyXrOykhCDrhJjrsoQg6rCv7IiYLCDstJ3tjpjsnbTsp4Ao7Y6Y7J207KeAIOqwr+yImClcclxuXHJcbiAgICAgICAgICAgIGxldCBpdGVtcyA9ICcnO1xyXG5cclxuICAgICAgICAgICAgbGV0IHBhZ2VHcm91cCA9IE1hdGguY2VpbChjdXJyZW50UGFnZSAvIHBhZ2VDb3VudCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgbGFzdE51bSA9IHBhZ2VHcm91cCAqIHBhZ2VDb3VudDtcclxuXHJcbiAgICAgICAgICAgIGxldCBzdGFydE51bSA9IGxhc3ROdW0gLSAocGFnZUNvdW50IC0gMSk7XHJcbiAgICAgICAgICAgIGlmIChsYXN0TnVtID4gdG90YWxQYWdlKSB7XHJcbiAgICAgICAgICAgICAgICBsYXN0TnVtID0gdG90YWxQYWdlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgcHJldiA9IHN0YXJ0TnVtIC0gcGFnZUNvdW50XHJcbiAgICAgICAgICAgIGlmIChwcmV2IDwgMSkge1xyXG4gICAgICAgICAgICAgICAgcHJldiA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBuZXh0ID0gbGFzdE51bSArIDE7XHJcblxyXG4gICAgICAgICAgICBpZiAoc3RhcnROdW0gPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zICs9ICc8bGkgY2xhc3M9XCJtYWluLW5vdGljZS1wYWdpbmdfX2l0ZW0gbWFpbi1ub3RpY2UtcGFnaW5nX19pdGVtLS1maXJzdFwiPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJkaXNhYmxlZFwiIGRhdGEtcGFnZT1cIjFcIj48c3BhbiBjbGFzcz1cInZpc3VhbGx5LWhpZGRlblwiPuyymOydjDwvc3Bhbj48L2E+PC9saT4nO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaXRlbXMgKz0gJzxsaSBjbGFzcz1cIm1haW4tbm90aWNlLXBhZ2luZ19faXRlbSBtYWluLW5vdGljZS1wYWdpbmdfX2l0ZW0tLWZpcnN0XCI+PGEgaHJlZj1cIiNcIiBkYXRhLXBhZ2U9XCIxXCI+PHNwYW4gY2xhc3M9XCJ2aXN1YWxseS1oaWRkZW5cIj7sspjsnYw8L3NwYW4+PC9hPjwvbGk+JztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gaXRlbXMgKz0gJzxsaT48YSBocmVmPVwiI1wiIGRhdGEtcGFnZT1cIicrIHByZXYgKydcIj7snbTsoIQ8L2E+PC9saT4nO1xyXG4gICAgICAgICAgICBpZiAoc3RhcnROdW0gPT09IDEpIHsgICAvLyBwcmV2PT09MSDsnbTroIfqsoztlaDqsr3smrAgMeydvOuVjCDrrLTsobDqsbQgZGlzYWJsZWQg65CY6riw65WM66y47JeQIOyKpO2DgO2KuOqwkuycvOuhnOuwlOq/lOykgOuLpFxyXG4gICAgICAgICAgICAgICAgaXRlbXMgKz0gJzxsaSBjbGFzcz1cIm1haW4tbm90aWNlLXBhZ2luZ19faXRlbSBtYWluLW5vdGljZS1wYWdpbmdfX2l0ZW0tLXByZXZcIj48YSBocmVmPVwiI1wiIGNsYXNzPVwiZGlzYWJsZWRcIiBkYXRhLXBhZ2U9XCInICsgcHJldiArICdcIj48c3BhbiBjbGFzcz1cInZpc3VhbGx5LWhpZGRlblwiPuydtOyghDwvc3Bhbj48L2E+PC9saT4nO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaXRlbXMgKz0gJzxsaSBjbGFzcz1cIm1haW4tbm90aWNlLXBhZ2luZ19faXRlbSBtYWluLW5vdGljZS1wYWdpbmdfX2l0ZW0tLXByZXZcIj48YSBocmVmPVwiI1wiIGRhdGEtcGFnZT1cIicgKyBwcmV2ICsgJ1wiPjxzcGFuIGNsYXNzPVwidmlzdWFsbHktaGlkZGVuXCI+7J207KCEPC9zcGFuPjwvYT48L2xpPic7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBzdGFydE51bTsgaSA8PSBsYXN0TnVtOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UGFnZSA9PT0gaSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zICs9IGA8bGk+PGEgaHJlZj1cIiNcIiBjbGFzcz1cImFjdGl2ZVwiIGRhdGEtcGFnZT1cIiR7aX1cIj4ke2l9PC9hPjwvbGk+YDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMgKz0gYDxsaT48YSBocmVmPVwiI1wiIGRhdGEtcGFnZT1cIiR7aX1cIj4ke2l9PC9hPjwvbGk+YDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGxhc3ROdW0gPT09IHRvdGFsUGFnZSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbXMgKz0gJzxsaSBjbGFzcz1cIm1haW4tbm90aWNlLXBhZ2luZ19faXRlbSBtYWluLW5vdGljZS1wYWdpbmdfX2l0ZW0tLW5leHRcIj48YSBocmVmPVwiI1wiIGNsYXNzPVwiZGlzYWJsZWRcIiBkYXRhLXBhZ2U9XCInICsgbmV4dCArICdcIj48c3BhbiBjbGFzcz1cInZpc3VhbGx5LWhpZGRlblwiPuuLpOydjDwvc3Bhbj48L2E+PC9saT4nO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaXRlbXMgKz0gJzxsaSBjbGFzcz1cIm1haW4tbm90aWNlLXBhZ2luZ19faXRlbSBtYWluLW5vdGljZS1wYWdpbmdfX2l0ZW0tLW5leHRcIj48YSBocmVmPVwiI1wiIGRhdGEtcGFnZT1cIicgKyBuZXh0ICsgJ1wiPjxzcGFuIGNsYXNzPVwidmlzdWFsbHktaGlkZGVuXCI+64uk7J2MPC9zcGFuPjwvYT48L2xpPic7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChsYXN0TnVtID09PSB0b3RhbFBhZ2UpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zICs9ICc8bGkgY2xhc3M9XCJtYWluLW5vdGljZS1wYWdpbmdfX2l0ZW0gbWFpbi1ub3RpY2UtcGFnaW5nX19pdGVtLS1sYXN0XCI+PGEgaHJlZj1cIiNcIiBjbGFzcz1cImRpc2FibGVkXCIgZGF0YS1wYWdlPVwiJyArIHRvdGFsUGFnZSArICdcIj48c3BhbiBjbGFzcz1cInZpc3VhbGx5LWhpZGRlblwiPuuniOyngOuniTwvc3Bhbj48L2E+PC9saT4nO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaXRlbXMgKz0gJzxsaSBjbGFzcz1cIm1haW4tbm90aWNlLXBhZ2luZ19faXRlbSBtYWluLW5vdGljZS1wYWdpbmdfX2l0ZW0tLWxhc3RcIj48YSBocmVmPVwiI1wiIGRhdGEtcGFnZT1cIicgKyB0b3RhbFBhZ2UgKyAnXCI+PHNwYW4gY2xhc3M9XCJ2aXN1YWxseS1oaWRkZW5cIj7rp4jsp4Drp4k8L3NwYW4+PC9hPjwvbGk+JztcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHRhcmdldC5pbm5lckhUTUwgPSAnPHVsPicgKyBpdGVtcyArICc8L3VsPic7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBsaW5rcyA9IHRhcmdldC5xdWVyeVNlbGVjdG9yQWxsKCdhJyk7XHJcblxyXG4gICAgICAgICAgICBsaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7ICAgLy8gPSBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoZnVuY3Rpb24oJ2NsaWNrJylcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsaW5rLmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSkgeyAvL2Rpc2FibGVk7YG0656Y7IqkIOy2lOqwgOuQmOuptCDtgbTrpq3rp4nquLBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhsaW5rLmRhdGFzZXQucGFnZSwgcGFnZUNvdW50LHRvdGFsUGFnZSlcclxuICAgICAgICAgICAgICAgICAgICAvLyBwYWdpbmcodGFyZ2V0LCBsaW5rLmRhdGFzZXQucGFnZSAqIDEsIHBhZ2VDb3VudCwgdG90YWxQYWdlKTsgIC8v7ZiE7J6s7Y6Y7J207KeAKjEg7ZWY64qUIOydtOycoOuKlCDtmITsnqzqsJLsnYAg66y47J6Q7Je07J206riw65WM66y47JeQICox7ZW07KSY7IScIOyIq+yekOuhnCDrs4Dqsr1cclxuICAgICAgICAgICAgICAgICAgICBwYWdpbmcodGFyZ2V0LCBsaW5rLmRhdGFzZXQucGFnZSAqIDEsIHBhZ2VDb3VudCwgdG90YWxQYWdlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBwYWdpbmcocGFnaW5hdGlvbiwgMSwgNSwgMjEpO1xyXG5cclxuICAgICAgICBjb25zdCBtYWtlUGFnaW5hdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHBhZ2luZyhwYWdpbmF0aW9uLCBkYXRhLnBhZ2UsIDUsIGRhdGEucGFnZXRvdGFsY250KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCByZW5kZXIgPSAocGFnZSkgPT4ge1xyXG4gICAgICAgICAgICBmZXRjaChgL2FwaS9zc3VsLWxpc3QucGhwP3BhZ2U9JHtwYWdlfWApXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBtYWtlTGlzdChkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBtYWtlUGFnaW5hdGlvbihkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBtYWtlTW9kYWxjb250ZW50cyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZW5kZXIoMSk7XHJcblxyXG4gICAgICAgIG9uKHBhZ2luYXRpb24sICdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLXBhZ2VdJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICByZW5kZXIodGFyZ2V0LmRhdGFzZXQucGFnZSAqIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSkoKTtcclxufTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBhcHApOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJzZWN0aW9ucyIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9