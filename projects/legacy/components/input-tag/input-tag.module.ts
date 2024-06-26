import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiHoveredDirective, TuiScrollService} from '@taiga-ui/cdk';
import {TuiAppearance, TuiDropdown, TuiIcon, TuiScrollbar} from '@taiga-ui/core';
import {TuiTagModule} from '@taiga-ui/legacy/components/tag';
import {TuiTooltip} from '@taiga-ui/legacy/components/tooltip';
import {
    TuiLegacyDropdownOpenMonitorDirective,
    TuiWrapperModule,
} from '@taiga-ui/legacy/directives';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

import {TuiInputTagComponent} from './input-tag.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
        TuiHoveredDirective,
        TuiScrollbar,
        TuiTooltip,
        TuiTagModule,
        TuiWrapperModule,
        TuiLegacyDropdownOpenMonitorDirective,
        TuiAppearance,
        TuiIcon,
        ...TuiDropdown,
    ],
    declarations: [TuiInputTagComponent],
    providers: [TuiScrollService],
    exports: [TuiInputTagComponent, ...TuiDropdown],
})
export class TuiInputTagModule {}
