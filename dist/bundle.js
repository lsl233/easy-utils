(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global.easyUtils = factory());
}(this, (function () { 'use strict';

	var index = 'hello world';

	return index;

})));
