/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("let cheeses = [];\n\nconst renderCheeses = () => {\n    const id = window.location.hash.slice(1);\n    \n    if (id != null) {\n        const selectedCheese = cheeses.find(c => c.id == id);\n    document.getElementById('active').innerHTML = `\n            <h1>${selectedCheese.name}</h1>\n            <h3>from ${selectedCheese.country}</h3>\n            <p>Cost per lb ${selectedCheese.price}</p>\n        `\n        return;\n    }\n    document.getElementById('active').innerHTML = '';\n}\n\nwindow.addEventListener('hashchange', ()=> {\n    renderCheeses();\n})\n\nconst init = async ()=> {\n        \n    const response = await fetch('https://f373cc220b144f0c952db117bcb62e2b.vfs.cloud9.us-east-2.amazonaws.com/api/cheeses')\n    cheeses = await response.json()\n    document.getElementById('cheeses').innerHTML = cheeses.map(cheese => {\n        return `\n        <li>\n        <a href='#${cheese.id}'>${cheese.name}</a>\n        </li>\n        `;\n    }).join('')\n    \n    // Alt:\n    // const response = fetch('https://f373cc220b144f0c952db117bcb62e2b.vfs.cloud9.us-east-2.amazonaws.com/api/cheeses')\n    //     .then(response => response.json())\n    //     .then(data => {\n    //         const cheeses = data.map(cheese => {\n    //             const listItem = document.createElement('li')\n    //             const text = document.createTextNode(`${cheese.name} from ${cheese.country}`);\n    //             listItem.appendChild(text);\n    //             document.getElementById('cheeses').appendChild(listItem)\n    //         })\n    //     });\n        \n}\n\ninit();\n\n//# sourceURL=webpack://acme_express_spa/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;