(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (method) {
  return function (args) {
    return method.apply(undefined, args);
  };
};

},{}],2:[function(require,module,exports){
'use strict';

var _each = require('list/each');

var _each2 = _interopRequireDefault(_each);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

(0, _each2.default)([1, 2, 3])(console.log);

},{"list/each":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _apply = require('../core/apply');

var _apply2 = _interopRequireDefault(_apply);

var _length = require('../list/length');

var _length2 = _interopRequireDefault(_length);

var _list = require('../list/list');

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function (items) {
    return function (method) {
        for (var i = 0, len = (0, _length2.default)(items); i < len; i++) {
            (0, _apply2.default)(method)((0, _list2.default)(items[i]));
        }
    };
};

},{"../core/apply":1,"../list/length":5,"../list/list":6}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (array) {
  return function (index) {
    return array[index];
  };
};

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (object) {
  return object.length;
};

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _list = require('../list/list');

var _list2 = _interopRequireDefault(_list);

var _push = require('../list/push');

var _push2 = _interopRequireDefault(_push);

var _index = require('../list/index');

var _index2 = _interopRequireDefault(_index);

var _length = require('../list/length');

var _length2 = _interopRequireDefault(_length);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    var items = [];

    for (var i = 0, len = (0, _length2.default)(args); i < len; i++) {
        (0, _push2.default)(items)((0, _index2.default)(args)(i));
    }return items;
};

},{"../list/index":4,"../list/length":5,"../list/list":6,"../list/push":7}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (array) {
    return function (item) {
        array.push(item);
        return array;
    };
};

},{}]},{},[2])
//# sourceMappingURL=funscript.js.map
