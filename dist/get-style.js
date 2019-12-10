"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _getCssCustomProperties = _interopRequireDefault(require("./get-css-custom-properties"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var minIEVersion = 10;

var isIE1x = function isIE1x() {
  return Boolean(document.documentMode) && document.documentMode >= minIEVersion;
};

var isCustomProperty = function isCustomProperty(property) {
  return property.match(/^--.*/i);
};

var getStyle = function getStyle(property) {
  var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.body;
  var style;

  if (isCustomProperty(property) && isIE1x()) {
    var cssCustomProperties = (0, _getCssCustomProperties["default"])();
    style = cssCustomProperties[property];
  } else {
    style = window.getComputedStyle(element, null).getPropertyValue(property).replace(/^\s/, '');
  }

  return style;
};

var _default = getStyle;
exports["default"] = _default;