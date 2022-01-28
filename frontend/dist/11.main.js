(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./src/components/profileHeader.jsx":
/*!******************************************!*\
  !*** ./src/components/profileHeader.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon */ \"./src/components/icon.jsx\");\n/* harmony import */ var _styles_profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/profile */ \"./src/components/styles/profile.jsx\");\n\n\n\n\n\n\nvar ProfileHeader = function ProfileHeader(props) {\n  var heading = props.heading,\n      text = props.text;\n  var theme = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"])(function (state) {\n    return state.theme;\n  });\n  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"useHistory\"])();\n  var backIconPaths = [\"M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z\"];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_profile__WEBPACK_IMPORTED_MODULE_4__[\"HeaderWrapper\"], {\n    border: theme.border\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_profile__WEBPACK_IMPORTED_MODULE_4__[\"Header\"], {\n    bg: theme.bg,\n    color: theme.color\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_profile__WEBPACK_IMPORTED_MODULE_4__[\"BackBtn\"], {\n    onClick: history.goBack\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    d: backIconPaths,\n    width: \"22.5px\",\n    height: \"22.5px\",\n    fill: \"rgb(29, 161, 242)\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, heading), text && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, text))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfileHeader);\n\n//# sourceURL=webpack:///./src/components/profileHeader.jsx?");

/***/ }),

/***/ "./src/components/styles/tweet.jsx":
/*!*****************************************!*\
  !*** ./src/components/styles/tweet.jsx ***!
  \*****************************************/
/*! exports provided: TweetWrapper, UserImage, Flex, TweetText, ActivityInfo, Activity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TweetWrapper\", function() { return TweetWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserImage\", function() { return UserImage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Flex\", function() { return Flex; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TweetText\", function() { return TweetText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ActivityInfo\", function() { return ActivityInfo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Activity\", function() { return Activity; });\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js\");\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;\n\n\nvar TweetWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n  border-bottom: 1px solid rgb(230, 236, 240);\\n\"])));\nvar UserImage = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].img(_templateObject2 || (_templateObject2 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n  width: 49px;\\n  height: 49px;\\n  border-radius: 50%;\\n  margin-right: 10px;\\n\"])));\nvar Flex = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject3 || (_templateObject3 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n  display: flex;\\n  h3 {\\n    margin-bottom: 0;\\n  }\\n  h3:hover {\\n    text-decoration: underline;\\n  }\\n  p {\\n    margin-bottom: 0;\\n    color: rgb(101, 119, 134);\\n    line-height: 1.13;\\n  }\\n\"])));\nvar TweetText = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject4 || (_templateObject4 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n  padding-bottom: 10px;\\n  border-bottom: 1px solid rgb(230, 236, 240);\\n  p {\\n    padding: 5px 0px;\\n    color: rgb(0, 0, 0);\\n    font-size: 23px;\\n    font-weight: 400px;\\n    margin-bottom: 0;\\n  }\\n\"])));\nvar ActivityInfo = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject5 || (_templateObject5 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n  display: flex;\\n  padding-top: 15px;\\n  padding-bottom: 15px;\\n  border-bottom: 1px solid rgb(230, 236, 240);\\n  a {\\n    margin-right: 10px;\\n    font-size: 15px;\\n  }\\n  a:hover {\\n    text-decoration: underline;\\n    text-decoration-color: rgb(0, 0, 0);\\n  }\\n  h4 {\\n    color: \", \";\\n    display: inline;\\n  }\\n  span {\\n    color: rgb(101, 119, 134);\\n  }\\n\"])), function (props) {\n  return props.color;\n});\nvar Activity = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject6 || (_templateObject6 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n  display: flex;\\n  justify-content: space-around;\\n  padding-top: 3%;\\n  padding-bottom: 3%;\\n  div {\\n    cursor: pointer;\\n  }\\n\"])));\n\n//# sourceURL=webpack:///./src/components/styles/tweet.jsx?");

/***/ }),

/***/ "./src/components/tweet/activity.jsx":
/*!*******************************************!*\
  !*** ./src/components/tweet/activity.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/common */ \"./src/components/styles/common.jsx\");\n/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon */ \"./src/components/icon.jsx\");\n\n\n\n\nvar Activity = function Activity(props) {\n  var handleClick = props.handleClick,\n      hoverColor = props.hoverColor,\n      hoverBg = props.hoverBg,\n      path = props.path,\n      fill = props.fill,\n      noPadding = props.noPadding;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_common__WEBPACK_IMPORTED_MODULE_1__[\"ActivityBox\"], {\n    onClick: handleClick,\n    hoverColor: hoverColor,\n    hoverBg: hoverBg,\n    style: {\n      border: \"none\",\n      background: \"transparent\",\n      outline: \"none\"\n    },\n    noPadding: noPadding\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_common__WEBPACK_IMPORTED_MODULE_1__[\"ActivityIcon\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    d: path,\n    width: \"18.75px\",\n    height: \"18.75px\",\n    fill: fill\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Activity);\n\n//# sourceURL=webpack:///./src/components/tweet/activity.jsx?");

/***/ }),

/***/ "./src/components/tweet/comments.jsx":
/*!*******************************************!*\
  !*** ./src/components/tweet/comments.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../loading */ \"./src/components/loading.jsx\");\n/* harmony import */ var _styles_profile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/profile */ \"./src/components/styles/profile.jsx\");\n/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../media */ \"./src/media.jsx\");\n\n\n\n\n\n\n\n\n\n\nvar URL = undefined.REACT_APP_SERVER_URL;\n\nvar Comments = function Comments() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(null),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),\n      comments = _useState2[0],\n      setComments = _useState2[1];\n\n  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"useParams\"])(),\n      tweetId = _useParams.tweetId;\n\n  var refresh = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useSelector\"])(function (state) {\n    return state.update.refresh;\n  });\n  var theme = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useSelector\"])(function (state) {\n    return state.theme;\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {\n      var res;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(\"\".concat(URL, \"/api/tweet/comment/get-comments?tweetId=\").concat(tweetId));\n\n            case 2:\n              res = _context.sent;\n              setComments(res.data.comments);\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }))();\n  }, [refresh]);\n  if (!comments) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_loading__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"div\", null, comments.map(function (comment) {\n    var date = new Date(comment[\"Comments.createdAt\"]);\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styles_profile__WEBPACK_IMPORTED_MODULE_8__[\"PeopleFlex\"], {\n      hover: true,\n      key: comment[\"Comments.id\"],\n      border: theme.border\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styles_profile__WEBPACK_IMPORTED_MODULE_8__[\"UserImage\"], {\n      src: comment.avatar\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"div\", {\n      style: {\n        width: \"100%\"\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styles_profile__WEBPACK_IMPORTED_MODULE_8__[\"TweetDetails\"], {\n      color: theme.color\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"object\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"Link\"], {\n      to: \"/profile/\".concat(comment.username)\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"h3\", null, comment.username))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"p\", null, \"@\", comment.username), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"span\", null, date.toLocaleString(\"default\", {\n      month: \"long\"\n    }), \" \", date.getDate(), \" \", new Date().getFullYear() !== date.getFullYear() && date.getFullYear())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"div\", {\n      style: {\n        color: theme.color\n      }\n    }, comment[\"Comments.text\"]), comment[\"Comments.media\"] && Object(_media__WEBPACK_IMPORTED_MODULE_9__[\"isImage\"])(comment[\"Comments.media\"]) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"img\", {\n      src: comment[\"Comments.media\"],\n      style: {\n        width: \"100%\"\n      }\n    }), comment[\"Comments.media\"] && Object(_media__WEBPACK_IMPORTED_MODULE_9__[\"isVideo\"])(comment[\"Comments.media\"]) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"video\", {\n      src: comment[\"Comments.media\"],\n      style: {\n        width: \"100%\"\n      },\n      controls: true\n    })));\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Comments);\n\n//# sourceURL=webpack:///./src/components/tweet/comments.jsx?");

/***/ }),

/***/ "./src/components/tweet/index.jsx":
/*!****************************************!*\
  !*** ./src/components/tweet/index.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _profileHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../profileHeader */ \"./src/components/profileHeader.jsx\");\n/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../icon */ \"./src/components/icon.jsx\");\n/* harmony import */ var _styles_tweet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/tweet */ \"./src/components/styles/tweet.jsx\");\n/* harmony import */ var _styles_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/common */ \"./src/components/styles/common.jsx\");\n/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../media */ \"./src/media.jsx\");\n/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../loading */ \"./src/components/loading.jsx\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../modal */ \"./src/components/modal.jsx\");\n/* harmony import */ var _commentModal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./commentModal */ \"./src/components/tweet/commentModal.jsx\");\n/* harmony import */ var _comments__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./comments */ \"./src/components/tweet/comments.jsx\");\n/* harmony import */ var _activity__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./activity */ \"./src/components/tweet/activity.jsx\");\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar URL = undefined.REACT_APP_SERVER_URL;\n\nvar Tweet = function Tweet(props) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(null),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),\n      tweet = _useState2[0],\n      setTweet = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState3, 2),\n      isModalOpen = _useState4[0],\n      setIsModalOpen = _useState4[1];\n\n  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"useParams\"])(),\n      username = _useParams.username,\n      tweetId = _useParams.tweetId;\n\n  var user = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"useSelector\"])(function (state) {\n    return state.user;\n  });\n  var theme = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"useSelector\"])(function (state) {\n    return state.theme;\n  });\n  var myId = user.id;\n  var token = user.token;\n  var location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"useLocation\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee() {\n      var res;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(\"\".concat(URL, \"/api/tweet/get-tweet?username=\").concat(username, \"&tweetId=\").concat(tweetId, \"&myId=\").concat(myId));\n\n            case 2:\n              res = _context.sent;\n              setTweet(res.data.tweet);\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }))();\n  }, []);\n\n  var handleClose = function handleClose() {\n    setIsModalOpen(false);\n  };\n\n  var handleActivity = /*#__PURE__*/function () {\n    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2(self, count, action_type) {\n      var _objectSpread2, _objectSpread3;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              if (!tweet[self]) {\n                _context2.next = 12;\n                break;\n              }\n\n              _context2.prev = 1;\n              _context2.next = 4;\n              return axios__WEBPACK_IMPORTED_MODULE_7___default.a[\"delete\"](\"\".concat(URL, \"/api/tweet/\").concat(action_type, \"/remove\"), {\n                data: {\n                  userId: myId,\n                  tweetId: tweet[\"Tweets.id\"]\n                },\n                headers: {\n                  Authorization: \"Bearer \".concat(token)\n                }\n              });\n\n            case 4:\n              setTweet(_objectSpread(_objectSpread({}, tweet), {}, (_objectSpread2 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread2, count, tweet[count] - 1), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread2, self, false), _objectSpread2)));\n              _context2.next = 10;\n              break;\n\n            case 7:\n              _context2.prev = 7;\n              _context2.t0 = _context2[\"catch\"](1);\n              console.error(_context2.t0.response.data);\n\n            case 10:\n              _context2.next = 21;\n              break;\n\n            case 12:\n              _context2.prev = 12;\n              _context2.next = 15;\n              return axios__WEBPACK_IMPORTED_MODULE_7___default.a.post(\"\".concat(URL, \"/api/tweet/\").concat(action_type, \"/add\"), {\n                userId: myId,\n                tweetId: tweet[\"Tweets.id\"]\n              }, {\n                headers: {\n                  Authorization: \"Bearer \".concat(token)\n                }\n              });\n\n            case 15:\n              setTweet(_objectSpread(_objectSpread({}, tweet), {}, (_objectSpread3 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread3, count, tweet[count] + 1), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread3, self, true), _objectSpread3)));\n              _context2.next = 21;\n              break;\n\n            case 18:\n              _context2.prev = 18;\n              _context2.t1 = _context2[\"catch\"](12);\n              console.error(_context2.t1.response.data);\n\n            case 21:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, null, [[1, 7], [12, 18]]);\n    }));\n\n    return function handleActivity(_x, _x2, _x3) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  if (!tweet) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_loading__WEBPACK_IMPORTED_MODULE_13__[\"default\"], null);\n  var commentPath = [\"M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z\"];\n  var retweetPath = [\"M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z\"];\n  var likePath = [\"M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z\"];\n  var date = new Date(tweet[\"Tweets.createdAt\"]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styles_common__WEBPACK_IMPORTED_MODULE_11__[\"ProfileCorner\"], {\n    border: theme.border\n  }, isModalOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_modal__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n    children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_commentModal__WEBPACK_IMPORTED_MODULE_15__[\"default\"], {\n      handleClose: handleClose,\n      tweetId: tweetId\n    }),\n    handleClose: handleClose,\n    padding: \"15px\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_profileHeader__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    heading: \"Tweet\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styles_tweet__WEBPACK_IMPORTED_MODULE_10__[\"TweetWrapper\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"div\", {\n    style: {\n      padding: \"10px 15px 0px 15px\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styles_tweet__WEBPACK_IMPORTED_MODULE_10__[\"Flex\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styles_tweet__WEBPACK_IMPORTED_MODULE_10__[\"UserImage\"], {\n    src: tweet.avatar\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"Link\"], {\n    to: \"/profile/\".concat(tweet.username)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"h3\", {\n    style: {\n      color: theme.color\n    }\n  }, tweet.username, \" \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"p\", null, \"@\", tweet.username)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styles_tweet__WEBPACK_IMPORTED_MODULE_10__[\"TweetText\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"p\", {\n    style: {\n      color: theme.color\n    }\n  }, tweet[\"Tweets.text\"]), tweet[\"Tweets.media\"] && Object(_media__WEBPACK_IMPORTED_MODULE_12__[\"isImage\"])(tweet[\"Tweets.media\"]) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"img\", {\n    src: tweet[\"Tweets.media\"],\n    style: {\n      width: \"100%\"\n    }\n  }), tweet[\"Tweets.media\"] && Object(_media__WEBPACK_IMPORTED_MODULE_12__[\"isVideo\"])(tweet[\"Tweets.media\"]) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"video\", {\n    src: tweet[\"Tweets.media\"],\n    style: {\n      width: \"100%\"\n    },\n    controls: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"div\", {\n    style: {\n      color: theme.para\n    }\n  }, date.toLocaleTimeString(\"en-US\", {\n    hour: \"numeric\",\n    hour12: true,\n    minute: \"numeric\"\n  }), \" \", \"\\xB7 \", date.toLocaleString(\"default\", {\n    month: \"long\"\n  }), \" \", date.getDate(), \", \", date.getFullYear())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styles_tweet__WEBPACK_IMPORTED_MODULE_10__[\"ActivityInfo\"], {\n    color: theme.color\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"Link\"], {\n    to: \"\".concat(location.pathname, \"/retweets\"),\n    replace: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"h4\", null, tweet[\"Tweets.retweetsCount\"]), \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"span\", null, \"Retweets\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"Link\"], {\n    to: \"\".concat(location.pathname, \"/likes\"),\n    replace: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"h4\", null, tweet[\"Tweets.likesCount\"]), \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"span\", null, \"Likes\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styles_tweet__WEBPACK_IMPORTED_MODULE_10__[\"Activity\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"div\", {\n    onClick: function onClick() {\n      return setIsModalOpen(true);\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styles_common__WEBPACK_IMPORTED_MODULE_11__[\"ActivityBox\"], {\n    hoverColor: \"rgb(29,161,242)\",\n    hoverBg: \"rgba(29,161,242,0.1)\",\n    style: {\n      border: \"none\",\n      background: \"transparent\",\n      outline: \"none\"\n    },\n    noPadding: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styles_common__WEBPACK_IMPORTED_MODULE_11__[\"ActivityIcon\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_icon__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    d: commentPath,\n    width: \"18.75px\",\n    height: \"18.75px\",\n    fill: \"rgb(101, 119, 134)\"\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_activity__WEBPACK_IMPORTED_MODULE_17__[\"default\"], {\n    handleClick: function handleClick() {\n      return handleActivity(\"selfRetweeted\", \"Tweets.retweetsCount\", \"retweet\");\n    },\n    hoverColor: \"rgb(23,191,99)\",\n    hoverBg: \"rgba(23,191,99,0.1)\",\n    path: retweetPath,\n    fill: tweet.selfRetweeted ? \"rgb(23, 191, 99)\" : \"rgb(101, 119, 134)\",\n    noPadding: true\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_activity__WEBPACK_IMPORTED_MODULE_17__[\"default\"], {\n    handleClick: function handleClick() {\n      return handleActivity(\"selfLiked\", \"Tweets.likesCount\", \"like\");\n    },\n    hoverColor: \"rgb(224,36,94)\",\n    hoverBg: \"rgba(224,36,94,0.1)\",\n    path: likePath,\n    fill: tweet.selfLiked ? \"rgb(224, 36, 94)\" : \"rgb(101, 119, 134)\",\n    noPadding: true\n  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_comments__WEBPACK_IMPORTED_MODULE_16__[\"default\"], null));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tweet);\n\n//# sourceURL=webpack:///./src/components/tweet/index.jsx?");

/***/ })

}]);