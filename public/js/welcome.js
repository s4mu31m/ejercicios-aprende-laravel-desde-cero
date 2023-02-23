/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/welcome.js":
/*!*********************************!*\
  !*** ./resources/js/welcome.js ***!
  \*********************************/
/***/ (() => {

eval("var navbar = document.querySelector(\".navbar\");\nvar welcome = document.querySelector(\".welcome\");\nvar navbarToggle = document.querySelector(\"#navbarSupportedContent\");\nvar resizeBakgroundImg = function resizeBakgroundImg() {\n  var height = window.innerHeight - navbar.clientHeight;\n  welcome.style.height = \"\".concat(height, \"px\");\n};\nnavbarToggle.ontransitionend = resizeBakgroundImg;\nnavbarToggle.ontransitionstart = resizeBakgroundImg;\nwindow.onresize = resizeBakgroundImg;\nwindow.onload = resizeBakgroundImg;\ndocument.querySelector('main').classList.remove('py-4');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvd2VsY29tZS5qcy5qcyIsIm5hbWVzIjpbIm5hdmJhciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIndlbGNvbWUiLCJuYXZiYXJUb2dnbGUiLCJyZXNpemVCYWtncm91bmRJbWciLCJoZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImNsaWVudEhlaWdodCIsInN0eWxlIiwiY29uY2F0Iiwib250cmFuc2l0aW9uZW5kIiwib250cmFuc2l0aW9uc3RhcnQiLCJvbnJlc2l6ZSIsIm9ubG9hZCIsImNsYXNzTGlzdCIsInJlbW92ZSJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3dlbGNvbWUuanM/MjZkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhclwiKTtcclxuY29uc3Qgd2VsY29tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VsY29tZVwiKTtcclxuY29uc3QgbmF2YmFyVG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCIpO1xyXG5cclxuY29uc3QgcmVzaXplQmFrZ3JvdW5kSW1nID0gKCkgPT4ge1xyXG4gIGNvbnN0IGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIG5hdmJhci5jbGllbnRIZWlnaHQ7XHJcbiAgd2VsY29tZS5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgO1xyXG59O1xyXG5cclxuXHJcbm5hdmJhclRvZ2dsZS5vbnRyYW5zaXRpb25lbmQgPSByZXNpemVCYWtncm91bmRJbWc7XHJcbm5hdmJhclRvZ2dsZS5vbnRyYW5zaXRpb25zdGFydCA9IHJlc2l6ZUJha2dyb3VuZEltZztcclxud2luZG93Lm9ucmVzaXplID0gcmVzaXplQmFrZ3JvdW5kSW1nO1xyXG53aW5kb3cub25sb2FkID0gcmVzaXplQmFrZ3JvdW5kSW1nO1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpLmNsYXNzTGlzdC5yZW1vdmUoJ3B5LTQnKTsiXSwibWFwcGluZ3MiOiJBQUFBLElBQU1BLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsU0FBUyxDQUFDO0FBQ2hELElBQU1DLE9BQU8sR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsVUFBVSxDQUFDO0FBQ2xELElBQU1FLFlBQVksR0FBR0gsUUFBUSxDQUFDQyxhQUFhLENBQUMseUJBQXlCLENBQUM7QUFFdEUsSUFBTUcsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFrQkEsQ0FBQSxFQUFTO0VBQy9CLElBQU1DLE1BQU0sR0FBR0MsTUFBTSxDQUFDQyxXQUFXLEdBQUdSLE1BQU0sQ0FBQ1MsWUFBWTtFQUN2RE4sT0FBTyxDQUFDTyxLQUFLLENBQUNKLE1BQU0sTUFBQUssTUFBQSxDQUFNTCxNQUFNLE9BQUk7QUFDdEMsQ0FBQztBQUdERixZQUFZLENBQUNRLGVBQWUsR0FBR1Asa0JBQWtCO0FBQ2pERCxZQUFZLENBQUNTLGlCQUFpQixHQUFHUixrQkFBa0I7QUFDbkRFLE1BQU0sQ0FBQ08sUUFBUSxHQUFHVCxrQkFBa0I7QUFDcENFLE1BQU0sQ0FBQ1EsTUFBTSxHQUFHVixrQkFBa0I7QUFFbENKLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDYyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxNQUFNLENBQUMifQ==\n//# sourceURL=webpack-internal:///./resources/js/welcome.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/welcome.js"]();
/******/ 	
/******/ })()
;