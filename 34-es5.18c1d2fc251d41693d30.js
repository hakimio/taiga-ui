function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var n,o=_getPrototypeOf(e);if(t){var r=_getPrototypeOf(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{nznH:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiCheckboxBlockModule",(function(){return q}));var o,r,l,a=n("2kYt"),i=n("nIj0"),c=n("sEIs"),u=n("SVIu"),s=n("Qq0t"),m=n("dvRg"),p=n("DgXe"),d=n("Piem"),f=n("EM62"),x=n("yPof"),b=n("K/iL"),h=n("WupT"),g=n("OZlg"),y=n("e0eB"),k=n("iyc4"),C=n("5Gha"),v=((o=function e(){_classCallCheck(this,e),this.testForm=new i.FormGroup({testValue1:new i.FormControl(!1),testValue2:new i.FormControl(!1),testValue3:new i.FormControl(!1)})}).\u0275fac=function(e){return new(e||o)},o.\u0275cmp=f["\u0275\u0275defineComponent"]({type:o,selectors:[["tui-checkbox-block-example-1"]],decls:10,vars:1,consts:[[3,"formGroup"],[1,"tui-form__row"],["formControlName","testValue1","contentAlign","right","size","s"],["formControlName","testValue1","contentAlign","right","size","m"],["contentAlign","right","formControlName","testValue2","size","l"]],template:function(e,t){1&e&&(f["\u0275\u0275elementStart"](0,"form",0),f["\u0275\u0275elementStart"](1,"div",1),f["\u0275\u0275elementStart"](2,"tui-checkbox-block",2),f["\u0275\u0275text"](3," \u0421\u043e\u0433\u043b\u0430\u0441\u0435\u043d \u043e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u043e\u043d\u043b\u0430\u0439\u043d "),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](4,"div",1),f["\u0275\u0275elementStart"](5,"tui-checkbox-block",3),f["\u0275\u0275text"](6," \u0421\u043e\u0433\u043b\u0430\u0441\u0435\u043d \u043e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u043e\u043d\u043b\u0430\u0439\u043d "),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](7,"div",1),f["\u0275\u0275elementStart"](8,"tui-checkbox-block",4),f["\u0275\u0275text"](9," \u0421\u043e\u0433\u043b\u0430\u0441\u0435\u043d \u043e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u043e\u043d\u043b\u0430\u0439\u043d "),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"]()),2&e&&f["\u0275\u0275property"]("formGroup",t.testForm)},directives:[i["\u0275angular_packages_forms_forms_y"],i.NgControlStatusGroup,i.FormGroupDirective,C.a,i.NgControlStatus,i.FormControlName],encapsulation:2,changeDetection:0}),o),_=n("Co3A"),w=((r=function e(){_classCallCheck(this,e),this.testForm=new i.FormGroup({testValue1:new i.FormControl(!1),testValue2:new i.FormControl(!1),testValue3:new i.FormControl(!1)})}).\u0275fac=function(e){return new(e||r)},r.\u0275cmp=f["\u0275\u0275defineComponent"]({type:r,selectors:[["tui-checkbox-block-example-2"]],decls:20,vars:4,consts:[[1,"title"],[1,"group",3,"formGroup"],[1,"group",3,"collapsed"],["contentAlign","right","formControlName","testValue1","size","l"],["contentAlign","right","formControlName","testValue2","size","l"],["contentAlign","right","formControlName","testValue3","size","l"],[3,"formGroup"],["orientation","vertical",1,"group",3,"collapsed"]],template:function(e,t){1&e&&(f["\u0275\u0275elementStart"](0,"h3",0),f["\u0275\u0275text"](1,"\u0413\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u0430\u044f \u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u0430"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](2,"form",1),f["\u0275\u0275elementStart"](3,"tui-group",2),f["\u0275\u0275elementStart"](4,"tui-checkbox-block",3),f["\u0275\u0275text"](5," \u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a "),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](6,"tui-checkbox-block",4),f["\u0275\u0275text"](7," \u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a "),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](8,"tui-checkbox-block",5),f["\u0275\u0275text"](9," \u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a "),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](10,"h3",0),f["\u0275\u0275text"](11,"\u0412\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u0430\u044f \u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u0430"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](12,"form",6),f["\u0275\u0275elementStart"](13,"tui-group",7),f["\u0275\u0275elementStart"](14,"tui-checkbox-block",3),f["\u0275\u0275text"](15," \u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a "),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](16,"tui-checkbox-block",4),f["\u0275\u0275text"](17," \u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a "),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](18,"tui-checkbox-block",5),f["\u0275\u0275text"](19," \u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a "),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"]()),2&e&&(f["\u0275\u0275advance"](2),f["\u0275\u0275property"]("formGroup",t.testForm),f["\u0275\u0275advance"](1),f["\u0275\u0275property"]("collapsed",!0),f["\u0275\u0275advance"](9),f["\u0275\u0275property"]("formGroup",t.testForm),f["\u0275\u0275advance"](1),f["\u0275\u0275property"]("collapsed",!0))},directives:[i["\u0275angular_packages_forms_forms_y"],i.NgControlStatusGroup,i.FormGroupDirective,_.a,C.a,i.NgControlStatus,i.FormControlName],styles:[".group[_ngcontent-%COMP%]{max-width:528px;margin-bottom:24px}.title[_ngcontent-%COMP%]{font-weight:700;font-size:24px;font-family:var(--tui-heading-font);line-height:28px;letter-spacing:-.3px;margin:0 0 16px}"],changeDetection:0}),r),F=n("cweO"),V=n("9gA3"),S=((l=function e(){_classCallCheck(this,e),this.testForm=new i.FormGroup({testValue1:new i.FormControl(!1),testValue2:new i.FormControl(!1),testValue3:new i.FormControl(!1),testValue4:new i.FormControl(!1)})}).\u0275fac=function(e){return new(e||l)},l.\u0275cmp=f["\u0275\u0275defineComponent"]({type:l,selectors:[["tui-checkbox-block-example-3"]],decls:25,vars:3,consts:[[1,"control",3,"formGroup"],[1,"tui-form__row"],["formControlName","testValue1","size","l"],[1,"content"],["text","\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a","size","s",1,"tui-space_right-3",3,"rounded"],["formControlName","testValue2","size","l"],[1,"label"],["formControlName","testValue3","size","l"],[1,"inner"],[1,"text"],["formControlName","testValue4","contentAlign","left","nativeId","example3","size","l"],[1,"inner","inner_flex"],["describeId","example3","content","\u0424\u043e\u0440\u043c\u0430 \u0433\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0439 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0438 \u0440\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u0438\u0445 \u0441\u0435\u043c\u0435\u0439, \u0438\u043c\u0435\u044e\u0449\u0438\u0445 \u0434\u0435\u0442\u0435\u0439."]],template:function(e,t){1&e&&(f["\u0275\u0275elementStart"](0,"form",0),f["\u0275\u0275elementStart"](1,"div",1),f["\u0275\u0275elementStart"](2,"tui-checkbox-block",2),f["\u0275\u0275elementStart"](3,"div",3),f["\u0275\u0275element"](4,"tui-avatar",4),f["\u0275\u0275text"](5," \u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a "),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](6,"div",1),f["\u0275\u0275elementStart"](7,"tui-checkbox-block",5),f["\u0275\u0275elementStart"](8,"div",3),f["\u0275\u0275element"](9,"tui-avatar",4),f["\u0275\u0275elementStart"](10,"div"),f["\u0275\u0275elementStart"](11,"div",6),f["\u0275\u0275text"](12,"\u041b\u0435\u0439\u0431\u043b"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275text"](13," \u041f\u043b\u0435\u0439\u0441\u0445\u043e\u043b\u0434\u0435\u0440 "),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](14,"div",1),f["\u0275\u0275elementStart"](15,"tui-checkbox-block",7),f["\u0275\u0275elementStart"](16,"div",8),f["\u0275\u0275text"](17," \u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a "),f["\u0275\u0275elementStart"](18,"div",9),f["\u0275\u0275text"](19," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque incidunt itaque iusto natus quaerat quia similique veniam? "),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](20,"div",1),f["\u0275\u0275elementStart"](21,"tui-checkbox-block",10),f["\u0275\u0275elementStart"](22,"div",11),f["\u0275\u0275text"](23," \u041c\u0430\u0442\u0435\u0440\u0438\u043d\u0441\u043a\u0438\u0439 \u043a\u0430\u043f\u0438\u0442\u0430\u043b "),f["\u0275\u0275element"](24,"tui-tooltip",12),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"]()),2&e&&(f["\u0275\u0275property"]("formGroup",t.testForm),f["\u0275\u0275advance"](4),f["\u0275\u0275property"]("rounded",!0),f["\u0275\u0275advance"](5),f["\u0275\u0275property"]("rounded",!0))},directives:[i["\u0275angular_packages_forms_forms_y"],i.NgControlStatusGroup,i.FormGroupDirective,C.a,i.NgControlStatus,i.FormControlName,F.a,V.a],styles:[".control[_ngcontent-%COMP%]{max-width:272px}.content[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.label[_ngcontent-%COMP%]{color:#909090}.label[_ngcontent-%COMP%], .text[_ngcontent-%COMP%]{font-weight:400;font-size:13px;font-family:var(--tui-text-font);line-height:20px}.text[_ngcontent-%COMP%]{margin-top:4px;color:#666}.inner[_ngcontent-%COMP%]{margin:16px 0;white-space:normal}.inner_flex[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin:0;width:500px}"],changeDetection:0}),l),P=n("EPR0"),E=n("yHor"),A=n("zGJC"),z=n("FSyC"),N=n("u8jZ");function T(e,t){if(1&e&&(f["\u0275\u0275elementStart"](0,"code"),f["\u0275\u0275text"](1,"CheckboxBlock"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275text"](2," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0432 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u043c \u0432 \u0444\u043e\u0440\u043c\u0430\u0445, \u0433\u0434\u0435 \u0432\u044b\u0431\u043e\u0440 \u043e\u043f\u0446\u0438\u0438 \u043d\u0435 \u0432\u043b\u0438\u044f\u0435\u0442 \u043d\u0430 \u0441\u043c\u0435\u043d\u0443 \u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430, \u0442.\u0435. \u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043a\u0430\u043a \u0444\u0438\u043b\u044c\u0442\u0440. \u0413\u0440\u0443\u043f\u043f\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u044b\u0439 \u0441\u0442\u0435\u043a. \u041f\u0435\u0440\u0435\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0435 \u0432 \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0441\u0442\u0435\u043a \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u043d\u0430 \u043a\u043e\u043c\u043f\u0430\u043a\u0442\u043d\u044b\u0445 \u0433\u0440\u0438\u0434\u0430\u0445 \u2013 \u043d\u0430 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0445 \u0438\u043b\u0438 \u0442\u0430\u0431\u043b\u0435\u0442\u043d\u044b\u0445 \u0432\u0435\u0440\u0441\u0438\u044f\u0445. \u041b\u0435\u0439\u0431\u043b \u0432\u0441\u0435\u0433\u0434\u0430 \u0440\u0430\u0441\u043f\u043e\u043b\u0430\u0433\u0430\u0435\u0442\u0441\u044f \u0441\u043b\u0435\u0432\u0430, \u0447\u0435\u043a\u0431\u043e\u043a\u0441 \u2013 \u0441\u043f\u0440\u0430\u0432\u0430. "),f["\u0275\u0275elementStart"](3,"tui-doc-example",2),f["\u0275\u0275element"](4,"tui-checkbox-block-example-1"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](5,"tui-doc-example",3),f["\u0275\u0275element"](6,"tui-checkbox-block-example-2"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](7,"tui-doc-example",4),f["\u0275\u0275element"](8,"tui-checkbox-block-example-3"),f["\u0275\u0275elementEnd"]()),2&e){var n=f["\u0275\u0275nextContext"]();f["\u0275\u0275advance"](3),f["\u0275\u0275property"]("content",n.example1),f["\u0275\u0275advance"](2),f["\u0275\u0275property"]("content",n.example2),f["\u0275\u0275advance"](2),f["\u0275\u0275property"]("content",n.example3)}}function O(e,t){if(1&e&&(f["\u0275\u0275elementStart"](0,"form",10),f["\u0275\u0275elementStart"](1,"tui-checkbox-block",11),f["\u0275\u0275text"](2," \u0421\u043e\u0433\u043b\u0430\u0441\u0435\u043d \u043e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u043e\u043d\u043b\u0430\u0439\u043d "),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](3,"tui-checkbox-block",12),f["\u0275\u0275text"](4," \u041e\u0442\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u043e\u043d\u043b\u0430\u0439\u043d "),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](5,"tui-checkbox-block",13),f["\u0275\u0275text"](6," \u0414\u0440\u0443\u0433\u043e\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 "),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"]()),2&e){var n=f["\u0275\u0275nextContext"](2);f["\u0275\u0275property"]("formGroup",n.control),f["\u0275\u0275advance"](1),f["\u0275\u0275property"]("contentAlign",n.contentAlign)("focusable",n.focusable)("hideCheckbox",n.hideCheckbox)("pseudoInvalid",n.pseudoInvalid)("pseudoFocused",n.pseudoFocused)("pseudoHovered",n.pseudoHovered)("pseudoPressed",n.pseudoPressed)("readOnly",n.readOnly)("size",n.size),f["\u0275\u0275advance"](2),f["\u0275\u0275property"]("contentAlign",n.contentAlign)("focusable",n.focusable)("hideCheckbox",n.hideCheckbox)("pseudoInvalid",n.pseudoInvalid)("pseudoFocused",n.pseudoFocused)("pseudoHovered",n.pseudoHovered)("pseudoPressed",n.pseudoPressed)("readOnly",n.readOnly)("size",n.size),f["\u0275\u0275advance"](2),f["\u0275\u0275property"]("contentAlign",n.contentAlign)("focusable",n.focusable)("hideCheckbox",n.hideCheckbox)("pseudoInvalid",n.pseudoInvalid)("pseudoFocused",n.pseudoFocused)("pseudoHovered",n.pseudoHovered)("pseudoPressed",n.pseudoPressed)("readOnly",n.readOnly)("size",n.size)}}function M(e,t){1&e&&f["\u0275\u0275text"](0," \u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0444\u043e\u0440\u043c\u044b disabled (\u0447\u0435\u0440\u0435\u0437 formControl.disable()) ")}function G(e,t){1&e&&f["\u0275\u0275text"](0," \u041f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0447\u0435\u043a\u0431\u043e\u043a\u0441\u0430 ")}function I(e,t){1&e&&f["\u0275\u0275text"](0," \u0421\u043a\u0440\u044b\u0442\u044c \u0447\u0435\u043a\u0431\u043e\u043a\u0441 ")}function j(e,t){1&e&&f["\u0275\u0275text"](0," \u0420\u0430\u0437\u043c\u0435\u0440 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0430 ")}function D(e,t){if(1&e){var n=f["\u0275\u0275getCurrentView"]();f["\u0275\u0275elementStart"](0,"tui-doc-demo",5),f["\u0275\u0275template"](1,O,7,28,"ng-template"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](2,"tui-doc-documentation"),f["\u0275\u0275template"](3,M,1,0,"ng-template",6),f["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return f["\u0275\u0275restoreView"](n),f["\u0275\u0275nextContext"]().disabled=e})),f["\u0275\u0275template"](4,G,1,0,"ng-template",7),f["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return f["\u0275\u0275restoreView"](n),f["\u0275\u0275nextContext"]().contentAlign=e})),f["\u0275\u0275template"](5,I,1,0,"ng-template",8),f["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return f["\u0275\u0275restoreView"](n),f["\u0275\u0275nextContext"]().hideCheckbox=e})),f["\u0275\u0275template"](6,j,1,0,"ng-template",9),f["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return f["\u0275\u0275restoreView"](n),f["\u0275\u0275nextContext"]().size=e})),f["\u0275\u0275elementEnd"](),f["\u0275\u0275element"](7,"inherited-documentation")}if(2&e){var o=f["\u0275\u0275nextContext"]();f["\u0275\u0275property"]("control",o.control),f["\u0275\u0275advance"](3),f["\u0275\u0275property"]("documentationPropertyValue",o.disabled),f["\u0275\u0275advance"](1),f["\u0275\u0275property"]("documentationPropertyValues",o.contentAlignVariants)("documentationPropertyValue",o.contentAlign),f["\u0275\u0275advance"](1),f["\u0275\u0275property"]("documentationPropertyValue",o.hideCheckbox),f["\u0275\u0275advance"](1),f["\u0275\u0275property"]("documentationPropertyValues",o.sizeVariants)("documentationPropertyValue",o.size)}}function R(e,t){if(1&e&&(f["\u0275\u0275elementStart"](0,"ol",14),f["\u0275\u0275elementStart"](1,"li"),f["\u0275\u0275text"](2," \u0414\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043c\u043e\u0434\u0443\u043b\u0438 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0444\u043e\u0440\u043c\u0430\u043c\u0438 \u0438\u0437 Angular \u0438 \u043c\u043e\u0434\u0443\u043b\u044c "),f["\u0275\u0275elementStart"](3,"code"),f["\u0275\u0275text"](4,"TuiCheckboxBlockModule"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275text"](5," \u0432 \u0442\u043e\u0442 \u0436\u0435 \u043c\u043e\u0434\u0443\u043b\u044c, \u043a\u0443\u0434\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432\u0430\u0448 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442: "),f["\u0275\u0275element"](6,"tui-doc-code",15),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](7,"li"),f["\u0275\u0275text"](8," \u041e\u0431\u044a\u044f\u0432\u0438\u0442\u044c \u0444\u043e\u0440\u043c\u0443 ("),f["\u0275\u0275elementStart"](9,"code"),f["\u0275\u0275text"](10,"FormGroup"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275text"](11,") \u0438\u043b\u0438 \u043a\u043e\u043d\u0442\u0440\u043e\u043b ("),f["\u0275\u0275elementStart"](12,"code"),f["\u0275\u0275text"](13,"FormControl"),f["\u0275\u0275elementEnd"](),f["\u0275\u0275text"](14,") \u0432 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0435: "),f["\u0275\u0275element"](15,"tui-doc-code",16),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](16,"li"),f["\u0275\u0275text"](17," \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0448\u0430\u0431\u043b\u043e\u043d: "),f["\u0275\u0275element"](18,"tui-doc-code",17),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementEnd"]()),2&e){var n=f["\u0275\u0275nextContext"]();f["\u0275\u0275advance"](6),f["\u0275\u0275property"]("code",n.exampleImportModule),f["\u0275\u0275advance"](9),f["\u0275\u0275property"]("code",n.exampleDeclareForm),f["\u0275\u0275advance"](3),f["\u0275\u0275property"]("code",n.exampleInsertTemplate)}}var H,L,B=((L=function(e){_inherits(n,e);var t=_createSuper(n);function n(e){var o;return _classCallCheck(this,n),(o=t.call(this)).howToResolver=e,o.exampleDeclareForm="import {FormControl, FormGroup} from '@angular/forms';\n\n...\n\n@Component({\n    ...\n})\nexport class MyComponent {\n    testForm = new FormGroup({\n        testValue: new FormControl()\n    });\n}\n",o.exampleImportModule="import {FormsModule, ReactiveFormsModule} from '@angular/forms';\nimport {TuiCheckboxBlockModule} from '@taiga-ui/kit';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        FormsModule,\n        ReactiveFormsModule,\n        TuiCheckboxBlockModule\n    ],\n...\n",o.exampleInsertTemplate='<div [formGroup]="testForm">\n    <tui-checkbox-block formControlName="testValue">\n        \u0421\u043e\u0433\u043b\u0430\u0441\u0435\u043d \u043e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u043e\u043d\u043b\u0430\u0439\u043d\n    </tui-checkbox-block>\n</div>\n',o.example1={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-checkbox-block-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiCheckboxBlockExample1 {\n    testForm = new FormGroup({\n        testValue1: new FormControl(false),\n        testValue2: new FormControl(false),\n        testValue3: new FormControl(false),\n    });\n}\n",HTML:'<form [formGroup]="testForm">\n    <div class="tui-form__row">\n        <tui-checkbox-block\n            formControlName="testValue1"\n            contentAlign="right"\n            size="s"\n        >\n            \u0421\u043e\u0433\u043b\u0430\u0441\u0435\u043d \u043e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u043e\u043d\u043b\u0430\u0439\u043d\n        </tui-checkbox-block>\n    </div>\n    <div class="tui-form__row">\n        <tui-checkbox-block\n            formControlName="testValue1"\n            contentAlign="right"\n            size="m"\n        >\n            \u0421\u043e\u0433\u043b\u0430\u0441\u0435\u043d \u043e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u043e\u043d\u043b\u0430\u0439\u043d\n        </tui-checkbox-block>\n    </div>\n    <div class="tui-form__row">\n        <tui-checkbox-block\n            contentAlign="right"\n            formControlName="testValue2"\n            size="l"\n        >\n            \u0421\u043e\u0433\u043b\u0430\u0441\u0435\u043d \u043e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u043e\u043d\u043b\u0430\u0439\u043d\n        </tui-checkbox-block>\n    </div>\n</form>\n'},o.example2={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-checkbox-block-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiCheckboxBlockExample2 {\n    testForm = new FormGroup({\n        testValue1: new FormControl(false),\n        testValue2: new FormControl(false),\n        testValue3: new FormControl(false),\n    });\n}\n",HTML:'<h3 class="title">\u0413\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u0430\u044f \u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u0430</h3>\n<form class="group" [formGroup]="testForm">\n    <tui-group class="group" [collapsed]="true">\n        <tui-checkbox-block\n            contentAlign="right"\n            formControlName="testValue1"\n            size="l"\n        >\n            \u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a\n        </tui-checkbox-block>\n        <tui-checkbox-block\n            contentAlign="right"\n            formControlName="testValue2"\n            size="l"\n        >\n            \u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a\n        </tui-checkbox-block>\n        <tui-checkbox-block\n            contentAlign="right"\n            formControlName="testValue3"\n            size="l"\n        >\n            \u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a\n        </tui-checkbox-block>\n    </tui-group>\n</form>\n<h3 class="title">\u0412\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u0430\u044f \u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u0430</h3>\n<form [formGroup]="testForm">\n    <tui-group class="group" orientation="vertical" [collapsed]="true">\n        <tui-checkbox-block\n            contentAlign="right"\n            formControlName="testValue1"\n            size="l"\n        >\n            \u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a\n        </tui-checkbox-block>\n        <tui-checkbox-block\n            contentAlign="right"\n            formControlName="testValue2"\n            size="l"\n        >\n            \u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a\n        </tui-checkbox-block>\n        <tui-checkbox-block\n            contentAlign="right"\n            formControlName="testValue3"\n            size="l"\n        >\n            \u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a\n        </tui-checkbox-block>\n    </tui-group>\n</form>\n'},o.example3={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-checkbox-block-example-3',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiCheckboxBlockExample3 {\n    testForm = new FormGroup({\n        testValue1: new FormControl(false),\n        testValue2: new FormControl(false),\n        testValue3: new FormControl(false),\n        testValue4: new FormControl(false),\n    });\n}\n",HTML:'<form class="control" [formGroup]="testForm">\n    <div class="tui-form__row">\n        <tui-checkbox-block formControlName="testValue1" size="l">\n            <div class="content">\n                <tui-avatar\n                    class="tui-space_right-3"\n                    text="\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"\n                    size="s"\n                    [rounded]="true"\n                ></tui-avatar>\n                \u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a\n            </div>\n        </tui-checkbox-block>\n    </div>\n    <div class="tui-form__row">\n        <tui-checkbox-block formControlName="testValue2" size="l">\n            <div class="content">\n                <tui-avatar\n                    class="tui-space_right-3"\n                    text="\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"\n                    size="s"\n                    [rounded]="true"\n                ></tui-avatar>\n                <div>\n                    <div class="label">\u041b\u0435\u0439\u0431\u043b</div>\n                    \u041f\u043b\u0435\u0439\u0441\u0445\u043e\u043b\u0434\u0435\u0440\n                </div>\n            </div>\n        </tui-checkbox-block>\n    </div>\n    <div class="tui-form__row">\n        <tui-checkbox-block formControlName="testValue3" size="l">\n            <div class="inner">\n                \u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a\n                <div class="text">\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                    Animi atque incidunt itaque iusto natus quaerat quia\n                    similique veniam?\n                </div>\n            </div>\n        </tui-checkbox-block>\n    </div>\n    <div class="tui-form__row">\n        <tui-checkbox-block\n            formControlName="testValue4"\n            contentAlign="left"\n            nativeId="example3"\n            size="l"\n        >\n            <div class="inner inner_flex">\n                \u041c\u0430\u0442\u0435\u0440\u0438\u043d\u0441\u043a\u0438\u0439 \u043a\u0430\u043f\u0438\u0442\u0430\u043b\n                <tui-tooltip\n                    describeId="example3"\n                    content="\u0424\u043e\u0440\u043c\u0430 \u0433\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0439 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0438 \u0440\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u0438\u0445 \u0441\u0435\u043c\u0435\u0439, \u0438\u043c\u0435\u044e\u0449\u0438\u0445 \u0434\u0435\u0442\u0435\u0439."\n                ></tui-tooltip>\n            </div>\n        </tui-checkbox-block>\n    </div>\n</form>\n',LESS:"@import 'taiga-ui-angular-local';\n\n.control {\n    max-width: 272px;\n}\n\n.content {\n    display: flex;\n    align-items: center;\n}\n\n.label {\n    .text-body-s();\n    color: @color-text-lighter;\n}\n\n.text {\n    .text-body-s();\n    margin-top: @space;\n    color: @color-text-light;\n}\n\n.inner {\n    margin: 16px 0;\n    white-space: normal;\n\n    &_flex {\n        display: flex;\n        justify-content: space-between;\n        margin: 0;\n        width: 500px;\n    }\n}\n"},o.contentAlignVariants=["left","right"],o.contentAlign=o.contentAlignVariants[1],o.hideCheckbox=!1,o.sizeVariants=["s","m","l"],o.size=o.sizeVariants[2],o.control=new i.FormGroup({testValue1:new i.FormControl(!1),testValue2:new i.FormControl,testValue3:new i.FormControl(!0)}),o}return _createClass(n,[{key:"disabled",get:function(){return this.control.disabled},set:function(e){e?this.control.disable():this.control.enable()}}]),n}(h.a)).\u0275fac=function(e){return new(e||L)(f["\u0275\u0275directiveInject"](x.a))},L.\u0275cmp=f["\u0275\u0275defineComponent"]({type:L,selectors:[["example-tui-checkbox-block"]],features:[f["\u0275\u0275ProvidersFeature"]([{provide:b.a,useExisting:Object(f.forwardRef)((function(){return L}))}]),f["\u0275\u0275InheritDefinitionFeature"]],decls:4,vars:0,consts:[["header","CheckboxBlock","package","KIT"],["pageTab",""],["id","sizes","heading","\u0440\u0430\u0437\u043c\u0435\u0440\u044b",3,"content"],["id","groups","heading","\u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u0430",3,"content"],["id","custom","heading","\u043a\u0430\u0441\u0442\u043e\u043c\u043d\u0430\u044f \u0432\u0435\u0440\u0441\u0442\u043a\u0430",3,"content"],[3,"control"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","contentAlign","documentationPropertyMode","input","documentationPropertyType","TuiHorizontalDirection",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","hideCheckbox","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","size","documentationPropertyMode","input","documentationPropertyType","TuiSizeS | TuiSizeL",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"formGroup"],["formControlName","testValue1",1,"tui-space_all-1",3,"contentAlign","focusable","hideCheckbox","pseudoInvalid","pseudoFocused","pseudoHovered","pseudoPressed","readOnly","size"],["formControlName","testValue2",1,"tui-space_all-1",3,"contentAlign","focusable","hideCheckbox","pseudoInvalid","pseudoFocused","pseudoHovered","pseudoPressed","readOnly","size"],["formControlName","testValue3",1,"tui-space_all-1",3,"contentAlign","focusable","hideCheckbox","pseudoInvalid","pseudoFocused","pseudoHovered","pseudoPressed","readOnly","size"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.component.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(f["\u0275\u0275elementStart"](0,"tui-doc-page",0),f["\u0275\u0275template"](1,T,9,3,"ng-template",1),f["\u0275\u0275template"](2,D,8,7,"ng-template",1),f["\u0275\u0275template"](3,R,19,3,"ng-template",1),f["\u0275\u0275elementEnd"]())},directives:[g.a,y.a,k.a,v,w,S,P.a,E.a,A.a,z.a,i["\u0275angular_packages_forms_forms_y"],i.NgControlStatusGroup,i.FormGroupDirective,C.a,i.NgControlStatus,i.FormControlName,N.a],styles:[".wrapper[_ngcontent-%COMP%]{margin-top:30px}"],changeDetection:0}),L),q=((H=function e(){_classCallCheck(this,e)}).\u0275mod=f["\u0275\u0275defineNgModule"]({type:H}),H.\u0275inj=f["\u0275\u0275defineInjector"]({factory:function(e){return new(e||H)},imports:[[a.c,i.FormsModule,m.TuiCheckboxBlockModule,s.TuiGroupModule,p.b].concat(_toConsumableArray(u.e),[d.a,i.ReactiveFormsModule,a.c,m.TuiAvatarModule,m.TuiRadioListModule,s.TuiButtonModule,s.TuiTooltipModule,c.g.forChild(Object(u.n)(B))])]}),H)}}]);