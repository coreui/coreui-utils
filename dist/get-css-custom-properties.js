"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://coreui.io/license)
 * @returns {string} css custom property name
 * --------------------------------------------------------------------------
 */
var getCssCustomProperties = function getCssCustomProperties() {
  var cssCustomProperties = {};
  var sheets = document.styleSheets;
  var cssText = '';

  for (var i = sheets.length - 1; i > -1; i--) {
    var rules = sheets[i].cssRules;

    for (var j = rules.length - 1; j > -1; j--) {
      if (rules[j].selectorText === '.ie-custom-properties') {
        // eslint-disable-next-line prefer-destructuring
        cssText = rules[j].cssText;
        break;
      }
    }

    if (cssText) {
      break;
    }
  } // eslint-disable-next-line unicorn/prefer-string-slice


  cssText = cssText.substring(cssText.lastIndexOf('{') + 1, cssText.lastIndexOf('}'));
  cssText.split(';').forEach(function (property) {
    if (property) {
      var name = property.split(': ')[0];
      var value = property.split(': ')[1];

      if (name && value) {
        cssCustomProperties["--".concat(name.trim())] = value.trim();
      }
    }
  });
  return cssCustomProperties;
};

var _default = getCssCustomProperties;
exports["default"] = _default;