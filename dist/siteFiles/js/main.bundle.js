webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {'use strict';

	// sass file being used
	__webpack_require__(2);

	(function ($) {

	    //$("h2").text("Changed Back");

	})(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./app.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./app.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "/* Styles By BeingOnline */\n/* ==========================================================================\r\n   Typography\r\n   ========================================================================== */\nh1, h2, h3, h4, h5, h6 {\n  font-family: \"Avenir Roman\", helvetica, arial, serif;\n  font-weight: normal;\n  text-transform: uppercase;\n  color: #929292; }\n\np, ul li, a, small {\n  font-family: \"Avenir Roman\", helvetica, arial, serif;\n  font-weight: normal;\n  color: #929292; }\n\nhtml {\n  font-size: 62.5%; }\n\nbody {\n  background-color: white; }\n\nh1 {\n  font-size: 26px;\n  font-size: 2.6rem; }\n  @media (min-width: 500px) {\n    h1 {\n      font-size: 30px;\n      font-size: 3rem; } }\n  @media (min-width: 768px) {\n    h1 {\n      font-size: 40px;\n      font-size: 4rem; } }\n  @media (min-width: 992px) {\n    h1 {\n      font-size: 60px;\n      font-size: 6rem; } }\n  @media (min-width: 1200px) {\n    h1 {\n      font-size: 80px;\n      font-size: 8rem; } }\n\nh2 {\n  font-size: 26px;\n  font-size: 2.6rem; }\n\nh3 {\n  font-size: 20px;\n  font-size: 2rem; }\n\nh4 {\n  font-size: 18px;\n  font-size: 1.8rem; }\n\np {\n  font-size: 16px;\n  font-size: 1.6rem; }\n\nul li {\n  font-size: 16px;\n  font-size: 1.6rem; }\n\nsmall {\n  font-size: 12px;\n  font-size: 1.2rem; }\n\n/* Assigning box model */\n*,\n*:after,\n*:before {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\nhtml, body, div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, samp, small, strike, strong, sub, sup, tt, var, b, i, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, figure, figcaption, footer, header, hgroup, menu, nav, output, section, summary, time, mark, audio, video {\n  -ms-behavior: url(/backgroundsize.min.htc); }\n\n/* Assigning clearfix to classes */\n.clearfix, .group {\n  *zoom: 1; }\n  .clearfix:before, .clearfix:after, .group:before, .group:after {\n    content: \" \";\n    display: table; }\n  .clearfix:after, .group:after {\n    clear: both; }\n\n::-webkit-input-placeholder {\n  font-size: em(12px);\n  line-height: 18px;\n  font-family: \"Avenir Black\", helvetica, arial, serif;\n  font-weight: normal; }\n\n:-moz-placeholder {\n  /* Firefox 18- */\n  font-size: em(12px);\n  line-height: 18px;\n  font-family: \"Avenir Black\", helvetica, arial, serif;\n  font-weight: normal; }\n\n::-moz-placeholder {\n  /* Firefox 19+ */\n  font-size: em(12px);\n  line-height: 18px;\n  font-family: \"Avenir Black\", helvetica, arial, serif;\n  font-weight: normal; }\n\n:-ms-input-placeholder {\n  font-size: em(12px);\n  line-height: 18px;\n  font-family: \"Avenir Black\", helvetica, arial, serif;\n  font-weight: normal; }\n\n/* ==========================================================================\r\n   Base Styles\r\n   ========================================================================== */\nhr {\n  clear: both; }\n\n/* ==========================================================================\r\n   Bootstrap Overwrites\r\n   ========================================================================== */\n.navbar-brand {\n  padding: 0px 6px; }\n  .navbar-brand img {\n    height: 100%;\n    width: auto; }\n\n/* ==========================================================================\r\n   Custon Classes\r\n   ========================================================================== */\n.left {\n  text-align: left; }\n\n.center {\n  text-align: center; }\n\n.right {\n  text-align: right; }\n\n/* ==========================================================================\r\n   BeingOnine's stylesheet\r\n   ========================================================================== */\n/* Header */\n/* Main Naigation */\n/* Main */\nsection article {\n  margin: 20px auto; }\n  @media (min-width: 768px) {\n    section article {\n      margin: 40px auto; } }\n\nh2 {\n  color: green; }\n\n/* Footer */\n", ""]);

	// exports


/***/ }
]);