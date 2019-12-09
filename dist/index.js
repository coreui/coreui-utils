"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "deepObjectsMerge", {
  enumerable: true,
  get: function get() {
    return _deepObjectsMerge["default"];
  }
});
Object.defineProperty(exports, "getColor", {
  enumerable: true,
  get: function get() {
    return _getColor["default"];
  }
});
Object.defineProperty(exports, "getStyle", {
  enumerable: true,
  get: function get() {
    return _getStyle["default"];
  }
});
Object.defineProperty(exports, "hexToRgb", {
  enumerable: true,
  get: function get() {
    return _hexToRgb["default"];
  }
});
Object.defineProperty(exports, "hexToRgba", {
  enumerable: true,
  get: function get() {
    return _hexToRgba["default"];
  }
});
Object.defineProperty(exports, "rgbToHex", {
  enumerable: true,
  get: function get() {
    return _rgbToHex["default"];
  }
});
exports.utils = void 0;

var _deepObjectsMerge = _interopRequireDefault(require("./deep-objects-merge"));

var _getColor = _interopRequireDefault(require("./get-color"));

var _getStyle = _interopRequireDefault(require("./get-style"));

var _hexToRgb = _interopRequireDefault(require("./hex-to-rgb"));

var _hexToRgba = _interopRequireDefault(require("./hex-to-rgba"));

var _rgbToHex = _interopRequireDefault(require("./rgb-to-hex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var utils = {
  deepObjectsMerge: _deepObjectsMerge["default"],
  getColor: _getColor["default"],
  getStyle: _getStyle["default"],
  hexToRgb: _hexToRgb["default"],
  hexToRgba: _hexToRgba["default"],
  rgbToHex: _rgbToHex["default"]
};
exports.utils = utils;