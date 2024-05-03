"use strict";

var _cliente = _interopRequireDefault(require("./cliente.mjs"));
var _impuesto = _interopRequireDefault(require("./impuesto.mjs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var montoBrutoAnual1 = 1000000;
var deducciones1 = 0.1 * montoBrutoAnual1;
var impuesto = new _impuesto["default"](montoBrutoAnual1, deducciones1);
var cliente1 = new _cliente["default"]("Pedrito", impuesto);
console.log(cliente1.calcularImpuesto());