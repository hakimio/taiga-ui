(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{KXQt:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiInputSliderModule",(function(){return Q}));var o=n("2kYt"),r=n("nIj0"),a=n("sEIs"),i=n("SVIu"),u=n("Qq0t"),l=n("dvRg"),m=n("Piem"),p=n("EM62"),s=n("K/iL"),c=n("WupT"),d=n("OZlg"),y=n("e0eB"),P=n("iyc4"),V=n("cc69");let x=(()=>{class e{constructor(){this.testForm=new r.FormGroup({testValue:new r.FormControl(1e5)}),this.keySteps=[[100/104*30,2e5],[100/104*46,1e6]],this.pluralize=["\u20bd","\u20bd","\u20bd"]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-slider-example-1"]],decls:4,vars:17,consts:[[1,"form",3,"formGroup"],["formControlName","testValue","size","m","minLabel","\u0421\u0430\u043c\u0443\u044e \u043c\u0430\u043b\u043e\u0441\u0442\u044c","maxLabel","\u0421\u043e\u0432\u0441\u0435\u043c \u0432\u0441\u0451",1,"control",3,"pluralize","segmentsPluralize","segments","min","max","steps","quantum","keySteps"],["formControlName","testValue","minLabel","\u0421\u0430\u043c\u0443\u044e \u043c\u0430\u043b\u043e\u0441\u0442\u044c","maxLabel","\u0421\u043e\u0432\u0441\u0435\u043c \u0432\u0441\u0451",1,"control",3,"pluralize","segmentsPluralize","segments","min","max","steps","quantum","keySteps"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"form",0),p["\u0275\u0275element"](1,"tui-input-slider",1),p["\u0275\u0275elementStart"](2,"tui-input-slider",2),p["\u0275\u0275text"](3," \u0421\u043a\u043e\u043b\u044c\u043a\u043e \u0437\u043e\u043b\u043e\u0442\u0430 \u0440\u0430\u0437\u0434\u0430\u0442\u044c \u043d\u0430\u0440\u043e\u0434\u0443 "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275property"]("formGroup",t.testForm),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("pluralize",t.pluralize)("segmentsPluralize",t.pluralize)("segments",1)("min",5e4)("max",3e7)("steps",104)("quantum",1e3)("keySteps",t.keySteps),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("pluralize",t.pluralize)("segmentsPluralize",t.pluralize)("segments",1)("min",5e4)("max",3e7)("steps",104)("quantum",1e3)("keySteps",t.keySteps))},directives:[r["\u0275angular_packages_forms_forms_y"],r.NgControlStatusGroup,r.FormGroupDirective,V.a,r.NgControlStatus,r.FormControlName],styles:[".form[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.control[_ngcontent-%COMP%]{-webkit-box-flex:1;-ms-flex:1;flex:1;margin-right:24px}"],changeDetection:0}),e})();var g=n("EPR0"),h=n("yHor"),f=n("zGJC"),C=n("FSyC"),S=n("RlDx"),z=n("u8jZ");function b(e,t){if(1&e&&(p["\u0275\u0275text"](0," \u041f\u043e\u043b\u0435 \u0434\u043b\u044f \u0432\u0432\u043e\u0434\u0430 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0438\u0437 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043d\u043e\u0433\u043e \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u0430 "),p["\u0275\u0275elementStart"](1,"tui-doc-example",2),p["\u0275\u0275element"](2,"tui-input-slider-example-1"),p["\u0275\u0275elementEnd"]()),2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("content",e.example1)}}function M(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"tui-input-slider",20),p["\u0275\u0275text"](1," \u0421\u0440\u043e\u043a "),p["\u0275\u0275elementEnd"]()),2&e){const e=p["\u0275\u0275nextContext"](2);p["\u0275\u0275property"]("formControl",e.control)("focusable",e.focusable)("min",e.min)("max",e.max)("minLabel",e.minLabel)("maxLabel",e.maxLabel)("segments",e.segments)("size",e.size)("keySteps",e.keySteps)("pluralize",e.pluralize)("segmentsPluralize",e.segmentsPluralize)("steps",e.steps)("quantum",e.quantum)("readOnly",e.readOnly)("secondary",e.secondary)("tuiHintContent",e.hintContent)("tuiHintDirection",e.hintDirection)("tuiHintMode",e.hintMode)}}function T(e,t){1&e&&p["\u0275\u0275text"](0," \u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0444\u043e\u0440\u043c\u044b disabled (\u0447\u0435\u0440\u0435\u0437 formControl.disable()) ")}function v(e,t){1&e&&p["\u0275\u0275text"](0," \u041e\u043f\u043e\u0440\u043d\u044b\u0435 \u0442\u043e\u0447\u043a\u0438 \u043d\u0435\u043e\u0434\u043d\u043e\u0440\u043e\u0434\u043d\u043e\u0439 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0438 \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0441\u043b\u0430\u0439\u0434\u0435\u0440\u0430 ")}function w(e,t){1&e&&p["\u0275\u0275text"](0," \u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0432\u0435\u043b\u0438\u0447\u0438\u043d\u0430 ")}function L(e,t){1&e&&p["\u0275\u0275text"](0," \u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0432\u0435\u043b\u0438\u0447\u0438\u043d\u0430 ")}function k(e,t){1&e&&p["\u0275\u0275text"](0," \u041f\u043e\u0434\u043f\u0438\u0441\u044c \u0434\u043b\u044f \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f ")}function N(e,t){1&e&&p["\u0275\u0275text"](0," \u041f\u043e\u0434\u043f\u0438\u0441\u044c \u0434\u043b\u044f \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f ")}function F(e,t){1&e&&p["\u0275\u0275text"](0," \u0424\u043e\u0440\u043c\u044b \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u0447\u0438\u0441\u043b\u0430 \u0434\u043b\u044f \u043f\u043e\u0434\u043f\u0438\u0441\u0435\u0439 ")}function E(e,t){1&e&&p["\u0275\u0275text"](0," \u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043d\u0435\u0434\u0435\u043b\u0438\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ")}function q(e,t){1&e&&p["\u0275\u0275text"](0," \u041b\u0435\u0439\u0431\u043b \u0441\u043f\u0440\u0430\u0432\u0430 ")}function I(e,t){1&e&&p["\u0275\u0275text"](0," \u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0443\u0447\u0430\u0441\u0442\u043a\u043e\u0432 \u0432\u0438\u0437\u0443\u0430\u043b\u044c\u043d\u043e\u0439 \u0440\u0430\u0437\u0431\u0438\u0432\u043a\u0438 ")}function D(e,t){1&e&&(p["\u0275\u0275text"](0," \u0424\u043e\u0440\u043c\u044b \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u0447\u0438\u0441\u043b\u0430 \u0434\u043b\u044f \u043f\u043e\u0434\u043f\u0438\u0441\u0435\u0439 \u0448\u043a\u0430\u043b\u044b (\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 "),p["\u0275\u0275elementStart"](1,"code"),p["\u0275\u0275text"](2,"segments"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](3,") "))}function G(e,t){1&e&&p["\u0275\u0275text"](0," \u0420\u0430\u0437\u043c\u0435\u0440 \u043f\u043e\u043b\u044f ")}function H(e,t){1&e&&p["\u0275\u0275text"](0," \u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0444\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0434\u0438\u0441\u043a\u0440\u0435\u0442\u043d\u044b\u0445 \u0448\u0430\u0433\u043e\u0432 \u0441\u043b\u0430\u0439\u0434\u0435\u0440\u0430 ")}function R(e,t){1&e&&p["\u0275\u0275text"](0," \u0421\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u0442\u0443\u043b\u0442\u0438\u043f\u0430 ")}function O(e,t){1&e&&p["\u0275\u0275text"](0," \u041d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0442\u0443\u043b\u0442\u0438\u043f\u0430 ")}function j(e,t){1&e&&p["\u0275\u0275text"](0," \u041c\u043e\u0434\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f \u0442\u0443\u043b\u0442\u0438\u043f\u0430 ")}function K(e,t){if(1&e){const e=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"tui-doc-demo",3),p["\u0275\u0275template"](1,M,2,18,"ng-template"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](2,"tui-doc-documentation"),p["\u0275\u0275template"](3,T,1,0,"ng-template",4),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().disabled=t})),p["\u0275\u0275template"](4,v,1,0,"ng-template",5),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().keySteps=t})),p["\u0275\u0275template"](5,w,1,0,"ng-template",6),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().min=t})),p["\u0275\u0275template"](6,L,1,0,"ng-template",7),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().max=t})),p["\u0275\u0275template"](7,k,1,0,"ng-template",8),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().minLabel=t})),p["\u0275\u0275template"](8,N,1,0,"ng-template",9),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().maxLabel=t})),p["\u0275\u0275template"](9,F,1,0,"ng-template",10),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().pluralize=t})),p["\u0275\u0275template"](10,E,1,0,"ng-template",11),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().quantum=t})),p["\u0275\u0275template"](11,q,1,0,"ng-template",12),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().secondarySelected=t})),p["\u0275\u0275template"](12,I,1,0,"ng-template",13),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().segments=t})),p["\u0275\u0275template"](13,D,4,0,"ng-template",14),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().segmentsPluralize=t})),p["\u0275\u0275template"](14,G,1,0,"ng-template",15),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().size=t})),p["\u0275\u0275template"](15,H,1,0,"ng-template",16),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().steps=t})),p["\u0275\u0275template"](16,R,1,0,"ng-template",17),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().hintContent=t})),p["\u0275\u0275template"](17,O,1,0,"ng-template",18),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().hintDirection=t})),p["\u0275\u0275template"](18,j,1,0,"ng-template",19),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().hintMode=t})),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](19,"inherited-documentation")}if(2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275property"]("control",e.control),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("documentationPropertyValue",e.disabled),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValues",e.keyStepsVariants)("documentationPropertyValue",e.keySteps),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValues",e.minVariants)("documentationPropertyValue",e.min),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValues",e.maxVariants)("documentationPropertyValue",e.max),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValues",e.minLabelVariants)("documentationPropertyValue",e.minLabel),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValues",e.maxLabelVariants)("documentationPropertyValue",e.maxLabel),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValues",e.pluralizeVariants)("documentationPropertyValue",e.pluralize),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValues",e.quantumVariants)("documentationPropertyValue",e.quantum),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValues",e.secondaryVariants)("documentationPropertyValue",e.secondarySelected),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValues",e.segmentsVariants)("documentationPropertyValue",e.segments),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValues",e.pluralizeVariants)("documentationPropertyValue",e.segmentsPluralize),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValues",e.sizeVariants)("documentationPropertyValue",e.size),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValues",e.stepsVariants)("documentationPropertyValue",e.steps),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValues",e.hintContentVariants)("documentationPropertyValue",e.hintContent),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValues",e.hintDirectionVariants)("documentationPropertyValue",e.hintDirection),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValues",e.hintModeVariants)("documentationPropertyValue",e.hintMode)}}function _(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"ol",21),p["\u0275\u0275elementStart"](1,"li"),p["\u0275\u0275text"](2," \u0414\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043c\u043e\u0434\u0443\u043b\u044c "),p["\u0275\u0275elementStart"](3,"code"),p["\u0275\u0275text"](4,"TuiInputSliderModule"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](5," \u0432 \u0442\u043e\u0442 \u0436\u0435 \u043c\u043e\u0434\u0443\u043b\u044c, \u043a\u0443\u0434\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432\u0430\u0448 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442: "),p["\u0275\u0275element"](6,"tui-doc-code",22),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](7,"li"),p["\u0275\u0275text"](8," \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0448\u0430\u0431\u043b\u043e\u043d ("),p["\u0275\u0275elementStart"](9,"code"),p["\u0275\u0275text"](10,"min"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](11," \u0434\u043b\u044f \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f, "),p["\u0275\u0275elementStart"](12,"code"),p["\u0275\u0275text"](13,"max"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](14," \u0434\u043b\u044f \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f, "),p["\u0275\u0275elementStart"](15,"code"),p["\u0275\u0275text"](16,"quantum"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](17," \u0434\u043b\u044f \u0437\u0430\u0434\u0430\u043d\u0438\u044f \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0448\u0430\u0433\u0430): "),p["\u0275\u0275element"](18,"tui-doc-code",23),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](6),p["\u0275\u0275property"]("code",e.exampleImportModule),p["\u0275\u0275advance"](12),p["\u0275\u0275property"]("code",e.exampleInsertTemplate)}}let J=(()=>{class e extends c.a{constructor(){super(...arguments),this.exampleImportModule="import {FormsModule, ReactiveFormsModule} from '@angular/forms';\nimport {TuiInputSliderModule} from '@taiga-ui/kit';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        FormsModule,\n        ReactiveFormsModule,\n        TuiInputSliderModule\n    ],\n...\n",this.exampleInsertTemplate='<form [formGroup]="testForm">\n    <tui-input-slider formControlName="testValue"\n                      max="1000"\n                      quantum="10"></tui-input-slider>\n</form>\n',this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {TuiPluralize} from '@taiga-ui/core';\nimport {TuiKeySteps} from '@taiga-ui/kit';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-input-slider-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputSliderExample1 {\n    testForm = new FormGroup({\n        testValue: new FormControl(100000),\n    });\n\n    // 30 \u0448\u0430\u0433\u043e\u0432 \u043f\u043e 5000, 16 \u0448\u0430\u0433\u043e\u0432 \u043f\u043e 50 000, 58 \u0448\u0430\u0433\u043e\u0432 \u043f\u043e 500 000 = 104 \u0448\u0430\u0433\u0430\n    keySteps: TuiKeySteps = [\n        [(100 / 104) * 30, 200000],\n        [(100 / 104) * (30 + 16), 1000000],\n    ];\n\n    pluralize: TuiPluralize = ['\u20bd', '\u20bd', '\u20bd'];\n}\n",HTML:'<form [formGroup]="testForm" class="form">\n    <tui-input-slider\n        class="control"\n        formControlName="testValue"\n        size="m"\n        minLabel="\u0421\u0430\u043c\u0443\u044e \u043c\u0430\u043b\u043e\u0441\u0442\u044c"\n        maxLabel="\u0421\u043e\u0432\u0441\u0435\u043c \u0432\u0441\u0451"\n        [pluralize]="pluralize"\n        [segmentsPluralize]="pluralize"\n        [segments]="1"\n        [min]="50000"\n        [max]="30000000"\n        [steps]="104"\n        [quantum]="1000"\n        [keySteps]="keySteps"\n    >\n    </tui-input-slider>\n    <tui-input-slider\n        class="control"\n        formControlName="testValue"\n        minLabel="\u0421\u0430\u043c\u0443\u044e \u043c\u0430\u043b\u043e\u0441\u0442\u044c"\n        maxLabel="\u0421\u043e\u0432\u0441\u0435\u043c \u0432\u0441\u0451"\n        [pluralize]="pluralize"\n        [segmentsPluralize]="pluralize"\n        [segments]="1"\n        [min]="50000"\n        [max]="30000000"\n        [steps]="104"\n        [quantum]="1000"\n        [keySteps]="keySteps"\n    >\n        \u0421\u043a\u043e\u043b\u044c\u043a\u043e \u0437\u043e\u043b\u043e\u0442\u0430 \u0440\u0430\u0437\u0434\u0430\u0442\u044c \u043d\u0430\u0440\u043e\u0434\u0443\n    </tui-input-slider>\n</form>\n',LESS:".form {\n    display: flex;\n    align-items: flex-start;\n}\n\n.control {\n    flex: 1;\n    margin-right: 24px;\n}\n"},this.control=new r.FormControl,this.minVariants=[0,1,5,7.77,-10],this.min=this.minVariants[0],this.maxVariants=[10,100,1e4],this.max=this.maxVariants[0],this.segmentsVariants=[0,1,5,13],this.segments=this.segmentsVariants[0],this.stepsVariants=[0,4,10],this.steps=this.stepsVariants[0],this.quantumVariants=[1,.01,10,100],this.quantum=this.quantumVariants[0],this.sizeVariants=["m","l"],this.size=this.sizeVariants[1],this.pluralizeVariants=[["\u0433\u043e\u0434","\u0433\u043e\u0434\u0430","\u043b\u0435\u0442"],["\u0448\u0442","\u0448\u0442","\u0448\u0442"],["\u0433\u043e\u0434\u0430","\u043b\u0435\u0442","\u043b\u0435\u0442"]],this.pluralize=null,this.segmentsPluralize=null,this.secondaryVariants=["getter \u043f\u0440\u043e\u0446\u0435\u043d\u0442\u043e\u0432","\u0443\u0441\u043b\u043e\u0432\u043d\u043e"],this.secondarySelected=null,this.minLabelVariants=["","\u041d\u0438\u0447\u0435\u0433\u043e"],this.minLabel=this.minLabelVariants[0],this.maxLabelVariants=["","\u0412\u0441\u0451"],this.maxLabel=this.maxLabelVariants[0],this.keyStepsVariants=[[[50,1e3]]],this.keySteps=null}get secondary(){return this.secondarySelected===this.secondaryVariants[0]?Math.round(this.control.value/this.max*100)+"%":this.secondarySelected}}return e.\u0275fac=function(t){return B(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-input-slider"]],features:[p["\u0275\u0275ProvidersFeature"]([{provide:s.a,useExisting:Object(p.forwardRef)(()=>e)}]),p["\u0275\u0275InheritDefinitionFeature"]],decls:4,vars:0,consts:[["header","InputSlider","package","KIT"],["pageTab",""],["id","base","heading","\u0431\u0430\u0437\u043e\u0432\u044b\u0439",3,"content"],[3,"control"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","keySteps","documentationPropertyMode","input","documentationPropertyType","TuiKeySteps",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","min","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","minLabel","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","maxLabel","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","pluralize","documentationPropertyMode","input","documentationPropertyType","TuiPluralize",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","quantum","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","secondary","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","segments","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","segmentsPluralize","documentationPropertyMode","input","documentationPropertyType","TuiPluralize",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","size","documentationPropertyMode","input","documentationPropertyType","TuiSizeL",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","steps","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","hintContent","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","hintDirection","documentationPropertyMode","input","documentationPropertyType","TuiDirection",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","hintMode","documentationPropertyMode","input","documentationPropertyType","TuihintMode | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"formControl","focusable","min","max","minLabel","maxLabel","segments","size","keySteps","pluralize","segmentsPluralize","steps","quantum","readOnly","secondary","tuiHintContent","tuiHintDirection","tuiHintMode"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"tui-doc-page",0),p["\u0275\u0275template"](1,b,3,1,"ng-template",1),p["\u0275\u0275template"](2,K,20,32,"ng-template",1),p["\u0275\u0275template"](3,_,19,2,"ng-template",1),p["\u0275\u0275elementEnd"]())},directives:[d.a,y.a,P.a,x,g.a,h.a,f.a,C.a,V.a,r.NgControlStatus,r.FormControlDirective,S.a,z.a],encapsulation:2,changeDetection:0}),e})();const B=p["\u0275\u0275getInheritedFactory"](J);let Q=(()=>{class e{}return e.\u0275mod=p["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[l.TuiInputRangeModule,l.TuiInputSliderModule,m.a,r.ReactiveFormsModule,r.FormsModule,o.c,l.TuiRadioListModule,u.TuiButtonModule,u.TuiHintControllerModule,...i.e,a.g.forChild(Object(i.n)(J))]]}),e})()}}]);