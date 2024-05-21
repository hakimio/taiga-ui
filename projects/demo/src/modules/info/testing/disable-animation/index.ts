import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiDemo} from '@demo/utils';
import {TuiLinkDirective} from '@taiga-ui/core';
import {TuiTabsModule} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiLinkDirective, TuiTabsModule],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PageComponent {
    protected readonly cypress = import('./examples/cypress.md?raw');
    protected readonly playwright = import('./examples/playwright.md?raw');
}
