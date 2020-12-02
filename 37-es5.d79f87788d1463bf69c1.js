function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{GNRe:function(e,t,o){"use strict";o.r(t),o.d(t,"ExampleTuiColorPickerModule",(function(){return Z}));var n,r=o("2kYt"),l=o("nIj0"),c=o("sEIs"),a=o("SVIu"),i=o("vgRF"),u=o("l4xa"),p=o("Qq0t"),d=o("EM62"),s=o("OZlg"),m=o("e0eB"),f=o("iyc4"),g=o("kT+k"),y=o("2wTY"),b=((n=function e(){_classCallCheck(this,e),this.color="#ffdd2d",this.palette=new Map([["color-black-300","#333333"],["color-black-200","#666666"],["color-black-100","#909090"],["color-yellow-100","#FFDD2C"],["color-yellow-200","#FCC521"],["color-yellow-300","#FAB618"],["color-gray-100","#f5f5f6"],["color-gray-200","#e7e8ea"],["color-gray-300","#cbcfd3"],["color-gray-400","#959ba4"],["color-gray-500","#79818c"],["color-gray-600","#616871"],["color-light-blue-100","#ecf1f7"],["color-light-blue-200","#e4ebf3"],["color-light-blue-300","#dde4ed"],["color-blue-100","#1771e6"],["color-blue-200","#1464cc"],["color-blue-300","#0953b3"],["color-green-100","#39b54a"],["color-green-200","#2ca53a"],["color-green-300","#168a21"],["color-red-100","#e01f19"],["color-red-200","#d3120e"],["color-red-300","#c40b08"]])}).\u0275fac=function(e){return new(e||n)},n.\u0275cmp=d["\u0275\u0275defineComponent"]({type:n,selectors:[["tui-color-picker-example-1"]],decls:6,vars:6,consts:[[1,"input",3,"colors","ngModel","ngModelChange"],["tuiTextfieldSize","m",1,"input","tui-space_vertical-2",3,"colors","ngModel","ngModelChange"],["tuiTextfieldSize","s",1,"input",3,"colors","ngModel","ngModelChange"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tui-input-color",0),d["\u0275\u0275listener"]("ngModelChange",(function(e){return t.color=e})),d["\u0275\u0275text"](1," \u0426\u0432\u0435\u0442 \u0444\u043e\u043d\u0430\n"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](2,"tui-input-color",1),d["\u0275\u0275listener"]("ngModelChange",(function(e){return t.color=e})),d["\u0275\u0275text"](3," \u0426\u0432\u0435\u0442 \u0444\u043e\u043d\u0430\n"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](4,"tui-input-color",2),d["\u0275\u0275listener"]("ngModelChange",(function(e){return t.color=e})),d["\u0275\u0275text"](5," \u0426\u0432\u0435\u0442 \u0444\u043e\u043d\u0430\n"),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275property"]("colors",t.palette)("ngModel",t.color),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("colors",t.palette)("ngModel",t.color),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("colors",t.palette)("ngModel",t.color))},directives:[g.a,l.NgControlStatus,l.NgModel,y.b],styles:["[_nghost-%COMP%]{display:block}.input[_ngcontent-%COMP%]{width:320px}"],changeDetection:0}),n),h=o("e4iD"),C=o("q7Lq"),k=o("SUM+"),x=o("zV1d"),S=o("RZBz"),M=o("4hRd");function w(e,t){if(1&e){var o=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"tui-color-selector",3),d["\u0275\u0275listener"]("colorChange",(function(e){return d["\u0275\u0275restoreView"](o),d["\u0275\u0275nextContext"]().color=e})),d["\u0275\u0275elementEnd"]()}if(2&e){var n=t.$implicit,r=d["\u0275\u0275nextContext"]();d["\u0275\u0275property"]("tuiActiveZoneParent",n)("color",r.color)}}var v,T=((v=function(){function e(t){_classCallCheck(this,e),this.sanitizer=t,this.color="#ffdd2d"}return _createClass(e,[{key:"background",get:function(){return this.sanitizer.bypassSecurityTrustStyle(this.color)}}]),e}()).\u0275fac=function(e){return new(e||v)(d["\u0275\u0275directiveInject"](h.DomSanitizer))},v.\u0275cmp=d["\u0275\u0275defineComponent"]({type:v,selectors:[["tui-color-picker-example-2"]],decls:5,vars:6,consts:[["tuiDropdownAlign","left",3,"content","tuiDropdownMaxHeight"],["tuiButton","","type","button","appearance",""],["picker",""],[3,"tuiActiveZoneParent","color","colorChange"]],template:function(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"tui-hosted-dropdown",0),d["\u0275\u0275elementStart"](1,"button",1),d["\u0275\u0275text"](2," Color me Kubrick "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](3,w,1,2,"ng-template",null,2,d["\u0275\u0275templateRefExtractor"])),2&e){var o=d["\u0275\u0275reference"](4);d["\u0275\u0275property"]("content",o)("tuiDropdownMaxHeight",999),d["\u0275\u0275advance"](1),d["\u0275\u0275styleProp"]("background",t.background,d["\u0275\u0275defaultStyleSanitizer"])("color",t.background)}},directives:[C.a,k.a,x.a,S.a,M.a],styles:["[_nghost-%COMP%]     tui-wrapper{-webkit-filter:invert(1);filter:invert(1)}"],changeDetection:0}),v),_=o("EPR0"),A=o("x/Ht"),E=o("yHor"),D=o("zGJC"),P=o("u8jZ");function I(e,t){if(1&e&&(d["\u0275\u0275text"](0," ColorPicker \u2014 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0434\u043b\u044f \u0432\u044b\u0431\u043e\u0440\u0430 \u0446\u0432\u0435\u0442\u0430 \u0441 \u043f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u043e\u0441\u0442\u044c\u044e. \u041d\u0430 \u0435\u0433\u043e \u0431\u0430\u0437\u0435 \u0441\u0434\u0435\u043b\u0430\u043d\u044b \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b InputColor \u0438 ColorSelector "),d["\u0275\u0275elementStart"](1,"tui-doc-example",2),d["\u0275\u0275element"](2,"tui-color-picker-example-1"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"tui-doc-example",3),d["\u0275\u0275element"](4,"tui-color-picker-example-2"),d["\u0275\u0275elementEnd"]()),2&e){var o=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("content",o.example1),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("content",o.example2)}}function z(e,t){1&e&&d["\u0275\u0275text"](0," \u041c\u0430\u0441\u0441\u0438\u0432 \u0446\u0432\u0435\u0442\u0430 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 rgba ")}function j(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tui-doc-demo"),d["\u0275\u0275element"](1,"tui-color-picker"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](2,"tui-doc-documentation"),d["\u0275\u0275template"](3,z,1,0,"ng-template",4),d["\u0275\u0275elementEnd"]())}function F(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"ol",5),d["\u0275\u0275elementStart"](1,"li"),d["\u0275\u0275text"](2," \u0414\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043c\u043e\u0434\u0443\u043b\u044c "),d["\u0275\u0275elementStart"](3,"code"),d["\u0275\u0275text"](4,"TuiColorPickerModule"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](5," \u0432 \u0442\u043e\u0442 \u0436\u0435 \u043c\u043e\u0434\u0443\u043b\u044c, \u043a\u0443\u0434\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432\u0430\u0448 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442: "),d["\u0275\u0275element"](6,"tui-doc-code",6),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](7,"li"),d["\u0275\u0275text"](8," \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0448\u0430\u0431\u043b\u043e\u043d: "),d["\u0275\u0275element"](9,"tui-doc-code",7),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){var o=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](6),d["\u0275\u0275property"]("code",o.exampleImportModule),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("code",o.exampleInsertTemplate)}}var H,O,L=((O=function e(){_classCallCheck(this,e),this.exampleImportModule="import {TuiColorPickerModule} from '@taiga-ui/addon-editor';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiColorPickerModule,\n    ],\n...\n",this.exampleInsertTemplate='<tui-color-picker [(color)]="color"></tui-color-picker>\n',this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-color-picker-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiColorPickerExample1 {\n    color = '#ffdd2d';\n\n    readonly palette = new Map([\n        ['color-black-300', '#333333'],\n        ['color-black-200', '#666666'],\n        ['color-black-100', '#909090'],\n        ['color-yellow-100', '#FFDD2C'],\n        ['color-yellow-200', '#FCC521'],\n        ['color-yellow-300', '#FAB618'],\n        ['color-gray-100', '#f5f5f6'],\n        ['color-gray-200', '#e7e8ea'],\n        ['color-gray-300', '#cbcfd3'],\n        ['color-gray-400', '#959ba4'],\n        ['color-gray-500', '#79818c'],\n        ['color-gray-600', '#616871'],\n        ['color-light-blue-100', '#ecf1f7'],\n        ['color-light-blue-200', '#e4ebf3'],\n        ['color-light-blue-300', '#dde4ed'],\n        ['color-blue-100', '#1771e6'],\n        ['color-blue-200', '#1464cc'],\n        ['color-blue-300', '#0953b3'],\n        ['color-green-100', '#39b54a'],\n        ['color-green-200', '#2ca53a'],\n        ['color-green-300', '#168a21'],\n        ['color-red-100', '#e01f19'],\n        ['color-red-200', '#d3120e'],\n        ['color-red-300', '#c40b08'],\n    ]);\n}\n",HTML:'<tui-input-color class="input" [colors]="palette" [(ngModel)]="color">\n    \u0426\u0432\u0435\u0442 \u0444\u043e\u043d\u0430\n</tui-input-color>\n<tui-input-color\n    class="input tui-space_vertical-2"\n    tuiTextfieldSize="m"\n    [colors]="palette"\n    [(ngModel)]="color"\n>\n    \u0426\u0432\u0435\u0442 \u0444\u043e\u043d\u0430\n</tui-input-color>\n<tui-input-color\n    class="input"\n    tuiTextfieldSize="s"\n    [colors]="palette"\n    [(ngModel)]="color"\n>\n    \u0426\u0432\u0435\u0442 \u0444\u043e\u043d\u0430\n</tui-input-color>\n',LESS:":host {\n    display: block;\n}\n\n.input {\n    width: 320px;\n}\n"},this.example2={TypeScript:"import {Component, Inject} from '@angular/core';\nimport {DomSanitizer, SafeStyle} from '@angular/platform-browser';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-color-picker-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiColorPickerExample2 {\n    color = '#ffdd2d';\n\n    constructor(@Inject(DomSanitizer) private readonly sanitizer: DomSanitizer) {}\n\n    get background(): SafeStyle {\n        return this.sanitizer.bypassSecurityTrustStyle(this.color);\n    }\n}\n",HTML:'<tui-hosted-dropdown\n    tuiDropdownAlign="left"\n    [content]="picker"\n    [tuiDropdownMaxHeight]="999"\n>\n    <button\n        tuiButton\n        type="button"\n        appearance=""\n        [style.background]="background"\n        [style.color]="background"\n    >\n        Color me Kubrick\n    </button>\n</tui-hosted-dropdown>\n<ng-template #picker let-activeZone>\n    <tui-color-selector\n        [tuiActiveZoneParent]="activeZone"\n        [(color)]="color"\n    ></tui-color-selector>\n</ng-template>\n',LESS:":host {\n    /* stylelint-disable */\n    ::ng-deep tui-wrapper {\n        filter: invert(1);\n    }\n    /* stylelint-enable */\n}\n"}}).\u0275fac=function(e){return new(e||O)},O.\u0275cmp=d["\u0275\u0275defineComponent"]({type:O,selectors:[["example-tui-color-picker"]],decls:4,vars:0,consts:[["header","ColorPicker","package","ADDON-editor"],["pageTab",""],["id","input","heading","\u041f\u043e\u043b\u0435 \u0432\u0432\u043e\u0434\u0430",3,"content"],["id","dropdown","heading","ColorSelector \u0432 \u0432\u044b\u043f\u0430\u0434\u0430\u0448\u043a\u0435",3,"content"],["documentationPropertyName","color","documentationPropertyMode","input-output","documentationPropertyType","[number, number, number, number]"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tui-doc-page",0),d["\u0275\u0275template"](1,I,5,2,"ng-template",1),d["\u0275\u0275template"](2,j,4,0,"ng-template",1),d["\u0275\u0275template"](3,F,10,2,"ng-template"),d["\u0275\u0275elementEnd"]())},directives:[s.a,m.a,f.a,b,T,_.a,A.a,E.a,D.a,P.a],encapsulation:2,changeDetection:0}),O),Z=((H=function e(){_classCallCheck(this,e)}).\u0275mod=d["\u0275\u0275defineNgModule"]({type:H}),H.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||H)},imports:[[r.c,p.TuiButtonModule,p.TuiHostedDropdownModule,i.TuiColorPickerModule,i.TuiColorSelectorModule,u.TuiActiveZoneModule,p.TuiDropdownControllerModule,i.TuiInputColorModule,p.TuiTextfieldControllerModule].concat(_toConsumableArray(a.e),[c.g.forChild(Object(a.n)(L)),l.FormsModule])]}),H)}}]);