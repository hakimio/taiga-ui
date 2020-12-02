function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var n,o=_getPrototypeOf(e);if(t){var i=_getPrototypeOf(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"KPn+":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var o=function e(){_classCallCheck(this,e),this.pseudoVariants=[!1,!0],this.focusable=!0,this.pseudoFocused=null,this.pseudoHovered=null,this.pseudoPressed=null}},WupT:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n("Qq0t"),i=function(e){_inherits(n,e);var t=_createSuper(n);function n(){var e;return _classCallCheck(this,n),(e=t.apply(this,arguments)).sizeVariants=["s","m","l"],e.hintContentVariants=["\u0418\u0432\u0430\u043d\u043e\u0432 \u0418\u0432\u0430\u043d \u0418\u0432\u0430\u043d\u043e\u0432\u0438\u0447"],e.hintDirectionVariants=["left","right","bottom-left","bottom-right","top-left","top-right"],e.hintModeVariants=["error","light"],e.typeVariants=["text","email","password","tel","url"],e.maxLengthVariants=[10],e.autocompleteVariants=["off","cc-name","cc-number","cc-exp-month","cc-exp-year","cc-type","given-name","additional-name","family-name","username","email","street-address","postal-code","country-name"],e.inputModeVariants=["text","numeric"],e.customContentVariants=["\u041a\u043e\u043b\u043e\u043a\u043e\u043b\u044c\u0447\u0438\u043a"],e.customContentSelected=null,e.inputMode=e.inputModeVariants[0],e.autocomplete=null,e.maxLength=null,e.type=e.typeVariants[0],e.cleaner=!1,e.pseudoInvalid=null,e.success=!1,e.readOnly=!1,e.labelOutside=!1,e.size=e.sizeVariants[2],e.exampleText="",e.hintContent=null,e.hintDirection=e.hintDirectionVariants[2],e.hintMode=null,e.dropdownAlignVariants=["left","right"],e.dropdownAlign=e.dropdownAlignVariants[0],e.dropdownLimitWidthVariants=["fixed","min"],e.dropdownLimitWidth=e.dropdownLimitWidthVariants[0],e.dropdownDirectionVariants=["top","bottom"],e.dropdownDirection=null,e.dropdownMinHeight=o.DEFAULT_MIN_HEIGHT,e.dropdownMaxHeight=o.DEFAULT_MAX_HEIGHT,e}return _createClass(n,[{key:"customContent",get:function(){return null!==this.customContentSelected?'<svg xmlns="http://www.w3.org/2000/svg"\nwidth="24px"\nheight="24px"\nviewBox="0 0 24 24">\n<path fill="currentColor" d="M10,17v1c0,1.1,0.9,2,2,2h0c1.1,0,2-0.9,2-2l0-1h3.6L17,15.2V11c0-2.2-1.4-4-3-4h-1V5\n   c0-0.6-0.4-1-1-1s-1,0.4-1,1v2h-1c-1.3,0-3,1.9-3,4v4.2L6.4,17H10z M3.6,19L5,14.8V11c0-2.7,1.9-5.2,4-5.8V5c0-1.7,1.3-3,3-3\n   s3,1.3,3,3v0.1c2.3,0.6,4,3,4,5.9v3.8l1.4,4.2h-4.5c-0.4,1.8-2,3-3.9,3c-1.8,0-3.4-1.2-3.9-3H3.6z"/>\n</svg>':null}},{key:"disabled",get:function(){return this.control.disabled},set:function(e){e?this.control.disable():this.control.enable()}}]),n}(n("KPn+").a)},n8gQ:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiInputInlineModule",(function(){return z}));var o,i=n("2kYt"),r=n("nIj0"),a=n("sEIs"),l=n("SVIu"),u=n("l4xa"),s=n("Qq0t"),c=n("dvRg"),p=n("WupT"),m=n("EM62"),d=n("OZlg"),f=n("e0eB"),g=n("iyc4"),h=n("o9ES"),y=n("zV1d"),x=((o=function(){function e(){_classCallCheck(this,e),this.testForm=new r.FormGroup({testValue1:new r.FormControl("Hello 1"),testValue2:new r.FormControl("Hello 2"),testValue3:new r.FormControl("Hello 3"),testValue4:new r.FormControl("")})}return _createClass(e,[{key:"onToggleClick",value:function(){this.testForm.disabled?this.testForm.enable():this.testForm.disable()}},{key:"toggleContent",get:function(){return this.testForm.disabled?"enable (allow editing)":"disable"}},{key:"input4Empty",get:function(){return""===this.testForm.get("testValue4").value}}]),e}()).\u0275fac=function(e){return new(e||o)},o.\u0275cmp=m["\u0275\u0275defineComponent"]({type:o,selectors:[["tui-input-inline-example-1"]],decls:8,vars:4,consts:[[3,"formGroup"],["formControlName","testValue1",1,"input1"],["formControlName","testValue2",1,"input2"],["formControlName","testValue3",1,"input3"],["formControlName","testValue4",1,"input4"],["tuiButton","","type","button","size","m",3,"click"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"form",0),m["\u0275\u0275element"](1,"tui-input-inline",1),m["\u0275\u0275element"](2,"tui-input-inline",2),m["\u0275\u0275element"](3,"tui-input-inline",3),m["\u0275\u0275elementStart"](4,"tui-input-inline",4),m["\u0275\u0275text"](5," (Show placeholder if control is empty) "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"button",5),m["\u0275\u0275listener"]("click",(function(){return t.onToggleClick()})),m["\u0275\u0275text"](7),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275property"]("formGroup",t.testForm),m["\u0275\u0275advance"](4),m["\u0275\u0275classProp"]("input4_empty",t.input4Empty),m["\u0275\u0275advance"](3),m["\u0275\u0275textInterpolate1"](" ",t.toggleContent,"\n"))},directives:[r["\u0275angular_packages_forms_forms_y"],r.NgControlStatusGroup,r.FormGroupDirective,h.a,r.NgControlStatus,r.FormControlName,y.a],styles:[".input1[_ngcontent-%COMP%], .input2[_ngcontent-%COMP%], .input3[_ngcontent-%COMP%]{margin-right:10px}.input1[_ngcontent-%COMP%]{border:2px solid #e01f19}.input2[_ngcontent-%COMP%]{background:var(--tui-base-09);padding:10px;color:#fff;letter-spacing:10px;font-size:20px}.input3[_ngcontent-%COMP%]{font-family:monospace;font-weight:700;background:#cbcfd3}.input4_empty[_ngcontent-%COMP%]{opacity:.3}"],changeDetection:0}),o),C=n("oW5P");function b(e,t){if(1&e){var n=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"tui-input-inline",3),m["\u0275\u0275listener"]("ngModelChange",(function(e){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"]().heading=e}))("focusedChange",(function(e){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"]().onFocusedChange(e)}))("keydown.esc.prevent",(function(){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"]().toggle()}))("keydown.enter.prevent",(function(){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"]().toggle()})),m["\u0275\u0275text"](1," \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a "),m["\u0275\u0275elementEnd"]()}if(2&e){var o=m["\u0275\u0275nextContext"]();m["\u0275\u0275property"]("ngModel",o.heading)}}function v(e,t){if(1&e){var n=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"span"),m["\u0275\u0275text"](1),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](2,"button",4),m["\u0275\u0275listener"]("click",(function(){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"]().toggle()})),m["\u0275\u0275elementEnd"]()}if(2&e){var o=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](1),m["\u0275\u0275textInterpolate"](o.heading)}}var V,w=((V=function(){function e(t){_classCallCheck(this,e),this.notifications=t,this.heading="\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b",this.editing=!1}return _createClass(e,[{key:"toggle",value:function(){this.editing=!this.editing}},{key:"onFocusedChange",value:function(e){e||(this.editing=!1,this.saveHeading(this.heading))}},{key:"saveHeading",value:function(e){this.notifications.showNotification(e,{label:"\u041d\u043e\u0432\u044b\u0439 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"}).subscribe()}}]),e}()).\u0275fac=function(e){return new(e||V)(m["\u0275\u0275directiveInject"](s.TuiNotificationsService))},V.\u0275cmp=m["\u0275\u0275defineComponent"]({type:V,selectors:[["tui-input-inline-example-2"]],decls:8,vars:4,consts:[[1,"header"],["tuiAutoFocus","",3,"ngModel","ngModelChange","focusedChange","keydown.esc.prevent","keydown.enter.prevent",4,"ngIf","ngIfElse"],["text",""],["tuiAutoFocus","",3,"ngModel","ngModelChange","focusedChange","keydown.esc.prevent","keydown.enter.prevent"],["tuiIconButton","","type","button","title","\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a","size","xs","appearance","icon","icon","tuiIconEdit2Large",1,"tui-space_left-1",3,"click"]],template:function(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"h2",0),m["\u0275\u0275template"](1,b,2,1,"tui-input-inline",1),m["\u0275\u0275template"](2,v,3,1,"ng-template",null,2,m["\u0275\u0275templateRefExtractor"]),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](4,"p"),m["\u0275\u0275text"](5," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa exercitationem, sed? Deserunt dignissimos dolorem doloribus officiis quae repellat rerum? Accusantium fuga hic nam necessitatibus non officiis perferendis repellendus tempore voluptates!\n"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"p"),m["\u0275\u0275text"](7," Accusantium adipisci blanditiis esse est et eum fugit id illum, in iste itaque iusto laborum nostrum officia quam quasi quos repellat temporibus tenetur, ullam? Blanditiis fuga iusto maiores omnis quidem!\n"),m["\u0275\u0275elementEnd"]()),2&e){var n=m["\u0275\u0275reference"](3);m["\u0275\u0275classProp"]("header_empty",!t.heading),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf",t.editing)("ngIfElse",n)}},directives:[i.t,h.a,C.a,r.NgControlStatus,r.NgModel,y.a],styles:[".header[_ngcontent-%COMP%]{height:24px}.header_empty[_ngcontent-%COMP%]{opacity:.3}"],changeDetection:0}),V),_=n("EPR0"),k=n("yHor"),P=n("zGJC"),M=n("u8jZ");function I(e,t){if(1&e&&(m["\u0275\u0275text"](0," \u041f\u043e\u043b\u0435 \u0434\u043b\u044f \u0432\u0432\u043e\u0434\u0430, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0432\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0432 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u0435 "),m["\u0275\u0275elementStart"](1,"tui-doc-example",2),m["\u0275\u0275element"](2,"tui-input-inline-example-1"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](3,"tui-doc-example",3),m["\u0275\u0275element"](4,"tui-input-inline-example-2"),m["\u0275\u0275elementEnd"]()),2&e){var n=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("content",n.example1),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("content",n.example2)}}function T(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"tui-input-inline",9),m["\u0275\u0275text"](1," \u041f\u043b\u0435\u0439\u0441\u0445\u043e\u043b\u0434\u0435\u0440 "),m["\u0275\u0275elementEnd"]()),2&e){var n=m["\u0275\u0275nextContext"](2);m["\u0275\u0275property"]("formControl",n.control)("maxLength",n.maxLength)("textMaskOptions",n.textMaskOptions)("unmaskHandler",n.unmaskHandler)}}function S(e,t){1&e&&m["\u0275\u0275text"](0," \u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0444\u043e\u0440\u043c\u044b disabled (\u0447\u0435\u0440\u0435\u0437 formControl.disable()) ")}function E(e,t){1&e&&m["\u0275\u0275text"](0," \u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0432\u0432\u043e\u0434\u0438\u043c\u044b\u0445 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432. ")}function F(e,t){1&e&&(m["\u0275\u0275text"](0," \u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u043c\u0430\u0441\u043a\u0438 ("),m["\u0275\u0275elementStart"](1,"a",10),m["\u0275\u0275text"](2,"\u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275text"](3,"). "))}function O(e,t){1&e&&m["\u0275\u0275text"](0," \u0424\u0443\u043d\u043a\u0446\u0438\u044f \u0434\u043b\u044f \u0441\u043d\u044f\u0442\u0438\u044f \u043c\u0430\u0441\u043a\u0438 \u043f\u0435\u0440\u0435\u0434 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u043e\u0439 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432 \u043a\u043e\u043d\u0442\u0440\u043e\u043b ")}function H(e,t){if(1&e){var n=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"tui-doc-demo",4),m["\u0275\u0275template"](1,T,2,4,"ng-template"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](2,"tui-doc-documentation"),m["\u0275\u0275template"](3,S,1,0,"ng-template",5),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"]().disabled=e})),m["\u0275\u0275template"](4,E,1,0,"ng-template",6),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"]().maxLength=e})),m["\u0275\u0275template"](5,F,4,0,"ng-template",7),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"]().textMaskOptions=e})),m["\u0275\u0275template"](6,O,1,0,"ng-template",8),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"]().unmaskHandler=e})),m["\u0275\u0275elementEnd"]()}if(2&e){var o=m["\u0275\u0275nextContext"]();m["\u0275\u0275property"]("control",o.control),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("documentationPropertyValue",o.disabled),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValues",o.maxLengthVariants)("documentationPropertyValue",o.maxLength),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValues",o.textMaskOptionsVariants)("documentationPropertyValue",o.textMaskOptions),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValues",o.unmaskHandlerVariants)("documentationPropertyValue",o.unmaskHandler)}}function A(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"ol",11),m["\u0275\u0275elementStart"](1,"li"),m["\u0275\u0275text"](2," \u0414\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043c\u043e\u0434\u0443\u043b\u044c "),m["\u0275\u0275elementStart"](3,"code"),m["\u0275\u0275text"](4,"TuiInputInlineModule"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275text"](5," \u0432 \u0442\u043e\u0442 \u0436\u0435 \u043c\u043e\u0434\u0443\u043b\u044c, \u043a\u0443\u0434\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432\u0430\u0448 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442: "),m["\u0275\u0275element"](6,"tui-doc-code",12),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](7,"li"),m["\u0275\u0275text"](8," \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0448\u0430\u0431\u043b\u043e\u043d: "),m["\u0275\u0275element"](9,"tui-doc-code",13),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e){var n=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](6),m["\u0275\u0275property"]("code",n.exampleImportModule),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("code",n.exampleInsertTemplate)}}var L,N,D=/\d/,j=((L=function(e){_inherits(n,e);var t=_createSuper(n);function n(){var e;return _classCallCheck(this,n),(e=t.apply(this,arguments)).exampleImportModule="import {TuiInputInlineModule} from '@taiga-ui/kit';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiInputInlineModule\n    ],\n...\n",e.exampleInsertTemplate="<tui-input-inline></tui-input-inline>\n",e.example1={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-input-inline-example-1',\n    templateUrl: './template.html',\n    styleUrls: ['./style.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputInlineExample1 {\n    testForm = new FormGroup({\n        testValue1: new FormControl('Hello 1'),\n        testValue2: new FormControl('Hello 2'),\n        testValue3: new FormControl('Hello 3'),\n        testValue4: new FormControl(''),\n    });\n\n    get toggleContent(): string {\n        return this.testForm.disabled ? 'enable (allow editing)' : 'disable';\n    }\n\n    get input4Empty(): boolean {\n        return this.testForm.get('testValue4')!.value === '';\n    }\n\n    onToggleClick() {\n        if (this.testForm.disabled) {\n            this.testForm.enable();\n        } else {\n            this.testForm.disable();\n        }\n    }\n}\n",HTML:'<form [formGroup]="testForm">\n    <tui-input-inline\n        class="input1"\n        formControlName="testValue1"\n    ></tui-input-inline>\n    <tui-input-inline\n        class="input2"\n        formControlName="testValue2"\n    ></tui-input-inline>\n    <tui-input-inline\n        class="input3"\n        formControlName="testValue3"\n    ></tui-input-inline>\n    <tui-input-inline\n        class="input4"\n        formControlName="testValue4"\n        [class.input4_empty]="input4Empty"\n    >\n        (Show placeholder if control is empty)\n    </tui-input-inline>\n</form>\n\n<button tuiButton type="button" size="m" (click)="onToggleClick()">\n    {{toggleContent}}\n</button>\n',LESS:"@import 'taiga-ui-angular-local';\n\n.input1,\n.input2,\n.input3 {\n    margin-right: 10px;\n}\n\n.input1 {\n    border: 2px solid @color-red-100;\n}\n\n.input2 {\n    background: var(--tui-base-09);\n    padding: 10px;\n    color: @color-white;\n    letter-spacing: 10px;\n    font-size: 20px;\n}\n\n.input3 {\n    font-family: monospace;\n    font-weight: bold;\n    background: @color-gray-300;\n}\n\n.input4 {\n    &_empty {\n        opacity: 0.3;\n    }\n}\n"},e.example2={TypeScript:"import {Component, Inject} from '@angular/core';\nimport {TuiNotificationsService} from '@taiga-ui/core';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-input-inline-example-2',\n    templateUrl: './template.html',\n    changeDetection,\n    encapsulation,\n    styleUrls: ['./style.less'],\n})\nexport class TuiInputInlineExample2 {\n    heading = '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b';\n    editing = false;\n\n    constructor(\n        @Inject(TuiNotificationsService)\n        private readonly notifications: TuiNotificationsService,\n    ) {}\n\n    toggle() {\n        this.editing = !this.editing;\n    }\n\n    onFocusedChange(focused: boolean) {\n        if (!focused) {\n            this.editing = false;\n            this.saveHeading(this.heading);\n        }\n    }\n\n    private saveHeading(newHeading: string) {\n        this.notifications\n            .showNotification(newHeading, {label: '\u041d\u043e\u0432\u044b\u0439 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a'})\n            .subscribe();\n    }\n}\n",HTML:'<h2 class="header" [class.header_empty]="!heading">\n    <tui-input-inline\n        *ngIf="editing else text"\n        tuiAutoFocus\n        [(ngModel)]="heading"\n        (focusedChange)="onFocusedChange($event)"\n        (keydown.esc.prevent)="toggle()"\n        (keydown.enter.prevent)="toggle()"\n    >\n        \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a\n    </tui-input-inline>\n    <ng-template #text>\n        <span>{{heading}}</span>\n        <button\n            tuiIconButton\n            type="button"\n            class="tui-space_left-1"\n            title="\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"\n            size="xs"\n            appearance="icon"\n            icon="tuiIconEdit2Large"\n            (click)="toggle()"\n        ></button>\n    </ng-template>\n</h2>\n\n<p>\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa\n    exercitationem, sed? Deserunt dignissimos dolorem doloribus officiis quae\n    repellat rerum? Accusantium fuga hic nam necessitatibus non officiis\n    perferendis repellendus tempore voluptates!\n</p>\n<p>\n    Accusantium adipisci blanditiis esse est et eum fugit id illum, in iste\n    itaque iusto laborum nostrum officia quam quasi quos repellat temporibus\n    tenetur, ullam? Blanditiis fuga iusto maiores omnis quidem!\n</p>\n'},e.control=new r.FormControl("111",r.Validators.required),e.maxLengthVariants=[10],e.maxLength=null,e.textMaskOptionsVariants=[{guide:!1,mask:[/[1-9]/,D,D,D,D,D]},{guide:!1,mask:[D,D,D,D," ",D,D,D,D," ",D,D,D,D," ",D,D,D,D]}],e.textMaskOptions=null,e.unmaskHandlerVariants=[u.identity,function(e){return e.replace(/ /g,"")}],e.unmaskHandler=e.unmaskHandlerVariants[0],e}return n}(p.a)).\u0275fac=function(e){return q(e||L)},L.\u0275cmp=m["\u0275\u0275defineComponent"]({type:L,selectors:[["example-tui-input-inline"]],features:[m["\u0275\u0275InheritDefinitionFeature"]],decls:4,vars:0,consts:[["header","InputInline","package","KIT"],["pageTab",""],["id","base","heading","\u0431\u0430\u0437\u043e\u0432\u044b\u0439",3,"content"],["id","in-heading","heading","\u0432 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0435",3,"content"],[3,"control"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","maxLength","documentationPropertyMode","input","documentationPropertyType","number | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","textMaskOptions","documentationPropertyMode","input","documentationPropertyType","TuiTextMaskOptions | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","unmaskHandler","documentationPropertyMode","input","documentationPropertyType","string => string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"b-input-wrapper","b-input-wrapper_bordered",3,"formControl","maxLength","textMaskOptions","unmaskHandler"],["tuiLink","","href","https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#text-mask-documentation"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"tui-doc-page",0),m["\u0275\u0275template"](1,I,5,2,"ng-template",1),m["\u0275\u0275template"](2,H,7,8,"ng-template",1),m["\u0275\u0275template"](3,A,10,2,"ng-template",1),m["\u0275\u0275elementEnd"]())},directives:[d.a,f.a,g.a,x,w,_.a,k.a,P.a,h.a,r.NgControlStatus,r.FormControlDirective,M.a],styles:[".b-input-wrapper_bordered[_ngcontent-%COMP%]{border-bottom:1px solid var(--tui-base-09)}"]}),L),q=m["\u0275\u0275getInheritedFactory"](j),z=((N=function e(){_classCallCheck(this,e)}).\u0275mod=m["\u0275\u0275defineNgModule"]({type:N}),N.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(e){return new(e||N)},imports:[[i.c,r.FormsModule,r.ReactiveFormsModule,s.TuiButtonModule,c.TuiInputInlineModule,u.TuiAutoFocusModule].concat(_toConsumableArray(l.e),[a.g.forChild(Object(l.n)(j))])]}),N)}}]);