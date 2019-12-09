"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* eslint-disable no-magic-numbers */
var rgbToHex = function rgbToHex(color) {
  if (typeof color === 'undefined') {
    throw new TypeError('Hex color is not defined');
  }

  if (color === 'transparent') {
    return '#00000000';
  }

  var rgb = color.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);

  if (!rgb) {
    throw new Error("".concat(color, " is not a valid rgb color"));
  }

  var r = "0".concat(parseInt(rgb[1], 10).toString(16));
  var g = "0".concat(parseInt(rgb[2], 10).toString(16));
  var b = "0".concat(parseInt(rgb[3], 10).toString(16));
  return "#".concat(r.slice(-2)).concat(g.slice(-2)).concat(b.slice(-2));
};

var _default = rgbToHex;
exports["default"] = _default;