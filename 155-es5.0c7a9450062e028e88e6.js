function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{eg8U:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleFormatModule",(function(){return A}));var r,o,a=n("2kYt"),m=n("nIj0"),i=n("sEIs"),p=n("SVIu"),l=n("Qq0t"),u=n("dvRg"),s=n("EM62"),c=n("OZlg"),d=n("e0eB"),f=n("iyc4"),g=n("l4xa"),C=n("YjIA"),y=((r=function(){function e(){_classCallCheck(this,e),this.parametersForm=new m.FormGroup({value:new m.FormControl(11)})}return _createClass(e,[{key:"px",get:function(){var e=this.parametersForm.value.value;return Object(g.px)(e)}}]),e}()).\u0275fac=function(e){return new(e||r)},r.\u0275cmp=s["\u0275\u0275defineComponent"]({type:r,selectors:[["tui-format-example-1"]],decls:5,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"]],template:function(e,t){1&e&&(s["\u0275\u0275text"](0),s["\u0275\u0275elementStart"](1,"form",0),s["\u0275\u0275elementStart"](2,"div",1),s["\u0275\u0275elementStart"](3,"tui-input-number",2),s["\u0275\u0275text"](4," value "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275textInterpolate1"]("'",t.px,"' = px(value); "),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("formGroup",t.parametersForm))},directives:[m["\u0275angular_packages_forms_forms_y"],m.NgControlStatusGroup,m.FormGroupDirective,C.a,m.NgControlStatus,m.FormControlName],styles:[".parameters[_ngcontent-%COMP%]{margin-top:12px;width:220px}"],changeDetection:0}),r),h=n("GdrL"),x=((o=function(){function e(){_classCallCheck(this,e),this.parametersForm=new m.FormGroup({sourceString:new m.FormControl("\u0434\u0440\u0443\u0433!"),minResultLength:new m.FormControl(21),padString:new m.FormControl("\u043f\u0440\u0438\u0432\u0435\u0442, ")})}return _createClass(e,[{key:"paddedStart",get:function(){var e=this.parametersForm.value,t=e.sourceString,n=e.minResultLength,r=e.padString;return Object(g.padStart)(t||"",n||0,r||" ")}}]),e}()).\u0275fac=function(e){return new(e||o)},o.\u0275cmp=s["\u0275\u0275defineComponent"]({type:o,selectors:[["tui-format-example-2"]],decls:9,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","sourceString",1,"tui-space_top-2"],["formControlName","minResultLength",1,"tui-space_top-2"],["formControlName","padString",1,"tui-space_top-2"]],template:function(e,t){1&e&&(s["\u0275\u0275text"](0),s["\u0275\u0275elementStart"](1,"form",0),s["\u0275\u0275elementStart"](2,"div",1),s["\u0275\u0275elementStart"](3,"tui-input",2),s["\u0275\u0275text"](4," sourceString "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](5,"tui-input-number",3),s["\u0275\u0275text"](6," minResultLength "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](7,"tui-input",4),s["\u0275\u0275text"](8," padString "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275textInterpolate1"]("",t.paddedStart," = padStart(sourceString, minResultLength, padString); "),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("formGroup",t.parametersForm))},directives:[m["\u0275angular_packages_forms_forms_y"],m.NgControlStatusGroup,m.FormGroupDirective,h.a,m.NgControlStatus,m.FormControlName,C.a],styles:[".parameters[_ngcontent-%COMP%]{margin-top:12px;width:220px}"],changeDetection:0}),o),v=n("T8fS"),S=n("TjIJ"),F=n("fP8s"),_=n("OWJi");function w(e,t){if(1&e&&s["\u0275\u0275element"](0,"tui-data-list-wrapper",4),2&e){var n=s["\u0275\u0275nextContext"]();s["\u0275\u0275property"]("items",n.items)}}var b,E,k,G=((k=function(){function e(){_classCallCheck(this,e),this.items=["USD","RUB","643","KZT","051","KRW","CHF"],this.parametersForm=new m.FormGroup({currency:new m.FormControl(null)})}return _createClass(e,[{key:"currency",get:function(){var e=this.parametersForm.value.currency;return Object(v.getCurrencySymbol)(e)}}]),e}()).\u0275fac=function(e){return new(e||k)},k.\u0275cmp=s["\u0275\u0275defineComponent"]({type:k,selectors:[["tui-format-example-3"]],decls:6,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","currency",1,"tui-space_top-2"],[3,"items",4,"tuiDataList"],[3,"items"]],template:function(e,t){1&e&&(s["\u0275\u0275text"](0),s["\u0275\u0275elementStart"](1,"form",0),s["\u0275\u0275elementStart"](2,"div",1),s["\u0275\u0275elementStart"](3,"tui-select",2),s["\u0275\u0275text"](4," currency "),s["\u0275\u0275template"](5,w,1,1,"tui-data-list-wrapper",3),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275textInterpolate1"]("",t.currency," = getCurrencySymbol(currency); "),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("formGroup",t.parametersForm))},directives:[m["\u0275angular_packages_forms_forms_y"],m.NgControlStatusGroup,m.FormGroupDirective,S.a,m.NgControlStatus,m.FormControlName,F.a,_.a],styles:[".parameters[_ngcontent-%COMP%]{margin-top:12px;width:220px}"],changeDetection:0}),k),T=((E=function(){function e(){_classCallCheck(this,e),this.parametersForm=new m.FormGroup({value:new m.FormControl("\u0441\u0435\u0434\u043e\u0432 \u0440\u041e\u043c\u0410\u043d \u0430\u043d\u0434\u0440\u0435\u0435\u0432\u0438\u0447")})}return _createClass(e,[{key:"capitalized",get:function(){var e=this.parametersForm.value.value;return Object(l.capitalize)(e)}}]),e}()).\u0275fac=function(e){return new(e||E)},E.\u0275cmp=s["\u0275\u0275defineComponent"]({type:E,selectors:[["tui-format-example-4"]],decls:5,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"]],template:function(e,t){1&e&&(s["\u0275\u0275text"](0),s["\u0275\u0275elementStart"](1,"form",0),s["\u0275\u0275elementStart"](2,"div",1),s["\u0275\u0275elementStart"](3,"tui-input",2),s["\u0275\u0275text"](4," value "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275textInterpolate1"]("'",t.capitalized,"' = capitalize(value); "),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("formGroup",t.parametersForm))},directives:[m["\u0275angular_packages_forms_forms_y"],m.NgControlStatusGroup,m.FormGroupDirective,h.a,m.NgControlStatus,m.FormControlName],styles:[".parameters[_ngcontent-%COMP%]{margin-top:12px;width:220px}"],changeDetection:0}),E),N=((b=function(){function e(){_classCallCheck(this,e),this.parametersForm=new m.FormGroup({value:new m.FormControl("+79991234567"),countryCode:new m.FormControl("+7"),phoneMask:new m.FormControl("### ###-##-##")})}return _createClass(e,[{key:"formattedPhone",get:function(){var e=this.parametersForm.value,t=e.value,n=e.countryCode,r=e.phoneMask;return Object(l.formatPhone)(t,n,r)}}]),e}()).\u0275fac=function(e){return new(e||b)},b.\u0275cmp=s["\u0275\u0275defineComponent"]({type:b,selectors:[["tui-format-example-5"]],decls:9,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"],["formControlName","countryCode",1,"tui-space_top-2"],["formControlName","phoneMask",1,"tui-space_top-2"]],template:function(e,t){1&e&&(s["\u0275\u0275text"](0),s["\u0275\u0275elementStart"](1,"form",0),s["\u0275\u0275elementStart"](2,"div",1),s["\u0275\u0275elementStart"](3,"tui-input",2),s["\u0275\u0275text"](4," value "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](5,"tui-input",3),s["\u0275\u0275text"](6," countryCode "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](7,"tui-input",4),s["\u0275\u0275text"](8," phoneMask "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275textInterpolate1"]("'",t.formattedPhone,"' = formatPhone(value, countryCode, phoneMask); "),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("formGroup",t.parametersForm))},directives:[m["\u0275angular_packages_forms_forms_y"],m.NgControlStatusGroup,m.FormGroupDirective,h.a,m.NgControlStatus,m.FormControlName],styles:[".parameters[_ngcontent-%COMP%]{margin-top:12px;width:220px}"],changeDetection:0}),b),M=n("u8jZ");function L(e,t){if(1&e&&(s["\u0275\u0275text"](0," \u041d\u0430\u0431\u043e\u0440 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u044b\u0445 \u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u0443\u044e\u0449\u0438\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439 "),s["\u0275\u0275elementStart"](1,"tui-doc-example",3),s["\u0275\u0275element"](2,"tui-format-example-1"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](3,"tui-doc-example",4),s["\u0275\u0275element"](4,"tui-format-example-2"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](5,"tui-doc-example",5),s["\u0275\u0275element"](6,"tui-format-example-3"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](7,"tui-doc-example",6),s["\u0275\u0275element"](8,"tui-format-example-4"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](9,"tui-doc-example",7),s["\u0275\u0275element"](10,"tui-format-example-5"),s["\u0275\u0275elementEnd"]()),2&e){var n=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("content",n.example1),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("content",n.example2),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("content",n.example3),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("content",n.example4),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("content",n.example5)}}function D(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"ol",8),s["\u0275\u0275elementStart"](1,"li"),s["\u0275\u0275text"](2," \u0414\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0432 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0435 "),s["\u0275\u0275element"](3,"tui-doc-code",9),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){var n=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("code",n.importComponentExample)}}var I,P,O=((P=function e(){_classCallCheck(this,e),this.importComponentExample="import {getCurrencySymbol} from '@taiga-ui/kit';\n\n...\n    currency = getCurrencySymbol(currency);\n...\n",this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {px} from '@taiga-ui/cdk';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-format-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFormatExample1 {\n    parametersForm = new FormGroup({\n        value: new FormControl(11),\n    });\n\n    get px(): string {\n        const {value} = this.parametersForm.value;\n\n        return px(value);\n    }\n}\n",HTML:'\'{{ px }}\' = px(value);\n\n<form [formGroup]="parametersForm">\n    <div class="parameters">\n        <tui-input-number formControlName="value" class="tui-space_top-2">\n            value\n        </tui-input-number>\n    </div>\n</form>\n',LESS:".parameters {\n    margin-top: 12px;\n    width: 220px;\n}\n"},this.example2={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {padStart} from '@taiga-ui/cdk';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-format-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFormatExample2 {\n    parametersForm = new FormGroup({\n        sourceString: new FormControl('\u0434\u0440\u0443\u0433!'),\n        minResultLength: new FormControl(21),\n        padString: new FormControl('\u043f\u0440\u0438\u0432\u0435\u0442, '),\n    });\n\n    get paddedStart(): string {\n        const {sourceString, minResultLength, padString} = this.parametersForm.value;\n\n        return padStart(sourceString || '', minResultLength || 0, padString || ' ');\n    }\n}\n",HTML:'{{ paddedStart }} = padStart(sourceString, minResultLength, padString);\n\n<form [formGroup]="parametersForm">\n    <div class="parameters">\n        <tui-input formControlName="sourceString" class="tui-space_top-2">\n            sourceString\n        </tui-input>\n        <tui-input-number\n            formControlName="minResultLength"\n            class="tui-space_top-2"\n        >\n            minResultLength\n        </tui-input-number>\n        <tui-input formControlName="padString" class="tui-space_top-2">\n            padString\n        </tui-input>\n    </div>\n</form>\n',LESS:".parameters {\n    margin-top: 12px;\n    width: 220px;\n}\n"},this.example3={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {getCurrencySymbol} from '@taiga-ui/addon-commerce';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-format-example-3',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFormatExample3 {\n    readonly items = ['USD', 'RUB', '643', 'KZT', '051', 'KRW', 'CHF'];\n\n    parametersForm = new FormGroup({\n        currency: new FormControl(null),\n    });\n\n    get currency(): string | null {\n        const {currency} = this.parametersForm.value;\n\n        return getCurrencySymbol(currency);\n    }\n}\n",HTML:'{{ currency }} = getCurrencySymbol(currency);\n\n<form [formGroup]="parametersForm">\n    <div class="parameters">\n        <tui-select formControlName="currency" class="tui-space_top-2">\n            currency\n            <tui-data-list-wrapper\n                *tuiDataList\n                [items]="items"\n            ></tui-data-list-wrapper>\n        </tui-select>\n    </div>\n</form>\n',LESS:".parameters {\n    margin-top: 12px;\n    width: 220px;\n}\n"},this.example4={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {capitalize} from '@taiga-ui/core';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-format-example-4',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFormatExample4 {\n    parametersForm = new FormGroup({\n        value: new FormControl('\u0441\u0435\u0434\u043e\u0432 \u0440\u041e\u043c\u0410\u043d \u0430\u043d\u0434\u0440\u0435\u0435\u0432\u0438\u0447'),\n    });\n\n    get capitalized(): string {\n        const {value} = this.parametersForm.value;\n\n        return capitalize(value);\n    }\n}\n",HTML:'\'{{ capitalized }}\' = capitalize(value);\n\n<form [formGroup]="parametersForm">\n    <div class="parameters">\n        <tui-input formControlName="value" class="tui-space_top-2">\n            value\n        </tui-input>\n    </div>\n</form>\n',LESS:".parameters {\n    margin-top: 12px;\n    width: 220px;\n}\n"},this.example5={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {formatPhone} from '@taiga-ui/core';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-format-example-5',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFormatExample5 {\n    parametersForm = new FormGroup({\n        value: new FormControl('+79991234567'),\n        countryCode: new FormControl('+7'),\n        phoneMask: new FormControl('### ###-##-##'),\n    });\n\n    get formattedPhone(): string {\n        const {value, countryCode, phoneMask} = this.parametersForm.value;\n\n        return formatPhone(value, countryCode, phoneMask);\n    }\n}\n",HTML:'\'{{ formattedPhone }}\' = formatPhone(value, countryCode, phoneMask);\n\n<form [formGroup]="parametersForm">\n    <div class="parameters">\n        <tui-input formControlName="value" class="tui-space_top-2">\n            value\n        </tui-input>\n        <tui-input formControlName="countryCode" class="tui-space_top-2">\n            countryCode\n        </tui-input>\n        <tui-input formControlName="phoneMask" class="tui-space_top-2">\n            phoneMask\n        </tui-input>\n    </div>\n</form>\n',LESS:".parameters {\n    margin-top: 12px;\n    width: 220px;\n}\n"}}).\u0275fac=function(e){return new(e||P)},P.\u0275cmp=s["\u0275\u0275defineComponent"]({type:P,selectors:[["example-format"]],decls:3,vars:0,consts:[["header","\u0424\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u0443\u044e\u0449\u0438\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b","package","CDK / CORE"],["pageTab",""],["pageTab","\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435"],["id","px","heading","px","description","\u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442 px \u043a \u043a\u043e\u043d\u0435\u0447\u043d\u043e\u043c\u0443 \u0447\u0438\u0441\u043b\u0443.",3,"content"],["id","padStart","heading","padStart","description","\u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442 \u0432 \u043d\u0430\u0447\u0430\u043b\u043e \u0441\u0442\u0440\u043e\u043a\u0438 \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u0439 \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c.",3,"content"],["id","getCurrencySymbol","heading","getCurrencySymbol","description","\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0441\u0438\u043c\u0432\u043e\u043b \u0432\u0430\u043b\u044e\u0442\u044b \u0441\u0442\u0440\u043e\u043a\u043e\u0432\u043e\u043c\u0443 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044e\n                                         \u043a\u043e\u0434\u0430 \u0432\u0430\u043b\u044e\u0442\u044b, \u0430 \u0442\u0430\u043a\u0436\u0435 \u043f\u043e \u0442\u0440\u0435\u0445\u0431\u0443\u043a\u0432\u0435\u043d\u043d\u043e\u0439 \u0430\u0431\u0431\u0440\u0435\u0432\u0438\u0430\u0442\u0443\u0440\u0435 \u0432\u0430\u043b\u044e\u0442\u044b \u0432 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u0435\n                                         ISO 4217. \u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 17 \u0432\u0430\u043b\u044e\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u0445\u043e\u0434\u044f\u0442 \u0432 \u0441\u043f\u0438\u0441\u043e\u043a \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445\n                                         \u0434\u043b\u044f \u043e\u0442\u043a\u0440\u044b\u0442\u0438\u044f \u0441\u0447\u0435\u0442\u043e\u0432 \u0432 \u0431\u0430\u043d\u043a\u0435 \u0438 \u0438\u043c\u0435\u044e\u0442 \u0441\u0438\u043c\u0432\u043e\u043b.",3,"content"],["id","capitalize","heading","capitalize","description","\u041f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u044b\u0432\u0430\u0435\u0442 \u0441\u0442\u0440\u043e\u043a\u0443, \u0437\u0430\u043c\u0435\u043d\u044f\u044f \u0435\u0451 \u043d\u0430 \u043d\u0438\u0436\u043d\u0438\u0439 \u0440\u0435\u0433\u0438\u0441\u0442\u0440 \u0438 \u0434\u0435\u043b\u0430\u044f \u043f\u0435\u0440\u0432\u0443\u044e\n                                                  \u0431\u0443\u043a\u0432\u0443 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0441\u043b\u043e\u0432\u0430 \u0432 \u0432\u0435\u0440\u0445\u043d\u0435\u043c \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0435.",3,"content"],["id","formatPhone","heading","formatPhone","description","\u0424\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u0443\u0435\u0442 \u0441\u0442\u0440\u043e\u043a\u0443 \u0441 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0430 +7XXXXXXXXXX,\n                                                  \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u044f \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u0438.",3,"content"],[1,"b-demo-steps"],["filename","myComponent.component.ts",3,"code"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-doc-page",0),s["\u0275\u0275template"](1,L,11,5,"ng-template",1),s["\u0275\u0275template"](2,D,4,1,"ng-template",2),s["\u0275\u0275elementEnd"]())},directives:[c.a,d.a,f.a,y,x,G,T,N,M.a],encapsulation:2,changeDetection:0}),P),A=((I=function e(){_classCallCheck(this,e)}).\u0275mod=s["\u0275\u0275defineNgModule"]({type:I}),I.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(e){return new(e||I)},imports:[[a.c,u.TuiInputNumberModule,m.FormsModule,m.ReactiveFormsModule,u.TuiInputModule,u.TuiSelectModule,l.TuiDataListModule,u.TuiDataListWrapperModule].concat(_toConsumableArray(p.e),[i.g.forChild(Object(p.n)(O))])]}),I)}}]);