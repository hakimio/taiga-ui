import {AsyncPipe, NgForOf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {tuiParentAnimation} from '@taiga-ui/core/animations';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

import {TUI_TABLE_BARS} from './table-bar.options';

/**
 * @deprecated drop in v5.0 use {@link TuiActionBar}
 * https://taiga-ui.dev/components/actions-bar
 */
@Component({
    standalone: true,
    selector: 'tui-table-bars-host',
    imports: [AsyncPipe, NgForOf, PolymorpheusOutlet, PolymorpheusTemplate],
    template: `
        <div
            *ngFor="let item of bars$ | async"
            class="t-wrapper"
            @tuiParentAnimation
        >
            <ng-container *polymorpheusOutlet="item.component; context: item" />
        </div>
    `,
    styleUrls: ['./table-bars-host.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiParentAnimation],
    host: {
        ngSkipHydration: 'true',
    },
})
export class TuiTableBarsHostComponent {
    protected bars$ = inject(TUI_TABLE_BARS);
}
