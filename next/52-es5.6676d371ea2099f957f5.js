function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var n,r=_getPrototypeOf(e);if(t){var o=_getPrototypeOf(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _templateObject10(){var e=_taggedTemplateLiteral([":\u241f856efa24b2b203ad1c001649937b5c5738e38f97\u241f8042412267862615798:Add to the template:"]);return _templateObject10=function(){return e},e}function _templateObject9(){var e=_taggedTemplateLiteral([":\u241fd044cc22bef8913930d6e6bfe728fb3f7f69ab76\u241f2559873188996387781: Import ",":START_TAG_CODE:TuiInputCardGroupedModule",":CLOSE_TAG_CODE: into a module where you want to use our component "]);return _templateObject9=function(){return e},e}function _templateObject8(){var e=_taggedTemplateLiteral([":\u241f8457ba25b1fa93009d4263b1ed4635c9d9c693f1\u241f3816861219916976422: BIN value (card first 6 symbols) "]);return _templateObject8=function(){return e},e}function _templateObject7(){var e=_taggedTemplateLiteral([":\u241f8772d8eccb2dc868d0dec6c6c5db9e2264085070\u241f7430416980180297706: Code length "]);return _templateObject7=function(){return e},e}function _templateObject6(){var e=_taggedTemplateLiteral([":\u241f26c4e17869f9a11168b776fecc88a93ba994a18b\u241f6871064863310761724: An example of input "]);return _templateObject6=function(){return e},e}function _templateObject5(){var e=_taggedTemplateLiteral([":\u241ffc048dc15100d76d9c59634a4cd574e69f6c4c27\u241f4001054117328009637: SVG card icon "]);return _templateObject5=function(){return e},e}function _templateObject4(){var e=_taggedTemplateLiteral([":\u241f83ad20bde41f48a65e1ef7997973b9229940e933\u241f7840524756891506982: Browser autocomplete of card "]);return _templateObject4=function(){return e},e}function _templateObject3(){var e=_taggedTemplateLiteral([":\u241f31216ee7e86a9a777c7e1c7cad3dc3bb8dc54c35\u241f472633322147615044: Disabled state (use ",":START_TAG_CODE:formControl.disable()",":CLOSE_TAG_CODE:) "]);return _templateObject3=function(){return e},e}function _templateObject2(){var e=_taggedTemplateLiteral([":\u241faf399160ce687f2b638d3c19892948d18a7ecd7a\u241f4281817233970958464: Add ",":START_TAG_CODE:tuiCreateLuhnValidator(customMessage?)",":CLOSE_TAG_CODE: to control validators to validate it with Luhn algorithm "]);return _templateObject2=function(){return e},e}function _templateObject(){var e=_taggedTemplateLiteral([":\u241f576c74546986ae39d66902c10b330cef17c11742\u241f2004268377756025676:With validation"]);return _templateObject=function(){return e},e}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{Thvt:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiInputCardGroupedModule",(function(){return W}));var r=n("2kYt"),o=n("nIj0"),a=n("sEIs"),i=n("T8fS"),c=n("SVIu"),l=n("Qq0t"),u=n("dvRg"),d=n("Piem"),p=n("EM62"),s=n("LusI"),m=n("K/iL"),f=n("OZlg"),g=n("e0eB"),b=n("iyc4"),h=n("l4xa"),y=n("qfv1"),v=n("kNZY");function C(e){var t=e.value;return t&&t.card&&!Object(i.isCardNumberValid)(t.card)?{card:new h.TuiValidationError("Invalid card number")}:null}function _(e){var t=e.value;return t&&5===t.expire.length&&!Object(i.isExpireValid)(t.expire)?{expire:new h.TuiValidationError("Expire date")}:null}var x,O,P,w,T,E,V,S,j,L,I=((x=function(){function e(){_classCallCheck(this,e),this.control=new o.FormControl(null,[C,_])}return _createClass(e,[{key:"card",get:function(){var e=this.control.value?this.control.value.card:"";if(e.length<7)return null;switch(e.charAt(0)){case"0":case"1":case"2":return"https://ng-web-apis.github.io/dist/assets/images/common.svg";case"3":case"4":case"5":return"https://ng-web-apis.github.io/dist/assets/images/geolocation.svg";case"6":case"7":return"https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg";case"8":case"9":default:return"https://ng-web-apis.github.io/dist/assets/images/payment-request.svg"}}}]),e}()).\u0275fac=function(e){return new(e||x)},x.\u0275cmp=p["\u0275\u0275defineComponent"]({type:x,selectors:[["tui-input-card-grouped-example-1"]],decls:2,vars:3,consts:[[3,"cardSrc","formControl"],[3,"formControl"]],template:function(e,t){1&e&&(p["\u0275\u0275element"](0,"tui-input-card-grouped",0),p["\u0275\u0275element"](1,"tui-field-error",1)),2&e&&(p["\u0275\u0275property"]("cardSrc",t.card)("formControl",t.control),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("formControl",t.control))},directives:[y.a,o.NgControlStatus,o.FormControlDirective,v.a],encapsulation:2,changeDetection:0}),x),M=n("EPR0"),N=n("yHor"),A=n("zGJC"),k=n("FSyC"),D=n("u8jZ"),R=["heading",$localize(_templateObject())];function G(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"p"),p["\u0275\u0275elementStart"](1,"code"),p["\u0275\u0275text"](2,"InputCardGrouped"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](3," is used to input a card as a separated control "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](4,"tui-doc-example",2),p["\u0275\u0275i18nAttributes"](5,R),p["\u0275\u0275element"](6,"tui-input-card-grouped-example-1"),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](4),p["\u0275\u0275property"]("content",n.example1)}}function z(e,t){if(1&e){var n=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"tui-input-card-grouped",11),p["\u0275\u0275listener"]("binChange",(function(e){return p["\u0275\u0275restoreView"](n),p["\u0275\u0275nextContext"](2).onBinChange(e)})),p["\u0275\u0275elementEnd"]()}if(2&e){var r=p["\u0275\u0275nextContext"](2);p["\u0275\u0275property"]("formControl",r.control)("autocompleteEnabled",r.autocompleteEnabled)("cardSrc",r.cardSrc)("codeLength",r.codeLength)("exampleText",r.exampleText)("readOnly",r.readOnly)("focusable",r.focusable)("pseudoInvalid",r.pseudoInvalid)("pseudoFocused",r.pseudoFocused)("pseudoHovered",r.pseudoHovered)("pseudoPressed",r.pseudoPressed)}}function F(e,t){1&e&&(p["\u0275\u0275i18nStart"](0,P),p["\u0275\u0275element"](1,"code"),p["\u0275\u0275i18nEnd"]())}function $(e,t){1&e&&p["\u0275\u0275i18n"](0,w)}function B(e,t){1&e&&p["\u0275\u0275i18n"](0,T)}function H(e,t){1&e&&p["\u0275\u0275i18n"](0,E)}function q(e,t){1&e&&p["\u0275\u0275i18n"](0,V)}function J(e,t){1&e&&p["\u0275\u0275i18n"](0,S)}function Z(e,t){if(1&e){var n=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"tui-doc-demo",3),p["\u0275\u0275template"](1,z,1,11,"ng-template"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](2,"div",4),p["\u0275\u0275elementStart"](3,"p"),p["\u0275\u0275i18nStart"](4,O),p["\u0275\u0275element"](5,"code"),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](6,"tui-doc-documentation"),p["\u0275\u0275template"](7,F,2,0,"ng-template",5),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return p["\u0275\u0275restoreView"](n),p["\u0275\u0275nextContext"]().disabled=e})),p["\u0275\u0275template"](8,$,1,0,"ng-template",6),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return p["\u0275\u0275restoreView"](n),p["\u0275\u0275nextContext"]().autocompleteEnabled=e})),p["\u0275\u0275template"](9,B,1,0,"ng-template",7),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return p["\u0275\u0275restoreView"](n),p["\u0275\u0275nextContext"]().cardSrcSelected=e})),p["\u0275\u0275template"](10,H,1,0,"ng-template",8),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return p["\u0275\u0275restoreView"](n),p["\u0275\u0275nextContext"]().exampleText=e})),p["\u0275\u0275template"](11,q,1,0,"ng-template",9),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return p["\u0275\u0275restoreView"](n),p["\u0275\u0275nextContext"]().codeLength=e})),p["\u0275\u0275template"](12,J,1,0,"ng-template",10),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](13,"inherited-documentation")}if(2&e){var r=p["\u0275\u0275nextContext"]();p["\u0275\u0275property"]("control",r.control),p["\u0275\u0275advance"](7),p["\u0275\u0275property"]("documentationPropertyValue",r.disabled),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValue",r.autocompleteEnabled),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValues",r.cardSrcVariants)("documentationPropertyValue",r.cardSrcSelected),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValue",r.exampleText),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValues",r.codeLengthVariants)("documentationPropertyValue",r.codeLength)}}function Y(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"ol",12),p["\u0275\u0275elementStart"](1,"li"),p["\u0275\u0275elementStart"](2,"p"),p["\u0275\u0275i18nStart"](3,j),p["\u0275\u0275element"](4,"code"),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](5,"tui-doc-code",13),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](6,"li"),p["\u0275\u0275elementStart"](7,"p"),p["\u0275\u0275i18n"](8,L),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](9,"tui-doc-code",14),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](5),p["\u0275\u0275property"]("code",n.exampleImportModule),p["\u0275\u0275advance"](4),p["\u0275\u0275property"]("code",n.exampleInsertTemplate)}}O=$localize(_templateObject2(),"\ufffd#5\ufffd","\ufffd/#5\ufffd"),P=$localize(_templateObject3(),"\ufffd#1\ufffd","\ufffd/#1\ufffd"),w=$localize(_templateObject4()),T=$localize(_templateObject5()),E=$localize(_templateObject6()),V=$localize(_templateObject7()),S=$localize(_templateObject8()),j=$localize(_templateObject9(),"\ufffd#4\ufffd","\ufffd/#4\ufffd"),L=$localize(_templateObject10());var K,Q,U=((Q=function(e){_inherits(n,e);var t=_createSuper(n);function n(e){var r;return _classCallCheck(this,n),(r=t.call(this)).notifications=e,r.exampleImportModule="import {TuiInputCardGroupedModule} from '@taiga-ui/addon-commerce';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiInputCardGroupedModule,\n    ],\n...\n",r.exampleInsertTemplate='<tui-input-card-grouped formControlName="card"></tui-input-card-grouped>\n',r.example1={TypeScript:"import {Component} from '@angular/core';\nimport {AbstractControl, FormControl, ValidationErrors} from '@angular/forms';\nimport {isCardNumberValid, isExpireValid} from '@taiga-ui/addon-commerce';\nimport {TuiValidationError} from '@taiga-ui/cdk';\nimport {changeDetection} from '../../../../../change-detection-strategy';\n\nfunction cardNumberValidator({value}: AbstractControl): ValidationErrors | null {\n    return value && value.card && !isCardNumberValid(value.card)\n        ? {\n              card: new TuiValidationError('Invalid card number'),\n          }\n        : null;\n}\n\nfunction cardExpireValidator({value}: AbstractControl): ValidationErrors | null {\n    return value && value.expire.length === 5 && !isExpireValid(value.expire)\n        ? {\n              expire: new TuiValidationError('Expire date'),\n          }\n        : null;\n}\n\n@Component({\n    selector: 'tui-input-card-grouped-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n})\nexport class TuiInputCardGroupedExample1 {\n    readonly control = new FormControl(null, [cardNumberValidator, cardExpireValidator]);\n\n    get card(): string | null {\n        const value = this.control.value ? this.control.value.card : '';\n\n        if (value.length < 7) {\n            return null;\n        }\n\n        switch (value.charAt(0)) {\n            case '0':\n            case '1':\n            case '2':\n                return 'https://ng-web-apis.github.io/dist/assets/images/common.svg';\n            case '3':\n            case '4':\n            case '5':\n                return 'https://ng-web-apis.github.io/dist/assets/images/geolocation.svg';\n            case '6':\n            case '7':\n                return 'https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg';\n            case '8':\n            case '9':\n            default:\n                return 'https://ng-web-apis.github.io/dist/assets/images/payment-request.svg';\n        }\n    }\n}\n",HTML:'<tui-input-card-grouped\n    [cardSrc]="card"\n    [formControl]="control"\n></tui-input-card-grouped>\n<tui-field-error [formControl]="control"></tui-field-error>\n'},r.cards={common:"https://ng-web-apis.github.io/dist/assets/images/common.svg",universal:"https://ng-web-apis.github.io/dist/assets/images/universal.svg",intersection:"https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg",mutation:"https://ng-web-apis.github.io/dist/assets/images/mutation-observer.svg"},r.cardSrcVariants=Object.keys(r.cards),r.cardSrcSelected=null,r.autocompleteEnabled=!1,r.exampleText="0000 0000 0000 0000",r.codeLengthVariants=[3,4],r.codeLength=r.codeLengthVariants[0],r.control=new o.FormControl,r}return _createClass(n,[{key:"onBinChange",value:function(e){this.notifications.show("bin: "+e).subscribe()}},{key:"cardSrc",get:function(){return null===this.cardSrcSelected?null:this.cards[this.cardSrcSelected]}}]),n}(s.a)).\u0275fac=function(e){return new(e||Q)(p["\u0275\u0275directiveInject"](l.TuiNotificationsService))},Q.\u0275cmp=p["\u0275\u0275defineComponent"]({type:Q,selectors:[["example-input-card-grouped"]],features:[p["\u0275\u0275ProvidersFeature"]([{provide:m.a,useExisting:Object(p.forwardRef)((function(){return Q}))}]),p["\u0275\u0275InheritDefinitionFeature"]],decls:4,vars:0,consts:[["header","InputCardGrouped","package","ADDON-COMMERCE","type","components"],["pageTab",""],["id","validation",3,"content",6,"heading"],[3,"control"],[1,"b-full-width","tui-space_bottom-6"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","autocompleteEnabled","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","cardSrc","documentationPropertyMode","input","documentationPropertyType","string | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","exampleText","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","codeLength","documentationPropertyMode","input","documentationPropertyType","3 | 4",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","binChange","documentationPropertyMode","output","documentationPropertyType","string | null"],[3,"formControl","autocompleteEnabled","cardSrc","codeLength","exampleText","readOnly","focusable","pseudoInvalid","pseudoFocused","pseudoHovered","pseudoPressed","binChange"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"tui-doc-page",0),p["\u0275\u0275template"](1,G,7,1,"ng-template",1),p["\u0275\u0275template"](2,Z,14,8,"ng-template",1),p["\u0275\u0275template"](3,Y,10,2,"ng-template",1),p["\u0275\u0275elementEnd"]())},directives:[f.a,g.a,b.a,I,M.a,N.a,A.a,k.a,y.a,o.NgControlStatus,o.FormControlDirective,D.a],styles:[".form[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.control[_ngcontent-%COMP%]{-webkit-box-flex:1;-ms-flex:1;flex:1;margin-bottom:4px}.control[_ngcontent-%COMP%]:not(:last-child){margin-right:20px}.error[_ngcontent-%COMP%]{min-width:100%}.title[_ngcontent-%COMP%]{font:var(--tui-font-heading-5)}"],changeDetection:0}),Q),W=((K=function e(){_classCallCheck(this,e)}).\u0275mod=p["\u0275\u0275defineNgModule"]({type:K}),K.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(e){return new(e||K)},imports:[[i.TuiInputCardGroupedModule,l.TuiLinkModule,u.TuiFieldErrorModule,r.c,o.ReactiveFormsModule,c.h,d.a,a.f.forChild(Object(c.o)(U))]]}),K)}}]);