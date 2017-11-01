/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

const URL = "https://api.github.com/repos/greenfox-academy/";
//alternet api 
//const URL = "https://api.github.com/search/repositories?q="
//var urlName = "Alfredwei0420";
//const SUFFIX = "+org:greenfox-academy"

var token = "Basic QWxmcmVkd2VpMDQyMDo4NDI2MDg5OTMxMDRhZWYxNGIyMzk5ZGViODI1OTBiNjVhOGIwYzg3";

function createXMLHttpRequest(method, url){
    let xhr = new XMLHttpRequest();
    xhr.open(method, URL + url);
    return xhr;
}

// function apiRequest(callback){
//     var xhr = new XMLHttpRequest();
//     var urlName = document.getElementById('search').value;
//     var top = document.getElementsByClassName("top"); 
//     var data;
//     xhr.onreadystatechange = function () {
//         if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200){
//             data = JSON.parse(xhr.response);
//            // clear();
//            callback(data);
//         }
//     }
//     xhr.open('GET', URL+urlName);
//     xhr.setRequestHeader("Authorization",token);
//     xhr.send(null);
// }

window.onload=function() {
    var goButton = document.getElementById("go");
    goButton.addEventListener("click",function(event){
        display();
    })

}

function display(){
    var update = document.getElementsByClassName("update");
    var top = document.getElementsByClassName("top"); 
    var input = document.getElementById('search').value; 
    var h1  = document.querySelector("#left h1");
    var xhr = createXMLHttpRequest("GET", input);
    var alert  = document.createElement("p");
    xhr.setRequestHeader("Authorization",token);
    xhr.onreadystatechange = function () {
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200){
            var data = JSON.parse(xhr.response);
            clear();
           // console.log(data.items.name)
            h1.innerText = data.name;
            var description = document.createElement("h2");
            description.innerText = data.description;
            description.style.fontSize = "20px";
            var date = document.createElement("h3");
            date.innerText =`last update at ${data.pushed_at}`;
            date.style.fontSize = "15px";
            date.style.fontStyle = "italic";
            update[0].appendChild(description);
            update[0].appendChild(date);
        }else if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 404) {
            alert.innerText = "invalid repository name";
            alert.style.fontSize = "15px";
            alert.style.color = "red";
            alert.style.margin = 0;
            top[0].appendChild(alert);
        }    
    }
    xhr.send(null);  
}

function clear(){
    var update = document.querySelector(".update");
    var pRemove = document.querySelector(".top");
    while (update.firstChild) {
        update.removeChild(update.firstChild);
    }
    pRemove.removeChild(pRemove.childNodes[0]);
}




/***/ })
/******/ ]);