(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{G3iW:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleMiscellaneousModule",(function(){return N}));var a=n("2kYt"),r=n("nIj0"),o=n("sEIs"),s=n("SVIu"),m=n("Qq0t"),i=n("dvRg"),l=n("EM62"),p=n("OZlg"),c=n("e0eB"),u=n("iyc4"),d=n("l4xa");let f=(()=>{class e{get assertResult(){const e=5===(new Date).getDay();return d.tuiAssert.assert(e,"\u0421\u0435\u0433\u043e\u0434\u043d\u044f \u043d\u0435 \u043f\u044f\u0442\u043d\u0438\u0446\u0430"),e?"\u0412 \u043a\u043e\u043d\u0441\u043e\u043b\u044c \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0432\u044b\u0432\u0435\u0434\u0435\u043d\u043e":"\u0412 \u043a\u043e\u043d\u0441\u043e\u043b\u044c \u0432\u044b\u0432\u0435\u0434\u0435\u043d assert: '\u0421\u0435\u0433\u043e\u0434\u043d\u044f \u043d\u0435 \u043f\u044f\u0442\u043d\u0438\u0446\u0430'"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-miscellaneous-example-1"]],decls:2,vars:1,template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"p"),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate"](t.assertResult))},encapsulation:2,changeDetection:0}),e})(),g=(()=>{class e{get flatted(){return Object(d.flatLength)([[1,2],[3,4],[5,6]])}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-miscellaneous-example-2"]],decls:2,vars:1,template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"p"),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate1"]("",t.flatted," = flatLength([[1, 2], [3, 4], [5, 6]]);"))},encapsulation:2,changeDetection:0}),e})();var y=n("T8fS"),x=n("TjIJ"),v=n("fP8s"),h=n("OWJi");function S(e,t){if(1&e&&l["\u0275\u0275element"](0,"tui-data-list-wrapper",4),2&e){const e=l["\u0275\u0275nextContext"]();l["\u0275\u0275property"]("items",e.items)}}let C=(()=>{class e{constructor(){this.items=["6734567890123456","5536567890123456","2202567890123456","4405567890123456","4000567890123456"],this.parametersForm=new r.FormGroup({cardNumber:new r.FormControl("")})}get paymentSystem(){const{cardNumber:e}=this.parametersForm.value;return Object(y.getPaymentSystem)(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-miscellaneous-example-4"]],decls:6,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","cardNumber",1,"tui-space_top-2"],[3,"items",4,"tuiDataList"],[3,"items"]],template:function(e,t){1&e&&(l["\u0275\u0275text"](0),l["\u0275\u0275elementStart"](1,"form",0),l["\u0275\u0275elementStart"](2,"div",1),l["\u0275\u0275elementStart"](3,"tui-select",2),l["\u0275\u0275text"](4," \u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043d\u043e\u043c\u0435\u0440 \u043a\u0430\u0440\u0442\u044b "),l["\u0275\u0275template"](5,S,1,1,"tui-data-list-wrapper",3),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275textInterpolate1"]("'",t.paymentSystem,"' = getPaymentSystem(cardNumber); "),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("formGroup",t.parametersForm))},directives:[r["\u0275angular_packages_forms_forms_y"],r.NgControlStatusGroup,r.FormGroupDirective,x.a,r.NgControlStatus,r.FormControlName,v.a,h.a],styles:[".parameters[_ngcontent-%COMP%]{margin-top:12px;width:220px}"],changeDetection:0}),e})();function w(e,t){if(1&e&&l["\u0275\u0275element"](0,"tui-data-list-wrapper",4),2&e){const e=l["\u0275\u0275nextContext"]();l["\u0275\u0275property"]("items",e.items)}}let F=(()=>{class e{constructor(){this.items=["\u0421\u0442\u0440\u043e\u0447\u043a\u0430","null","undefined"],this.parametersForm=new r.FormGroup({value:new r.FormControl(null)})}get isPresent(){const{value:e}=this.parametersForm.value,t=this.objectifyValue(e);return Object(d.isPresent)(t)}objectifyValue(e){return"null"===e?null:"undefined"!==e?e:void 0}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-miscellaneous-example-5"]],decls:6,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"],[3,"items",4,"tuiDataList"],[3,"items"]],template:function(e,t){1&e&&(l["\u0275\u0275text"](0),l["\u0275\u0275elementStart"](1,"form",0),l["\u0275\u0275elementStart"](2,"div",1),l["\u0275\u0275elementStart"](3,"tui-select",2),l["\u0275\u0275text"](4," value "),l["\u0275\u0275template"](5,w,1,1,"tui-data-list-wrapper",3),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275textInterpolate1"]("",t.isPresent," = isPresent(value); "),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("formGroup",t.parametersForm))},directives:[r["\u0275angular_packages_forms_forms_y"],r.NgControlStatusGroup,r.FormGroupDirective,x.a,r.NgControlStatus,r.FormControlName,v.a,h.a],styles:[".parameters[_ngcontent-%COMP%]{margin-top:12px;width:220px}"],changeDetection:0}),e})();var b=n("u8jZ");function D(e,t){if(1&e&&(l["\u0275\u0275text"](0," \u0420\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u0443\u043f\u0440\u043e\u0449\u0435\u043d\u0438\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 "),l["\u0275\u0275elementStart"](1,"tui-doc-example",2),l["\u0275\u0275element"](2,"tui-miscellaneous-example-1"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](3,"tui-doc-example",3),l["\u0275\u0275element"](4,"tui-miscellaneous-example-2"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](5,"tui-doc-example",4),l["\u0275\u0275element"](6,"tui-miscellaneous-example-4"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](7,"tui-doc-example",5),l["\u0275\u0275element"](8,"tui-miscellaneous-example-5"),l["\u0275\u0275elementEnd"]()),2&e){const e=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("content",e.example1),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("content",e.example2),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("content",e.example4),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("content",e.example5)}}function E(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"ol",6),l["\u0275\u0275elementStart"](1,"li"),l["\u0275\u0275text"](2," \u0414\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0432 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0435 "),l["\u0275\u0275element"](3,"tui-doc-code",7),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e){const e=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("code",e.importComponentExample)}}let P=(()=>{class e{constructor(){this.importComponentExample="import {getPaymentSystem} from '@taiga-ui/kit';\n\n...\n    paymentSystem = getPaymentSystem(cardNumber);\n...\n",this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {tuiAssert} from '@taiga-ui/cdk';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-miscellaneous-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMiscellaneousExample1 {\n    get assertResult(): string {\n        const dayOfWeek = new Date().getDay();\n        const isFriday = dayOfWeek === 5;\n\n        tuiAssert.assert(isFriday, '\u0421\u0435\u0433\u043e\u0434\u043d\u044f \u043d\u0435 \u043f\u044f\u0442\u043d\u0438\u0446\u0430');\n\n        return isFriday\n            ? '\u0412 \u043a\u043e\u043d\u0441\u043e\u043b\u044c \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0432\u044b\u0432\u0435\u0434\u0435\u043d\u043e'\n            : `\u0412 \u043a\u043e\u043d\u0441\u043e\u043b\u044c \u0432\u044b\u0432\u0435\u0434\u0435\u043d assert: '\u0421\u0435\u0433\u043e\u0434\u043d\u044f \u043d\u0435 \u043f\u044f\u0442\u043d\u0438\u0446\u0430'`;\n    }\n}\n",HTML:"<p>{{ assertResult }}</p>\n"},this.example2={TypeScript:"import {Component} from '@angular/core';\nimport {flatLength} from '@taiga-ui/cdk';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-miscellaneous-example-2',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMiscellaneousExample2 {\n    get flatted(): number {\n        return flatLength([\n            [1, 2],\n            [3, 4],\n            [5, 6],\n        ]);\n    }\n}\n",HTML:"<p>{{ flatted }} = flatLength([[1, 2], [3, 4], [5, 6]]);</p>\n"},this.example4={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {getPaymentSystem} from '@taiga-ui/addon-commerce';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-miscellaneous-example-4',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMiscellaneousExample4 {\n    readonly items = [\n        '6734567890123456',\n        '5536567890123456',\n        '2202567890123456',\n        '4405567890123456',\n        '4000567890123456',\n    ];\n\n    parametersForm = new FormGroup({\n        cardNumber: new FormControl(''),\n    });\n\n    get paymentSystem(): string | null {\n        const {cardNumber} = this.parametersForm.value;\n\n        return getPaymentSystem(cardNumber);\n    }\n}\n",HTML:'\'{{ paymentSystem }}\' = getPaymentSystem(cardNumber);\n\n<form [formGroup]="parametersForm">\n    <div class="parameters">\n        <tui-select formControlName="cardNumber" class="tui-space_top-2">\n            \u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043d\u043e\u043c\u0435\u0440 \u043a\u0430\u0440\u0442\u044b\n            <tui-data-list-wrapper\n                *tuiDataList\n                [items]="items"\n            ></tui-data-list-wrapper>\n        </tui-select>\n    </div>\n</form>\n',LESS:".parameters {\n    margin-top: 12px;\n    width: 220px;\n}\n"},this.example5={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {isPresent} from '@taiga-ui/cdk';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-miscellaneous-example-5',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMiscellaneousExample5 {\n    readonly items = ['\u0421\u0442\u0440\u043e\u0447\u043a\u0430', 'null', 'undefined'];\n\n    parametersForm = new FormGroup({\n        value: new FormControl(null),\n    });\n\n    get isPresent(): boolean {\n        const {value} = this.parametersForm.value;\n        const objectedValue = this.objectifyValue(value);\n\n        return isPresent(objectedValue);\n    }\n\n    private objectifyValue(value: string): string | null | undefined {\n        if (value === 'null') {\n            return null;\n        }\n\n        if (value === 'undefined') {\n            return undefined;\n        }\n\n        return value;\n    }\n}\n",HTML:'{{ isPresent }} = isPresent(value);\n\n<form [formGroup]="parametersForm">\n    <div class="parameters">\n        <tui-select formControlName="value" class="tui-space_top-2">\n            value\n            <tui-data-list-wrapper\n                *tuiDataList\n                [items]="items"\n            ></tui-data-list-wrapper>\n        </tui-select>\n    </div>\n</form>\n',LESS:".parameters {\n    margin-top: 12px;\n    width: 220px;\n}\n"}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["example-format"]],decls:3,vars:0,consts:[["header","\u041f\u0440\u043e\u0447\u0438\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b","package","CDK"],["pageTab",""],["id","assert","heading","assert","description","\u0412\u044b\u0432\u043e\u0434\u0438\u0442 assert \u0432 \u043a\u043e\u043d\u0441\u043e\u043b\u044c. \u041f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442 devMode \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0438\n                                                  \u043f\u0435\u0440\u0432\u043e\u043c \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u0438.",3,"content"],["id","flatLength","heading","flatLength","description","\u0421\u0447\u0438\u0442\u0430\u0435\u0442 \u0434\u043b\u0438\u043d\u0443 \u0434\u0432\u0443\u0445\u043c\u0435\u0440\u043d\u043e\u0433\u043e \u043c\u0430\u0441\u0441\u0438\u0432\u0430, \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0432 \u043e\u0434\u043d\u043e\u043c\u0435\u0440\u043d\u044b\u0439.",3,"content"],["id","getPaymentSystem","heading","getPaymentSystem","description","\u041f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u044b\u0432\u044b\u0432\u0430\u0435\u0442 \u0441\u0442\u0440\u043e\u043a\u0443 \u043d\u043e\u043c\u0435\u0440\u0430 \u043a\u0430\u0440\u0442\u044b \u0432 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u043b\u0430\u0442\u0435\u0436\u043d\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b,\n                                                  \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0435\u0451 \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u0435\u0442.",3,"content"],["id","isPresent","heading","isPresent","description","\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430, \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043b\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0435 null \u0438\u043b\u0438 undefined.",3,"content"],[1,"b-demo-steps"],["filename","myComponent.component.ts",3,"code"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"tui-doc-page",0),l["\u0275\u0275template"](1,D,9,4,"ng-template",1),l["\u0275\u0275template"](2,E,4,1,"ng-template",1),l["\u0275\u0275elementEnd"]())},directives:[p.a,c.a,u.a,f,g,C,F,b.a],encapsulation:2,changeDetection:0}),e})(),N=(()=>{class e{}return e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.c,r.FormsModule,r.ReactiveFormsModule,i.TuiSelectModule,m.TuiDataListModule,i.TuiDataListWrapperModule,...s.e,o.g.forChild(Object(s.n)(P))]]}),e})()}}]);