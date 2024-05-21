import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDoc, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiLinkDirective} from '@taiga-ui/core';

import {StylesInfoModule} from '../../app/styles-info/styles-info.module';
import {TuiList1} from './examples/1';
import {TuiList2} from './examples/2';
import {TuiList3} from './examples/3';
import {TuiList4} from './examples/4';
import {TuiList5} from './examples/5';
import {TuiList6} from './examples/6';
import {TuiList7} from './examples/7';
import {ListsComponent} from './lists.component';

@NgModule({
    imports: [
        CommonModule,
        StylesInfoModule,
        TuiLinkDirective,
        TuiAddonDoc,
        RouterModule.forChild(tuiGenerateRoutes(ListsComponent)),
    ],
    declarations: [
        ListsComponent,
        TuiList1,
        TuiList2,
        TuiList3,
        TuiList4,
        TuiList5,
        TuiList6,
        TuiList7,
    ],
    exports: [ListsComponent],
})
export class ListsModule {}
