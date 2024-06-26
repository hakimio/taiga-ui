import {NgModule} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {
    TuiCalendarYearComponent,
    TuiDropdown,
    TuiDropdownOpen,
    TuiScrollbar,
} from '@taiga-ui/core';
import {
    TuiPrimitiveTextfieldModule,
    TuiTextfieldComponent,
} from '@taiga-ui/legacy/components/primitive-textfield';
import {TuiTextfieldControllerModule} from '@taiga-ui/legacy/directives';

import {TuiInputYearComponent} from './input-year.component';
import {TuiInputYearDirective} from './input-year.directive';

@NgModule({
    imports: [
        MaskitoDirective,
        TuiDropdownOpen,
        TuiPrimitiveTextfieldModule,
        TuiScrollbar,
        TuiCalendarYearComponent,
        TuiTextfieldControllerModule,
        ...TuiDropdown,
    ],
    declarations: [TuiInputYearComponent, TuiInputYearDirective],
    exports: [
        TuiInputYearComponent,
        TuiInputYearDirective,
        TuiTextfieldComponent,
        ...TuiDropdown,
    ],
})
export class TuiInputYearModule {}
