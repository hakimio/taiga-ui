import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MaskitoDirective} from '@maskito/angular';
import {TuiMapperPipe} from '@taiga-ui/cdk';
import {
    TuiAppearance,
    TuiCalendarComponent,
    TuiDropdown,
    TuiIcon,
    TuiLink,
} from '@taiga-ui/core';
import {TuiInputTagModule} from '@taiga-ui/legacy/components/input-tag';
import {TuiPrimitiveTextfieldModule} from '@taiga-ui/legacy/components/primitive-textfield';
import {
    TuiLegacyDropdownOpenMonitorDirective,
    TuiTextfieldControllerModule,
} from '@taiga-ui/legacy/directives';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

import {TuiInputDateMultiComponent} from './input-date-multi.component';

@NgModule({
    imports: [
        CommonModule,
        MaskitoDirective,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
        TuiCalendarComponent,
        TuiLink,
        TuiInputTagModule,
        FormsModule,
        TuiMapperPipe,
        TuiTextfieldControllerModule,
        TuiPrimitiveTextfieldModule,
        TuiLegacyDropdownOpenMonitorDirective,
        TuiIcon,
        TuiAppearance,
        ...TuiDropdown,
    ],
    declarations: [TuiInputDateMultiComponent],
    exports: [TuiInputDateMultiComponent, ...TuiDropdown],
})
export class TuiInputDateMultiModule {}
