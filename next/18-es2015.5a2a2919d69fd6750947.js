(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"3p4X":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n("IdLP"),i=n("Efrr"),a=n("KRZI");function r(e=0,t=i.a){return(!Object(a.a)(e)||e<0)&&(e=0),t&&"function"==typeof t.schedule||(t=i.a),new o.a(n=>(n.add(t.schedule(l,e,{subscriber:n,counter:0,period:e})),n))}function l(e){const{subscriber:t,counter:n,period:o}=e;t.next(n),this.schedule({subscriber:t,counter:n+1,period:o},o)}},eTGK:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiTooltipModule",(function(){return le}));var o,i,a=n("2kYt"),r=n("nIj0"),l=n("sEIs"),c=n("SVIu"),d=n("Qq0t"),u=n("dvRg"),p=n("kiPw"),m=n("EM62"),s=n("OZlg"),h=n("e0eB"),y=n("iyc4"),f=n("l4xa"),x=n("3p4X"),b=n("kuMc"),g=n("9gA3"),T=n("HUEM");function v(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"tui-loader",3),m["\u0275\u0275text"](1),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275property"]("showLoader",e.loader),m["\u0275\u0275advance"](1),m["\u0275\u0275textInterpolate1"](" ",e.text," ")}}o=$localize`:␟bc109a25daadaae77dad36bb0be3f224082b9ea7␟4005156764639798896:Component with a static text...`,i=$localize`:␟2b6a9f56a94cb6f981b1ce4141911633c6c50653␟4818821232324201441: ...or any custom HTML or logic with ${"\ufffd#5\ufffd"}:START_TAG_CODE:PolymorpheusContent${"\ufffd/#5\ufffd"}:CLOSE_TAG_CODE::
`;let C=(()=>{class e{constructor(e,t){this.loader=!0,this.text="",Object(x.a)(2e3).pipe(Object(f.watch)(t),Object(b.a)(e)).subscribe(()=>{this.loader=!this.loader,this.text=this.text?"":"Error 502: Bad Gateway"})}}return e.\u0275fac=function(t){return new(t||e)(m["\u0275\u0275directiveInject"](f.TuiDestroyService),m["\u0275\u0275directiveInject"](m.ChangeDetectorRef))},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-tooltip-example-1"]],features:[m["\u0275\u0275ProvidersFeature"]([f.TuiDestroyService])],decls:9,vars:1,consts:[["content","Please don't touch this","direction","left"],["direction","bottom-right",3,"content"],["tooltip",""],["size","s",1,"tooltip",3,"showLoader"]],template:function(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"p"),m["\u0275\u0275i18n"](1,o),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](2,"tui-tooltip",0),m["\u0275\u0275elementStart"](3,"p"),m["\u0275\u0275i18nStart"](4,i),m["\u0275\u0275element"](5,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](6,"tui-tooltip",1),m["\u0275\u0275template"](7,v,2,2,"ng-template",null,2,m["\u0275\u0275templateRefExtractor"])),2&e){const e=m["\u0275\u0275reference"](8);m["\u0275\u0275advance"](6),m["\u0275\u0275property"]("content",e)}},directives:[g.a,T.a],styles:[".tooltip[_ngcontent-%COMP%]{min-width:100px}"],changeDetection:0}),e})();var w=n("yZWP"),S=n("TxeG"),D=n("cweO"),P=n("tNxS"),E=n("fHzR");function M(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"div"),m["\u0275\u0275text"](1,"What is "),m["\u0275\u0275elementStart"](2,"strong"),m["\u0275\u0275text"](3,"love"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275text"](4,"?"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](5,"div"),m["\u0275\u0275text"](6,"Baby don't hurt me"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](7,"div"),m["\u0275\u0275text"](8,"Don't hurt me"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](9,"div"),m["\u0275\u0275text"](10,"No more..."),m["\u0275\u0275elementEnd"]())}const V=function(){return["/tui-hint"]};let O=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-tooltip-example-2"]],decls:9,vars:5,consts:[["tuiLink","","tuiMode","onDark",3,"routerLink"],["tabindex","0","size","l","text","\u2764","tuiDescribedBy","love","tuiHintId","love","tuiHintMode","onDark","tuiHintDirection","right",3,"tuiHint","autoColor","rounded"],["tooltip",""]],template:function(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"p"),m["\u0275\u0275text"](1," Custom host can be set with "),m["\u0275\u0275elementStart"](2,"a",0),m["\u0275\u0275elementStart"](3,"code"),m["\u0275\u0275text"](4,"tuiHint"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275text"](5," directive\n"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](6,"tui-avatar",1),m["\u0275\u0275template"](7,M,11,0,"ng-template",null,2,m["\u0275\u0275templateRefExtractor"])),2&e){const e=m["\u0275\u0275reference"](8);m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("routerLink",m["\u0275\u0275pureFunction0"](4,V)),m["\u0275\u0275advance"](4),m["\u0275\u0275property"]("tuiHint",e)("autoColor",!0)("rounded",!0)}},directives:[w.a,l.e,S.a,D.a,P.b,E.b],styles:["[_nghost-%COMP%]{display:block;margin:-20px;padding:30px;background:#3e4757;color:var(--tui-base-01)}"],changeDetection:0}),e})();var I=n("GdrL"),L=n("2wTY"),k=n("gEyt");function z(e,t){1&e&&m["\u0275\u0275text"](0," Allowed symbols: \u2660 \u2663 \u2666 \u2665 ")}let H=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-tooltip-example-3"]],decls:8,vars:4,consts:[["tooltip",""],["tuiTextfieldSize","m",1,"input",3,"tuiTextfieldLabelOutside"],["direction","right",3,"content"],["content","Set icon color with 'color'","direction","right",1,"primary"],["tuiTextfieldSize","m",1,"input"]],template:function(e,t){if(1&e&&(m["\u0275\u0275template"](0,z,1,0,"ng-template",null,0,m["\u0275\u0275templateRefExtractor"]),m["\u0275\u0275element"](2,"tui-input",1),m["\u0275\u0275element"](3,"tui-tooltip",2),m["\u0275\u0275element"](4,"tui-input",1),m["\u0275\u0275element"](5,"tui-tooltip",3),m["\u0275\u0275element"](6,"tui-input",4),m["\u0275\u0275element"](7,"tui-tooltip",2)),2&e){const e=m["\u0275\u0275reference"](1);m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("content",e),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("content",e)}},directives:[I.a,L.b,k.b,g.a],styles:["[_nghost-%COMP%]{display:block;width:400px}.primary[_ngcontent-%COMP%]{color:var(--tui-primary)}.input[_ngcontent-%COMP%]{display:inline-block;width:300px;margin:12px 12px 12px 0;vertical-align:middle}"],changeDetection:0}),e})();var $=n("EPR0"),A=n("yHor"),_=n("zGJC"),R=n("u8jZ");const j=["header",$localize`:␟a88dadc6d0b189d36dcf32ad155837e493315481␟6353881334588207009:Tooltip`];var G;G=$localize`:␟8a29dd0696d48dc3c3e2a6a70368fea82035b0d2␟905486108575958111:Component to show icons with a hint by hover`;const B=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`],N=["heading",$localize`:␟a32f005c96947266e080f9a848bc3b91eb134591␟4956201895678522724:Custom host`],U=["heading",$localize`:␟fedc7841fde54553fb3364ca27c9ea0486860c79␟7145015114196688747:Repeating template`];function q(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"p"),m["\u0275\u0275i18n"](1,G),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](2,"tui-doc-example",2),m["\u0275\u0275i18nAttributes"](3,B),m["\u0275\u0275element"](4,"tui-tooltip-example-1"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](5,"tui-doc-example",3),m["\u0275\u0275i18nAttributes"](6,N),m["\u0275\u0275element"](7,"tui-tooltip-example-2"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](8,"tui-doc-example",4),m["\u0275\u0275i18nAttributes"](9,U),m["\u0275\u0275element"](10,"tui-tooltip-example-3"),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("content",e.example1),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("content",e.example2),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("content",e.example3)}}var Z,F,J,W,Y,K;function X(e,t){1&e&&m["\u0275\u0275i18n"](0,Z)}function Q(e,t){1&e&&(m["\u0275\u0275i18nStart"](0,F),m["\u0275\u0275element"](1,"code"),m["\u0275\u0275element"](2,"code"),m["\u0275\u0275i18nEnd"]())}function ee(e,t){1&e&&m["\u0275\u0275i18n"](0,J)}function te(e,t){1&e&&m["\u0275\u0275i18n"](0,W)}function ne(e,t){1&e&&m["\u0275\u0275text"](0," Show Delay ")}function oe(e,t){1&e&&m["\u0275\u0275text"](0," Hide Delay ")}function ie(e,t){if(1&e){const e=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"tui-doc-demo"),m["\u0275\u0275element"](1,"tui-tooltip",5),m["\u0275\u0275element"](2,"input",6),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](3,"tui-doc-documentation"),m["\u0275\u0275template"](4,X,1,0,"ng-template",7),m["\u0275\u0275template"](5,Q,3,0,"ng-template",8),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().describeId=t})),m["\u0275\u0275template"](6,ee,1,0,"ng-template",9),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().mode=t})),m["\u0275\u0275template"](7,te,1,0,"ng-template",10),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().direction=t})),m["\u0275\u0275template"](8,ne,1,0,"ng-template",11),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().showDelay=t})),m["\u0275\u0275template"](9,oe,1,0,"ng-template",12),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().hideDelay=t})),m["\u0275\u0275elementEnd"]()}if(2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("mode",e.mode)("describeId",e.describeId)("direction",e.direction)("showDelay",e.showDelay)("hideDelay",e.hideDelay),m["\u0275\u0275advance"](4),m["\u0275\u0275property"]("documentationPropertyValue",e.describeId),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValues",e.modeVariants)("documentationPropertyValue",e.mode),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValues",e.directionVariants)("documentationPropertyValue",e.direction),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValue",e.showDelay),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValue",e.hideDelay)}}function ae(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"ol",13),m["\u0275\u0275elementStart"](1,"li"),m["\u0275\u0275elementStart"](2,"p"),m["\u0275\u0275i18nStart"](3,Y),m["\u0275\u0275element"](4,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](5,"tui-doc-code",14),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"li"),m["\u0275\u0275elementStart"](7,"p"),m["\u0275\u0275i18n"](8,K),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](9,"tui-doc-code",15),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("code",e.exampleImportModule),m["\u0275\u0275advance"](4),m["\u0275\u0275property"]("code",e.exampleInsertTemplate)}}Z=$localize`:␟e9f702db23b4c5e6414958eea642ca3ab502bf39␟2298220704202813549: Tooltip content `,F=$localize`:␟7a3a0fb1de710237223d4094995f948354778425␟4604133690480561030: To be accessible, hint should be set to a focusable element and user with Screen Readers will listen to hint text after a small delay when focusing textfield. Set unique ${"[\ufffd#1\ufffd|\ufffd#2\ufffd]"}:START_TAG_CODE:describeId${"[\ufffd/#1\ufffd|\ufffd/#2\ufffd]"}:CLOSE_TAG_CODE: and use ${"[\ufffd#1\ufffd|\ufffd#2\ufffd]"}:START_TAG_CODE:[tuiDescribedBy]="theSameId"${"[\ufffd/#1\ufffd|\ufffd/#2\ufffd]"}:CLOSE_TAG_CODE: directive on focusable element `,F=m["\u0275\u0275i18nPostprocess"](F),J=$localize`:␟69f19735086834303801da065792060dcc6d7cba␟6623126095220796297: Tooltip mode `,W=$localize`:␟394e515f6a52d9b97253d3dbed22bac0c58244f2␟5526347285866058230: Tooltip direction `,Y=$localize`:␟1e76073f08fbdcd8247423b9cf4aed8819c715f9␟639231699976050289: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiTooltipModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,K=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let re=(()=>{class e{constructor(){this.example1={TypeScript:"import {ChangeDetectorRef, Component, Inject} from '@angular/core';\nimport {TuiDestroyService, watch} from '@taiga-ui/cdk';\nimport {interval} from 'rxjs';\nimport {takeUntil} from 'rxjs/operators';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-tooltip-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    providers: [TuiDestroyService],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTooltipExample1 {\n    loader = true;\n\n    text = '';\n\n    constructor(\n        @Inject(TuiDestroyService) destroy$: TuiDestroyService,\n        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,\n    ) {\n        interval(2000)\n            .pipe(watch(changeDetectorRef), takeUntil(destroy$))\n            .subscribe(() => {\n                this.loader = !this.loader;\n                this.text = this.text ? '' : 'Error 502: Bad Gateway';\n            });\n    }\n}\n",HTML:'<p i18n>Component with a static text...</p>\n<tui-tooltip content="Please don\'t touch this" direction="left"></tui-tooltip>\n<p i18n>\n    ...or any custom HTML or logic with\n    <code>PolymorpheusContent</code>:\n</p>\n<tui-tooltip direction="bottom-right" [content]="tooltip"></tui-tooltip>\n\n<ng-template #tooltip>\n    <tui-loader class="tooltip" size="s" [showLoader]="loader">\n        {{text}}\n    </tui-loader>\n</ng-template>\n',LESS:"@import 'taiga-ui-local';\n\n.tooltip {\n    min-width: 100px;\n}\n"},this.example2={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-tooltip-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTooltipExample2 {}\n",HTML:'<p>\n    Custom host can be set with\n    <a tuiLink tuiMode="onDark" [routerLink]="[\'/tui-hint\']"\n        ><code>tuiHint</code></a\n    >\n    directive\n</p>\n<tui-avatar\n    tabindex="0"\n    size="l"\n    text="\u2764"\n    tuiDescribedBy="love"\n    tuiHintId="love"\n    tuiHintMode="onDark"\n    tuiHintDirection="right"\n    [tuiHint]="tooltip"\n    [autoColor]="true"\n    [rounded]="true"\n></tui-avatar>\n<ng-template #tooltip>\n    <div>What is <strong>love</strong>?</div>\n    <div>Baby don\'t hurt me</div>\n    <div>Don\'t hurt me</div>\n    <div>No more...</div>\n</ng-template>\n',LESS:":host {\n    display: block;\n    margin: -20px;\n    padding: 30px;\n    background: #3e4757;\n    color: var(--tui-base-01);\n}\n"},this.example3={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-tooltip-example-3',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTooltipExample3 {}\n",HTML:'<ng-template #tooltip> Allowed symbols: \u2660 \u2663 \u2666 \u2665 </ng-template>\n\n<tui-input\n    class="input"\n    tuiTextfieldSize="m"\n    [tuiTextfieldLabelOutside]="true"\n></tui-input>\n<tui-tooltip [content]="tooltip" direction="right"></tui-tooltip>\n\n<tui-input\n    class="input"\n    tuiTextfieldSize="m"\n    [tuiTextfieldLabelOutside]="true"\n></tui-input>\n<tui-tooltip\n    class="primary"\n    content="Set icon color with \'color\'"\n    direction="right"\n></tui-tooltip>\n\n<tui-input class="input" tuiTextfieldSize="m"></tui-input>\n<tui-tooltip [content]="tooltip" direction="right"></tui-tooltip>\n',LESS:":host {\n    display: block;\n    width: 400px;\n}\n\n.primary {\n    color: var(--tui-primary);\n}\n\n.input {\n    display: inline-block;\n    width: 300px;\n    margin: 12px 12px 12px 0;\n    vertical-align: middle;\n}\n"},this.exampleImportModule="import {TuiTooltipModule, TuiHintModule} from '@taiga-ui/core';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiTooltipModule // (1)\n        TuiHintModule // (2)\n    ],\n...\n",this.exampleInsertTemplate='<tui-tooltip content="Please don\'t touch this" direction="left"></tui-tooltip>',this.modeVariants=["error"],this.mode=null,this.directionVariants=["left","right","bottom-left","bottom-right","top-left","top-right"],this.direction=this.directionVariants[2],this.describeId="",this.showDelay=500,this.hideDelay=200}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tooltip"]],decls:5,vars:0,consts:[["package","CORE","type","components",6,"header"],["pageTab",""],["id","example-base",3,"content",6,"heading"],["id","custom-host",3,"content",6,"heading"],["id","repeating-template",3,"content",6,"heading"],["content","You data is hidden",3,"mode","describeId","direction","showDelay","hideDelay"],["placeholder","id: qwerty","tuiDescribedBy","qwerty"],["documentationPropertyName","content","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent | null"],["documentationPropertyName","describeId","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","mode","documentationPropertyMode","input","documentationPropertyType","TuiTooltipMode | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","direction","documentationPropertyMode","input","documentationPropertyType","TuiDirection",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","showDelay","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","hideDelay","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"tui-doc-page",0),m["\u0275\u0275i18nAttributes"](1,j),m["\u0275\u0275template"](2,q,11,3,"ng-template",1),m["\u0275\u0275template"](3,ie,10,12,"ng-template",1),m["\u0275\u0275template"](4,ae,10,2,"ng-template",1),m["\u0275\u0275elementEnd"]())},directives:[s.a,h.a,y.a,C,O,H,$.a,g.a,P.b,A.a,_.a,R.a],encapsulation:2,changeDetection:0}),e})(),le=(()=>{class e{}return e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[d.TuiTooltipModule,d.TuiHintModule,d.TuiLinkModule,u.TuiAvatarModule,d.TuiLoaderModule,u.TuiInputModule,p.c,d.TuiModeModule,d.TuiDescribedByModule,c.h,a.c,r.FormsModule,d.TuiTextfieldControllerModule,l.f.forChild(Object(c.o)(re))]]}),e})()}}]);