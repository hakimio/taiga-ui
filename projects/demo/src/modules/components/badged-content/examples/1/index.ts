import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon} from '@taiga-ui/core';
import {
    TuiAvatarComponent,
    TuiBadgedContentComponent,
    TuiBadgeDirective,
    TuiBadgeNotificationComponent,
} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        TuiBadgedContentComponent,
        TuiBadgeNotificationComponent,
        TuiAvatarComponent,
        TuiIcon,
        TuiBadgeDirective,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
