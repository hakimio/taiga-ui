import {AsyncPipe} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {TuiThemeDarkService} from '@taiga-ui/addon-doc/services';
import {TUI_DOC_ICONS} from '@taiga-ui/addon-doc/tokens';
import {TuiSwipeService} from '@taiga-ui/cdk';
import {TuiButton, TuiRoot} from '@taiga-ui/core';

import {TuiDocHeaderComponent} from '../internal/header';
import {TuiDocNavigationComponent} from '../navigation/navigation.component';

@Component({
    standalone: true,
    selector: 'tui-doc-main',
    imports: [
        TuiRoot,
        AsyncPipe,
        RouterOutlet,
        TuiButton,
        TuiDocHeaderComponent,
        TuiDocNavigationComponent,
    ],
    templateUrl: './main.template.html',
    styleUrls: ['./main.style.less'],
    encapsulation: ViewEncapsulation.None,
    // @note: This one was default on purpose so we can test demo in default mode.
    // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
    changeDetection: ChangeDetectionStrategy.Default,
    providers: [TuiSwipeService],
})
export class TuiDocMainComponent {
    private readonly icons = inject(TUI_DOC_ICONS);

    protected readonly dark$ = inject(TuiThemeDarkService);

    protected get icon(): string {
        return this.dark$.value ? this.icons.light : this.icons.dark;
    }
}
