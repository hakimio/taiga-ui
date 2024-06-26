import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import {TuiAvatarComponent, TuiButtonVerticalDirective} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiButton, TuiButtonVerticalDirective, TuiAvatarComponent],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
