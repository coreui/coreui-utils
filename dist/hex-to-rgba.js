"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* eslint-disable no-magic-numbers */
var hexToRgba = function hexToRgba(color) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

  if (typeof color === 'undefined') {
    throw new TypeError('Hex color is not defined');
  }

  var hex = color.match(/^#(?:[0-9a-f]{3}){1,2}$/i);

  if (!hex) {
    throw new Error("".concat(color, " is not a valid hex color"));
  }

  var r;
  var g;
  var b;

  if (color.length === 7) {
    r = parseInt(color.slice(1, 3), 16);
    g = parseInt(color.slice(3, 5), 16);
    b = parseInt(color.slice(5, 7), 16);
  } else {
    r = parseInt(color.slice(1, 2), 16);
    g = parseInt(color.slice(2, 3), 16);
    b = parseInt(color.slice(3, 5), 16);
  }

  return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(opacity / 100, ")");
};

var _default = hexToRgba;
exports["default"] = _default;