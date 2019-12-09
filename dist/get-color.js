"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _getStyle = _interopRequireDefault(require("./get-style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getColor = function getColor(rawProperty) {
  var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.body;
  var property = "--".concat(rawProperty);
  var style = (0, _getStyle["default"])(property, element);
  return style ? style : rawProperty;
};

var _default = getColor;
exports["default"] = _default;